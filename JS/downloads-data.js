/* Copie hors-ligne des releases GitHub (utilisée si l'API est indisponible). Générée automatiquement. */
window.DL_SNAPSHOT = {
 "generatedAt": "2026-11-27T09:50:43Z",
 "releases": {
  "J.A.R.V.I.S": [
   {
    "tag": "v11.0.2",
    "name": "J.A.R.V.I.S 11.0.2 — first-launch assistant in 5 steps",
    "date": "2026-11-18T14:52:54Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/tag/v11.0.2",
    "body": "## J.A.R.V.I.S 11.0.2\n\nThis release shortens the **first-launch assistant** from 7 to **5 steps**.\n\n### Install\n\n1. Download **JARVIS-Setup-11.0.2.exe** below and run it (no administrator rights needed). Installing over an older version keeps your settings, keys and memory.\n2. The installer sets up Python 3.12 if needed, then the dependencies (a few minutes, internet connection required).\n3. Start **J.A.R.V.I.S** from the Start menu or the desktop shortcut. No console window opens.\n4. On a first install, the first-launch assistant guides you through everything (see below).\n\n> The installer is **not code-signed yet**. Windows SmartScreen may show \"Windows protected your PC\": click *More info*, then *Run anyway*.\n> SHA-256: `d01519e54b0b420134db349a7a988605c76f1b409ef0227b1b5b903f46bdd8b6`\n\n### What's new\n\n- **First-launch assistant in 5 steps**: Profile, AI key, **Microphone and voice** (microphone test and voiceprint on one page), **Options** (offline mode and the optional services on one page, the services folded by default), Done.\n- The offline page detects Ollama, the fallback model `qwen3:4b-instruct` and your NVIDIA card, and gives the `ollama pull` command to copy.\n\nEverything else is as in 11.0.0 and 11.0.1 (faster answers, lighter offline fallback, routines, skills import, local API): see `CHANGELOG.md`.\n",
    "assets": [
     {
      "name": "JARVIS-Setup-11.0.2.exe",
      "size": 6310370,
      "dl": 1,
      "sha": "d01519e54b0b420134db349a7a988605c76f1b409ef0227b1b5b903f46bdd8b6",
      "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/download/v11.0.2/JARVIS-Setup-11.0.2.exe"
     }
    ]
   },
   {
    "tag": "v11.0.1",
    "name": "J.A.R.V.I.S 11.0.1 — complete first-launch assistant",
    "date": "2026-11-18T14:42:56Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/tag/v11.0.1",
    "body": "## J.A.R.V.I.S 11.0.1\n\nThis release completes the **first-launch assistant**: it now explains everything a new install needs, including the offline mode and the optional services.\n\n### Install\n\n1. Download **JARVIS-Setup-11.0.1.exe** below and run it (no administrator rights needed). Installing over an older version keeps your settings, keys and memory.\n2. The installer sets up Python 3.12 if needed, then the dependencies (a few minutes, internet connection required).\n3. Start **J.A.R.V.I.S** from the Start menu or the desktop shortcut. No console window opens.\n4. On a first install, the first-launch assistant guides you through everything (see below).\n\n> The installer is **not code-signed yet**. Windows SmartScreen may show \"Windows protected your PC\": click *More info*, then *Run anyway*.\n> SHA-256: `ca7421ec85fca0d08ebfd42850d3d61a9ac29610f5a1c2dbd7efe025623827d0`\n\n### What's new\n\n- **Two new steps in the first-launch assistant** (now 7 steps: Profile, AI key, Microphone, Voice, Offline, Services, Done).\n  - **Offline**: detects Ollama (installed / running), the fallback model `qwen3:4b-instruct` and your NVIDIA graphics card, shows the `ollama pull` command with a Copy button and a \"Check again\" button, and explains what happens without a GPU (the offline model runs on the processor and speech recognition goes through Groq, which needs a key).\n  - **Services**: tells you where to set up the optional services (Spotify / Deezer, Google, Home Assistant, other API keys, God's Eye View) and how to list every command by voice.\n- The final summary also shows the state of the offline mode.\n\nThis is the same as 11.0.0 otherwise (faster answers, lighter offline fallback, one-shot and interval routines, skills import, local API): see the 11.0.0 notes and `CHANGELOG.md`.\n",
    "assets": [
     {
      "name": "JARVIS-Setup-11.0.1.exe",
      "size": 6310143,
      "dl": 1,
      "sha": "ca7421ec85fca0d08ebfd42850d3d61a9ac29610f5a1c2dbd7efe025623827d0",
      "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/download/v11.0.1/JARVIS-Setup-11.0.1.exe"
     }
    ]
   },
   {
    "tag": "v11.0.0",
    "name": "J.A.R.V.I.S 11.0.0 — faster answers, lighter offline fallback",
    "date": "2026-11-18T14:23:19Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/tag/v11.0.0",
    "body": "## J.A.R.V.I.S 11.0.0\n\nThis release makes JARVIS **faster**, gives it a **lighter offline fallback**, and adds new routines, skills import and a local API.\n\n### Install\n\n1. Download **JARVIS-Setup-11.0.0.exe** below and run it (no administrator rights needed). Installing over an older version keeps your settings, keys and memory.\n2. The installer sets up Python 3.12 if needed, then the dependencies (a few minutes, internet connection required).\n3. Start **J.A.R.V.I.S** from the Start menu or the desktop shortcut. No console window opens.\n4. On a first install, the first-launch assistant asks for your name, an AI key (Gemini is free: https://aistudio.google.com/apikey), checks your microphone and can record your voiceprint.\n\n> The installer is **not code-signed yet**. Windows SmartScreen may show \"Windows protected your PC\": click *More info*, then *Run anyway*.\n> SHA-256: `9ea05027610699d5062e5618f6e0e92a7e68ca9ca8f4621ab8ee2e1286b8bf54`\n\n### What's new\n\n- **Faster answers.** Questions (\"how many...\", \"which...\", \"when...\", \"how...\", \"who...\") no longer wait for an intent-routing call: \"how much is 7 times 8\" went from 4.7 s to 2.0 s. The memory search runs in the background (the voice and the HUD no longer freeze during it), and the connection to Gemini is opened at startup.\n- **Lighter offline fallback.** The local model is now `qwen3:4b-instruct` (2.5 GB, about 4 GB of VRAM, answers in 1 to 3.6 s) instead of 6.6 to 8 GB models. Your own Ollama models are never touched. Fixed: the local prompt (about 6,400 tokens) was refused by Ollama's default 4,096-token context; and saying \"disable local mode\" used to enable it.\n- **One-shot and interval routines.** \"In 2 hours, ...\", \"tomorrow at 8, ...\", \"on December 3 at 9:30, ...\" run once; \"every 2 hours, give me the weather\" repeats (5 minutes minimum).\n- **Voice engines with automatic fallback.** The speech engines are tried in order and a failing one is set aside for 30 s. ElevenLabs is supported as an optional engine (off by default, needs your own key).\n- **Long conversations are summarised** (old exchanges compressed in the background), so the history sent to the model stays small.\n- **Deep research with numbered sources.** The model cites [1], [2]... and a Sources card shows the links in the HUD; the voice does not read them.\n- **Skills import.** \"Import the skill https://github.com/...\" downloads an open-format skill (agentskills.io); it is never approved automatically and must be reviewed first.\n- **Local OpenAI-compatible API** (off by default, 127.0.0.1 only, bearer token, text only, no actions), so other tools on your PC can talk to JARVIS.\n- **Security.** A prompt-injection detector and isolation of external text, SSRF protection on fetched URLs, and a series of audit fixes (confirmations for sensitive actions, stricter handling of unrecognised voices).\n\nFull changes: `CHANGELOG.md`.\n",
    "assets": [
     {
      "name": "JARVIS-Setup-11.0.0.exe",
      "size": 6307709,
      "dl": 1,
      "sha": "9ea05027610699d5062e5618f6e0e92a7e68ca9ca8f4621ab8ee2e1286b8bf54",
      "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/download/v11.0.0/JARVIS-Setup-11.0.0.exe"
     }
    ]
   },
   {
    "tag": "v10.0.0",
    "name": "J.A.R.V.I.S 10.0.0 — cylindre et recherche",
    "date": "2026-11-02T17:18:34Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/tag/v10.0.0",
    "body": "## J.A.R.V.I.S 10.0.0\n\nThis release rebuilds the interface around the **holographic cylinder**: everything JARVIS does now goes through the cylinder's search wheel.\n\n### Install\n\n1. Download **JARVIS-Setup-10.0.0.exe** below and run it (no administrator rights needed). Installing over an older version keeps your settings, keys and memory.\n2. The installer sets up Python 3.12 if needed, then the dependencies (a few minutes, internet connection required).\n3. Start **J.A.R.V.I.S** from the Start menu or the desktop shortcut. No console window opens.\n4. On a first install, the first-launch assistant asks for your name, an AI key (Gemini is free: https://aistudio.google.com/apikey), checks your microphone and can record your voiceprint.\n\n> The installer is **not code-signed yet**. Windows SmartScreen may show \"Windows protected your PC\": click *More info*, then *Run anyway*.\n> SHA-256: `a846541946c7d37481922ea9e83a868c7ef5f3184ce61510ee12260f81f9c65b`\n\n### What's new\n\n- **Everything goes through the cylinder search.** Every screen, panel and widget (settings, help, timer, website builder, project workshop, weather, music, calendar, winget, antivirus, vault...) now appears after the search wheel has found its category, and the backend tells the HUD which module it really ran, so the wheel stops on the right one.\n- **New wheel menu.** The bottom button carousel is replaced by a menu drawn on the cylinder itself, in the style of the search wheel (three groups that unfold in a cascade).\n- **New loading screen**, drawn on the real orb so the hand-over to the HUD is seamless. Vite and the heavy libraries now load in parallel, which shortens the start.\n- **The colour theme applies to the whole HUD**, not only the cylinder, and is kept when you reopen the settings.\n- **Virtual cursors removed** (HUD commands act directly); the OS autopilot keeps a pulsing frame as its visual marker. The CPU/RAM block is gone and the microphone moved to the bottom right.\n- **\"Iron Man mode\" removed** (it only set a flag nothing read).\n- **Deezer** playlists play from the most recently added track, and every Deezer command runs in the background without stealing focus.\n- **Fixes:** audio anti-aliasing filter warning at launch, dependency updates (pyasn1 0.6.5, pypdf 6.21.4) for published vulnerabilities.\n\nFull changes: `CHANGELOG.md`.\n",
    "assets": [
     {
      "name": "JARVIS-Setup-10.0.0.exe",
      "size": 6003528,
      "dl": 10,
      "sha": "a846541946c7d37481922ea9e83a868c7ef5f3184ce61510ee12260f81f9c65b",
      "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/download/v10.0.0/JARVIS-Setup-10.0.0.exe"
     }
    ]
   },
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
      "dl": 2,
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
      "dl": 2,
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
      "dl": 4,
      "sha": "42cdac2654de7b27aece6a3783346c223251c2a8dfd749a5474aca448597e44b",
      "url": "https://github.com/NeyorDEV/J.A.R.V.I.S/releases/download/v9.5.0/JARVIS-Setup-9.5.0.exe"
     }
    ]
   }
  ],
  "rl-tracker-suite": [
   {
    "tag": "v1.4.6",
    "name": "RL Tracker Suite 1.4.6",
    "date": "2026-11-12T08:50:09Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/tag/v1.4.6",
    "body": "## RL Tracker Suite 1.4.6 - podium fix, faster lobby loading, cleaner ranks, past encounters\n\n### Fixes\n- **A won match is no longer counted as an abandon.** Quitting on the podium (or after the final whistle / an overtime goal) now keeps the win or loss instead of applying an abandon loss.\n- **Faster lobby loading.** A player's profile and match history load in one hidden window with no artificial gap, and the overlay stays up until profiles are loaded (the auto-hide timer waits for loading, up to 30 s, then keeps the overlay for the reading time).\n\n### LobbyTracker\n- **Only the useful ranks are shown**: the rank in the mode being played, the 1v1 rank of a 1v1 specialist, the best rank of a smurf, and the current and peak ranks of a former high-level player.\n- **Past encounters (new)**: every finished match is remembered locally (`encounters.json`, no network call). When you meet a player again, the overlay adds \"Already met: against him 2W-1L, with him 1W-0L, 3 d ago\". Abandoned matches are not counted.\n\n### Downloads\n- `RL Tracker Suite (portable).exe`: no installation needed.\n- `RL Tracker Suite_1.4.6_x64-setup.exe`: installer.\n\nNot yet verified in a long real session: the podium timing and the past-encounters line were tested with simulated events.\n",
    "assets": [
     {
      "name": "RL.Tracker.Suite.portable.exe",
      "size": 11326976,
      "dl": 3,
      "sha": "7a57644fbabd716f0e809064b086f699bc4186cb10aa8a504a08c3a4e0fa5a49",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.6/RL.Tracker.Suite.portable.exe"
     },
     {
      "name": "RL.Tracker.Suite_1.4.6_x64-setup.exe",
      "size": 3610577,
      "dl": 2,
      "sha": "68a16428e3c52153d0c0b263a6cd2828385fcc6ef4a85ed932a9d125ab87b52f",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.6/RL.Tracker.Suite_1.4.6_x64-setup.exe"
     }
    ]
   },
   {
    "tag": "v1.4.5",
    "name": "RL Tracker Suite 1.4.5",
    "date": "2026-10-31T08:37:00Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/tag/v1.4.5",
    "body": "## RL Tracker Suite 1.4.5 - fix: wrong account detected when the game starts\n\n### Problem fixed\nWhen Rocket League was launched on another account than the previous session (for example `neyor.` after `neyorbb`), the app stayed on the previous account: its MMR and its Tracker Network profile were the old ones.\n\n**Cause.** Right after the game starts, the old `Launch.log` is still in place for a few seconds before the game renames it to a backup and creates the new one. The app read the old log, found the previous session's account and stopped looking.\n\n### What changed\n- The app reads the start time of the Rocket League process and **ignores any `Launch.log` older than that start**: only the log of the current launch counts.\n- The account is now looked for **for up to one minute** instead of 15 seconds (a Steam account only appears in the log about 20 seconds after the game starts).\n- Quick fix without restarting: **Session Stats tab > Joueur & Compte > \"Détecter maintenant\"** re-reads the current log.\n\nThis release includes everything from 1.4.4 (fewer and better-timed calls to Tracker Network, short pause after a 429, profiles kept in cache) and 1.4.3 (overlay clipping fix).\n\n### Downloads\n- `RL Tracker Suite (portable).exe`: no installation needed.\n- `RL Tracker Suite_1.4.5_x64-setup.exe`: installer.\n\nVerified: the process start time matches Windows' own value, and a test reproduces the old-log / new-log case. Not yet confirmed during a full real account switch.\n",
    "assets": [
     {
      "name": "RL.Tracker.Suite.portable.exe",
      "size": 11270144,
      "dl": 4,
      "sha": "39cd19d5b7fd9b63f701b8a275f8123355277f8036f39aeac723d3870be8d5e6",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.5/RL.Tracker.Suite.portable.exe"
     },
     {
      "name": "RL.Tracker.Suite_1.4.5_x64-setup.exe",
      "size": 3598931,
      "dl": 2,
      "sha": "eb22d76c893c59f9336cfaa373f6f557d8745ebc87e3577f1a576cc4fe87fb2c",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.5/RL.Tracker.Suite_1.4.5_x64-setup.exe"
     }
    ]
   },
   {
    "tag": "v1.4.4",
    "name": "RL Tracker Suite 1.4.4",
    "date": "2026-10-30T18:21:04Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/tag/v1.4.4",
    "body": "## RL Tracker Suite 1.4.4 - fix: lobby profiles \"indisponible\", wrong MMR after an account switch, 429 pause\n\n### Problems fixed\n- **Every player \"profil indisponible\" when a game starts (LobbyTracker).** After an HTTP 429 from Tracker Network, all lookups stopped for 10 minutes, so the whole lobby failed at once. A failed lookup was also remembered for 10 minutes for the wrong reasons (the real error was hidden by the fallback source), so players stayed unavailable in the next matches. Profiles fetched while the lobby was being replaced at match start were thrown away instead of being cached.\n- **Wrong MMR with a freshly detected account (for example 855 instead of 1500).** The first synchronization failed with a 429 and nothing retried it, so the starting value stayed on screen.\n- **The Synchroniser button showed the \"pause\" error.** The button is never delayed by the pause anymore.\n\n### What changed\n- **Calls to Tracker Network only when needed**: once when the game starts (your MMR, retried after 30 s, 1 min and 2 min if the site is busy), on each click on *Synchroniser*, once per lobby player (then cached for 24 h), and once after each finished match. No more call when the app opens, none at the start of a match for a mode change, and one instead of two after a match.\n- **Short, growing pause for automatic lookups only** after a 429: 30 s, then 1, 2, 4 and 5 min at most (it was 10 min for everything).\n- **Real HTTP status** read from the page instead of guessing from its text.\n- **Only a profile that is really not found or private is set aside** (10 minutes). A block, a timeout or a network error never condemns a player.\n- **Every failure is written to the journal** with its real reason (`%APPDATA%\\fr.rltrackersuite.app\\journal.txt`).\n- Lobby lookups are spaced by 2 s instead of 3 s.\n\n### If you are still blocked\nTracker Network rate-limits the connection after too many requests (the older versions sent hundreds per lookup). Close the app and wait a few hours for the block to lift, then start 1.4.4.\n\n### Downloads\n- `RL Tracker Suite (portable).exe`: no installation needed.\n- `RL Tracker Suite_1.4.4_x64-setup.exe`: installer.\n\nNot yet confirmed against an unblocked Tracker Network during a real match.\n",
    "assets": [
     {
      "name": "RL.Tracker.Suite.portable.exe",
      "size": 11269120,
      "dl": 2,
      "sha": "e344667e2a31a24c493d15005234688972978eb9006584103717f15a09ca893b",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.4/RL.Tracker.Suite.portable.exe"
     },
     {
      "name": "RL.Tracker.Suite_1.4.4_x64-setup.exe",
      "size": 3597732,
      "dl": 1,
      "sha": "5238599d46023081b0a99eeb4898afc1a71632512f67a4340977be2f39662681",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.4/RL.Tracker.Suite_1.4.4_x64-setup.exe"
     }
    ]
   },
   {
    "tag": "v1.4.3",
    "name": "RL Tracker Suite 1.4.3",
    "date": "2026-10-29T22:38:19Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/tag/v1.4.3",
    "body": "## RL Tracker Suite 1.4.3 - fix: overlay clipped (cut on the right and bottom)\n\n**Problem fixed.** The overlay could appear cut off on the right and at the bottom (values hidden), not only at launch. It happens with several screens when they use different display scaling (for example 100 % and 150 %): the overlay window is parked off-screen on another screen, and Windows shrank it in proportion (by a third at 150 %) when it was moved back to the main screen.\n\n### What changed\n- The overlay window is moved to the right screen first, then sized in physical pixels, then checked in place.\n- The window is no longer resized while it is parked off-screen.\n- The lobby overlay shares the same code and gets the same fix.\n\nMeasured on a multi-screen setup: window 270x198 for a 270x198 content, on 4 consecutive displays (before: 180x132 for the same content).\n\nThis release also keeps the 1.4.2 protection against Tracker Network rate limiting (one request per lookup, automatic 10-minute pause on HTTP 429).\n\n### Downloads\n- `RL Tracker Suite (portable).exe`: no installation needed.\n- `RL Tracker Suite_1.4.3_x64-setup.exe`: installer.\n\nNot yet tested during a real Rocket League match.\n",
    "assets": [
     {
      "name": "RL.Tracker.Suite.portable.exe",
      "size": 11270144,
      "dl": 2,
      "sha": "132ff5fd120c968bc05e7f98018aa06a31d0cc523e7808e310decbdd9019c817",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.3/RL.Tracker.Suite.portable.exe"
     },
     {
      "name": "RL.Tracker.Suite_1.4.3_x64-setup.exe",
      "size": 3597709,
      "dl": 1,
      "sha": "f33afb8973ee1f4b25b0a4ea7c7a3dd837d3bc8fe1143d6eec71e38cf6466f48",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.3/RL.Tracker.Suite_1.4.3_x64-setup.exe"
     }
    ]
   },
   {
    "tag": "v1.4.2",
    "name": "RL Tracker Suite 1.4.2",
    "date": "2026-10-29T22:06:28Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/tag/v1.4.2",
    "body": "## RL Tracker Suite 1.4.2 - fix: Tracker Network errors (HTTP 400 / 429)\n\n**Problem fixed.** With 1.4.0 and 1.4.1, a lookup could send hundreds of requests to Tracker Network in a few seconds (retry loops in the hidden browser window). Tracker Network then rate-limits your connection (HTTP 429), and its own site can return errors such as 400 when you search for a name, even in your normal browser.\n\n### What changed\n- **One request per lookup**: the hidden window opens the API address once and reads the answer. No more retry loops.\n- **Lookups run one at a time**, with at least 2.5 s between them (3 s between lobby players).\n- **Automatic pause**: if Tracker Network answers 429, every lookup stops for 10 minutes instead of making it worse.\n- **Fewer useless requests**: anonymous names (\"Player 3\") are not looked up, and a player whose lookup just failed is not asked again for 10 minutes.\n- **Names are fully URL-encoded** (spaces, accents, `/`, `?`, `&`, `%`, `#`).\n\n### If you are already blocked\nClose the app for a while (it can take from several minutes to a few hours for Tracker Network to lift the block), then start the new version. The app reports \"recherches en pause\" instead of retrying.\n\n### Downloads\n- `RL Tracker Suite (portable).exe`: no installation needed.\n- `RL Tracker Suite_1.4.2_x64-setup.exe`: installer.\n\nNot yet verified against a live, unblocked Tracker Network (the connection was rate-limited during testing); the pause logic was verified.\n",
    "assets": [
     {
      "name": "RL.Tracker.Suite.portable.exe",
      "size": 11270144,
      "dl": 2,
      "sha": "95cb417671b481b732b2c9585c090dbef2e0821fb7713eadd95353d90390ecfa",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.2/RL.Tracker.Suite.portable.exe"
     },
     {
      "name": "RL.Tracker.Suite_1.4.2_x64-setup.exe",
      "size": 3597661,
      "dl": 3,
      "sha": "7fc3912c3cf670163e5e749b3c5339b2a1dd4026903eb371a787f5039c712ee4",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.2/RL.Tracker.Suite_1.4.2_x64-setup.exe"
     }
    ]
   },
   {
    "tag": "v1.4.1",
    "name": "RL Tracker Suite 1.4.1",
    "date": "2026-10-29T18:24:06Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/tag/v1.4.1",
    "body": "## Correctifs & Améliorations (v1.4.1)\n\n### 🖥️ Overlay\n- **Correction du rognage du widget au lancement du jeu** :\n  - Remplacement de la transformation CSS `scale` par la propriété `zoom` (avec repli sur scale) pour éliminer les troncatures graphiques à l'intérieur du conteneur en `overflow: hidden`.\n  - Augmentation de la largeur minimale (`.theme-card` à 270px) et espacement aéré des lignes (`gap: 16px`).\n  - Augmentation des marges de confort lors du redimensionnement dynamique de la fenêtre Tauri (+56px de largeur, +48px de hauteur) afin de compenser les bordures invisibles Windows (`WS_THICKFRAME`).\n\n### 🎮 Détection des joueurs Steam & Tracker Network\n- **Support des pseudonymes contenant des espaces** : correction de l'analyseur des logs Rocket League (`Launch.log`) qui tronquait auparavant les pseudonymes avec des espaces (ex: `Epsilon Drxzm` était tronqué à `Epsilon`).\n- **Résolution Tracker Network par SteamID64** : pour les profils Steam, la synchronisation Tracker Network utilise désormais automatiquement l'identifiant numérique Steam64 (17 chiffres) pour une redirection et une récupération fiables des statistiques.\n",
    "assets": [
     {
      "name": "RL.Tracker.Suite.portable.exe",
      "size": 11253248,
      "dl": 5,
      "sha": "32a02f25e701ce31cbfa60d3a575a1ad339cd54590b3f715a4c5f22a396c247c",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.1/RL.Tracker.Suite.portable.exe"
     },
     {
      "name": "RL.Tracker.Suite_1.4.1_x64-setup.exe",
      "size": 3588911,
      "dl": 4,
      "sha": "1d47af2e52f815e84ef3526134a86fc15a32350e8659dfed981db1e3e65579a4",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.1/RL.Tracker.Suite_1.4.1_x64-setup.exe"
     }
    ]
   },
   {
    "tag": "v1.4.0",
    "name": "RL Tracker Suite 1.4.0",
    "date": "2026-10-27T15:55:59Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/tag/v1.4.0",
    "body": "## RL Tracker Suite 1.4.0 - first release\n\nRL Tracker Suite merges two projects into one app:\n\n- **RL Session Stats** (https://github.com/NeyorDEV/rl-session-stats): session MMR, wins / losses / streak, history, HUD overlay, OBS.\n- **LobbyTracker** (https://github.com/NeyorDEV/lobbytracker): pre-match lobby radar with real ranks, smurf detection and badges.\n\nThe two original repositories are no longer updated; development continues here.\n\n### What is new\n- Two tabs: **Session Stats** (everything from RL Session Stats) and **LobbyTracker**.\n- LobbyTracker: live lobby analysis, 5 badges (*Potentiel smurf*, *Joueur 1v1*, *Gardien*, *Lose streak*, *Ancien haut rang*), Smurf Index, its own overlay (4 layouts, position, scale, opacity, 11 colors, preview), automatic hiding at the end of the 3-2-1 countdown or after a delay, OBS source at `/lobby`.\n- One shared Stats API, game and account detection, Tracker Network access, OBS server and settings file: nothing to configure twice.\n- Settings, history and sessions of the former RL Session Stats app are imported automatically on first launch.\n- Update check now uses this repository.\n\n### Downloads\n- `RL Tracker Suite (portable).exe`: no installation needed.\n- `RL Tracker Suite_1.4.0_x64-setup.exe`: installer.\n\nWindows SmartScreen may warn about unsigned binaries: **More info -> Run anyway**.\n\nKnown limits: the lobby needs the Stats API (`PacketSendRate` above 0); the kickoff event was tested against a simulated Stats API, not yet in a full real match. See the README.\n",
    "assets": [
     {
      "name": "RL.Tracker.Suite.portable.exe",
      "size": 11256832,
      "dl": 4,
      "sha": "33a380a15e472b6c74d883a38df78fe609418ee93dfdfa7d858a80bc2e7ab058",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.0/RL.Tracker.Suite.portable.exe"
     },
     {
      "name": "RL.Tracker.Suite_1.4.0_x64-setup.exe",
      "size": 3592614,
      "dl": 3,
      "sha": "48646c30e45d02a1034b39cf739f7ab6063b6b20cd25da3816e361bb580f2c7d",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.0/RL.Tracker.Suite_1.4.0_x64-setup.exe"
     }
    ]
   }
  ],
  "ghostmesh": [
   {
    "tag": "v0.3.0",
    "name": "GhostMesh v0.3.0 - Relay, Rendezvous, Access Control, .ghost HTTPS",
    "date": "2026-11-27T08:53:09Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.3.0",
    "body": "# Changelog\n\n## 0.3.0\n\n### Relay (new crate `ghost-relay`)\n- Relay server: a node registers by proving it owns its private key (challenge answered with an\n  X25519-derived proof), then hands over sealed packets that are forwarded to the registered\n  destination. Source spoofing is refused, connections and rates are limited per IP and per\n  connection, nothing is stored.\n- Relay client in `ghost-core`: reads incoming packets and injects them into the engine, reconnects\n  with growing back-off, rotates over a configurable list of relays, pins each relay's public key.\n- Path selection: direct UDP when it works, relay otherwise, with a background probe that moves\n  traffic back to the direct path as soon as it becomes possible.\n- CLI: `ghostmesh relay add|remove|list`.\n\n### Rendezvous\n- Signed address records (XEdDSA, made with the existing X25519 identity: no new key), anti-replay by\n  strictly increasing issue time, expiry, lookup only by known NodeId, in-memory storage.\n- Client publishes at start-up, periodically and when candidate addresses change; known devices are\n  looked up again when they are lost. A device can reconnect to a paired device without a new ticket.\n- Configurable server list; none by default. CLI: `ghostmesh rendezvous add|remove|list`.\n- `Dockerfile` and `docs/SELF-HOSTING.md`.\n\n### NAT traversal\n- Several STUN servers (configurable, built-in public defaults), NAT type detection (open, cone,\n  symmetric, unknown, blocked), candidate set (STUN, router mapping, predicted ports, LAN),\n  carrier-grade NAT detection, richer diagnostics and hints.\n- CLI: `ghostmesh status` (uses a running node when there is one), `ghostmesh stun add|remove|list`.\n\n### Keys and sessions\n- Private key moved to the OS vault (Windows Credential Manager, macOS Keychain, Linux Secret\n  Service), with an Argon2id + ChaCha20-Poly1305 encrypted file as fallback. Automatic migration from\n  `config.json` with erasure of the old value after read-back. Zeroization of identity and session\n  keys.\n- Session rekey by time (10 min) and volume (1 GiB) with ephemeral keys (forward secrecy); the epoch\n  is carried in the top byte of the packet sequence number. Peers without support stay on base keys.\n- Device revocation (propagated to connected peers) and expiry. New packet types `Rekey`, `RekeyAck`,\n  `Revoke`. CLI: `ghostmesh revoke`, `expire`, `devices`.\n\n### Access control\n- Per-device profiles (`full`, `phone`, `web`, `rdp`, `custom`, `blocked`) applied to IP packets on\n  the virtual interface: protocol, destination ports, direction, deny by default for restricted\n  profiles, replies allowed through a flow table, anti-spoofing of source addresses.\n- CLI `ghostmesh access`, and a profile selector plus **Revoke** button in the desktop app.\n\n### Names and HTTPS\n- `.ghost` resolver, system integration commands (NRPT, resolvectl, /etc/resolver), certificate\n  authority limited to `.ghost`, `ghostmesh serve` (HTTPS reverse proxy), `ghostmesh ca`,\n  `docs/HTTPS-NAMES.md` with iOS and Android installation steps.\n\n### Service and platforms\n- `ghostmesh up` runs headless and exposes a local control channel (named pipe / Unix socket);\n  `ghostmesh service install|uninstall` (systemd unit, launchd job, Windows logon task).\n- IPv6 inside the tunnel (`fd42:474d::/32`), MTU 1380 by default (was 1420, which fragmented on\n  1500-byte links), configurable.\n- Signed update manifest verification (no release key published yet, nothing is accepted).\n- CI: formatting and clippy checks on all three systems.\n\n### Hardening and tests\n- Tickets longer than 4 KiB are refused before decoding.\n- Malformed-input tests for every decoder; `cargo-fuzz` targets in `fuzz/` for packets, tickets,\n  relay frames, rendezvous frames, DNS queries and the IP filter.\n- Integration tests: relay then direct switch, rendezvous after both addresses change, rekey by time\n  and volume, revocation propagation, phone profile over a real link, HTTPS through the proxy.\n\n### Not done\n- Mobile clients (Android, iOS): left out on request.\n- TLS / WebSocket in front of the relay; ACME certificates; Windows service integration with the\n  service control manager; active path-MTU discovery; automatic update download and install.\n",
    "assets": [
     {
      "name": "ghost-relay.exe",
      "size": 2930176,
      "dl": 1,
      "sha": "a5f2a38c882598ea25892aa37411cf91f6350385e769d3fd25cdd1b4cc0b4fb2",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.3.0/ghost-relay.exe"
     },
     {
      "name": "ghostmesh-cli.exe",
      "size": 9814528,
      "dl": 1,
      "sha": "35ca55bb0b69d859e0375ebc5f546227b17994facc860a11bb604a040d53436a",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.3.0/ghostmesh-cli.exe"
     },
     {
      "name": "ghostmesh-gui.exe",
      "size": 14172160,
      "dl": 1,
      "sha": "b1318026790fd09f140c2052cf5c92d8fc9840992259a8a859f8ee10ac1a2f52",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.3.0/ghostmesh-gui.exe"
     }
    ]
   },
   {
    "tag": "v0.2.6",
    "name": "GhostMesh v0.2.6 - Instant Modals, UDP Loop Stability & Candidate Discovery",
    "date": "2026-10-27T08:29:50Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.2.6",
    "body": "### GhostMesh v0.2.6\n\n---\n\n### Fichiers disponibles\n\n- **ghostmesh-gui.exe (Application Bureau avec Interface Graphique)**\n  - Double-cliquez pour lancer l'application avec toute son interface visuelle : tableau de bord, QR code d'invitation, gestion des pairs, RDP en 1 clic, GhostChat et GhostDrop.\n  - Exécutable portable autonome sans installation.\n\n- **ghostmesh-cli.exe (Ligne de commande - CLI / Console)**\n  - Outil terminal autonome pour l'administration en ligne de commande ou les serveurs headless (commandes : ghost up, ghost status, ghost invite, etc.).\n\n---\n\n### Nouveautés et Correctifs de la version v0.2.6\n\n- **Ouverture instantanée de la fenêtre d'invitation (Zéro latence) :** Suppression du filtre de flou graphique sur WebView2 et mise en cache immédiate du ticket d'invitation et du QR code.\n- **Résilience de la boucle UDP Windows :** Correction de l'erreur Winsock WSAECONNRESET (10054) qui interrompait la réception de paquets lorsqu'un port distant répondait inaccessible (ICMP Port Unreachable).\n- **Candidats d'adresses multiples (Modèle ICE) :** Détection et inclusion automatique des adresses LAN locales (192.168.x.x) et loopback (127.0.0.1) dans le ticket d'invitation, permettant une connexion directe même sans support du NAT hairpinning par la box internet.\n- **Bouton Disconnect :** Ajout d'une commande directe dans l'interface pour déconnecter manuellement un pair actif.\n- **Protection anti-bouclage :** Rejet des paquets réfléchis en boucle locale et interdiction de rejoindre son propre ticket d'invitation.\n- **Affichage lisible de Last Seen :** Formatage dynamique du temps écoulé (just now, il y a Xs, Xm, Xh) au lieu d'un nombre brut de secondes.\n- **Dossier de build dédié :** Production automatique des exécutables compilés dans build-output/.",
    "assets": [
     {
      "name": "ghostmesh-cli.exe",
      "size": 6749184,
      "dl": 1,
      "sha": "0eb2c649bdbc169909d1d750af1a44ad5aacaa8ff0e2c851910607998ce128e5",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.6/ghostmesh-cli.exe"
     },
     {
      "name": "ghostmesh-gui.exe",
      "size": 13370880,
      "dl": 2,
      "sha": "27b9db492737d3939ecdda280d5bd61a020d46bbce2e0022e6beaa7a1a0a059e",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.6/ghostmesh-gui.exe"
     }
    ]
   },
   {
    "tag": "v0.2.5",
    "name": "GhostMesh v0.2.5 - Fix UDP Loop Crash, Disconnect Button & Time Format",
    "date": "2026-10-27T08:07:46Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.2.5",
    "body": "### GhostMesh v0.2.5\n\n#### Fixes & Features\n- **Fix Windows UDP Receive Loop Crash (WSAECONNRESET 10054):** Previously on Windows, probing an unreachable UDP candidate returned ICMP Port Unreachable which triggered WSAECONNRESET (10054), causing the receive loop to prematurely break. Now non-fatal UDP errors are cleanly caught and continued so the receive loop remains active indefinitely.\n- **Reject Self Packets and Prevent Self-Connection:** Nodes now ignore packets where \\packet.src_node == self.node_id()\\ and strictly drop packets destined for other nodes, eliminating duplicate self-connection rows.\n- **Auto Ephemeral Identity for Local Multi-Instance Testing:** When a secondary instance binds to fallback ports (4244, 4246), it automatically generates an independent cryptographic identity so multiple windows on the same PC can pair directly.\n- **Disconnect Button:** Added a red 'Disconnect' button in the Control column allowing instantaneous removal of connected or disconnected peers.\n- **Human-Readable Last Seen Formatting:** Timestamps now automatically format into readable units (\\just now\\, \\30s ago\\, \\12m ago\\, \\2h ago\\, \\3d ago\\) instead of raw large second counts.\n- **Dedicated build-output folder:** All built binaries are cleanly published into \\\build-output/\\ inside the project root.",
    "assets": [
     {
      "name": "ghost.exe",
      "size": 5798912,
      "dl": 1,
      "sha": "239bcf5398357fa2d698df593a1a696dea9d8e169db5d4c75f75b87651fa4d7c",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.5/ghost.exe"
     },
     {
      "name": "GhostMesh.exe",
      "size": 12780032,
      "dl": 2,
      "sha": "3376d3bf86e58c4a8c6f55cd21d0683a3d1f767aed495c44387b65e96e98b9dc",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.5/GhostMesh.exe"
     }
    ]
   },
   {
    "tag": "v0.2.4",
    "name": "GhostMesh v0.2.4 - ICE Candidate Endpoints & Multi-Instance Fix",
    "date": "2026-10-27T07:23:14Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.2.4",
    "body": "### GhostMesh v0.2.4\n\n#### Fixes & Improvements\n- **ICE Candidate Endpoints Discovery:** Tickets now embed LAN candidates (e.g. 192.168.x.x) and loopback (127.0.0.1) in addition to public WAN STUN endpoint. Solves connection drops caused by lack of NAT hairpinning / loopback on consumer ISP boxes (Livebox, Freebox, SFR...).\n- **Automatic Port Conflict Resolution:** Running multiple instances on the same machine now automatically discovers free ports (4242, 4244, 4246 for UDP, 4243, 4245 for TCP GhostDrop) without WSAEADDRINUSE collisions.\n- **Bi-directional Peer Table Sync:** Automatic recording of connected peers in peer table and known devices upon initial handshake reception.\n- **UI Refresh Feedback:** Smooth animation and responsive state update when clicking the Refresh button.",
    "assets": [
     {
      "name": "ghostmesh-gui.exe",
      "size": 12711424,
      "dl": 2,
      "sha": "b2744f37eeae64d707df1050bfc3e7897a21f88e981e6d3904ce128031b602f1",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.4/ghostmesh-gui.exe"
     }
    ]
   },
   {
    "tag": "v0.2.3",
    "name": "v0.2.3 - Clipboard Sync & Exit Node Internet Gateway",
    "date": "2026-10-26T16:56:03Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.2.3",
    "body": "Release v0.2.3 highlights:\n- **Presse-Papier Partagé (Clipboard Sync)**: 1-click clipboard transfer and automatic synchronization across mesh peers over Noise-encrypted channel (packet 0x0A).\n- **Exit Node Gateway (Internet Sharing)**: Route all outbound IPv4 Internet traffic through a designated trusted peer via virtual mesh overlay.\n- **Enhanced Settings**: Granular switches for automatic clipboard synchronization and Exit Node sharing permissions.\n- **Updated Dashboard**: Toast notification system and quick-action toolbar on active mesh links.",
    "assets": [
     {
      "name": "ghostmesh-cli-v0.2.3-windows-x64.zip",
      "size": 2405759,
      "dl": 2,
      "sha": "f6f6ede50409a37fe24e3b9a70986b1708e56aa5121db6769713ea9cee2b59a7",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.3/ghostmesh-cli-v0.2.3-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.2.3-windows-x64.zip",
      "size": 3955904,
      "dl": 3,
      "sha": "40ffee6ed37c0232a03e249f37648dca78083324b0fdf8ac5a9bc45b45696f64",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.3/ghostmesh-desktop-v0.2.3-windows-x64.zip"
     }
    ]
   },
   {
    "tag": "v0.2.2",
    "name": "v0.2.2 - Mesh Firewall, GhostChat, GhostDrop Resume & Windows Autostart",
    "date": "2026-10-26T15:16:55Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.2.2",
    "body": "Release v0.2.2 highlights:\n- **Per-Device Mesh Firewall**: Granular RDP, GhostDrop, and temporary session permissions per saved peer.\n- **GhostChat (E2E Encrypted P2P Messaging)**: In-app real-time encrypted messaging over Noise Protocol sessions.\n- **GhostDrop with Resume & Auto-Zip Folders**: Automatic resumption from last byte offset on cuts, and directory streaming with on-the-fly zipping.\n- **Silent Windows Autostart**: Optional launch with Windows minimized straight into system tray.\n- **Integrated Update Checker**: Instant detection and one-click notification of GitHub releases in the GUI header.",
    "assets": [
     {
      "name": "ghostmesh-cli-v0.2.2-windows-x64.zip",
      "size": 2401347,
      "dl": 2,
      "sha": "087b74569e6bcc0b867d464f167fe7a9e60716d4ed5430e0836efa23b6dc0721",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.2/ghostmesh-cli-v0.2.2-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.2.2-windows-x64.zip",
      "size": 3929563,
      "dl": 2,
      "sha": "cf559f421784ad8b88a438b8992a4ee024d21861eae8515eef1a22483aa28668",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.2/ghostmesh-desktop-v0.2.2-windows-x64.zip"
     }
    ]
   },
   {
    "tag": "v0.2.1",
    "name": "v0.2.1 - Known Devices with Consent Pairing & One-Click Windows RDP",
    "date": "2026-10-26T14:39:02Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.2.1",
    "body": "Release v0.2.1 features:\n- **Known Devices with Consent Flow**: Remembers paired machines; clicking 'Connect' sends an invitation that the other user can explicitly **Accept** or **Decline**.\n- **Persistent Node Identity**: Retains persistent NodeId and Virtual IP across reboots in local configuration.\n- **One-Click Windows Remote Desktop (RDP)**: 'Remote Desktop' button directly triggers native Windows \\mstsc.exe\\ to control remote machines seamlessly.\n- **Forget Device**: Option to revoke and remove any saved peer from the trusted devices list.",
    "assets": [
     {
      "name": "ghostmesh-cli-v0.2.1-windows-x64.zip",
      "size": 2374418,
      "dl": 2,
      "sha": "0a562679a9cdb761d60ab99e935f35daa0bd9758aa46bd7321ff8ad5632b5155",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.1/ghostmesh-cli-v0.2.1-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.2.1-windows-x64.zip",
      "size": 3874056,
      "dl": 2,
      "sha": "1b7f4cb767581673cf2b433cd4ed36e755f2960c6cc89fb79f696626eb758dc8",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.1/ghostmesh-desktop-v0.2.1-windows-x64.zip"
     }
    ]
   },
   {
    "tag": "v0.2.0",
    "name": "v0.2.0 - Major Architecture Upgrade: Relay, UPnP, QR Code, GhostSync & Multi-Hop",
    "date": "2026-10-26T14:27:03Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.2.0",
    "body": "GhostMesh v0.2.0 brings 6 major evolutionary milestones:\n1. **Automated UPnP / IGD Port Forwarding**: Automatic residential router UDP port 4242 mapping via \\ghost-nat\\.\n2. **HTTPS / WebSocket Fallback Relay**: Tunnel packets over port 443 TCP when enterprise firewalls block outbound UDP (\\",
    "assets": [
     {
      "name": "ghostmesh-cli-v0.2.0-windows-x64.zip",
      "size": 2374418,
      "dl": 1,
      "sha": "0a562679a9cdb761d60ab99e935f35daa0bd9758aa46bd7321ff8ad5632b5155",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.0/ghostmesh-cli-v0.2.0-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.2.0-windows-x64.zip",
      "size": 3822152,
      "dl": 2,
      "sha": "2ec1e3a4104df164bdffc49fb069e7af31a24e2602cb28811af2a48b33f4acef",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.0/ghostmesh-desktop-v0.2.0-windows-x64.zip"
     }
    ]
   },
   {
    "tag": "v0.1.3",
    "name": "v0.1.3 - GhostDrop Native P2P File Transfer & Dynamic Virtual IPs",
    "date": "2026-10-26T13:40:20Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.1.3",
    "body": "Release v0.1.3 brings the all-in-one P2P file transfer experience:\n- **GhostDrop Engine**: Direct peer-to-peer file transfers built right into the GhostMesh GUI with live speed & progress monitor, auto-saving to \\Downloads/GhostMesh-Transfers\\.\n- **Dynamic Virtual IPs**: Cryptographically derived, collision-free IPv4 addresses (\\10.42.X.Y/16\\) based on node identity.\n- **Transfers Folder Integration**: One-click opening of received files in Windows Explorer.\n- Updated documentation and README guides.",
    "assets": [
     {
      "name": "ghostmesh-cli-v0.1.3-windows-x64.zip",
      "size": 1538935,
      "dl": 1,
      "sha": "20ac774db723ea5bf7caeac0ecfa5ef4ad7b6ce2744f26e264ba14d125137cb1",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.1.3/ghostmesh-cli-v0.1.3-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.1.3-windows-x64.zip",
      "size": 3107206,
      "dl": 2,
      "sha": "ab534d83981998f6f964f5b76d64a798dbd0f7c6ad501b76a8d9942fab22aab1",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.1.3/ghostmesh-desktop-v0.1.3-windows-x64.zip"
     }
    ]
   },
   {
    "tag": "v0.1.2",
    "name": "v0.1.2 - Desktop GUI GhostMesh Icon & Stealth Launch",
    "date": "2026-10-26T12:39:33Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.1.2",
    "body": "Release v0.1.2 includes:\n- Brand new custom GhostMesh cyber-mesh glowing icon for Windows window, taskbar, and binary\n- Disabled terminal debug console window on Windows GUI launch\n- Live WireGuard-grade encrypted P2P mesh dashboard",
    "assets": [
     {
      "name": "ghostmesh-desktop-v0.1.2-windows-x64.zip",
      "size": 2978786,
      "dl": 1,
      "sha": "857da181b51bb26070a21572c27de91df0e74780413e24288428c6183920ef23",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.1.2/ghostmesh-desktop-v0.1.2-windows-x64.zip"
     }
    ]
   },
   {
    "tag": "v0.1.1",
    "name": "GhostMesh v0.1.1 - Desktop GUI Window Fix & Auto-Focus",
    "date": "2026-10-26T11:06:37Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.1.1",
    "body": "### GhostMesh v0.1.1 Release\n\nBugfix and stability update for the standalone desktop GUI application.\n\n#### What's Changed\n- **Tauri v2 Permissions & Capabilities:** Explicitly configured \\capabilities/default.json\\ with \\core:default\\ permissions.\n- **Window Initialization:** Ensured direct creation, centering, and focus of the main dashboard window on launch.\n- **Virtual TUN Interface:** Integration with Wintun driver for mesh subnet (\\10.42.0.0/16\\).\n\n#### Direct Downloads (Windows x64)\n- **\\ghostmesh-desktop-v0.1.1-windows-x64.zip\\**: Standalone desktop GUI executable (\\GhostMesh.exe\\). Unzip and double-click to launch the dashboard.\n- **\\ghostmesh-cli-v0.1.1-windows-x64.zip\\**: Standalone command-line binary (\\ghost-cli.exe\\).",
    "assets": [
     {
      "name": "ghostmesh-cli-v0.1.1-windows-x64.zip",
      "size": 1340224,
      "dl": 5,
      "sha": "53ee3c02217cb14a988feeee59eec1099ba4b21f0ac2882fadbd1996628af933",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.1.1/ghostmesh-cli-v0.1.1-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.1.1-windows-x64.zip",
      "size": 2978786,
      "dl": 2,
      "sha": "857da181b51bb26070a21572c27de91df0e74780413e24288428c6183920ef23",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.1.1/ghostmesh-desktop-v0.1.1-windows-x64.zip"
     }
    ]
   },
   {
    "tag": "v0.1.0",
    "name": "GhostMesh v0.1.0 - Desktop GUI & P2P Overlay",
    "date": "2026-10-26T10:37:16Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/ghostmesh/releases/tag/v0.1.0",
    "body": "### GhostMesh v0.1.0 Initial Release\n\nDirect peer-to-peer encrypted mesh overlay network built with Rust and Tauri v2.\n\n#### Features\n- **Desktop Dashboard & Tray Companion (Tauri v2):** Modern dark cyber UI with live telemetry, peer RTT latency metrics, and 1-click pairing.\n- **Direct P2P Connectivity:** Automated UDP hole-punching through home NATs/firewalls via public STUN servers.\n- **End-to-End Cryptography:** Noise Protocol handshake (Curve25519, ChaCha20-Poly1305, BLAKE2s).\n- **Virtual TUN Adapter (ghost0):** IP level tunneling and routing with private mesh subnet (\\10.42.0.0/16\\).\n- **Zero Central Relay:** Data packets travel directly from machine to machine.\n- **npm CLI Package:** Available via \\\npx ghostmesh-cli\\.\n\n#### Downloads\n- **\\ghostmesh-desktop-v0.1.0-windows-x64.zip\\**: Standalone desktop GUI executable (\\GhostMesh.exe\\). Unzip and double-click to run.\n- **\\ghostmesh-cli-v0.1.0-windows-x64.zip\\**: Standalone command-line binary (\\ghost-cli.exe\\).",
    "assets": [
     {
      "name": "ghostmesh-cli-v0.1.0-windows-x64.zip",
      "size": 1340224,
      "dl": 2,
      "sha": "53ee3c02217cb14a988feeee59eec1099ba4b21f0ac2882fadbd1996628af933",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.1.0/ghostmesh-cli-v0.1.0-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.1.0-windows-x64.zip",
      "size": 2978786,
      "dl": 1,
      "sha": "857da181b51bb26070a21572c27de91df0e74780413e24288428c6183920ef23",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.1.0/ghostmesh-desktop-v0.1.0-windows-x64.zip"
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
    "url": "https://github.com/NeyorDEV/modshift/releases/tag/v0.1.1",
    "body": "Fixes found while testing a real CurseForge pack (SkyBlock Enhanced 5.4.1, Fabric 26.2 → 26.3).\n\n### Fixed\n\n- An update that keeps the same version number (a file rebuilt for the target Minecraft\n  version, e.g. `3.3.6 → 3.3.6`) is now explained in the report instead of looking like an error.\n- Resource packs and shaders listed in a pack (e.g. Faithful 32x in a CurseForge export) were\n  searched as mods for the target loader and reported as not found. They are now looked up\n  under their own Modrinth loaders, installed in `resourcepacks/` or `shaderpacks/`, linked to\n  their right Modrinth page, and never get mod alternatives.\n",
    "assets": [
     {
      "name": "modshift-0.1.1.tgz",
      "size": 108932,
      "dl": 2,
      "sha": "44aaae88869235484bb07d16bcfcc1f8e792728ad1a317783e2056253d37abc8",
      "url": "https://github.com/NeyorDEV/modshift/releases/download/v0.1.1/modshift-0.1.1.tgz"
     }
    ]
   },
   {
    "tag": "v0.1.0",
    "name": "ModShift v0.1.0",
    "date": "2026-10-20T19:36:54Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/modshift/releases/tag/v0.1.0",
    "body": "First public version.\n\n### Added\n\n- `modshift analyze`: per-mod compatibility report (compatible, update found, alternative\n  suggested, not found) as a console table, JSON or Markdown.\n- `modshift migrate`: a new `.mrpack` that follows Modrinth's own validator rules, plus a\n  `MIGRATION_REPORT.md` listing excluded mods and suggested alternatives. Options\n  `--include-alternatives`, `--dry-run`, `--loader-version`, `--force`.\n- Inputs: Modrinth `.mrpack`, CurseForge export `.zip`, folder of `.jar` files. Jar metadata from\n  Fabric, Quilt, Forge and NeoForge.\n- Modrinth API client with an explicit User-Agent, rate limiting (300 requests/minute,\n  `X-Ratelimit-*`, `429`), retries with backoff and a local cache.\n- Dependency resolution: missing required dependencies are added. Missing dependencies,\n  incompatibilities, pinned versions and duplicates are reported with explanations.\n- Offline mode (`--offline`), `--cache-ttl` / `MODSHIFT_CACHE_TTL`, `modshift cache stats` and\n  `modshift cache clear`.\n- CurseForge support: manifest references resolved through the CurseForge API when\n  `CURSEFORGE_API_KEY` is set (metadata only, nothing downloaded from CurseForge).\n- Optional `modshift.config.json`: default target, ignore list, manual mappings (JSON Schema in\n  `schemas/`).\n- Actionable error messages, a progress bar and `--verbose` logs.\n- Programmatic API (`import { analyzePack } from 'modshift'`) with TypeScript types.\n- Loader registry: older mod loaders (LiteLoader, Rift, Legacy Fabric, Ornithe…), server plugin\n  platforms (Bukkit, Spigot, Paper, Purpur, Sponge) and proxies (BungeeCord, Waterfall, Velocity),\n  with plugin metadata (`plugin.yml`, `paper-plugin.yml`, `bungee.yml`, `velocity-plugin.json`).\n- Fallback compatibility, documented by each loader (Quilt ← Fabric, Paper ← Spigot/Bukkit,\n  Purpur ← Paper/Spigot/Bukkit, Waterfall ← BungeeCord), reported as \"fallback compatibility, to\n  test\".\n- `modshift interactive` (`-i`): guided migration with per-mod decisions saved to\n  `modshift.config.json`; new `exclude` list.\n- `modshift ui`: local web interface on 127.0.0.1 (drag and drop, sortable and filterable results,\n  per-mod details, downloads, light/dark theme).\n- `docs/cli.md`: command reference generated from the CLI help.\n- Cross-loader migration (e.g. Forge → Fabric): multi-loader mods keep the same Modrinth project\n  and the switch is reported explicitly.\n- Alternatives are ranked by relevance (shared categories, similar name, description keywords,\n  popularity), with a score and an explanation for each suggestion in every report.\n- Compatibility layer hints (Sinytra Connector, Kilt), limited to the combinations their authors\n  document and marked \"experimental, not guaranteed\". They are never added to the migrated pack.\n- Client/server detection from Modrinth metadata (`environment`, else `client_side` /\n  `server_side`), `--side client|server|both` and `target.side` in the config. Client-only or\n  server-only mods are listed, ambiguous ones flagged, and `.mrpack` `env` filled from Modrinth\n  when the source pack has none.\n- Concurrent Modrinth requests (`--concurrency <n>`, 1–16, default 4) within the client's rate\n  limit, with identical parallel requests sent only once. Reports stay identical whatever the\n  concurrency.\n- Mod source plugins: a `ModSource` contract and a registry (Modrinth primary, CurseForge,\n  GitHub Releases), a `sources` config key, a reusable contract test suite and\n  `docs/plugins.md`. Files found on other sources are reported \"to verify\" and never added to\n  migrated packs.\n- \"ModShift Check\" GitHub Action in `action/` (job summary, one updated pull request comment,\n  outputs per status, `fail-on`). Not published on the Marketplace.\n- Documentation site (VitePress) in `docs/`, its guide pages generated from the README, and a\n  GitHub Pages deployment workflow (Pages itself not enabled).\n- `bench/`: reproducible benchmarks on synthetic 200 and 500 mod packs against an in-memory fake\n  Modrinth (`npm run bench`).\n\n### Security\n\n- Bounded zip extraction (entry count, declared sizes) against zip bombs; zip-slip paths are\n  rejected. See `SECURITY.md`.\n- Web interface: loopback only, per-run token, Host header check, bounded uploads, temporary files\n  only, strict Content Security Policy.\n\n### Changed\n\n- Node.js requirement: `^20.17.0 || >=22.13.0` (needed by the prompt library).\n\n### Fixed\n\nFound while testing against the real Modrinth API (Fabulously Optimized 1.21.1 → 26.3):\n\n- `mig",
    "assets": [
     {
      "name": "modshift-0.1.0.tgz",
      "size": 107213,
      "dl": 0,
      "sha": "67b7c1f31f3c4ecd5315ba5306b95ad2a2d46589bd93f9ff7935275f8e201e0a",
      "url": "https://github.com/NeyorDEV/modshift/releases/download/v0.1.0/modshift-0.1.0.tgz"
     }
    ]
   }
  ],
  "RentPark": [],
  "Dragon-Mounts-Legacy": [
   {
    "tag": "v26.2",
    "name": "Dragon Mounts: Legacy 26.2 (Fabric)",
    "date": "2026-11-25T08:52:08Z",
    "pre": false,
    "url": "https://github.com/NeyorDEV/Dragon-Mounts-Legacy/releases/tag/v26.2",
    "body": "## Dragon Mounts: Legacy 26.2 (Fabric)\n\nFirst release of this fork: the mod is ported from Forge 1.21 to **Fabric** on **Minecraft 26.2**.\n\n### Install\n\n1. Install [Fabric Loader](https://fabricmc.net/use/) **0.19.2** or newer for Minecraft 26.2.\n2. Put [Fabric API](https://modrinth.com/mod/fabric-api) in your `mods` folder.\n3. Download **dragonmounts-fabric-26.2.jar** below and drop it into `mods`.\n\n> SHA-256: `9e83e832351cd908999c9d7143094ecf9619810ec3dd3de49afcf53243f4751b`\n\n### What's new\n\n- **Fabric port for Minecraft 26.2**: `fabric.mod.json` and an access widener replace the Forge setup; rendering moved to the new render-state pipeline.\n- **Two new breeds: Amethyst and Sculk.**\n- Fixed a world-creation crash caused by an eager tag lookup and a network codec mismatch on the dragon breed registry.\n- Fixed constant animation jitter, wrong egg / spawn egg names, the spawn egg icon shape and depth-fighting on the saddle layer.\n\nOriginal mod by Kay9Unit: https://github.com/Kay9Unit/Dragon-Mounts-Legacy\n",
    "assets": [
     {
      "name": "dragonmounts-fabric-26.2.jar",
      "size": 604898,
      "dl": 2,
      "sha": "9e83e832351cd908999c9d7143094ecf9619810ec3dd3de49afcf53243f4751b",
      "url": "https://github.com/NeyorDEV/Dragon-Mounts-Legacy/releases/download/v26.2/dragonmounts-fabric-26.2.jar"
     }
    ]
   }
  ]
 }
};
