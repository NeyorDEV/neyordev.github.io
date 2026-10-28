"""Régénère JS/i18n-en.js à partir des fichiers tools/i18n/*.txt.

Format d'une ligne :  texte français ||| texte anglais
Un « = » à la place de l'anglais signifie « identique dans les deux langues ».

    python tools/build_i18n.py
"""
import glob
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent / "JS" / "i18n-en.js"

en = {}
same = []
for path in sorted(glob.glob(str(HERE / "i18n" / "*.txt"))):
    for n, line in enumerate(Path(path).read_text(encoding="utf-8").splitlines(), 1):
        if not line.strip():
            continue
        if " ||| " not in line:
            raise SystemExit(f"{Path(path).name}:{n} sans séparateur : {line[:60]}")
        fr, val = (part.strip() for part in line.split(" ||| ", 1))
        if val == "=":
            same.append(fr)
        else:
            if fr in en and en[fr] != val:
                raise SystemExit(f"doublon incohérent : {fr[:60]}")
            en[fr] = val

OUT.write_text(
    "/* Dictionnaire anglais (généré par tools/build_i18n.py) : clé = français normalisé, valeur = anglais. */\n"
    "window.I18N_EN = " + json.dumps(en, ensure_ascii=False, indent=1) + ";\n"
    "/* Textes identiques dans les deux langues (noms propres, technos…). */\n"
    "window.I18N_SAME = " + json.dumps(same, ensure_ascii=False) + ";\n",
    encoding="utf-8",
    newline="\n",
)
# Numéro de version sur la balise <script> de chaque page : le navigateur recharge
# le dictionnaire dès qu'il change (sans cela, il peut garder l'ancien 10 minutes).
import hashlib
import re

version = hashlib.sha1(OUT.read_bytes()).hexdigest()[:8]
for page in sorted(HERE.parent.glob("*.html")):
    html = page.read_text(encoding="utf-8", newline="")
    new = re.sub(r'src="JS/i18n-en\.js(\?v=[0-9a-f]+)?"', f'src="JS/i18n-en.js?v={version}"', html)
    if new != html:
        page.write_text(new, encoding="utf-8", newline="")

print("entrées traduites :", len(en), "· identiques :", len(same))
