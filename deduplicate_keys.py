import json
import os
import re

with open('src/locales/en.json', 'r') as f:
    en_json = json.load(f)

with open('src/locales/es.json', 'r') as f:
    es_json = json.load(f)

def flatten(d, parent_key=''):
    items = []
    for k, v in d.items():
        new_key = f"{parent_key}.{k}" if parent_key else k
        if isinstance(v, dict):
            items.extend(flatten(v, new_key).items())
        else:
            items.append((new_key, v))
    return dict(items)

flat_en = flatten(en_json)

# Group keys by value
value_to_keys = {}
for k, v in flat_en.items():
    if v not in value_to_keys:
        value_to_keys[v] = []
    value_to_keys[v].append(k)

# Find duplicates and determine replacements
replacements = {}
for v, keys in value_to_keys.items():
    if len(keys) > 1:
        # Prefer the key that doesn't have a number suffix, or is shortest
        def sort_key(k):
            score = 0
            if re.search(r'_\d+$', k):
                score += 100
            # Prefer 'common' over specific files
            if k.startswith('common.'):
                score -= 50
            return (score, len(k))
            
        keys_sorted = sorted(keys, key=sort_key)
        primary_key = keys_sorted[0]
        
        for duplicate_key in keys_sorted[1:]:
            replacements[duplicate_key] = primary_key

print(f"Found {len(replacements)} duplicate keys to replace.")

# Replace in source code
def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
        
    original_content = content
    for old_k, new_k in replacements.items():
        content = re.sub(fr't\(\s*"{old_k}"\s*\)', f't("{new_k}")', content)
        content = re.sub(fr"t\(\s*'{old_k}'\s*\)", f"t('{new_k}')", content)
        content = re.sub(fr't\(\s*`{old_k}`\s*\)', f't("{new_k}")', content)

    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            update_file(os.path.join(root, file))

# Remove duplicates from JSON
def remove_nested(d, keys):
    if len(keys) == 1:
        d.pop(keys[0], None)
    else:
        if keys[0] in d:
            remove_nested(d[keys[0]], keys[1:])
            if not d[keys[0]]: # if dict is empty, remove it
                d.pop(keys[0])

for old_k in replacements.keys():
    remove_nested(en_json, old_k.split('.'))
    remove_nested(es_json, old_k.split('.'))

with open('src/locales/en.json', 'w') as f:
    json.dump(en_json, f, indent=2)

with open('src/locales/es.json', 'w') as f:
    json.dump(es_json, f, indent=2, ensure_ascii=False)

with open('replaced_keys.json', 'w') as f:
    json.dump(replacements, f, indent=2)

print("Deduplication complete.")
