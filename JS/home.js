/* Accueil : réseau de particules, séquence de démarrage et terminal */

/* ---------- Réseau de particules interactif ---------- */
(() => {
  const stage = document.querySelector(".stage");
  const canvas = document.getElementById("net");
  const ctx = canvas.getContext("2d");
  const mouse = { x: -9999, y: -9999 };
  const pulses = [];
  let w = 0;
  let h = 0;
  let dpr = 1;
  let nodes = [];

  const RED = "183, 75, 75";
  const HOT = "209, 25, 25";

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = stage.clientWidth;
    h = stage.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(120, Math.round((w * h) / 12000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.4 + 0.8,
    }));
  }

  function frame() {
    if (document.documentElement.classList.contains("calm")) {
      requestAnimationFrame(frame);
      return;
    }
    ctx.clearRect(0, 0, w, h);

    for (const p of pulses) p.r += 7;
    while (pulses.length && pulses[0].r > 520) pulses.shift();

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;

      const dx = mouse.x - n.x;
      const dy = mouse.y - n.y;
      const d = Math.hypot(dx, dy);
      if (d < 180 && d > 1) {
        n.vx += (dx / d) * 0.012;
        n.vy += (dy / d) * 0.012;
      }
      for (const p of pulses) {
        const pd = Math.hypot(n.x - p.x, n.y - p.y);
        if (Math.abs(pd - p.r) < 14 && pd > 1) {
          n.vx += ((n.x - p.x) / pd) * 0.9;
          n.vy += ((n.y - p.y) / pd) * 0.9;
        }
      }
      const speed = Math.hypot(n.vx, n.vy);
      if (speed > 1.6) {
        n.vx *= 0.93;
        n.vy *= 0.93;
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(${RED}, ${(1 - d / 130) * 0.45})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (md < 170) {
        ctx.strokeStyle = `rgba(${HOT}, ${(1 - md / 170) * 0.9})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
      ctx.fillStyle = `rgba(${RED}, 0.9)`;
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (const p of pulses) {
      ctx.strokeStyle = `rgba(${HOT}, ${Math.max(0, 1 - p.r / 520) * 0.6})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.stroke();
    }
    requestAnimationFrame(frame);
  }

  const local = (e) => {
    const r = stage.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  stage.addEventListener("pointermove", (e) => Object.assign(mouse, local(e)));
  stage.addEventListener("pointerleave", () => {
    mouse.x = mouse.y = -9999;
  });
  stage.addEventListener("pointerdown", (e) => {
    if (e.target.closest("a, button")) return;
    pulses.push({ ...local(e), r: 0 });
  });
  addEventListener("resize", resize);

  resize();
  frame();
})();

/* ---------- Séquence de démarrage ---------- */
(() => {
  const boot = document.getElementById("boot");
  const lines = [
    t("noyau ............ chargé"),
    t("réseau github.com/neyordev ... connecté"),
    t("interface ........ prête"),
  ];
  lines.forEach((text, i) =>
    setTimeout(() => {
      const row = document.createElement("span");
      const ok = document.createElement("b");
      ok.className = "ok";
      ok.textContent = "[ OK ] ";
      row.append(ok, text);
      boot.append(row);
    }, 300 + i * 450)
  );
})();

/* ---------- Dernier push (données GitHub de main.js) ---------- */
let repos = [];
document.addEventListener("repos", (e) => {
  repos = e.detail;
  const own = repos.filter((r) => !r.fork);
  const last = [...own].sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))[0];
  if (last) document.getElementById("lastpush").textContent = last.name;
});

