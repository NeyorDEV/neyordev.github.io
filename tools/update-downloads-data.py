"""Génère les données GitHub du site : data/github.json et JS/downloads-data.js.

- data/github.json : dépôts, releases et nombre de commits. Toutes les pages le lisent
  au lieu d'appeler l'API GitHub (limitée à 60 requêtes par heure et par visiteur).
  La GitHub Action « Déploiement du site » le régénère à chaque push et toutes les heures.
- JS/downloads-data.js : copie hors-ligne des releases, en dernier secours.

En local (facultatif) :

    python tools/update-downloads-data.py

Nécessite la CLI GitHub (`gh`) connectée (en local) ou la variable GH_TOKEN (dans l'Action).
"""
import datetime
import json
import re
import subprocess
import sys
import time
from pathlib import Path

USER = "neyordev"
REPOS = ["J.A.R.V.I.S", "rl-tracker-suite", "ghostmesh", "ModShift", "RentPark", "Dragon-Mounts-Legacy"]
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "JS" / "downloads-data.js"
OUT_JSON = ROOT / "data" / "github.json"
# Champs des dépôts lus par les scripts du site (le reste de la réponse de l'API est inutile)
REPO_KEYS = ["name", "description", "language", "stargazers_count", "forks_count", "fork", "archived",
             "pushed_at", "created_at", "updated_at", "html_url", "homepage", "topics"]


def gh(path, headers=False):
    """Appel à l'API GitHub, avec 3 essais : une erreur passagère ne fait pas échouer le déploiement."""
    args = ["gh", "api", path] + (["--include"] if headers else [])
    for attempt in range(3):
        r = subprocess.run(args, capture_output=True, text=True, encoding="utf-8")
        if r.returncode == 0:
            return r.stdout
        print(f"gh api {path} : essai {attempt + 1} échoué : {r.stderr.strip()[:300]}", file=sys.stderr)
        time.sleep(5 * (attempt + 1))
    raise subprocess.CalledProcessError(r.returncode, args, r.stdout, r.stderr)


def fetch(repo):
    items = []
    for x in json.loads(gh(f"repos/{USER}/{repo}/releases?per_page=30")):
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


def commit_count(repo):
    """L'API ne donne pas de total : 1 commit par page, le numéro de la dernière page = le total.
    Sur un fork, seuls mes commits comptent (pas l'historique du projet d'origine)."""
    path = f"repos/{USER}/{repo['name']}/commits?per_page=1" + (f"&author={USER}" if repo["fork"] else "")
    try:
        raw = gh(path, headers=True)
    except subprocess.CalledProcessError:
        return None  # dépôt vide (409) ou inaccessible
    last = re.search(r'[?&]page=(\d+)>; rel="last"', raw)
    if last:
        return int(last.group(1))
    body = raw[raw.find("\n\n") + 2:] if "\n\n" in raw else raw[raw.find("\r\n\r\n") + 4:]
    return len(json.loads(body or "[]"))


now = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
releases = {repo: fetch(repo) for repo in REPOS}
repos = [{k: r.get(k) for k in REPO_KEYS} for r in json.loads(gh(f"users/{USER}/repos?per_page=100&sort=pushed"))]
repos = [r for r in repos if not r["archived"]]
commits = {r["name"]: commit_count(r) for r in repos}

OUT.write_text(
    "/* Copie hors-ligne des releases GitHub (utilisée si l'API est indisponible). Générée automatiquement. */\n"
    "window.DL_SNAPSHOT = " + json.dumps({"generatedAt": now, "releases": releases}, ensure_ascii=False, indent=1) + ";\n",
    encoding="utf-8",
)
OUT_JSON.parent.mkdir(exist_ok=True)
OUT_JSON.write_text(
    json.dumps({"generatedAt": now, "repos": repos, "releases": releases, "commits": commits}, ensure_ascii=False),
    encoding="utf-8",
)
print({r: len(v) for r, v in releases.items()}, "->", OUT)
print(commits, "->", OUT_JSON)
