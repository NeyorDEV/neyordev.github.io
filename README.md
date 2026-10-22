# Portfolio — neyor

Site statique (HTML, CSS, JavaScript) hébergé sur GitHub Pages.

## Pages
- `index.html` : accueil interactive (réseau de particules, terminal)
- `projets.html` : projets phares, radar GitHub et liste des dépôts (API GitHub)
- `competences.html` : stack, projets récents et présentation courte
- `apropos.html` : parcours, compétences en carrousel, centres d'intérêt animés
- `cv.html` : CV imprimable (bouton « Télécharger en PDF » = impression navigateur)
- `downloads.html` : téléchargements (releases GitHub en direct, SHA-256, historique, radar)
- `404.html` : page d'erreur (suggère la page la plus proche) · `robots.txt` et `sitemap.xml` : référencement

## Fichiers
- `CSS/style.css` : styles communs · `CSS/home.css` : accueil · `CSS/ui.css` : démarrage, transitions, curseur, palette, radar, CV
- `JS/main.js` : animations communes, menu, API GitHub · `JS/ui.js` : palette Ctrl+K, contact terminal, transitions, radar · `JS/home.js` : accueil · `JS/interests.js` : scènes des centres d'intérêt · `JS/downloads.js` + `CSS/downloads.css` : page Téléchargements · `JS/downloads-data.js` : copie hors-ligne des releases

## Captures des projets
Dépose une image ou un GIF dans `images/projects/` : `jarvis`, `modshift`, `rl-session-stats`, `rentpark` en `.png`, `.gif` ou `.jpg` (format 16:9). Elle remplace automatiquement le visuel animé.

## Raccourcis
`Ctrl+K` (ou `/`) palette de commandes · `M` menu · `1`–`6` pages dans le menu · `Échap` fermer.
Le mode calme (palette → « Réduire les animations ») coupe les animations et se souvient du choix.

## Aperçu de partage
`images/og.png` (1200×630) est utilisée par les aperçus de liens ; `favicon.svg` est l'icône d'onglet.

## Téléchargements
La page lit les releases de chaque dépôt via l'API GitHub (cache de 10 min). Si l'API est indisponible, elle affiche la copie `JS/downloads-data.js`, à régénérer après une release avec `python tools/update-downloads-data.py` (CLI `gh` requise).
Pour ajouter un projet, ajoute une carte `.dl-card` dans `downloads.html` et son dépôt dans la liste `REPOS` de `JS/downloads.js`.

## Terminal de l'accueil
Commandes : `help [commande]`, `about`, `neofetch`, `skills [mot]`, `cv [pdf]`, `contact`, `mail`, `projects`, `info <projet>`, `latest`, `downloads`, `download <projet>`, `stats`, `grep <mot>`, `repos`, `goto <page>`, `ls`, `tree`, `github`, `ping`, `calm [on|off]`, `history`, `clear`.
Tab complète les commandes et leurs arguments, ↑ ↓ rappellent l'historique, et une faute de frappe propose la bonne commande. Les commandes `info`, `latest` et `stats` lisent les releases GitHub (cache de session, copie hors-ligne en secours).

## Langues (FR / EN)
Le français est la langue source : c'est le texte écrit dans le HTML et dans les scripts. L'anglais vient du dictionnaire `JS/i18n-en.js` (clé = texte français, valeur = anglais), appliqué par `JS/i18n.js`. La langue est choisie d'après le navigateur, puis mémorisée (bouton FR/EN en haut, palette Ctrl+K ou commande `lang` du terminal).
Dans les scripts, tout texte visible passe par `t("texte français")` (ou `t("… {nom}", { nom })` avec des variables).
Pour ajouter ou corriger une traduction : modifier les fichiers `tools/i18n/*.txt` (format `français ||| anglais`, `=` si identique) puis régénérer le dictionnaire avec `python tools/build_i18n.py`.
