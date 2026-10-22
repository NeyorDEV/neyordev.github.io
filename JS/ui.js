/* Couche d'interface : démarrage, transitions, curseur, palette, contact terminal, radar GitHub */
(() => {
  const root = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const isCalm = () => root.classList.contains("calm");
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };

  const MAIL = "suis.neyor@gmail.com";
  const GITHUB = "https://github.com/neyordev";
  const LINKEDIN = "https://www.linkedin.com/in/mylan-perrier-57364732b/";
  const AVAILABLE = t("Alternant chez Electronique du Mazet · ouvert aux collaborations");

  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#<>/_";
  function scramble(node, text, frames = 18) {
    clearInterval(node._t);
    let frame = 0;
    node._t = setInterval(() => {
      frame++;
      const keep = Math.floor((frame / frames) * text.length);
      node.textContent = [...text]
        .map((ch, i) => (i < keep || ch === " " ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
        .join("");
      if (frame >= frames) {
        clearInterval(node._t);
        node.textContent = text;
      }
    }, 32);
  }

  /* ---------- Lien d'évitement ---------- */
  const skip = el("a", "skip", t("Aller au contenu"));
  skip.href = "#main";
  document.body.prepend(skip);

  /* ---------- Écran de démarrage (une fois par session) ---------- */
  (function boot() {
    if (!root.classList.contains("boot")) return;
    const screen = el("div", "bootscreen");
    screen.setAttribute("role", "status");
    const pre = el("pre");
    const bar = el("div", "bootbar");
    const fill = el("i");
    bar.append(fill);
    screen.append(pre, bar, el("p", "boothint", t("appuie sur une touche pour passer")));
    document.body.append(screen);

    const lines = [
      "neyor.os v1.0",
      t("chargement du noyau ........ OK"),
      t("réseau github.com/neyordev .. OK"),
      t("projets ..................... OK"),
      t("interface ................... OK"),
      t("bienvenue."),
    ];
    const STEP = 450;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      try {
        sessionStorage.setItem("boot", "1");
      } catch {}
      screen.classList.add("out");
      root.classList.remove("boot");
      setTimeout(() => screen.remove(), 800);
    };
    const typeLine = (text, cls) => {
      const span = el("span", cls);
      pre.append(span, document.createTextNode("\n"));
      let i = 0;
      const t = setInterval(() => {
        if (done) return clearInterval(t);
        span.textContent = text.slice(0, ++i);
        if (i >= text.length) clearInterval(t);
      }, 14);
    };
    lines.forEach((text, i) =>
      setTimeout(() => {
        if (done) return;
        typeLine(text, i === lines.length - 1 ? "hi" : "");
        fill.style.width = `${((i + 1) / lines.length) * 100}%`;
      }, 350 + i * STEP)
    );
    setTimeout(finish, 350 + lines.length * STEP + 800);
    screen.addEventListener("click", finish);
    const onKey = (e) => {
      if (/^(Control|Shift|Alt|Meta)$/.test(e.key)) return;
      removeEventListener("keydown", onKey);
      finish();
    };
    setTimeout(() => addEventListener("keydown", onKey), 900);
  })();

  /* ---------- Transitions de pages ---------- */
  const makeWipe = () => {
    const w = el("div", "wipe");
    w.append(el("span", "", "neyor"));
    document.body.append(w);
    return w;
  };
  function navigate(url) {
    if (isCalm()) {
      location.href = url;
      return;
    }
    makeWipe().classList.add("in");
    try {
      sessionStorage.setItem("wipe", "1");
    } catch {}
    setTimeout(() => (location.href = url), 480);
  }
  try {
    if (sessionStorage.getItem("wipe") === "1") {
      sessionStorage.removeItem("wipe");
      if (!root.classList.contains("boot") && !isCalm()) {
        const w = makeWipe();
        w.classList.add("out");
        w.addEventListener("animationend", () => w.remove());
      }
    }
  } catch {}
  root.classList.remove("wipe");
  addEventListener("pageshow", (e) => {
    if (e.persisted) $$(".wipe").forEach((w) => w.remove());
  });
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest?.("a[href]");
    if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin || u.pathname === location.pathname) return;
    e.preventDefault();
    navigate(u.href);
  });

  /* ---------- Curseur personnalisé ---------- */
  (function cursor() {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    root.classList.add("cc");
    const ring = el("div", "cursor-ring hide");
    const dot = el("div", "cursor-dot hide");
    document.body.append(ring, dot);
    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    document.addEventListener("pointermove", (e) => {
      x = e.clientX;
      y = e.clientY;
      if (ring.classList.contains("hide")) {
        rx = x;
        ry = y;
      }
      dot.style.transform = `translate(${x}px, ${y}px)`;
      const hot = e.target.closest?.("a, button, [role=button], input, textarea, select, label, .interest, .project");
      ring.classList.toggle("hover", !!hot);
      ring.classList.remove("hide");
      dot.classList.remove("hide");
    });
    document.addEventListener("pointerdown", () => ring.classList.add("down"));
    document.addEventListener("pointerup", () => ring.classList.remove("down"));
    root.addEventListener("mouseleave", () => {
      ring.classList.add("hide");
      dot.classList.add("hide");
    });
    /* Rattrapage indépendant du nombre d'images par seconde : constante de temps d'environ 22 ms */
    let prev = performance.now();
    (function loop(now) {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      const k = 1 - Math.exp(-dt * 45);
      rx += (x - rx) * k;
      ry += (y - ry) * k;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    })(prev);
  })();

  /* ---------- Décodage des titres de section ---------- */
  (function decode() {
    const targets = $$(".head h2, .contact h2");
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          if (!isCalm()) scramble(e.target, e.target.dataset.t);
        }),
      { threshold: 0.15 }
    );
    targets.forEach((t) => {
      t.dataset.t = t.textContent;
      t.setAttribute("aria-label", t.textContent);
      io.observe(t);
    });
  })();

  /* ---------- Mode calme (animations réduites) ---------- */
  function setCalm(on) {
    root.classList.toggle("calm", on);
    try {
      localStorage.setItem("calm", on ? "1" : "0");
    } catch {}
  }

  /* ---------- Fenêtres (palette et contact) ---------- */
  function modal(label) {
    const wrap = el("div", "palette");
    wrap.hidden = true;
    const box = el("div", "palette-box");
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", label);
    wrap.append(box);
    document.body.append(wrap);
    let back = null;
    return {
      wrap,
      box,
      open() {
        back = document.activeElement;
        wrap.hidden = false;
        root.classList.add("lock");
      },
      close() {
        wrap.hidden = true;
        root.classList.remove("lock");
        if (back && back.focus) back.focus({ preventScroll: true });
      },
      get isOpen() {
        return !wrap.hidden;
      },
    };
  }

  /* ---------- Contact en mode terminal ---------- */
  const wz = modal(t("Écrire un message"));
  wz.wrap.classList.add("wizard");
  const wzBar = el("div", "palette-bar");
  wzBar.append(el("span", "", "neyor@contact:~$ ./message"), el("span", "", t("Échap pour quitter")));
  const wzOut = el("div", "wz-out");
  wzOut.setAttribute("role", "log");
  wzOut.setAttribute("aria-live", "polite");
  const wzForm = el("form", "wz-form");
  const wzIn = el("input");
  wzIn.type = "text";
  wzIn.autocomplete = "off";
  wzIn.spellcheck = false;
  wzIn.setAttribute("aria-label", t("Ta réponse"));
  wzForm.append(el("span", "wz-prompt", "›"), wzIn);
  wz.box.append(wzBar, wzOut, wzForm);

  const STEPS = [
    { k: "nom", q: t("Comment t'appelles-tu ?") },
    { k: "email", q: t("Quelle est ton adresse e-mail ?"), ok: /^\S+@\S+\.\S+$/ },
    { k: "message", q: t("Ton message ?") },
  ];
  let wzStep = 0;
  let wzData = {};
  let wzConfirm = false;
  const wzLine = (text, cls = "") => {
    wzOut.append(el("div", cls, text));
    wzOut.scrollTop = wzOut.scrollHeight;
  };
  function startWizard() {
    wzOut.replaceChildren();
    wzStep = 0;
    wzData = {};
    wzConfirm = false;
    wz.open();
    wzLine(t("Je prépare un e-mail pour toi. Trois questions."), "dim");
    wzLine(STEPS[0].q, "ask");
    wzIn.value = "";
    setTimeout(() => wzIn.focus(), 30);
  }
  wzForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = wzIn.value.trim();
    if (wzConfirm) {
      const subject = t("Contact portfolio — {name}", { name: wzData.nom });
      const body = `${wzData.message}\n\n${wzData.nom} (${wzData.email})`;
      location.href = `mailto:${MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      wzLine(t("Ton application mail s'ouvre. Merci !"), "ok");
      wzIn.value = "";
      return;
    }
    if (!val) return;
    const step = STEPS[wzStep];
    if (step.ok && !step.ok.test(val)) {
      wzLine(t("Ça ne ressemble pas à une adresse e-mail, réessaie."), "err");
      return;
    }
    wzData[step.k] = val;
    wzLine(`› ${val}`, "me");
    wzIn.value = "";
    wzStep++;
    if (wzStep < STEPS.length) wzLine(STEPS[wzStep].q, "ask");
    else {
      wzConfirm = true;
      wzLine(t("Parfait. Appuie sur Entrée pour ouvrir ton application mail, ou Échap pour annuler."), "ask");
    }
  });
  wz.wrap.addEventListener("click", (e) => {
    if (e.target === wz.wrap) wz.close();
  });
  wz.wrap.addEventListener("keydown", (e) => {
    if (e.key === "Escape") wz.close();
  });

  /* ---------- Palette de commandes (Ctrl+K) ---------- */
  const pal = modal(t("Palette de commandes"));
  const palIn = el("input", "palette-in");
  palIn.type = "text";
  palIn.placeholder = t("Aller à, ouvrir, chercher…");
  palIn.setAttribute("role", "combobox");
  palIn.setAttribute("aria-expanded", "true");
  palIn.setAttribute("aria-controls", "palette-list");
  palIn.setAttribute("aria-label", t("Rechercher une commande"));
  palIn.autocomplete = "off";
  palIn.spellcheck = false;
  const palList = el("ul", "palette-list");
  palList.id = "palette-list";
  palList.setAttribute("role", "listbox");
  const palFoot = el("p", "palette-foot", t("↑↓ naviguer · Entrée valider · Échap fermer"));
  pal.box.append(palIn, palList, palFoot);

  const external = (url) => window.open(url, "_blank", "noopener");
  const PAGES = [
    ["Accueil", "index.html", "home"],
    ["Projets", "projets.html", "projects github"],
    ["Compétences", "competences.html", "skills stack technos"],
    ["À propos", "apropos.html", "about parcours formation"],
    ["CV", "cv.html", "resume curriculum"],
    ["Téléchargements", "downloads.html", "download telecharger release installateur exe npm"],
  ];
  const DOWNLOADS = [
    ["J.A.R.V.I.S", "jarvis", "assistant vocal ia installateur exe"],
    ["RL Session Stats", "rlss", "rocket league overlay installateur portable exe"],
    ["ModShift", "modshift", "minecraft modpack npm"],
  ];
  const REPOS = [
    ["J.A.R.V.I.S", "assistant vocal ia python"],
    ["ModShift", "minecraft modpacks typescript"],
    ["rl-session-stats", "rocket league rust tauri"],
    ["RentPark", "parking php blazor kotlin"],
    ["Dragon-Mounts-Legacy", "fork minecraft mod java"],
  ];
  const commands = () => [
    ...PAGES.map(([label, href, kw]) => ({ group: t("Page"), label: t(label), kw, run: () => navigate(href) })),
    ...REPOS.map(([label, kw]) => ({
      group: t("Projet"),
      label,
      kw,
      run: () => external(`${GITHUB}/${encodeURIComponent(label)}`),
    })),
    ...DOWNLOADS.map(([label, id, kw]) => ({
      group: t("Téléchargement"),
      label: t("Télécharger {name}", { name: label }),
      kw: `${kw} download release`,
      run: () => navigate(`downloads.html#dl-${id}`),
    })),
    { group: t("Action"), label: t("Écrire un message"), kw: "contact mail terminal write", run: startWizard },
    { group: t("Action"), label: t("Télécharger le CV (PDF)"), kw: "cv pdf imprimer print", run: () => navigate("cv.html?print") },
    { group: t("Lien"), label: "GitHub", kw: "code", run: () => external(GITHUB) },
    { group: t("Lien"), label: "LinkedIn", kw: "pro", run: () => external(LINKEDIN) },
    { group: t("Lien"), label: t("Envoyer un mail à {mail}", { mail: MAIL }), kw: "email contact", run: () => (location.href = `mailto:${MAIL}`) },
    {
      group: t("Réglage"),
      label: isCalm() ? t("Activer les animations") : t("Réduire les animations"),
      kw: "calme accessibilité mouvement calm accessibility motion animations",
      run: () => setCalm(!isCalm()),
    },
    { group: t("Réglage"), label: I18N.lang === "en" ? "Passer en français" : "Switch to English", kw: "langue language english français fr en", run: () => I18N.setLang(I18N.lang === "en" ? "fr" : "en") },
    { group: t("Action"), label: t("Remonter en haut de page"), kw: "top haut", run: () => scrollTo({ top: 0, behavior: "smooth" }) },
  ];

  let shown = [];
  let sel = 0;
  function renderPalette() {
    const q = norm(palIn.value).split(/\s+/).filter(Boolean);
    shown = commands().filter((c) => {
      const hay = norm(`${c.label} ${c.kw} ${c.group}`);
      return q.every((t) => hay.includes(t));
    });
    sel = Math.min(sel, Math.max(0, shown.length - 1));
    palList.replaceChildren(
      ...shown.map((c, i) => {
        const li = el("li", i === sel ? "sel" : "");
        li.setAttribute("role", "option");
        li.id = `pc-${i}`;
        li.setAttribute("aria-selected", String(i === sel));
        li.append(el("span", "", c.label), el("em", "", c.group));
        li.addEventListener("pointermove", () => {
          if (sel !== i) {
            sel = i;
            renderPalette();
          }
        });
        li.addEventListener("click", () => runSelected(i));
        return li;
      })
    );
    if (!shown.length) palList.append(el("li", "none", t("Aucun résultat")));
    palIn.setAttribute("aria-activedescendant", shown.length ? `pc-${sel}` : "");
  }
  function runSelected(i = sel) {
    const c = shown[i];
    if (!c) return;
    pal.close();
    setTimeout(c.run, 30);
  }
  function openPalette() {
    pal.open();
    palIn.value = "";
    sel = 0;
    renderPalette();
    setTimeout(() => palIn.focus(), 30);
  }
  palIn.addEventListener("input", () => {
    sel = 0;
    renderPalette();
  });
  palIn.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + shown.length) % (shown.length || 1);
      renderPalette();
      $(".sel", palList)?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      e.preventDefault();
      runSelected();
    } else if (e.key === "Escape") pal.close();
  });
  pal.wrap.addEventListener("click", (e) => {
    if (e.target === pal.wrap) pal.close();
  });

  addEventListener("keydown", (e) => {
    const typing = e.target.closest?.("input, textarea, [contenteditable]");
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (wz.isOpen) return;
      pal.isOpen ? pal.close() : openPalette();
    } else if (e.key === "/" && !typing && !pal.isOpen && !wz.isOpen && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      openPalette();
    }
  });

  const bar = $(".topbar");
  const navbtn = $(".navbtn");
  if (bar && navbtn) {
    const cmd = el("button", "cmdbtn");
    cmd.type = "button";
    cmd.setAttribute("aria-label", t("Ouvrir la palette de commandes"));
    cmd.append(el("span", "", "⌕"), el("kbd", "", "Ctrl K"));
    cmd.addEventListener("click", openPalette);
    bar.insertBefore(cmd, navbtn);
    const langBtn = el("button", "langbtn");
    langBtn.type = "button";
    langBtn.setAttribute("aria-label", t("Changer de langue"));
    ["FR", "EN"].forEach((l) => langBtn.append(el("span", I18N.lang === l.toLowerCase() ? "on" : "", l)));
    langBtn.addEventListener("click", () => I18N.setLang(I18N.lang === "en" ? "fr" : "en"));
    bar.insertBefore(langBtn, cmd);
  }
  const hint = $(".menu-foot span");
  if (hint) hint.textContent += ` ${t("· Ctrl+K palette")}`;

  /* ---------- Bandeau contact : disponibilité et formulaire terminal ---------- */
  $$(".contact").forEach((c) => {
    const avail = el("p", "avail");
    avail.append(el("span", "led"), AVAILABLE);
    const lede = $(".lede", c);
    (lede || c.firstElementChild).after(avail);
    const write = el("button", "btn", t("Écrire en mode terminal"));
    write.type = "button";
    write.addEventListener("click", startWizard);
    const links = $(".links", c);
    if (links) links.after(write);
    else c.append(write);
  });

  /* ---------- Cartes projets : visuels animés et infos en direct ---------- */
  const bars = (n) =>
    Array.from({ length: n }, (_, i) => `<rect class="b" style="--i:${i}" x="${20 + i * 22}" y="40" width="12" height="100" rx="2"/>`).join("");
  const ART = {
    voice: `<svg viewBox="0 0 320 180" aria-hidden="true"><circle class="pulse" cx="160" cy="90" r="40"/><circle class="pulse p2" cx="160" cy="90" r="40"/>${Array.from(
      { length: 11 },
      (_, i) => `<rect class="wv" style="--i:${i}" x="${70 + i * 18}" y="60" width="8" height="60" rx="4"/>`
    ).join("")}</svg>`,
    blocks: `<svg viewBox="0 0 320 180" aria-hidden="true"><g class="old"><rect x="40" y="50" width="60" height="60"/><rect x="70" y="80" width="60" height="60"/></g><path class="arrow" d="M140 90h40m-12-12 12 12-12 12"/><g class="new"><rect x="200" y="50" width="60" height="60"/><rect x="230" y="80" width="60" height="60"/></g></svg>`,
    bars: `<svg viewBox="0 0 320 180" aria-hidden="true"><g transform="translate(30 20)">${bars(11)}</g><path class="trend" d="M30 130 90 100 140 112 200 70 250 80 300 40"/></svg>`,
    grid: `<svg viewBox="0 0 320 180" aria-hidden="true">${[0, 1, 2, 3]
      .flatMap((c) =>
        [0, 1].map(
          (r) => `<rect class="slot${c === 2 && r === 1 ? " me" : ""}" x="${40 + c * 62}" y="${35 + r * 62}" width="50" height="50" rx="4"/>`
        )
      )
      .join("")}<text x="189" y="122" class="park" text-anchor="middle" dominant-baseline="central">P</text></svg>`,
  };
  ART.cube = `<svg viewBox="0 0 320 180" aria-hidden="true"><g class="iso"><path d="M160 18 232 58 232 128 160 168 88 128 88 58Z"/><path d="M160 18 232 58 160 98 88 58Z"/><path d="M160 98 160 168"/></g></svg>`;
  ART.code = `<svg viewBox="0 0 320 180" aria-hidden="true"><path class="br" d="M110 55 60 90 110 125"/><path class="br" d="M210 55 260 90 210 125"/><path class="sl" d="M175 50 145 130"/></svg>`;
  $$(".project[data-repo]").forEach((card) => {
    const shot = $(".shot", card);
    if (!shot) return;
    const art = el("div", "art");
    art.innerHTML = ART[card.dataset.art] || "";
    shot.prepend(art);
    shot.append(el("p", "live", t("connexion à GitHub…")));
    const hud = el("div", "hud");
    hud.append(el("i"), el("i"), el("i"), el("i"));
    shot.append(hud);
  });
  const fmt = (iso) => new Date(iso).toLocaleDateString(I18N.locale, { day: "numeric", month: "short", year: "numeric" });
  document.addEventListener("repos", (e) => {
    const repos = e.detail;
    $$(".project[data-repo]").forEach((card) => {
      const live = $(".live", card);
      const r = repos.find((x) => x.name === card.dataset.repo);
      if (live && r)
        live.textContent = `${r.language || "—"} · ★ ${r.stargazers_count} · push ${fmt(r.pushed_at)}`;
    });
    radar(repos);
  });

  /* ---------- Radar GitHub ---------- */
  function radar(repos) {
    const svg = $("#donut");
    if (!svg) return;
    const counts = {};
    repos.forEach((r) => {
      if (r.language && r.language !== "CSS") counts[r.language] = (counts[r.language] || 0) + 1;
    });
    const langs = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const total = langs.reduce((n, [, c]) => n + c, 0);
    const COLORS = ["#d11919", "#b74b4b", "#e8a0a0", "#8a2f2f", "#ff6b6b", "#6b2222", "#c97b7b"];
    const R = 80;
    const C = 2 * Math.PI * R;
    const NS = "http://www.w3.org/2000/svg";
    const num = $("#donut-n");
    const lab = $("#donut-l");
    const legend = $("#legend");
    svg.replaceChildren();
    legend.replaceChildren();
    const rest = () => {
      num.textContent = total;
      lab.textContent = t("dépôts par langage");
    };
    rest();
    let acc = 0;
    const arcs = [];
    langs.forEach(([name, count], i) => {
      const len = (count / total) * C;
      const c = document.createElementNS(NS, "circle");
      c.setAttribute("cx", 100);
      c.setAttribute("cy", 100);
      c.setAttribute("r", R);
      c.setAttribute("class", "arc");
      c.style.stroke = COLORS[i % COLORS.length];
      c.setAttribute("stroke-dasharray", `0 ${C}`);
      c.setAttribute("stroke-dashoffset", -acc);
      svg.append(c);
      const target = `${Math.max(len - 3, 1)} ${C - Math.max(len - 3, 1)}`;
      setTimeout(() => c.setAttribute("stroke-dasharray", target), 120 + i * 120);
      acc += len;
      arcs.push(c);

      const li = el("li");
      const b = el("button");
      b.type = "button";
      const sw = el("i");
      sw.style.background = COLORS[i % COLORS.length];
      b.append(sw, el("span", "", name), el("em", "", `${count} · ${Math.round((count / total) * 100)} %`));
      const on = () => {
        arcs.forEach((a, k) => a.classList.toggle("dim", k !== i));
        num.textContent = count;
        lab.textContent = name;
      };
      const off = () => {
        arcs.forEach((a) => a.classList.remove("dim"));
        rest();
      };
      b.addEventListener("pointerenter", on);
      b.addEventListener("focus", on);
      b.addEventListener("pointerleave", off);
      b.addEventListener("blur", off);
      li.append(b);
      legend.append(li);
    });

    const log = $("#log");
    if (log) {
      log.replaceChildren(
        ...[...repos]
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, 6)
          .map((r) => {
            const row = el("div", "logrow");
            row.append(el("time", "", fmt(r.pushed_at)), el("span", "", "push"), el("b", "", r.name));
            return row;
          })
      );
    }
  }

  /* ---------- CV : impression directe ---------- */
  const styleBtns = $$("[data-cvstyle]");
  if (styleBtns.length) {
    let saved = "light";
    try {
      saved = localStorage.getItem("cvstyle") || "light";
    } catch {}
    const apply = (v) => {
      root.classList.toggle("print-dark", v === "dark");
      styleBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cvstyle === v)));
      try {
        localStorage.setItem("cvstyle", v);
      } catch {}
    };
    styleBtns.forEach((b) => b.addEventListener("click", () => apply(b.dataset.cvstyle)));
    apply(saved);
  }
  const printBtn = $("[data-print]");
  if (printBtn) printBtn.addEventListener("click", () => print());
  if (location.search.includes("print") && $(".cv")) setTimeout(() => print(), 700);
})();

/* Survol des cartes projets pendant le défilement : le navigateur ne recalcule :hover qu'au mouvement de la souris */
(() => {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const SEL = ".project";
  let x = -1;
  let y = -1;
  let current = null;
  let queued = false;

  const set = (card) => {
    if (card === current) return;
    if (current) current.classList.remove("is-hover");
    current = card;
    if (current) current.classList.add("is-hover");
  };
  const update = () => {
    queued = false;
    if (x < 0) return;
    const top = document.elementFromPoint(x, y);
    set(top && top.closest ? top.closest(SEL) : null);
  };
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  document.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      schedule();
    },
    { passive: true }
  );
  addEventListener("scroll", schedule, { passive: true });
  document.documentElement.addEventListener("mouseleave", () => {
    x = y = -1;
    set(null);
  });
})();
