/* Copie hors-ligne des releases GitHub (utilisée si l'API est indisponible). Générée automatiquement. */
window.DL_SNAPSHOT = {
 "generatedAt": "2026-10-28T09:36:05Z",
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
  "rl-tracker-suite": [
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
      "dl": 3,
      "sha": "33a380a15e472b6c74d883a38df78fe609418ee93dfdfa7d858a80bc2e7ab058",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.0/RL.Tracker.Suite.portable.exe"
     },
     {
      "name": "RL.Tracker.Suite_1.4.0_x64-setup.exe",
      "size": 3592614,
      "dl": 1,
      "sha": "48646c30e45d02a1034b39cf739f7ab6063b6b20cd25da3816e361bb580f2c7d",
      "url": "https://github.com/NeyorDEV/rl-tracker-suite/releases/download/v1.4.0/RL.Tracker.Suite_1.4.0_x64-setup.exe"
     }
    ]
   }
  ],
  "ghostmesh": [
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
      "dl": 0,
      "sha": "0eb2c649bdbc169909d1d750af1a44ad5aacaa8ff0e2c851910607998ce128e5",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.6/ghostmesh-cli.exe"
     },
     {
      "name": "ghostmesh-gui.exe",
      "size": 13370880,
      "dl": 1,
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
      "dl": 0,
      "sha": "239bcf5398357fa2d698df593a1a696dea9d8e169db5d4c75f75b87651fa4d7c",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.5/ghost.exe"
     },
     {
      "name": "GhostMesh.exe",
      "size": 12780032,
      "dl": 1,
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
      "dl": 1,
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
      "dl": 1,
      "sha": "f6f6ede50409a37fe24e3b9a70986b1708e56aa5121db6769713ea9cee2b59a7",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.3/ghostmesh-cli-v0.2.3-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.2.3-windows-x64.zip",
      "size": 3955904,
      "dl": 2,
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
      "dl": 1,
      "sha": "087b74569e6bcc0b867d464f167fe7a9e60716d4ed5430e0836efa23b6dc0721",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.2/ghostmesh-cli-v0.2.2-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.2.2-windows-x64.zip",
      "size": 3929563,
      "dl": 1,
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
      "dl": 1,
      "sha": "0a562679a9cdb761d60ab99e935f35daa0bd9758aa46bd7321ff8ad5632b5155",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.2.1/ghostmesh-cli-v0.2.1-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.2.1-windows-x64.zip",
      "size": 3874056,
      "dl": 1,
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
      "dl": 1,
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
      "dl": 0,
      "sha": "20ac774db723ea5bf7caeac0ecfa5ef4ad7b6ce2744f26e264ba14d125137cb1",
      "url": "https://github.com/NeyorDEV/ghostmesh/releases/download/v0.1.3/ghostmesh-cli-v0.1.3-windows-x64.zip"
     },
     {
      "name": "ghostmesh-desktop-v0.1.3-windows-x64.zip",
      "size": 3107206,
      "dl": 1,
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
      "dl": 0,
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
      "dl": 4,
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
      "dl": 1,
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
  "Dragon-Mounts-Legacy": []
 }
};
