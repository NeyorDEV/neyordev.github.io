/* Copie hors-ligne des releases GitHub (utilisée si l'API est indisponible). Générée automatiquement. */
window.DL_SNAPSHOT = {
 "generatedAt": "2026-10-22T12:41:38Z",
 "releases": {
  "J.A.R.V.I.S": [
   {
    "tag": "v9.5.2",
    "name": "J.A.R.V.I.S 9.5.2 — mises à jour",
    "date": "2026-10-22T08:51:36Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/tag/v9.5.2",
    "body": "## J.A.R.V.I.S 9.5.2\n\nThis release adds **update notifications**.\n\n### Install\n\n1. Download **JARVIS-Setup-9.5.2.exe** below and run it (no administrator rights needed). Installing over an older version keeps your settings, keys and memory.\n2. The installer sets up Python 3.12 if needed, then the dependencies (a few minutes, internet connection required).\n3. Start **J.A.R.V.I.S** from the Start menu or the desktop shortcut. No console window opens.\n4. On a first install, the first-launch assistant asks for your name, an AI key (Gemini is free: https://aistudio.google.com/apikey), checks your microphone and can record your voiceprint.\n\n> The installer is **not code-signed yet**. Windows SmartScreen may show \"Windows protected your PC\": click *More info*, then *Run anyway*.\n> SHA-256: `53f4b91b71527ed5064899cd411fb3bedcc52207ca733d115a0e58a07f9a6ef6`\n\n### What's new\n\n- **Update notifications.** About 3 seconds after start, JARVIS looks up the latest release of this project on GitHub. If a newer version exists, a card appears and a banner in *Settings* shows the new version and its notes, with *Download the update* (opens the release page) and *Later*. A *Check for updates* button at the bottom of *Settings* does it on demand, and *Check at launch* turns the automatic check off. Nothing is downloaded or installed without you. The request is described in [PRIVACY.md](https://github.com/NeyorDEV/J.A.R.V.I.S/blob/main/PRIVACY.md).\n\nFull changes: `CHANGELOG.md`.\n",
    "assets": [
     {
      "name": "JARVIS-Setup-9.5.2.exe",
      "size": 5961654,
      "dl": 1,
      "sha": "53f4b91b71527ed5064899cd411fb3bedcc52207ca733d115a0e58a07f9a6ef6",
      "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/download/v9.5.2/JARVIS-Setup-9.5.2.exe"
     }
    ]
   },
   {
    "tag": "v9.5.1",
    "name": "J.A.R.V.I.S 9.5.1 — confidentialité et réglages personnels",
    "date": "2026-10-22T07:45:31Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/tag/v9.5.1",
    "body": "## J.A.R.V.I.S 9.5.1\n\nPrivacy and cleanup release. Install it over 9.5.0 or from scratch.\n\n### Install\n\n1. Download **JARVIS-Setup-9.5.1.exe** below and run it (no administrator rights needed).\n2. The installer sets up Python 3.12 if needed, then the dependencies (a few minutes, internet connection required).\n3. Start **J.A.R.V.I.S** from the Start menu or the desktop shortcut. No console window opens.\n4. The first-launch assistant asks for your name, an AI key (Gemini is free: https://aistudio.google.com/apikey), checks your microphone and can record your voiceprint.\n\n> The installer is **not code-signed yet**. Windows SmartScreen may show \"Windows protected your PC\": click *More info*, then *Run anyway*.\n> SHA-256: `1f6a7b01ba862a0726e109a4d6b884b48f40ff72ee85e916c253d28caa5b9421`\n\n### What's new\n\n- **Your name is used everywhere.** JARVIS now calls the owner of the installation by the name set in the first-launch assistant or in Settings. 9.5.0 called every user \"Neyor\".\n- **No personal data in the code.** TV address and MAC are read from `.env` (`TV_IP`, `TV_MAC`, optional `TV_BROADCAST`; TV commands are disabled without `TV_IP`). Hard-coded user folders (Discord, JoyToKey, Deezer, Opera GX) are now computed from your profile, and the code editor no longer assumes drive `N:`.\n- **Privacy policy** added ([PRIVACY.md](https://github.com/NeyorDEV/J.A.R.V.I.S/blob/main/PRIVACY.md)) and the anonymous telemetry of the vector memory library is turned off.\n- **Antivirus panel**: threats are readable again (action buttons moved under the text).\n- **Dependencies**: pillow 13.0.0 and certifi 2026.10.19 (known vulnerabilities fixed).\n\nFull changes: `CHANGELOG.md`.\n",
    "assets": [
     {
      "name": "JARVIS-Setup-9.5.1.exe",
      "size": 5959012,
      "dl": 1,
      "sha": "1f6a7b01ba862a0726e109a4d6b884b48f40ff72ee85e916c253d28caa5b9421",
      "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/download/v9.5.1/JARVIS-Setup-9.5.1.exe"
     }
    ]
   },
   {
    "tag": "v9.5.0",
    "name": "J.A.R.V.I.S 9.5.0 — installateur Windows",
    "date": "2026-10-22T07:06:56Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/tag/v9.5.0",
    "body": "## J.A.R.V.I.S 9.5.0\n\nFirst release with a Windows installer.\n\n### Install\n\n1. Download **JARVIS-Setup-9.5.0.exe** below and run it (no administrator rights needed).\n2. The installer sets up Python 3.12 if needed, then the dependencies (a few minutes, internet connection required).\n3. Start **J.A.R.V.I.S** from the Start menu or the desktop shortcut. No console window opens.\n4. The first-launch assistant asks for your name, an AI key (Gemini is free: https://aistudio.google.com/apikey), checks your microphone and can record your voiceprint.\n\n> The installer is **not code-signed yet**. Windows SmartScreen may show \"Windows protected your PC\": click *More info*, then *Run anyway*.\n> SHA-256: `42cdac2654de7b27aece6a3783346c223251c2a8dfd749a5474aca448597e44b`\n\n### What's new\n\n- **First-launch assistant**: profile and voice, AI key (tested before being saved), microphone with live level, voiceprint, summary.\n- **System status panel** (ÉTAT button): AI engines and quotas, voice, services, resources, with tests.\n- **New glass interface** for all panels, no emoji.\n- **New terminal dashboard** (when JARVIS is started from a console).\n- Local resolver now understands \"montre-moi une image de ...\" and similar phrasings.\n- Licensed under **GPL-3.0-or-later**.\n\n### Notes\n\n- Needs a microphone, an internet connection and at least one AI key (Gemini, Groq or Mistral).\n- Your data stays on your PC (`data/`, `.env`, voiceprints). Uninstalling removes the program but keeps them.\n- Source code: this repository. Full changes: `CHANGELOG.md`.\n",
    "assets": [
     {
      "name": "JARVIS-Setup-9.5.0.exe",
      "size": 5956452,
      "dl": 3,
      "sha": "42cdac2654de7b27aece6a3783346c223251c2a8dfd749a5474aca448597e44b",
      "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/download/v9.5.0/JARVIS-Setup-9.5.0.exe"
     }
    ]
   }
  ],
  "rl-session-stats": [
   {
    "tag": "v1.3.0",
    "name": "v1.3.0 - Live MMR Scraper, Multi-Session History & Custom Colors",
    "date": "2026-10-21T16:04:27Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-session-stats/releases/tag/v1.3.0",
    "body": "## What's Changed in v1.3.0\n\n### Live MMR Scraper & Auto-Sync\n- **Zero EAC Risk / Headless Scraping**: Automatic, invisible background scraping directly from Rocket League Tracker Network (no manual MMR inputs required).\n- **Auto-Sync on Startup**: Automatically synchronizes your official MMR from Tracker Network a couple of seconds after launch if your pseudo is configured.\n- **Auto-Sync Post-Match**: Toggleable option to sync your real MMR automatically after each match.\n\n### Multi-Session History\n- **Day-by-Day Browsing**: Select and review previous gaming sessions from a convenient dropdown selector.\n- **Interactive SVG MMR Chart**: Beautiful vector graph illustrating your MMR progression over the course of each session.\n- **Session Summaries**: 4 dedicated cards showing W - L Record, Net MMR, Winrate, and Streak.\n- **Match Breakdown**: Complete list of games with individual match stats and MMR changes.\n- **Session Management**: Easily delete past sessions from the history directly in the UI.\n\n### Fully Customizable Overlay Colors & Modern UI\n- **Custom Color Palette**: Customize every element of the overlay (Background, Primary Text, Secondary Text, Wins / Positive MMR, Losses / Negative MMR, Accent tags, and Goal / Streak).\n- **Instant Preview**: Colors update dynamically with real-time feedback.\n- **Renamed Modern Themes**:\n  - **Carte Horizontale** *(formerly RocketStats)*\n  - **Colonne** *(formerly Moderne)*\n  - **Carte Verticale** *(formerly Carte)*\n  - **Ligne** *(formerly Minimaliste)*\n- **Card-Based Settings**: Reorganized settings interface with spacious, clean categorized cards and grouped stat selection.\n\n### Session Goal & Celebrations\n- **Session Goal Progress**: Configure a target MMR and display a progress bar with exact remaining MMR needed.\n- **Division Progress & Promotions**: Live division completion percentage, remaining MMR to rank up, and celebratory banners on Rank Up and Division Up.\n- **Floating MMR Badges**: In-game floating delta badges (`+11.2` / `-8.9`).\n\n### Performance & Quality of Life\n- **Native Game Watcher**: High-performance Win32 process snapshotting puts the overlay to sleep offscreen when Rocket League closes and wakes up instantly when the game launches.\n- **Silent Windows Autostart**: Launches silently into the system tray on boot without application freezes.\n- **Reset on Exit**: Optional setting to automatically reset session stats when closing the application.\n",
    "assets": [
     {
      "name": "RL.Session.Stats.portable.exe",
      "size": 7725568,
      "dl": 0,
      "sha": "21b0cc226debe7e610ea21b716edaa359358033ef3b4a4ef2f4626f3f434cea3",
      "url": "https://github.com/NeyorDEV/rl-session-stats/releases/download/v1.3.0/RL.Session.Stats.portable.exe"
     },
     {
      "name": "RL.Session.Stats_1.3.0_x64-setup.exe",
      "size": 2191560,
      "dl": 0,
      "sha": "cf22eb990893d649f9d1037772fbc30dbc91892467832fae8d5a67fd0fac0def",
      "url": "https://github.com/NeyorDEV/rl-session-stats/releases/download/v1.3.0/RL.Session.Stats_1.3.0_x64-setup.exe"
     }
    ]
   },
   {
    "tag": "v1.2.0",
    "name": "v1.2.0 - Complete Overhaul: Modern HD Rank Icons, Official MMR Brackets, Mode Selection & Auto-Persistence",
    "date": "2026-10-21T11:56:30Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-session-stats/releases/tag/v1.2.0",
    "body": "### Changes in version 1.2.0:\n- **Modern High-Definition Rank Icons (256x256)**: Official post-F2P badges including ruby Grand Champion 1, 2, 3 and sparkling Supersonic Legend star.\n- **Accurate MMR & Rank Curves**: Fixed calculation so that 1656 MMR displays as Grand Champion II Division 3.\n- **Playlist Focus Selector**: Easily choose between 1v1 (Duel), 2v2 (Doubles), and 3v3 (Standard) with instant bracket & overlay adaptation.\n- **Native Browser Profile Opener**: Clicking 'Ouvrir mon profil Rocket League Tracker' directly opens your profile in your default browser.\n- **MMR Persistence Across Restarts**: Your MMR and rank are now automatically preserved from session to session, even with 'reset_on_start' enabled.\n- **Streamlined Setup**: Clean setup walkthrough in the README.",
    "assets": [
     {
      "name": "RL.Session.Stats.portable.exe",
      "size": 7561216,
      "dl": 0,
      "sha": "f47b2d4490eecaf173873ddb09a757b680ae26e4f5f0a389838900e55b7c671e",
      "url": "https://github.com/NeyorDEV/rl-session-stats/releases/download/v1.2.0/RL.Session.Stats.portable.exe"
     },
     {
      "name": "RL.Session.Stats_1.2.0_x64-setup.exe",
      "size": 2147633,
      "dl": 0,
      "sha": "4ba3010ce0878f3cbc7980932f604dc5ca6d622e5399bd891172cc870570f452",
      "url": "https://github.com/NeyorDEV/rl-session-stats/releases/download/v1.2.0/RL.Session.Stats_1.2.0_x64-setup.exe"
     }
    ]
   },
   {
    "tag": "v1.1.0",
    "name": "v1.1.0 - Modern HD Rank Icons, Accurate MMR & 1v1/2v2/3v3 Playlist Focus",
    "date": "2026-10-21T11:32:08Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-session-stats/releases/tag/v1.1.0",
    "body": "### Nouveautes de la version 1.1.0 :\n- **Nouvelles icones de rangs HD (256x256)** : Blasons rubis authentiques pour Grand Champion 1, 2, 3 et Supersonic Legend.\n- **Paliers MMR officiels corriges** : 1656 MMR affiche desormais bien **Grand Champion II Division 3**.\n- **Selecteur de mode focalise** : Choisissez entre 1v1 (Duel), 2v2 (Doubles) et 3v3 (Standard) avec adaptation automatique des paliers et du rang.\n- **Lien direct Tracker Network** pour verifier son MMR en 1 clic.",
    "assets": [
     {
      "name": "RL.Session.Stats.portable.exe",
      "size": 7561216,
      "dl": 1,
      "sha": "007cd0c7124cd010d1bb8252afea7b7e0420bb53e47e4d77dc9701dfce4b7e06",
      "url": "https://github.com/NeyorDEV/rl-session-stats/releases/download/v1.1.0/RL.Session.Stats.portable.exe"
     },
     {
      "name": "RL.Session.Stats_1.0.0_x64-setup.exe",
      "size": 2140990,
      "dl": 0,
      "sha": "cc0633b65476d53e0dd3111b7c140d4a8c1513bb1073faeb706985b7fdd9308f",
      "url": "https://github.com/NeyorDEV/rl-session-stats/releases/download/v1.1.0/RL.Session.Stats_1.0.0_x64-setup.exe"
     }
    ]
   },
   {
    "tag": "v1.0.0",
    "name": "v1.0.0 - RocketStats Classic Theme & MMR Tracking",
    "date": "2026-10-21T10:12:10Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-session-stats/releases/tag/v1.0.0",
    "body": "## 🚀 RL Session Stats v1.0.0\n\nA lightweight, modern replacement for RocketStats in Rocket League, built for the Easy Anti-Cheat (EAC) era.\n\n### 🛡️ 100% Safe with Easy Anti-Cheat\n- **Zero injection, zero DLL hooking, zero memory reading.**\n- Uses the official native local Stats API (TAGame.MatchStatsExporter_TA).\n- Online competitive play fully compatible without any risk of ban.\n\n### ✨ Features\n- **🎨 RocketStats Classic Theme**:\n  - Authentic layout featuring high-res SVG rank badges with glow effect.\n  - Large live MMR display and match delta (+9.0 / -9.0).\n  - Wins, Losses, and Streak counters.\n  - Additional themes: Modern Ribbon, Vertical Card, and Minimalist.\n- **📈 MMR & Rank Calculation**:\n  - Real-time automatic rank bracket computation (Bronze I to Supersonic Legend + Divisions 1-4).\n  - Estimated per-match MMR gains/losses.\n  - In-settings controls to set your starting MMR and match delta.\n- **👤 Player Platform Selector**:\n  - Choose between Epic Games, Steam, or Auto-detection.\n  - Type your exact in-game pseudo to instantly bind tracking.\n- **🎛️ Visual Customization**:\n  - Opacity slider (20% to 100%).\n  - Scale slider (60% to 200%).\n  - Individual toggle chips for every displayed metric.\n- **🎥 OBS & Streamlabs Ready**:\n  - Browser Source URL: `http://localhost:5177/overlay`\n  - Text files export: `mmr.txt`, `mmr_change.txt`, `rank_full.txt`, `wins.txt`, `losses.txt`, `streak.txt`, etc.\n\n---\n\n### 📦 Installation\n- **Portable**: Download and run `RL Session Stats (portable).exe` directly.\n- **Installer**: Run `RL Session Stats_1.0.0_x64-setup.exe` for desktop shortcut installation.",
    "assets": [
     {
      "name": "RL.Session.Stats.portable.exe",
      "size": 7561216,
      "dl": 0,
      "sha": "007cd0c7124cd010d1bb8252afea7b7e0420bb53e47e4d77dc9701dfce4b7e06",
      "url": "https://github.com/NeyorDEV/rl-session-stats/releases/download/v1.0.0/RL.Session.Stats.portable.exe"
     },
     {
      "name": "RL.Session.Stats_1.0.0_x64-setup.exe",
      "size": 2140990,
      "dl": 0,
      "sha": "cc0633b65476d53e0dd3111b7c140d4a8c1513bb1073faeb706985b7fdd9308f",
      "url": "https://github.com/NeyorDEV/rl-session-stats/releases/download/v1.0.0/RL.Session.Stats_1.0.0_x64-setup.exe"
     }
    ]
   }
  ],
  "ModShift": [
   {
    "tag": "v0.1.1",
    "name": "ModShift v0.1.1",
    "date": "2026-10-21T07:26:21Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ModShift/releases/tag/v0.1.1",
    "body": "Fixes found while testing a real CurseForge pack (SkyBlock Enhanced 5.4.1, Fabric 26.2 → 26.3).\n\n### Fixed\n\n- An update that keeps the same version number (a file rebuilt for the target Minecraft\n  version, e.g. `3.3.6 → 3.3.6`) is now explained in the report instead of looking like an error.\n- Resource packs and shaders listed in a pack (e.g. Faithful 32x in a CurseForge export) were\n  searched as mods for the target loader and reported as not found. They are now looked up\n  under their own Modrinth loaders, installed in `resourcepacks/` or `shaderpacks/`, linked to\n  their right Modrinth page, and never get mod alternatives.\n",
    "assets": [
     {
      "name": "modshift-0.1.1.tgz",
      "size": 108932,
      "dl": 1,
      "sha": "44aaae88869235484bb07d16bcfcc1f8e792728ad1a317783e2056253d37abc8",
      "url": "https://github.com/NeyorDEV/ModShift/releases/download/v0.1.1/modshift-0.1.1.tgz"
     }
    ]
   },
   {
    "tag": "v0.1.0",
    "name": "ModShift v0.1.0",
    "date": "2026-10-20T19:36:54Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ModShift/releases/tag/v0.1.0",
    "body": "First public version.\n\n### Added\n\n- `modshift analyze`: per-mod compatibility report (compatible, update found, alternative\n  suggested, not found) as a console table, JSON or Markdown.\n- `modshift migrate`: a new `.mrpack` that follows Modrinth's own validator rules, plus a\n  `MIGRATION_REPORT.md` listing excluded mods and suggested alternatives. Options\n  `--include-alternatives`, `--dry-run`, `--loader-version`, `--force`.\n- Inputs: Modrinth `.mrpack`, CurseForge export `.zip`, folder of `.jar` files. Jar metadata from\n  Fabric, Quilt, Forge and NeoForge.\n- Modrinth API client with an explicit User-Agent, rate limiting (300 requests/minute,\n  `X-Ratelimit-*`, `429`), retries with backoff and a local cache.\n- Dependency resolution: missing required dependencies are added. Missing dependencies,\n  incompatibilities, pinned versions and duplicates are reported with explanations.\n- Offline mode (`--offline`), `--cache-ttl` / `MODSHIFT_CACHE_TTL`, `modshift cache stats` and\n  `modshift cache clear`.\n- CurseForge support: manifest references resolved through the CurseForge API when\n  `CURSEFORGE_API_KEY` is set (metadata only, nothing downloaded from CurseForge).\n- Optional `modshift.config.json`: default target, ignore list, manual mappings (JSON Schema in\n  `schemas/`).\n- Actionable error messages, a progress bar and `--verbose` logs.\n- Programmatic API (`import { analyzePack } from 'modshift'`) with TypeScript types.\n- Loader registry: older mod loaders (LiteLoader, Rift, Legacy Fabric, Ornithe…), server plugin\n  platforms (Bukkit, Spigot, Paper, Purpur, Sponge) and proxies (BungeeCord, Waterfall, Velocity),\n  with plugin metadata (`plugin.yml`, `paper-plugin.yml`, `bungee.yml`, `velocity-plugin.json`).\n- Fallback compatibility, documented by each loader (Quilt ← Fabric, Paper ← Spigot/Bukkit,\n  Purpur ← Paper/Spigot/Bukkit, Waterfall ← BungeeCord), reported as \"fallback compatibility, to\n  test\".\n- `modshift interactive` (`-i`): guided migration with per-mod decisions saved to\n  `modshift.config.json`; new `exclude` list.\n- `modshift ui`: local web interface on 127.0.0.1 (drag and drop, sortable and filterable results,\n  per-mod details, downloads, light/dark theme).\n- `docs/cli.md`: command reference generated from the CLI help.\n- Cross-loader migration (e.g. Forge → Fabric): multi-loader mods keep the same Modrinth project\n  and the switch is reported explicitly.\n- Alternatives are ranked by relevance (shared categories, similar name, description keywords,\n  popularity), with a score and an explanation for each suggestion in every report.\n- Compatibility layer hints (Sinytra Connector, Kilt), limited to the combinations their authors\n  document and marked \"experimental, not guaranteed\". They are never added to the migrated pack.\n- Client/server detection from Modrinth metadata (`environment`, else `client_side` /\n  `server_side`), `--side client|server|both` and `target.side` in the config. Client-only or\n  server-only mods are listed, ambiguous ones flagged, and `.mrpack` `env` filled from Modrinth\n  when the source pack has none.\n- Concurrent Modrinth requests (`--concurrency <n>`, 1–16, default 4) within the client's rate\n  limit, with identical parallel requests sent only once. Reports stay identical whatever the\n  concurrency.\n- Mod source plugins: a `ModSource` contract and a registry (Modrinth primary, CurseForge,\n  GitHub Releases), a `sources` config key, a reusable contract test suite and\n  `docs/plugins.md`. Files found on other sources are reported \"to verify\" and never added to\n  migrated packs.\n- \"ModShift Check\" GitHub Action in `action/` (job summary, one updated pull request comment,\n  outputs per status, `fail-on`). Not published on the Marketplace.\n- Documentation site (VitePress) in `docs/`, its guide pages generated from the README, and a\n  GitHub Pages deployment workflow (Pages itself not enabled).\n- `bench/`: reproducible benchmarks on synthetic 200 and 500 mod packs against an in-memory fake\n  Modrinth (`npm run bench`).\n\n### Security\n\n- Bounded zip extraction (entry count, declared sizes) against zip bombs; zip-slip paths are\n  rejected. See `SECURITY.md`.\n- Web interface: loopback only, per-run token, Host header check, bounded uploads, temporary files\n  only, strict Content Security Policy.\n\n### Changed\n\n- Node.js requirement: `^20.17.0 || >=22.13.0` (needed by the prompt library).\n\n### Fixed\n\nFound while testing against the real Modrinth API (Fabulously Optimized 1.21.1 → 26.3):\n\n- `mig",
    "assets": [
     {
      "name": "modshift-0.1.0.tgz",
      "size": 107213,
      "dl": 0,
      "sha": "67b7c1f31f3c4ecd5315ba5306b95ad2a2d46589bd93f9ff7935275f8e201e0a",
      "url": "https://github.com/NeyorDEV/ModShift/releases/download/v0.1.0/modshift-0.1.0.tgz"
     }
    ]
   }
  ],
  "RentPark": [],
  "Dragon-Mounts-Legacy": []
 }
};