/* ---------- Terminal interactif ---------- */
(() => {
  const out = document.getElementById("out");
  const form = document.getElementById("cmd");
  const input = document.getElementById("cmdline");
  const suggest = document.getElementById("suggest");
  const root = document.documentElement;
  const history = [];
  let hIndex = 0;

  const USER = "neyordev";
  const MAIL = "suis.neyor@gmail.com";
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  const PAGES = {
    projets: "projets.html",
    projects: "projets.html",
    competences: "competences.html",
    skills: "competences.html",
    apropos: "apropos.html",
    about: "apropos.html",
    cv: "cv.html",
    downloads: "downloads.html",
    telechargements: "downloads.html",
    accueil: "index.html",
    home: "index.html",
  };
  const SKILLS = {
    Langages: ["Python", "Java", "Kotlin", "C", "C++", "C#", "PHP", "Ruby", "Rust", "TypeScript", "JavaScript", "Shell", "HTML / CSS"],
    Frameworks: ["Symfony", "Angular", "Vue.js", "Blazor", "JavaFX", "Tauri"],
    "Outils & données": ["PostgreSQL", "MongoDB", "Docker", "Git & GitHub"],
  };
  const PROJECTS = [
    { id: "jarvis", aliases: ["jarvis", "j.a.r.v.i.s"], repo: "J.A.R.V.I.S", name: "J.A.R.V.I.S",
      desc: t("Assistant vocal avec authentification biométrique, interface 3D et domotique pilotée par IA."),
      short: t("assistant vocal, IA, interface 3D"),
      techs: "Python IA AI biométrie biometrics 3D Windows assistant vocal voice assistant" },
    { id: "rlss", aliases: ["rlss", "rl", "rl-session-stats", "rocket"], repo: "rl-session-stats", name: "RL Session Stats",
      desc: t("Overlay de statistiques de session pour Rocket League, sans injection (compatible Easy Anti-Cheat)."),
      short: t("overlay Rocket League (Rust, Tauri)"),
      techs: "Rust Tauri overlay Rocket League Windows" },
    { id: "modshift", aliases: ["modshift"], repo: "ModShift", name: "ModShift",
      desc: t("Migre un modpack Minecraft vers une autre version ou un autre mod loader."),
      short: t("migration de modpacks Minecraft"),
      techs: "TypeScript Node npm Minecraft CLI modpack" },
    { id: "rentpark", aliases: ["rentpark", "voiture", "location"], repo: "RentPark", name: "RentPark",
      desc: t("Plateforme de gestion de location de voitures : site web, API, administration Blazor et application Android."),
      short: t("location de voitures (PHP, Blazor, Kotlin)"),
      techs: "PHP Blazor Kotlin MySQL voiture location team projet d'équipe" },
    { id: "dragon", aliases: ["dragon", "dragonmounts", "dragon-mounts-legacy"], repo: "Dragon-Mounts-Legacy", name: "Dragon Mounts: Legacy",
      desc: t("Fork du mod Minecraft Dragon Mounts: Legacy, migré vers de nouvelles versions."),
      short: t("fork du mod Minecraft (Java)"),
      techs: "Java Minecraft mod fork" },
  ];
  const REL_REPOS = PROJECTS.map((p) => p.repo);

  /* ---------- Affichage ---------- */
  function print(text, cls = "res") {
    const line = document.createElement("div");
    line.className = cls;
    line.textContent = text;
    out.append(line);
    out.scrollTop = out.scrollHeight;
    return line;
  }
  function printLink(label, href, after = "", before = "") {
    const line = document.createElement("div");
    line.className = "res";
    const a = document.createElement("a");
    a.textContent = label;
    a.href = href;
    if (/^https?:/.test(href)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    line.append(before, a, after);
    out.append(line);
    out.scrollTop = out.scrollHeight;
  }
  function printAccent(accent, rest) {
    const line = document.createElement("div");
    line.className = "res";
    const s = document.createElement("span");
    s.className = "acc";
    s.textContent = accent;
    line.append(s, rest);
    out.append(line);
    out.scrollTop = out.scrollHeight;
  }
  const go = (page, label) => {
    print(t("Ouverture de {label}…", { label: label || page }));
    setTimeout(() => (location.href = page), 450);
  };
  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  /* ---------- Formats ---------- */
  const fmtSize = (b) => {
    if (b < 1024) return `${b} ${t("o")}`;
    if (b < 1048576) return `${Math.round(b / 1024)} ${t("Ko")}`;
    const mb = (b / 1048576).toFixed(1);
    return `${I18N.lang === "fr" ? mb.replace(".", ",") : mb} ${t("Mo")}`;
  };
  const fmtDate = (iso) => new Date(iso).toLocaleDateString(I18N.locale, { day: "numeric", month: "short", year: "numeric" });
  const rel = (iso) => {
    const s = Math.max(0, (Date.now() - new Date(iso)) / 1000);
    if (s < 60) return t("à l'instant");
    if (s < 3600) return t("il y a {n} min", { n: Math.floor(s / 60) });
    if (s < 86400) return t("il y a {n} h", { n: Math.floor(s / 3600) });
    if (s < 86400 * 30) return t("il y a {n} j", { n: Math.floor(s / 86400) });
    return t("il y a {n} mois", { n: Math.floor(s / (86400 * 30)) });
  };

  /* ---------- Données : projets et releases ---------- */
  function findProject(q) {
    const k = norm(q || "").replace(/[^a-z0-9.\-]/g, "");
    if (!k) return null;
    const flat = k.replace(/[^a-z0-9]/g, "");
    return (
      PROJECTS.find((p) => p.aliases.includes(k)) ||
      PROJECTS.find((p) => norm(p.name).replace(/[^a-z0-9]/g, "").includes(flat)) ||
      null
    );
  }
  const repoData = (name) => repos.find((r) => r.name === name);

  const normRel = (x) => ({
    tag: x.tag_name,
    name: x.name || x.tag_name,
    date: x.published_at,
    pre: !!x.prerelease,
    url: x.html_url,
    assets: (x.assets || []).map((a) => ({ name: a.name, size: a.size, dl: a.download_count, url: a.browser_download_url })),
  });
  function loadSnapshot() {
    return new Promise((resolve) => {
      if (window.DL_SNAPSHOT) return resolve(window.DL_SNAPSHOT);
      const s = document.createElement("script");
      s.src = "JS/downloads-data.js";
      s.onload = () => resolve(window.DL_SNAPSHOT || null);
      s.onerror = () => resolve(null);
      document.head.append(s);
    });
  }
  let relPromise = null;
  function getReleases() {
    if (relPromise) return relPromise;
    relPromise = (async () => {
      for (const key of ["dl-cache", "dl-home"]) {
        try {
          const c = JSON.parse(sessionStorage.getItem(key) || "null");
          if (c && Date.now() - c.t < 600000) return { data: c.data, live: true };
        } catch {}
      }
      try {
        const all = await Promise.all(
          REL_REPOS.map(async (r) => {
            const res = await fetch(`https://api.github.com/repos/${USER}/${encodeURIComponent(r)}/releases?per_page=30`);
            if (!res.ok) throw new Error(res.status);
            return [r, (await res.json()).filter((x) => !x.draft).map(normRel)];
          })
        );
        const data = Object.fromEntries(all);
        try {
          sessionStorage.setItem("dl-home", JSON.stringify({ t: Date.now(), data }));
        } catch {}
        return { data, live: true };
      } catch {
        const snap = await loadSnapshot();
        const data = Object.fromEntries(REL_REPOS.map((r) => [r, (snap && snap.releases && snap.releases[r]) || []]));
        return { data, live: false, at: snap && snap.generatedAt };
      }
    })();
    return relPromise;
  }
  const latestOf = (list) => [...(list || [])].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  const mainAsset = (r) => r.assets.find((a) => /(setup|install)/i.test(a.name)) || r.assets[0];

  /* ---------- Commandes ---------- */
  const commands = {};
  const def = (name, desc, usage, run, args) => {
    commands[name] = { desc, usage: usage || name, run, args };
  };
  const projectIds = () => PROJECTS.map((p) => p.aliases[0]);
  const unknownProject = (arg) =>
    print(t("Projet inconnu{arg}. Essaie : {list}.", { arg: arg ? ` : ${arg}` : "", list: projectIds().join(", ") }), "err");

  def("help", t("liste des commandes (help <commande> pour le détail)"), t("help [commande]"), (arg) => {
    const k = norm(arg || "").trim();
    if (k) {
      const c = commands[k] || commands[aliases[k]];
      if (!c) return print(t("Pas d'aide pour « {arg} ».", { arg }), "err");
      print(t("Usage : {usage}", { usage: c.usage }));
      print(c.desc);
      return;
    }
    print(t("Commandes disponibles (Tab pour compléter, ↑ ↓ pour l'historique) :"));
    [
      [t("Moi"), ["about", "neofetch", "skills", "cv", "contact", "mail"]],
      [t("Projets"), ["projects", "info", "latest", "downloads", "download", "stats", "grep", "repos"]],
      [t("Navigation"), ["goto", "ls", "tree", "github"]],
      [t("Système"), ["lang", "ping", "calm", "history", "clear", "help"]],
    ].forEach(([title, names]) => {
      print(`${title}`, "dim");
      names.forEach((n) => print(`  ${commands[n].usage.padEnd(22)}${commands[n].desc}`));
    });
  }, () => Object.keys(commands).filter((n) => !HIDDEN.has(n)));

  def("about", t("qui je suis"), "about", () => {
    print(t("Mylan PERRIER — étudiant en BUT Informatique à l'UCA, Clermont-Ferrand."));
    print(t("Alternant chez Electronique du Mazet."));
    print(t("En ce moment : J.A.R.V.I.S, RL Session Stats et ModShift."));
  });
  def("whoami", t("qui es-tu ?"), "whoami", () => print(t("visiteur@portfolio — bienvenue.")));

  def("neofetch", t("fiche récapitulative façon terminal"), "neofetch", () => {
    const logo = ["     /\\     ", "    /  \\    ", "   / /\\ \\   ", "   \\ \\/ /   ", "    \\  /    ", "     \\/     "];
    const label = (k) => t(k).padEnd(15);
    const info = [
      "neyor@portfolio",
      "───────────────",
      `${label("Nom")}Mylan PERRIER`,
      `${label("Études")}${t("BUT Informatique · UCA (3e année)")}`,
      `${label("Alternance")}Electronique du Mazet`,
      `${label("Stack")}Python, Java, Rust, TypeScript, PHP…`,
      `${label("Projets")}${t("{n} dont {m} avec installateur", { n: PROJECTS.length, m: 3 })}`,
      `${label("Thème")}${t("noir & rouge")}`,
    ];
    const rows = Math.max(logo.length, info.length);
    for (let i = 0; i < rows; i++) printAccent(logo[i] || " ".repeat(12), `  ${info[i] || ""}`);
  });

  def("skills", t("mes technos (skills <mot> pour filtrer)"), t("skills [mot]"), (arg) => {
    const k = norm(arg || "").trim();
    let shown = 0;
    Object.entries(SKILLS).forEach(([group, items]) => {
      const gname = t(group);
      const list = k ? (norm(group).includes(k) || norm(gname).includes(k) ? items : items.filter((i) => norm(i).includes(k))) : items;
      if (!list.length) return;
      shown++;
      print(`${gname.padEnd(20)}${list.join("  ·  ")}`);
    });
    if (!shown) print(t("Aucune techno ne correspond à « {arg} ».", { arg }), "err");
  }, () => ["langages", "languages", "frameworks", "outils", "tools"]);

  def("projects", t("mes projets (liens GitHub)"), "projects", () => {
    PROJECTS.forEach((p) => printLink(p.name, `https://github.com/${USER}/${p.repo}`, `  ${p.short}`));
    print(t('Détail d\'un projet : "info <projet>".'), "dim");
  });

  def("info", t("fiche détaillée d'un projet"), t("info <projet>"), async (arg) => {
    const p = findProject(arg);
    if (!p) return unknownProject(arg);
    const r = repoData(p.repo);
    print(p.name, "cmd-title");
    print(p.desc);
    if (r)
      print(
        t("{lang} · ★ {stars} · dernier push {date} ({rel}){fork}", {
          lang: r.language || "—",
          stars: r.stargazers_count,
          date: fmtDate(r.pushed_at),
          rel: rel(r.pushed_at),
          fork: r.fork ? ` · ${t("fork")}` : "",
        })
      );
    printLink(t("Code source"), `https://github.com/${USER}/${p.repo}`);
    printLink(t("Page de téléchargement"), `downloads.html#dl-${p.id}`);
    print(t("Recherche de la dernière version…"), "dim");
    const { data } = await getReleases();
    const last = latestOf(data[p.repo]);
    if (!last) return print(t("Pas de release publiée : code source uniquement."));
    const a = mainAsset(last);
    printLink(`${last.tag}`, a ? a.url : last.url, `  ${rel(last.date)}${a ? ` · ${a.name} (${fmtSize(a.size)})` : ""}`, `${t("Dernière version :")} `);
  }, projectIds);

  def("latest", t("dernières versions publiées (en direct)"), "latest", async () => {
    print(t("Lecture des releases GitHub…"), "dim");
    const { data, live, at } = await getReleases();
    let n = 0;
    PROJECTS.forEach((p) => {
      const last = latestOf(data[p.repo]);
      if (!last) return;
      n++;
      const a = mainAsset(last);
      printLink(`${p.name} ${last.tag}`, a ? a.url : last.url, `  ${rel(last.date)}${a ? ` · ${a.name} (${fmtSize(a.size)})` : ""}`);
    });
    if (!n) print(t("Aucune release trouvée."));
    if (!live) print(t("GitHub injoignable : copie hors-ligne du {date}.", { date: at ? fmtDate(at) : t("dernier relevé") }), "err");
  });

  def("downloads", t("page des téléchargements"), "downloads", () => {
    printLink(t("Ouvrir la page Téléchargements"), "downloads.html");
    PROJECTS.slice(0, 3).forEach((p) => printLink(p.name, `downloads.html#dl-${p.id}`));
  });
  def("download", t("ouvre le téléchargement d'un projet"), t("download <projet>"), (arg) => {
    const p = findProject(arg);
    if (!p) return unknownProject(arg);
    go(`downloads.html#dl-${p.id}`, t("le téléchargement de {name}", { name: p.name }));
  }, projectIds);

  def("stats", t("mes chiffres GitHub"), "stats", async () => {
    if (!repos.length) print(t("Dépôts en cours de chargement…"), "dim");
    const own = repos.filter((r) => !r.fork);
    const forks = repos.filter((r) => r.fork).length;
    const stars = own.reduce((n, r) => n + r.stargazers_count, 0);
    const last = [...own].sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))[0];
    const { data } = await getReleases();
    const all = REL_REPOS.flatMap((r) => data[r] || []);
    const dl = all.reduce((n, r) => n + r.assets.reduce((m, a) => m + a.dl, 0), 0);
    [
      [t("Dépôts publics"), own.length],
      ["Forks", forks],
      [t("Étoiles"), stars],
      ["Releases", all.length],
      [t("Téléchargements"), dl],
      [t("Dernier push"), last ? `${last.name} · ${rel(last.pushed_at)}` : "—"],
    ].forEach(([k, v]) => print(`${String(k).padEnd(22)}${v}`));
  });

  def("grep", t("cherche un mot dans mes projets, technos et pages"), t("grep <mot>"), (arg) => {
    const k = norm(arg || "").trim();
    if (!k) return print(t("Usage : grep <mot>   (ex. grep rust)"), "err");
    let n = 0;
    PROJECTS.forEach((p) => {
      if (norm(`${p.name} ${p.desc} ${p.techs}`).includes(k)) {
        n++;
        printLink(p.name, `downloads.html#dl-${p.id}`, `  ${p.short}`, `${t("projet")}   `);
      }
    });
    repos.forEach((r) => {
      if (PROJECTS.some((p) => p.repo === r.name)) return;
      if (norm(`${r.name} ${r.description || ""} ${r.language || ""}`).includes(k)) {
        n++;
        printLink(r.name, `https://github.com/${USER}/${r.name}`, `  ${r.language || "—"}`, `${t("dépôt")}    `);
      }
    });
    Object.entries(SKILLS).forEach(([group, items]) =>
      items.forEach((i) => {
        if (norm(i).includes(k)) {
          n++;
          print(`${t("techno")}   ${i}  (${t(group)})`);
        }
      })
    );
    Object.entries(PAGES).forEach(([name, file]) => {
      if (["telechargements", "projects", "skills", "about", "home"].includes(name)) return;
      if (norm(name).includes(k)) {
        n++;
        printLink(file, file, "", `${t("page")}     `);
      }
    });
    if (!n) print(t("Aucun résultat pour « {arg} ».", { arg }), "err");
  });

  def("repos", t("mes dépôts GitHub (en direct)"), "repos", () => {
    if (!repos.length) return print(t("Chargement des dépôts… réessaie dans une seconde."), "err");
    repos.forEach((r) =>
      printLink(r.name, `https://github.com/${USER}/${encodeURIComponent(r.name)}`, `  ${r.language || "—"}  ★${r.stargazers_count}${r.fork ? `  (${t("fork")})` : ""}`)
    );
  });

  def("cv", t("ouvre le CV (cv pdf : version à imprimer)"), "cv [pdf]", (arg) => {
    if (/pdf|print|imprim|download|telecharg/i.test(arg || "")) go("cv.html?print", t("le CV (impression PDF)"));
    else go("cv.html", t("le CV"));
  }, () => ["pdf"]);

  def("contact", t("me contacter"), "contact", () => {
    printLink(MAIL, `mailto:${MAIL}`);
    printLink("GitHub", `https://github.com/${USER}`);
    printLink("LinkedIn", "https://www.linkedin.com/in/mylan-perrier-57364732b/");
  });
  def("mail", t("copie mon adresse e-mail"), "mail", async () => {
    const ok = await copy(MAIL);
    printLink(MAIL, `mailto:${MAIL}`, ok ? `  ${t("(copié dans le presse-papiers)")}` : `  ${t("(copie impossible : sélectionne-le)")}`);
  });
  def("github", t("mon profil GitHub"), "github", () => printLink(`github.com/${USER}`, `https://github.com/${USER}`));

  def("goto", t("ouvre une page (projets, competences, apropos, cv, downloads)"), t("goto <page>"), (arg) => {
    const key = norm(arg || "").replace(/[^a-z]/g, "");
    const page = PAGES[key];
    if (!page) return print(t("Page inconnue : {arg}. Essaie : projets, competences, apropos, cv, downloads.", { arg: arg || "(vide)" }), "err");
    go(page);
  }, () => ["projets", "competences", "apropos", "cv", "downloads", "accueil"]);
  def("ls", t("liste les pages"), "ls", () => print("projets/  competences/  apropos/  cv/  downloads/  contact"));
  def("tree", t("plan du site"), "tree", () => {
    print(".");
    const files = [
      ["index.html", t("accueil")],
      ["projets.html", t("projets et dépôts GitHub")],
      ["competences.html", t("technos")],
      ["apropos.html", t("parcours et centres d'intérêt")],
      ["cv.html", t("CV imprimable")],
      ["downloads.html", t("téléchargements")],
    ];
    files.forEach(([f, d], i) => printLink(f, f, `   ${d}`, i === files.length - 1 ? "└── " : "├── "));
  });

  def("ping", t("teste la connexion à GitHub (ping github)"), "ping [github]", async () => {
    const t0 = performance.now();
    try {
      const res = await fetch("https://api.github.com/rate_limit", { cache: "no-store" });
      const ms = Math.round(performance.now() - t0);
      if (!res.ok) throw new Error(res.status);
      const j = await res.json();
      const core = j.resources && j.resources.core;
      print(`PING api.github.com : ${ms} ms`);
      if (core) print(t("Appels restants : {n}/{max}", { n: core.remaining, max: core.limit }));
    } catch {
      print(t("api.github.com injoignable ou limite atteinte."), "err");
    }
  }, () => ["github"]);

  def("calm", t("coupe ou remet les animations (calm on | off)"), "calm [on|off]", (arg) => {
    const a = norm(arg || "").trim();
    const on = a === "on" ? true : a === "off" ? false : !root.classList.contains("calm");
    root.classList.toggle("calm", on);
    try {
      localStorage.setItem("calm", on ? "1" : "0");
    } catch {}
    print(t("Animations réduites : {state}.", { state: on ? t("activé") : t("désactivé") }));
  }, () => ["on", "off"]);
  def("lang", t("change la langue du site (lang fr | en)"), "lang [fr|en]", (arg) => {
    const a = norm(arg || "").trim();
    const next = a === "fr" || a === "en" ? a : I18N.lang === "en" ? "fr" : "en";
    if (next === I18N.lang) return print(t("Le site est déjà en {lang}.", { lang: next === "fr" ? "français" : "English" }));
    print(t("Changement de langue…"));
    setTimeout(() => I18N.setLang(next), 300);
  }, () => ["fr", "en"]);
  def("history", t("commandes tapées depuis l'ouverture"), "history", () => {
    if (!history.length) return print(t("Historique vide."));
    history.forEach((h, i) => print(`${String(i + 1).padStart(3)}  ${h}`));
  });
  def("clear", t("vide le terminal"), "clear", () => out.replaceChildren());
  def("sudo", "", "sudo", () => print(t("Permission refusée. Bien essayé."), "err"));

  const aliases = { man: "help", "?": "help", cd: "goto", open: "goto", pwd: "ls", language: "lang", langue: "lang" };
  const HIDDEN = new Set(["sudo"]);
  const allNames = () => [...Object.keys(commands).filter((n) => !HIDDEN.has(n)), ...Object.keys(aliases).filter((n) => n !== "?")];

  /* ---------- Exécution ---------- */
  function lev(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++)
      for (let j = 1; j <= b.length; j++)
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  const closest = (name) => {
    const n = norm(name);
    const names = allNames();
    return names.find((c) => c.startsWith(n)) || names.map((c) => [c, lev(n, c)]).filter(([, d]) => d <= 2).sort((a, b) => a[1] - b[1])[0]?.[0];
  };

  function run(raw) {
    const text = raw.trim();
    if (!text) return;
    history.push(text);
    hIndex = history.length;
    const row = document.createElement("div");
    row.className = "cmd";
    row.textContent = text;
    out.append(row);
    const [name, ...rest] = text.split(/\s+/);
    const key = name.toLowerCase();
    const entry = commands[key] || commands[aliases[key]];
    if (entry) {
      try {
        const r = entry.run(rest.join(" "));
        if (r && r.catch) r.catch(() => print(t("Erreur inattendue."), "err"));
      } catch {
        print(t("Erreur inattendue."), "err");
      }
    } else {
      const guess = closest(name);
      print(
        guess
          ? t("commande introuvable : {name}. Tu voulais dire « {guess} » ?", { name, guess })
          : t('commande introuvable : {name}. Tape "help".', { name }),
        "err"
      );
    }
    out.scrollTop = out.scrollHeight;
  }

  /* ---------- Complétion avec Tab ---------- */
  function complete() {
    const value = input.value;
    const parts = value.split(/\s+/);
    const last = parts[parts.length - 1];
    let candidates;
    if (parts.length <= 1) candidates = allNames();
    else {
      const entry = commands[parts[0].toLowerCase()] || commands[aliases[parts[0].toLowerCase()]];
      candidates = entry && entry.args ? entry.args() : [];
    }
    const p = norm(last);
    const matches = [...new Set(candidates.filter((c) => norm(c).startsWith(p)))];
    if (!matches.length) return;
    let common = matches[0];
    for (const m of matches) while (!m.startsWith(common)) common = common.slice(0, -1);
    const next = [...parts.slice(0, -1), matches.length === 1 ? matches[0] : common].join(" ");
    const progressed = next.length > value.length;
    input.value = matches.length === 1 ? `${next} ` : next;
    if (matches.length > 1 && !progressed) print(matches.join("   "), "dim");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    run(input.value);
    input.value = "";
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      complete();
    } else if (e.key === "ArrowUp" && history.length) {
      hIndex = Math.max(0, hIndex - 1);
      input.value = history[hIndex];
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      hIndex = Math.min(history.length, hIndex + 1);
      input.value = history[hIndex] || "";
      e.preventDefault();
    }
  });
  document.getElementById("console").addEventListener("click", (e) => {
    if (!e.target.closest("a, button")) input.focus();
  });

  ["help", "neofetch", "skills", "projects", "latest", "stats", "cv", "tree", "clear"].forEach((c) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = c;
    b.addEventListener("click", () => run(c));
    suggest.append(b);
  });

  print(t('Bienvenue. Tape "help" pour voir les commandes, Tab pour compléter.'));
})();
