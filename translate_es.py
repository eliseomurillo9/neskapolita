import json

with open('src/locales/en.json', 'r') as f:
    en_json = json.load(f)

with open('src/locales/es.json', 'r') as f:
    es_json = json.load(f)

def get_missing_translations(en_d, es_d):
    missing = {}
    for k, v in en_d.items():
        if isinstance(v, dict):
            missing_sub = get_missing_translations(v, es_d.get(k, {}))
            if missing_sub:
                missing[k] = missing_sub
        else:
            es_v = es_d.get(k, "")
            if es_v.endswith('(ES)') or es_v == v:
                missing[k] = v
    return missing

missing = get_missing_translations(en_json, es_json)
with open('missing_es.json', 'w') as f:
    json.dump(missing, f, indent=2)

print(f"Dumped missing translations.")
