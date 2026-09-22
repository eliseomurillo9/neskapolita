import json

with open('missing_es.json', 'r') as f:
    missing = json.load(f)

flat = {}
def flatten(d):
    for k, v in d.items():
        if isinstance(v, dict):
            flatten(v)
        else:
            flat[v] = v

flatten(missing)

with open('flat_missing.json', 'w') as f:
    json.dump(list(flat.keys()), f, indent=2)

print(len(flat))
