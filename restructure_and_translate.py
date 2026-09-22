import json
import os
import re

with open('key_mapping.json', 'r') as f:
    mapping = json.load(f)

with open('src/locales/en.json', 'r') as f:
    en_json = json.load(f)

with open('src/locales/es.json', 'r') as f:
    es_json = json.load(f)

new_en = {}
new_es = {}

def set_nested(d, keys, value):
    for key in keys[:-1]:
        d = d.setdefault(key, {})
    d[keys[-1]] = value

# Process keys
for k, v in en_json.items():
    if k in mapping:
        new_k = mapping[k]
        # It's like "common.apaneca"
        parts = new_k.split('.')
        set_nested(new_en, parts, v)
        # get translation or fallback
        es_val = es_json.get(k, "")
        if es_val.endswith('(ES)') or not es_val:
            # We will generate Spanish translations later via an LLM or basic script
            # For now keep it
            es_val = es_val
        set_nested(new_es, parts, es_val)
    else:
        # Existing meaningful keys. Group them under "common" or something logical
        # e.g. room_nieves_name -> rooms.nieves.name
        if k.startswith('room_'):
            parts = k.split('_')
            new_k = f"rooms.{parts[1]}.{'_'.join(parts[2:])}"
        elif k.startswith('category_'):
            new_k = f"categories.{k[9:]}"
        elif k.startswith('amenity_'):
            new_k = f"amenities.{k[8:]}"
        elif k.startswith('feature_'):
            new_k = f"features.{k[8:]}"
        elif k.startswith('ruta_desc_'):
            new_k = f"ruta.desc_{k[10:]}"
        elif k.startswith('place_'):
            new_k = f"ruta.place_{k[6:]}"
        elif k.startswith('nav_'):
            new_k = f"nav.{k[4:]}"
        elif k.startswith('hero_'):
            new_k = f"hero.{k[5:]}"
        elif k.startswith('story_'):
            new_k = f"story.{k[6:]}"
        else:
            new_k = f"common.{k}"
            
        mapping[k] = new_k
        parts = new_k.split('.')
        set_nested(new_en, parts, v)
        set_nested(new_es, parts, es_json.get(k, v))

with open('src/locales/en.json', 'w') as f:
    json.dump(new_en, f, indent=2)

with open('src/locales/es.json', 'w') as f:
    json.dump(new_es, f, indent=2, ensure_ascii=False)

# Now update the source files
def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
        
    original_content = content
    # Replace t("old_key") with t("new_key")
    # Sort mapping by length of key descending to avoid partial matches
    for old_k, new_k in sorted(mapping.items(), key=lambda x: len(x[0]), reverse=True):
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

print("Restructured and updated code.")
