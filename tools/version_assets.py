"""Ajoute un numéro de version (?v=empreinte) aux liens CSS/ et JS/ de chaque page.

Sans lui, le navigateur peut garder l'ancien fichier une dizaine de minutes : une page
à jour se retrouve alors avec un ancien script ou une ancienne feuille de style.
À relancer après chaque modification d'un fichier CSS ou JS :

    python tools/version_assets.py
"""
import hashlib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REF = re.compile(r'((?:href|src)=")((?:CSS|JS)/[\w.-]+\.(?:css|js))(?:\?v=[0-9a-f]+)?"')


def stamp(match):
    path = ROOT / match.group(2)
    if not path.exists():
        return match.group(0)
    version = hashlib.sha1(path.read_bytes()).hexdigest()[:8]
    return f'{match.group(1)}{match.group(2)}?v={version}"'


changed = 0
for page in sorted(ROOT.glob("*.html")):
    html = page.read_text(encoding="utf-8", newline="")
    new = REF.sub(stamp, html)
    if new != html:
        page.write_text(new, encoding="utf-8", newline="")
        changed += 1
print("pages mises à jour :", changed)
