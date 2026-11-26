"""Met la date <lastmod> de chaque page de sitemap.xml à la date du dernier commit qui l'a modifiée.

Lancé par la GitHub Action à chaque déploiement (l'historique git complet est nécessaire) :

    python tools/update_sitemap.py
"""
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITEMAP = ROOT / "sitemap.xml"
URL = re.compile(r"(<loc>https://neyordev\.github\.io/([^<]*)</loc>\s*<lastmod>)[^<]*(</lastmod>)")


def last_change(page):
    out = subprocess.run(["git", "log", "-1", "--format=%cs", "--", page], cwd=ROOT,
                         capture_output=True, text=True, check=True).stdout.strip()
    return out or None


def stamp(m):
    page = m.group(2) or "index.html"
    date = last_change(page)
    return f"{m.group(1)}{date}{m.group(3)}" if date else m.group(0)


xml = SITEMAP.read_text(encoding="utf-8")
SITEMAP.write_text(URL.sub(stamp, xml), encoding="utf-8")
print(re.findall(r"<loc>([^<]*)</loc>\s*<lastmod>([^<]*)</lastmod>", SITEMAP.read_text(encoding="utf-8")))
