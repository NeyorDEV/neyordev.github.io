"""Met à jour JS/downloads-data.js : copie hors-ligne des releases GitHub.

La page Téléchargements lit les releases en direct via l'API GitHub. Cette copie ne sert
que de secours (API injoignable ou limite atteinte). À relancer après une nouvelle release :

    python tools/update-downloads-data.py

Nécessite la CLI GitHub (`gh`) connectée à ton compte.
"""
import datetime
import json
import subprocess
from pathlib import Path

USER = "neyordev"
REPOS = ["J.A.R.V.I.S", "rl-session-stats", "ModShift", "RentPark", "Dragon-Mounts-Legacy"]
OUT = Path(__file__).resolve().parent.parent / "JS" / "downloads-data.js"


def fetch(repo):
    raw = subprocess.run(
        ["gh", "api", f"repos/{USER}/{repo}/releases?per_page=30"],
        capture_output=True, text=True, encoding="utf-8", check=True,
    ).stdout
    items = []
    for x in json.loads(raw):
        if x.get("draft"):
            continue
        items.append({
            "tag": x["tag_name"],
            "name": x.get("name") or x["tag_name"],
            "date": x["published_at"],
            "pre": x.get("prerelease", False),
            "url": x["html_url"],
            "body": (x.get("body") or "")[:4500],
            "assets": [
                {
                    "name": a["name"],
                    "size": a["size"],
                    "dl": a["download_count"],
                    "sha": (a.get("digest") or "").replace("sha256:", ""),
                    "url": a["browser_download_url"],
                }
                for a in x.get("assets", [])
            ],
        })
    return items


data = {
    "generatedAt": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    "releases": {repo: fetch(repo) for repo in REPOS},
}
OUT.write_text(
    "/* Copie hors-ligne des releases GitHub (utilisée si l'API est indisponible). Générée automatiquement. */\n"
    "window.DL_SNAPSHOT = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
    encoding="utf-8",
)
print({r: len(v) for r, v in data["releases"].items()}, "->", OUT)
