/* Page Téléchargements : releases GitHub en direct, fenêtre de téléchargement, radar, filtres */
(() => {
  const root = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };
  const isCalm = () => root.classList.contains("calm");
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  const USER = "neyordev";
  const REPOS = ["J.A.R.V.I.S", "rl-session-stats", "ModShift", "RentPark", "Dragon-Mounts-Legacy"];
  const COLORS = { jarvis: "#d11919", rlss: "#f0a4a4", modshift: "#ff6b6b" };
  const SHORT = { jarvis: "JARVIS", rlss: "RLSS", modshift: "ModShift" };

  /* ---------- Formats ---------- */
  const fmtSize = (b) => {
    if (b < 1024) return `${b} ${t("o")}`;
    if (b < 1048576) return `${Math.round(b / 1024)} ${t("Ko")}`;
    const mb = (b / 1048576).toFixed(1);
    return `${I18N.lang === "fr" ? mb.replace(".", ",") : mb} ${t("Mo")}`;
  };
  const fmtDate = (iso) => new Date(iso).toLocaleDateString(I18N.locale, { day: "numeric", month: "short", year: "numeric" });
  const fmtDateTime = (iso) =>
    new Date(iso).toLocaleString(I18N.locale, { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  const rel = (iso) => {
    const s = Math.max(0, (Date.now() - new Date(iso)) / 1000);
    if (s < 60) return t("à l'instant");
    if (s < 3600) return t("il y a {n} min", { n: Math.floor(s / 60) });
    if (s < 86400) return t("il y a {n} h", { n: Math.floor(s / 3600) });
    if (s < 86400 * 30) return t("il y a {n} j", { n: Math.floor(s / 86400) });
    return t("il y a {n} mois", { n: Math.floor(s / (86400 * 30)) });
  };
  const plural = (n, one, many) => tp(n, one, many);
  const kindOf = (name) =>
    /portable/i.test(name) ? "Portable"
    : /(setup|install)/i.test(name) ? "Installateur"
    : /\.tgz$/i.test(name) ? "Paquet npm"
    : /\.(zip|7z)$/i.test(name) ? "Archive"
    : /\.jar$/i.test(name) ? "Mod (.jar)"
    : "Fichier";
  const ICONS = { Installateur: "⬇", Portable: "▣", "Paquet npm": "◈", Archive: "▤", "Mod (.jar)": "◆", Fichier: "▪" };

  function countUp(node, target) {
    if (isCalm() || target === 0) {
      node.textContent = target;
      return;
    }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / 1100, 1);
      node.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Toast et copie ---------- */
  function toast(text) {
    const t = el("div", "toast", text);
    t.setAttribute("role", "status");
    document.body.append(t);
    requestAnimationFrame(() => t.classList.add("in"));
    setTimeout(() => {
      t.classList.remove("in");
      setTimeout(() => t.remove(), 400);
    }, 2200);
  }
  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = el("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.append(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      ta.remove();
    }
  }
  document.addEventListener("click", async (e) => {
    const b = e.target.closest?.("[data-copy]");
    if (!b) return;
    const text = b.dataset.copy;
    await copy(text);
    const old = b.textContent;
    b.textContent = t("Copié ✓");
    b.classList.add("done");
    toast(text.length > 60 ? t("Copié dans le presse-papiers") : t("Copié : {text}", { text }));
    setTimeout(() => {
      b.textContent = old;
      b.classList.remove("done");
    }, 1600);
  });

  /* ---------- Notes de version (Markdown simplifié) ---------- */
  function inline(text) {
    const frag = document.createDocumentFragment();
    const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\(https?:[^)\s]+\)|\*[^*\s][^*]*\*)/g;
    let last = 0;
    let m;
    while ((m = re.exec(text))) {
      if (m.index > last) frag.append(text.slice(last, m.index));
      const t = m[0];
      if (t.startsWith("**")) frag.append(el("strong", "", t.slice(2, -2)));
      else if (t.startsWith("`")) frag.append(el("code", "", t.slice(1, -1)));
      else if (t.startsWith("[")) {
        const mm = /\[([^\]]+)\]\((https?:[^)\s]+)\)/.exec(t);
        const a = el("a", "", mm[1]);
        a.href = mm[2];
        a.target = "_blank";
        a.rel = "noopener";
        frag.append(a);
      } else frag.append(el("em", "", t.slice(1, -1)));
      last = m.index + t.length;
    }
    if (last < text.length) frag.append(text.slice(last));
    return frag;
  }
  function md(src, target) {
    target.replaceChildren();
    let list = null;
    let quote = null;
    let para = [];
    const flush = () => {
      if (!para.length) return;
      const p = el("p");
      p.append(inline(para.join(" ")));
      target.append(p);
      para = [];
    };
    for (const raw of src.replace(/\r/g, "").split("\n")) {
      const line = raw.trimEnd();
      if (!line.trim()) {
        flush();
        list = null;
        quote = null;
        continue;
      }
      let m;
      if ((m = /^#{1,6}\s+(.*)$/.exec(line))) {
        flush();
        list = null;
        const h = el("h4");
        h.append(inline(m[1]));
        target.append(h);
      } else if ((m = /^\s*[-*]\s+(.*)$/.exec(line))) {
        flush();
        if (!list || list.tagName !== "UL") {
          list = el("ul");
          target.append(list);
        }
        const li = el("li");
        li.append(inline(m[1]));
        list.append(li);
      } else if ((m = /^\s*\d+\.\s+(.*)$/.exec(line))) {
        flush();
        if (!list || list.tagName !== "OL") {
          list = el("ol");
          target.append(list);
        }
        const li = el("li");
        li.append(inline(m[1]));
        list.append(li);
      } else if ((m = /^>\s?(.*)$/.exec(line))) {
        flush();
        list = null;
        if (!quote) {
          quote = el("blockquote");
          target.append(quote);
        }
        const p = el("p");
        p.append(inline(m[1]));
        quote.append(p);
      } else {
        list = null;
        quote = null;
        para.push(line.trim());
      }
    }
    flush();
  }

  /* ---------- Données ---------- */
  const normRelease = (x) => ({
    tag: x.tag_name,
    name: x.name || x.tag_name,
    date: x.published_at,
    pre: !!x.prerelease,
    url: x.html_url,
    body: x.body || "",
    assets: (x.assets || []).map((a) => ({
      name: a.name,
      size: a.size,
      dl: a.download_count,
      sha: (a.digest || "").replace("sha256:", ""),
      url: a.browser_download_url,
    })),
  });
  async function loadData() {
    try {
      const c = JSON.parse(sessionStorage.getItem("dl-cache") || "null");
      if (c && Date.now() - c.t < 600000) return { data: c.data, live: true };
    } catch {}
    try {
      const all = await Promise.all(
        REPOS.map(async (r) => {
          const res = await fetch(`https://api.github.com/repos/${USER}/${encodeURIComponent(r)}/releases?per_page=30`);
          if (!res.ok) throw new Error(res.status);
          const list = await res.json();
          return [r, list.filter((x) => !x.draft).map(normRelease)];
        })
      );
      const data = Object.fromEntries(all);
      try {
        sessionStorage.setItem("dl-cache", JSON.stringify({ t: Date.now(), data }));
      } catch {}
      return { data, live: true };
    } catch {
      const snap = window.DL_SNAPSHOT;
      return {
        data: Object.fromEntries(REPOS.map((r) => [r, (snap && snap.releases && snap.releases[r]) || []])),
        live: false,
        at: snap && snap.generatedAt,
      };
    }
  }

  /* ---------- Détection du système ---------- */
  (function detectOS() {
    const ua = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || navigator.userAgent;
    const full = `${ua} ${navigator.userAgent}`;
    const os = /iphone|ipad|ios/i.test(full) ? "iOS"
      : /android/i.test(full) ? "Android"
      : /win/i.test(full) ? "Windows"
      : /mac/i.test(full) ? "macOS"
      : /linux|x11/i.test(full) ? "Linux"
      : t("inconnu");
    const chip = $("#os-chip");
    const ok = os === "Windows";
    chip.replaceChildren(el("span", "led"), ok ? t("Windows détecté · mes installateurs sont compatibles") : t("{os} détecté · mes installateurs sont pour Windows, le code source reste disponible", { os }));
    chip.classList.toggle("warn", !ok);
    root.dataset.os = os;
  })();

  /* ---------- Cartes ---------- */
  const cards = $$(".dl-card");
  const state = { f: "all", q: "", sort: "recent" };

  function assetRow(a, recommended, project) {
    const kind = kindOf(a.name);
    const row = el("div", `asset${recommended ? " rec" : ""}`);
    row.append(el("div", "aicon", ICONS[kind] || "▪"));
    const info = el("div", "ainfo");
    info.append(el("b", "aname", a.name));
    const ext = (a.name.split(".").pop() || "").toLowerCase();
    info.append(el("small", "", `${t(kind)} · .${ext} · ${fmtSize(a.size)} · ${plural(a.dl, "téléchargement", "téléchargements")}`));
    if (a.sha) {
      const sha = el("div", "sha");
      sha.append(el("span", "", "SHA-256"), el("code", "", `${a.sha.slice(0, 10)}…${a.sha.slice(-8)}`));
      const b = el("button", "copy", t("Copier"));
      b.type = "button";
      b.dataset.copy = a.sha;
      b.setAttribute("aria-label", `Copier l'empreinte SHA-256 de ${a.name}`);
      sha.append(b);
      info.append(sha);
    }
    row.append(info);
    const btn = el("a", "dl-btn", t("Télécharger"));
    btn.href = a.url;
    btn.dataset.dl = "";
    Object.assign(btn.dataset, { name: a.name, size: fmtSize(a.size), sha: a.sha, kind, project, url: a.url });
    row.append(btn);
    return row;
  }

  function renderCard(card, releases) {
    const ver = $("[data-ver]", card);
    const main = $("[data-main]", card);
    const repo = card.dataset.repo;
    const name = card.dataset.name;
    main.replaceChildren();

    if (!releases.length) {
      ver.textContent = t("Sources");
      ver.classList.add("src");
      card.dataset.date = 0;
      card.dataset.dl = 0;
      main.append(el("p", "dl-none", t("Pas de release publiée pour l'instant : ce projet se récupère via son code source.")));
      const zip = el("a", "dl-btn", t("Télécharger le code source"));
      zip.href = `https://github.com/${USER}/${repo}/archive/HEAD.zip`;
      zip.dataset.dl = "";
      Object.assign(zip.dataset, { name: `${repo}-main.zip`, size: "", sha: "", kind: "Code source", project: name, url: zip.href });
      main.append(zip);
      return;
    }

    const list = [...releases].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latest = list[0];
    ver.textContent = latest.tag;
    const total = list.reduce((n, r) => n + r.assets.reduce((m, a) => m + a.dl, 0), 0);
    card.dataset.date = +new Date(latest.date);
    card.dataset.dl = total;

    const meta = el("div", "dl-meta");
    meta.append(el("span", "pill", latest.pre ? t("Préversion") : t("Dernière version")));
    const time = el("time", "", `${rel(latest.date)} · ${fmtDate(latest.date)}`);
    time.dateTime = latest.date;
    time.title = fmtDateTime(latest.date);
    meta.append(time, el("span", "dim", `${plural(list.length, "version", "versions")} · ${plural(total, "téléchargement", "téléchargements")}`));
    main.append(meta);

    const rec = latest.assets.findIndex((a) => /(setup|install)/i.test(a.name));
    latest.assets.forEach((a, i) => main.append(assetRow(a, i === (rec >= 0 ? rec : 0), name)));
    if (!latest.assets.length) main.append(el("p", "dl-none", t("Cette release ne contient pas de fichier : voir le code source.")));

    if (card.dataset.kinds.includes("npm")) {
      const cmd = el("div", "cmd");
      cmd.append(el("code", "", "npm install --global modshift"));
      const b = el("button", "copy", t("Copier"));
      b.type = "button";
      b.dataset.copy = "npm install --global modshift";
      cmd.append(b);
      main.append(el("p", "note", t("Ou directement depuis npm :")), cmd);
    }

    if (latest.body.trim()) {
      md(latest.body, $("[data-md]", card));
      $("[data-notes]", card).hidden = false;
    }

    if (list.length > 1) {
      const hist = $("[data-hist]", card);
      hist.hidden = false;
      $("[data-hist-sum]", card).textContent = t("Historique · {n}", { n: plural(list.length, "version", "versions") });
      const ol = $("[data-hist-list]", card);
      ol.replaceChildren(
        ...list.map((r, i) => {
          const li = el("li");
          const d = el("details");
          const s = el("summary");
          s.append(el("b", "", r.tag), el("span", "vname", r.name.replace(new RegExp(`^${name}\\s*`, "i"), "")), el("time", "", fmtDate(r.date)));
          if (i === 0) s.append(el("span", "pill", t("dernière")));
          d.append(s);
          const body = el("div", "vbody");
          r.assets.forEach((a) => {
            const line = el("div", "vasset");
            const link = el("a", "", a.name);
            link.href = a.url;
            link.dataset.dl = "";
            Object.assign(link.dataset, { name: a.name, size: fmtSize(a.size), sha: a.sha, kind: kindOf(a.name), project: name, url: a.url });
            line.append(link, el("small", "", `${fmtSize(a.size)} · ${plural(a.dl, "téléchargement", "téléchargements")}`));
            body.append(line);
          });
          const notes = el("div", "md");
          if (r.body.trim()) md(r.body, notes);
          body.append(notes);
          const gh = el("a", "link", t("Page de la release ↗"));
          gh.href = r.url;
          gh.target = "_blank";
          gh.rel = "noopener";
          body.append(gh);
          d.append(body);
          li.append(d);
          return li;
        })
      );
    }
  }

  /* ---------- Fenêtre de téléchargement ---------- */
  let boost = 0;
  const dlm = (() => {
    const wrap = el("div", "palette dlm");
    wrap.hidden = true;
    const box = el("div", "palette-box dlm-box");
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", t("Téléchargement"));
    const bar = el("div", "palette-bar");
    bar.append(el("span", "", "neyor@downloads:~$ fetch"));
    const close = el("button", "dlm-x", "✕");
    close.type = "button";
    close.setAttribute("aria-label", t("Fermer"));
    bar.append(close);

    const body = el("div", "dlm-body");
    const ring = el("div", "dlm-ring");
    ring.innerHTML =
      '<svg viewBox="0 0 120 120" aria-hidden="true"><circle class="trk" cx="60" cy="60" r="52"/><circle class="prg" cx="60" cy="60" r="52"/></svg>';
    const pct = el("b", "", "0%");
    ring.append(pct);
    const info = el("div", "dlm-info");
    const title = el("h3");
    const meta = el("p", "dlm-meta");
    const sha = el("div", "dlm-sha");
    const steps = el("ol", "dlm-steps");
    info.append(title, meta, sha, steps);
    body.append(ring, info);
    const tips = el("div", "dlm-tips");
    const actions = el("div", "dlm-actions");
    const again = el("a", "btn primary", t("Relancer le téléchargement"));
    const dismiss = el("button", "btn", t("Fermer"));
    dismiss.type = "button";
    actions.append(again, dismiss);
    box.append(bar, body, tips, actions);
    wrap.append(box);
    document.body.append(wrap);

    let timers = [];
    let raf = 0;
    let back = null;
    const stop = () => {
      timers.forEach(clearTimeout);
      timers = [];
      cancelAnimationFrame(raf);
    };
    const closeAll = () => {
      stop();
      wrap.hidden = true;
      root.classList.remove("lock");
      if (back && back.focus) back.focus({ preventScroll: true });
    };
    close.addEventListener("click", closeAll);
    dismiss.addEventListener("click", closeAll);
    wrap.addEventListener("click", (e) => {
      if (e.target === wrap) closeAll();
    });
    addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !wrap.hidden) closeAll();
    });

    const trigger = (url) => {
      const a = el("a");
      a.href = url;
      a.rel = "noopener";
      a.setAttribute("download", "");
      a.style.display = "none";
      document.body.append(a);
      a.click();
      a.remove();
    };

    return {
      open(d) {
        stop();
        back = document.activeElement;
        wrap.hidden = false;
        root.classList.add("lock");
        wrap.classList.remove("done");
        title.textContent = d.name;
        meta.textContent = [d.project, t(d.kind), d.size].filter(Boolean).join(" · ");
        sha.replaceChildren();
        if (d.sha) {
          const code = el("code", "", d.sha);
          const b = el("button", "copy", t("Copier l'empreinte"));
          b.type = "button";
          b.dataset.copy = d.sha;
          sha.append(el("span", "", "SHA-256"), code, b);
        }
        again.href = d.url;
        pct.textContent = "0%";
        ring.style.setProperty("--p", 0);
        tips.replaceChildren();
        const labels = [t("Résolution du lien GitHub"), d.sha ? t("Empreinte SHA-256 connue") : t("Archive du dépôt"), t("Préparation du téléchargement")];
        steps.replaceChildren(...labels.map((t) => el("li", "", t)));
        setTimeout(() => dismiss.focus(), 30);

        const finish = () => {
          wrap.classList.add("done");
          pct.textContent = "100%";
          ring.style.setProperty("--p", 1);
          $$("li", steps).forEach((li) => li.classList.add("ok"));
          trigger(d.url);
          boost = 4;
          const ul = el("ul");
          if (/\.exe$/i.test(d.name)) {
            ul.append(
              el("li", "", t("Si Windows affiche « Windows a protégé votre ordinateur » : Informations complémentaires, puis Exécuter quand même (exécutable non signé).")),
              el("li", "", t("Pour vérifier : {cmd}", { cmd: `Get-FileHash .\\${d.name} -Algorithm SHA256` }))
            );
          } else if (/\.tgz$/i.test(d.name)) {
            ul.append(el("li", "", t("Installation locale : {cmd}", { cmd: `npm install --global ./${d.name}` })), el("li", "", t("Node.js 20.17+ ou 22.13+ est nécessaire.")));
          } else {
            ul.append(el("li", "", t("Décompresse l'archive, puis suis le README du dépôt pour lancer le projet.")));
          }
          if (root.dataset.os && root.dataset.os !== "Windows" && /\.exe$/i.test(d.name))
            ul.append(el("li", "warnline", t("Ce fichier est un exécutable Windows : il ne fonctionnera pas sur {os}.", { os: root.dataset.os })));
          tips.append(el("p", "dlm-ok", t("Téléchargement lancé. Vérifie ton dossier Téléchargements.")), ul);
        };

        if (isCalm()) return finish();
        const start = performance.now();
        const DURATION = 1700;
        $$("li", steps).forEach((li, i) => timers.push(setTimeout(() => li.classList.add("ok"), 400 + i * 450)));
        const tick = (now) => {
          const t = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - t, 2.2);
          ring.style.setProperty("--p", eased);
          pct.textContent = `${Math.round(eased * 100)}%`;
          boost = Math.max(boost, 1 + eased * 2);
          if (t < 1) raf = requestAnimationFrame(tick);
          else finish();
        };
        raf = requestAnimationFrame(tick);
      },
    };
  })();

  document.addEventListener("click", (e) => {
    const a = e.target.closest?.("a[data-dl]");
    if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    dlm.open(a.dataset);
  });

  /* ---------- Filtres, recherche, tri ---------- */
  function applyFilters() {
    const q = norm(state.q).trim();
    const order = [...cards].sort((a, b) => {
      if (state.sort === "az") return a.dataset.name.localeCompare(b.dataset.name, "fr");
      if (state.sort === "dl") return b.dataset.dl - a.dataset.dl || b.dataset.date - a.dataset.date;
      return (b.dataset.date || 0) - (a.dataset.date || 0);
    });
    order.forEach((c, i) => (c.style.order = i));
    let shown = 0;
    cards.forEach((c) => {
      const okKind = state.f === "all" || c.dataset.kinds.includes(state.f);
      const text = norm(`${c.dataset.name} ${c.dataset.repo} ${c.textContent}`);
      const okQ = !q || q.split(/\s+/).every((t) => text.includes(t));
      const show = okKind && okQ;
      c.classList.toggle("is-hidden", !show);
      if (show) shown++;
    });
    $("#dl-empty").hidden = shown > 0;
  }
  $$("#dl-filters button").forEach((b) =>
    b.addEventListener("click", () => {
      state.f = b.dataset.f;
      $$("#dl-filters button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      applyFilters();
    })
  );
  $("#dl-q").addEventListener("input", (e) => {
    state.q = e.target.value;
    applyFilters();
  });
  $("#dl-sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    applyFilters();
  });

  /* ---------- Radar : chronologie et téléchargements ---------- */
  function radar(items) {
    const tl = $("#tl");
    const bars = $("#bars");
    tl.replaceChildren();
    bars.replaceChildren(el("h3", "bars-title", t("Téléchargements par projet")));
    const withRel = items.filter((i) => i.releases.length);
    const times = withRel.flatMap((i) => i.releases.map((r) => +new Date(r.date)));
    if (!times.length) {
      tl.append(el("p", "dl-none", t("Aucune release à afficher.")));
      return;
    }
    const min = Math.min(...times);
    const max = Math.max(Date.now(), ...times);
    const span = Math.max(max - min, 6 * 3600e3);
    const t0 = min - span * 0.06;
    const t1 = max + span * 0.06;
    const pos = (t) => ((t - t0) / (t1 - t0)) * 100;

    const axis = el("div", "axis");
    const days = Math.ceil((t1 - t0) / 86400e3);
    const stepDays = Math.max(1, Math.ceil(days / 8));
    const d = new Date(t0);
    d.setHours(24, 0, 0, 0);
    while (+d < t1) {
      const tick = el("span", "tick", d.toLocaleDateString(I18N.locale, { day: "numeric", month: "short" }));
      tick.style.left = `${pos(+d)}%`;
      axis.append(tick);
      d.setDate(d.getDate() + stepDays);
    }
    const lanes = el("div", "lanes");
    const tip = el("div", "tl-tip");
    tip.hidden = true;

    withRel.forEach((it) => {
      const lane = el("div", "lane");
      const ln = el("span", "lname", it.short || it.name);
      ln.title = it.name;
      lane.append(ln);
      const track = el("div", "ltrack");
      const sorted = [...it.releases].sort((a, b) => new Date(b.date) - new Date(a.date));
      sorted.forEach((r, i) => {
        const dot = el("button", `rdot${i === 0 ? " last" : ""}`);
        dot.type = "button";
        dot.style.left = `${pos(+new Date(r.date))}%`;
        dot.style.setProperty("--c", it.color);
        const label = `${it.name} ${r.tag}, ${fmtDateTime(r.date)}`;
        dot.setAttribute("aria-label", label);
        const show = () => {
          tip.hidden = false;
          tip.replaceChildren(el("b", "", `${it.name} ${r.tag}`), el("span", "", fmtDateTime(r.date)));
          const tr = track.getBoundingClientRect();
          const pr = lanes.getBoundingClientRect();
          tip.style.left = `${tr.left - pr.left + (tr.width * pos(+new Date(r.date))) / 100}px`;
          tip.style.top = `${tr.top - pr.top - 8}px`;
        };
        dot.addEventListener("pointerenter", show);
        dot.addEventListener("focus", show);
        dot.addEventListener("pointerleave", () => (tip.hidden = true));
        dot.addEventListener("blur", () => (tip.hidden = true));
        dot.addEventListener("click", () => {
          const card = $(`#dl-${it.id}`);
          if (card) goTo(card);
        });
        track.append(dot);
      });
      lane.append(track);
      lanes.append(lane);
    });
    const now = el("span", "now");
    now.append(el("i", "", t("maintenant")));
    lanes.append(tip);
    const wrap = el("div", "tl-wrap");
    wrap.append(lanes, axis);
    wrap.style.setProperty("--now", `${pos(Date.now())}%`);
    wrap.append(now);
    tl.append(wrap);

    /* Téléchargements par projet */
    const rows = items.map((i) => ({ ...i, total: i.releases.reduce((n, r) => n + r.assets.reduce((m, a) => m + a.dl, 0), 0) }));
    const top = Math.max(1, ...rows.map((r) => r.total));
    rows
      .filter((r) => r.releases.length)
      .forEach((r, idx) => {
        const row = el("div", "brow");
        const val = el("span", "bval");
        val.append(el("b", "", String(r.total)), ` ${t(I18N.plural(r.total) ? "téléchargements" : "téléchargement")}`);
        row.append(el("span", "bname", r.name), val);
        const track = el("div", "btrack");
        const fill = el("i");
        fill.style.setProperty("--w", `${Math.max(4, (r.total / top) * 100)}%`);
        fill.style.setProperty("--c", r.color);
        fill.style.transitionDelay = `${idx * 0.12}s`;
        track.append(fill);
        row.append(track);
        row.append(el("small", "", plural(r.releases.length, "version publiée", "versions publiées")));
        bars.append(row);
      });
    new IntersectionObserver(
      (es, io) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            bars.classList.add("in");
            io.disconnect();
          }
        }),
      { threshold: 0.3 }
    ).observe(bars);
  }

  /* ---------- Lien profond et mise en évidence ---------- */
  function goTo(card) {
    card.classList.add("in");
    card.scrollIntoView({ behavior: isCalm() ? "auto" : "smooth", block: "center" });
    card.classList.remove("flash");
    void card.offsetWidth;
    card.classList.add("flash");
    setTimeout(() => card.classList.remove("flash"), 2000);
  }
  function fromHash() {
    const id = location.hash.slice(1);
    const card = id && $(`#${CSS.escape(id)}.dl-card`);
    if (card) setTimeout(() => goTo(card), 400);
  }
  addEventListener("hashchange", fromHash);

  /* ---------- Chargement ---------- */
  loadData().then(({ data, live, at }) => {
    const items = cards.map((c) => ({
      id: c.dataset.id,
      name: c.dataset.name,
      short: SHORT[c.dataset.id],
      color: COLORS[c.dataset.id] || "#b74b4b",
      releases: data[c.dataset.repo] || [],
    }));
    cards.forEach((c, i) => renderCard(c, items[i].releases));
    applyFilters();
    radar(items);

    const all = items.flatMap((i) => i.releases.map((r) => ({ ...r, project: i.name })));
    const nDl = all.reduce((n, r) => n + r.assets.reduce((m, a) => m + a.dl, 0), 0);
    countUp($("#n-rel"), all.length);
    countUp($("#n-dl"), nDl);
    const newest = [...all].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    if (newest) $("#n-last").textContent = `${newest.project} ${newest.tag}`;

    const status = $("#dl-status");
    const chip = $("#src-chip");
    if (live) {
      status.textContent = t("Données en direct depuis GitHub · {rel} · {dl} au total.", { rel: plural(all.length, "release", "releases"), dl: plural(nDl, "téléchargement", "téléchargements") });
      chip.replaceChildren(el("span", "led"), t("Données : GitHub en direct"));
    } else {
      status.textContent = t("GitHub est injoignable : copie hors-ligne du {date}. Les versions peuvent être en retard.", { date: at ? fmtDate(at) : t("dernier relevé") });
      chip.replaceChildren(t("Données : copie hors-ligne"));
      chip.classList.add("warn");
    }
    fromHash();
  });

  /* ---------- Pluie de données (arrière-plan du haut de page) ---------- */
  (function rain() {
    const stage = $(".dl-stage");
    const canvas = $("#rain");
    const ctx = canvas.getContext("2d");
    const CH = "01ABCDEF▓░<>/#";
    const FONT = 14;
    const TRAIL = 16;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let cols = [];
    let visible = true;
    let last = performance.now();
    let running = false;

    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = stage.clientWidth;
      h = stage.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      const n = Math.min(100, Math.floor(w / 20));
      cols = Array.from({ length: n }, (_, i) => ({
        x: (i + 0.5) * (w / n),
        y: -Math.random() * h,
        v: 40 + Math.random() * 110,
        s: Array.from({ length: TRAIL }, () => CH[Math.floor(Math.random() * CH.length)]),
      }));
    }
    function frame(now) {
      running = visible;
      if (!visible) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (isCalm()) return requestAnimationFrame(frame);
      boost = Math.max(0, boost - dt * 1.2);
      const speed = 1 + boost;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${FONT}px "JetBrains Mono", monospace`;
      ctx.textAlign = "center";
      for (const c of cols) {
        c.y += c.v * speed * dt;
        if (c.y - TRAIL * FONT > h) {
          c.y = -Math.random() * 200;
          c.v = 40 + Math.random() * 110;
        }
        for (let k = 0; k < TRAIL; k++) {
          const y = c.y - k * FONT;
          if (y < -FONT || y > h + FONT) continue;
          if (Math.random() < 0.02) c.s[k] = CH[Math.floor(Math.random() * CH.length)];
          const a = (1 - k / TRAIL) * 0.55;
          ctx.fillStyle = k === 0 ? `rgba(255,255,255,${0.7 + Math.min(boost, 1) * 0.3})` : `rgba(209,25,25,${a})`;
          ctx.fillText(c.s[k], c.x, y);
        }
      }
      requestAnimationFrame(frame);
    }
    new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible && !running) {
          last = performance.now();
          running = true;
          requestAnimationFrame(frame);
        }
      },
      { threshold: 0.02 }
    ).observe(stage);
    addEventListener("resize", resize);
    resize();
  })();
})();
