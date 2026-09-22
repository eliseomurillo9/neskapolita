import os
import json
import re
from collections import defaultdict

with open('src/locales/en.json', 'r') as f:
    en_json = json.load(f)

usage = defaultdict(list)

def search_dir(dir_path):
    for root, _, files in os.walk(dir_path):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                file_path = os.path.join(root, file)
                with open(file_path, 'r') as f:
                    content = f.read()
                    
                matches = re.findall(r't\("([^"]+)"\)', content)
                for m in set(matches):
                    if m.startswith('text_') or m.startswith('data_'):
                        usage[m].append(file_path)

search_dir('src')

out = []
for k in en_json:
    if k.startswith('text_') or k.startswith('data_'):
        files = usage.get(k, [])
        out.append({
            "key": k,
            "value": en_json[k],
            "files": files
        })

with open('keys_to_rename.json', 'w') as f:
    json.dump(out, f, indent=2)

print(f"Dumped {len(out)} keys")
