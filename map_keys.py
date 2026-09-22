import json
import re

with open('keys_to_rename.json', 'r') as f:
    keys = json.load(f)

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '_', text)
    words = [w for w in text.split('_') if w]
    return '_'.join(words[:4])

mapping = {}
for k in keys:
    val = k['value']
    files = k['files']
    
    slug = slugify(val)
    if not slug:
        slug = "empty"
        
    prefix = "common"
    if len(files) == 1:
        fname = files[0].split('/')[-1].split('.')[0]
        prefix = fname.lower()
    elif len(files) > 1:
        # Check if they share a component folder
        folders = [f.split('/')[-2] for f in files]
        if len(set(folders)) == 1:
            prefix = folders[0].lower()
            
    new_key = f"{prefix}.{slug}"
    
    # ensure unique
    base_key = new_key
    counter = 1
    while new_key in mapping.values():
        new_key = f"{base_key}_{counter}"
        counter += 1
        
    mapping[k['key']] = new_key

with open('key_mapping.json', 'w') as f:
    json.dump(mapping, f, indent=2)

print(f"Mapped {len(mapping)} keys")
