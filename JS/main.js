const USER = "neyordev";

const FALLBACK = [
  { name: "J.A.R.V.I.S", description: "Voice assistant with biometric authentication, a 3D interface, and AI-powered home automation.", language: "Python", stargazers_count: 1, fork: false, pushed_at: "2026-10-22" },
  { name: "ModShift", description: "Tool for migrating Minecraft modpacks to other versions or mod loaders.", language: "TypeScript", stargazers_count: 1, fork: false, pushed_at: "2026-10-22" },
  { name: "rl-session-stats", description: "Session stats overlay for Rocket League, built with Tauri and Rust.", language: "Rust", stargazers_count: 1, fork: false, pushed_at: "2026-10-22" },
  { name: "RentPark", description: "Parking rental management platform built with PHP, Blazor, Kotlin, and MySQL.", language: "PHP", stargazers_count: 0, fork: false, pushed_at: "2026-09-15" },
  { name: "Dragon-Mounts-Legacy", description: "Repository for the Dragon Mounts: Legacy Minecraft mod.", language: "Java", stargazers_count: 0, fork: true, pushed_at: "2026-09-29" },
];

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];
const root = document.documentElement;
const reduced = false; /* animations toujours actives, quel que soit le réglage système */
root.classList.add("js");

$("#year").textContent = new Date().getFullYear();

/* Barre de progression et en-tête compact */
const bar = $(".progress");
const topbar = $(".topbar");
function onScroll() {
  const max = root.scrollHeight - innerHeight;
  bar.style.setProperty("--p", max > 0 ? scrollY / max : 0);
  topbar.classList.toggle("scrolled", scrollY > 24);
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Titres : apparition mot par mot */
$$("[data-split]").forEach((el) => {
  const words = el.textContent.trim().split(/\s+/);
  el.setAttribute("aria-label", el.textContent.trim());
  el.replaceChildren(
    ...words.flatMap((word, i) => {
      const span = document.createElement("span");
      span.className = "w";
      span.style.setProperty("--i", i);
      span.setAttribute("aria-hidden", "true");
      span.textContent = word;
      return [span, " "];
    })
  );
});

/* Apparition au scroll, avec décalage dans les grilles */
$$("[data-stagger]").forEach((group) =>
  [...group.children].forEach((child, i) => child.style.setProperty("--sd", `${i * 0.12}s`))
);
const reveal = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        reveal.unobserve(e.target);
      }
    }),
  { threshold: 0.15 }
);
$$(".reveal").forEach((el) => reveal.observe(el));

/* Texte tapé en boucle */
const typing = $(".typing");
if (typing) {
  const words = JSON.parse(typing.dataset.words).map((w) => t(w));
  if (reduced) {
    typing.textContent = words[0];
  } else {
    let w = 0;
    let c = 0;
    let deleting = false;
    const tick = () => {
      const word = words[w];
      c += deleting ? -1 : 1;
      typing.textContent = word.slice(0, c);
      let delay = deleting ? 30 : 65;
      if (!deleting && c === word.length) {
        deleting = true;
        delay = 1700;
      } else if (deleting && c === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 350;
      }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 1200);
  }
}

/* Projecteur qui suit la souris sur le fond */
$$(".hero, .pagehead").forEach((el) =>
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  })
);

/* Cartes projets : projecteur et légère inclinaison */
$$(".project, .module").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty("--x", `${x * 100}%`);
    card.style.setProperty("--y", `${y * 100}%`);
    if (!reduced) {
      card.style.setProperty("--ry", `${(x - 0.5) * 8}deg`);
      card.style.setProperty("--rx", `${(0.5 - y) * 8}deg`);
    }
  });
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });
});

/* Captures des projets : image ou GIF si elle existe (png, gif, jpg), sinon le visuel animé */
$$(".shot[data-img]").forEach((shot) => {
  const base = shot.dataset.img.replace(/\.\w+$/, "");
  const label = shot.textContent.trim();
  const exts = ["png", "gif", "jpg", "webp"];
  const attempt = (i) => {
    if (i >= exts.length) return;
    const img = new Image();
    img.alt = t("Capture d'écran de {name}", { name: label });
    img.onload = () => {
      shot.classList.add("has-img");
      const art = shot.querySelector(".art");
      if (art) art.after(img);
      else shot.prepend(img);
    };
    img.onerror = () => attempt(i + 1);
    img.src = `${base}.${exts[i]}`;
  };
  attempt(0);
});

/* Compteurs animés */
function countUp(el, target) {
  if (reduced || target === 0) {
    el.textContent = target;
    return;
  }
  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / 1000, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function renderStats(repos) {
  const own = repos.filter((r) => !r.fork);
  const forks = repos.filter((r) => r.fork).length;
  const stars = own.reduce((n, r) => n + r.stargazers_count, 0);
  const values = { repos: own.length, forks, stars };
  $$("[data-stat]").forEach((el) => countUp(el, values[el.dataset.stat]));
}

/* Liste des dépôts GitHub */
const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString(I18N.locale, { month: "short", year: "numeric" });

function repoItem(r) {
  const li = document.createElement("li");
  li.className = "repo";
  const a = document.createElement("a");
  a.href = `https://github.com/${USER}/${encodeURIComponent(r.name)}`;
  a.target = "_blank";
  a.rel = "noopener";

  const title = document.createElement("b");
  title.textContent = r.name;
  if (r.fork) {
    const tag = document.createElement("span");
    tag.className = "tagfork";
    tag.textContent = "fork";
    title.append(tag);
  }
  const desc = document.createElement("p");
  desc.textContent = r.description || t("Pas de description.");
  const meta = document.createElement("span");
  meta.className = "meta";
  meta.textContent = [r.language, `★ ${r.stargazers_count}`, fmtDate(r.pushed_at)]
    .filter(Boolean)
    .join(" · ");

  a.append(title, desc, meta);
  li.append(a);
  return li;
}

function renderRepos(repos) {
  const list = $("#repos");
  const filters = $("#filters");
  const sorted = [...repos].sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
  const langs = [...new Set(sorted.map((r) => r.language).filter((l) => l && l !== "CSS"))];
  const ALL = t("Tous");
  let active = ALL;

  const draw = () => {
    const shown = sorted.filter((r) => active === ALL || r.language === active);
    list.replaceChildren(...shown.map(repoItem));
    filters
      .querySelectorAll("button")
      .forEach((b) => b.setAttribute("aria-pressed", String(b.textContent === active)));
  };

  filters.replaceChildren(
    ...[ALL, ...langs].map((l) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = l;
      b.addEventListener("click", () => {
        active = l;
        draw();
      });
      return b;
    })
  );
  draw();
}

async function loadRepos() {
  let repos = FALLBACK;
  try {
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`);
    if (!res.ok) throw new Error(res.status);
    repos = await res.json();
  } catch {
    /* API indisponible ou limite atteinte : on affiche la liste intégrée */
  }
  document.dispatchEvent(new CustomEvent("repos", { detail: repos }));
  if ($("[data-stat]")) renderStats(repos);
  if ($("#repos")) renderRepos(repos);
}
if ($("[data-stat]") || $("#repos")) loadRepos();

/* Carrousel de compétences : rotation automatique, flèches, points */
$$("[data-carousel]").forEach((root) => {
  const track = root.querySelector(".slides");
  const slides = [...track.children];
  const dots = root.querySelector(".dots");
  let index = 0;
  let timer;
  let paused = false;

  slides.forEach((slide, i) => {
    slide.querySelectorAll(".chips li").forEach((li, n) => li.style.setProperty("--i", n));
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", t("Aller à la diapositive {n}", { n: i + 1 }));
    dot.addEventListener("click", () => go(i));
    dots.append(dot);
  });

  function show(i) {
    index = i;
    slides.forEach((s, n) => s.classList.toggle("active", n === i));
    [...dots.children].forEach((d, n) => d.setAttribute("aria-current", String(n === i)));
  }
  function go(i) {
    const next = (i + slides.length) % slides.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: reduced ? "auto" : "smooth" });
    show(next);
    restart();
  }
  function restart() {
    clearInterval(timer);
    if (!paused) timer = setInterval(() => go(index + 1), 3000);
  }
  const toggle = root.querySelector("[data-pause]");
  toggle.addEventListener("click", () => {
    paused = !paused;
    toggle.textContent = paused ? "▶" : "❚❚";
    toggle.setAttribute("aria-label", paused ? t("Reprendre la rotation") : t("Mettre en pause"));
    restart();
  });

  root.querySelector("[data-prev]").addEventListener("click", () => go(index - 1));
  root.querySelector("[data-next]").addEventListener("click", () => go(index + 1));
  track.addEventListener("scroll", () => {
    const i = Math.round(track.scrollLeft / track.clientWidth);
    if (i !== index) show(i);
  }, { passive: true });
  root.addEventListener("pointerenter", () => clearInterval(timer));
  root.addEventListener("pointerleave", restart);
  root.addEventListener("focusin", () => clearInterval(timer));
  root.addEventListener("focusout", restart);
  addEventListener("resize", () => track.scrollTo({ left: index * track.clientWidth }));

  show(0);
  restart();
});

/* Navigation : menu plein écran avec raccourcis clavier */
(() => {
  const bar = $(".topbar");
  const menu = $(".menu");
  if (!bar || !menu) return;

  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#<>/_";
  function scramble(el, text, delay = 0) {
    clearInterval(el._t);
    let frame = 0;
    const total = 14;
    setTimeout(() => {
      el._t = setInterval(() => {
        frame++;
        const keep = Math.floor((frame / total) * text.length);
        el.textContent = [...text]
          .map((ch, i) => (i < keep || ch === " " ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join("");
        if (frame >= total) {
          clearInterval(el._t);
          el.textContent = text;
        }
      }, 32);
    }, delay);
  }

  menu.id = "menu";
  menu.inert = true;
  const links = [...menu.querySelectorAll("a")];
  links.forEach((a, i) => {
    const label = a.textContent.trim();
    a.dataset.label = label;
    a.style.setProperty("--i", i);
    const n = document.createElement("span");
    n.className = "n";
    n.textContent = String(i + 1).padStart(2, "0");
    const t = document.createElement("span");
    t.className = "t";
    t.textContent = label;
    a.replaceChildren(n, t);
    a.addEventListener("mouseenter", () => scramble(t, label));
    a.addEventListener("focus", () => scramble(t, label));
  });

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "navbtn";
  btn.setAttribute("aria-controls", "menu");
  btn.setAttribute("aria-expanded", "false");
  const lbl = document.createElement("span");
  lbl.textContent = t("MENU");
  const bars = document.createElement("span");
  bars.className = "bars";
  bars.append(document.createElement("i"), document.createElement("i"));
  const hint = document.createElement("kbd");
  hint.textContent = "M";
  btn.append(lbl, bars, hint);
  bar.append(btn);

  const here = menu.querySelector('[aria-current="page"]');
  const sys = document.createElement("span");
  sys.className = "sys";
  const clock = document.createElement("b");
  const tick = () => (clock.textContent = new Date().toLocaleTimeString(I18N.locale));
  tick();
  setInterval(tick, 1000);
  sys.append(`// ${(here ? here.dataset.label : "").toUpperCase()} · `, clock);
  bar.insertBefore(sys, btn);

  const foot = document.createElement("div");
  foot.className = "menu-foot";
  const mail = document.createElement("a");
  mail.href = "mailto:suis.neyor@gmail.com";
  mail.textContent = "suis.neyor@gmail.com";
  const keys = document.createElement("span");
  keys.textContent = t("touches 1–{n} · M ouvrir/fermer · Échap fermer", { n: links.length });
  foot.append(mail, keys);
  menu.append(foot);

  const isOpen = () => bar.classList.contains("menu-open");
  function setOpen(open) {
    bar.classList.toggle("menu-open", open);
    root.classList.toggle("lock", open);
    menu.inert = !open;
    btn.setAttribute("aria-expanded", String(open));
    lbl.textContent = open ? t("FERMER") : t("MENU");
    if (open) {
      links.forEach((a, i) => scramble(a.querySelector(".t"), a.dataset.label, 300 + i * 70));
      setTimeout(() => links[0].focus({ preventScroll: true }), 450);
    } else {
      btn.focus({ preventScroll: true });
    }
  }
  btn.addEventListener("click", () => setOpen(!isOpen()));
  menu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    if (a.getAttribute("href").startsWith("#") || a.getAttribute("aria-current") === "page") {
      bar.classList.remove("menu-open");
      root.classList.remove("lock");
      menu.inert = true;
      btn.setAttribute("aria-expanded", "false");
      lbl.textContent = t("MENU");
    }
  });
  addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target.closest?.("input, textarea, [contenteditable]")) return;
    if (e.key === "Escape" && isOpen()) setOpen(false);
    else if (e.key.toLowerCase() === "m") setOpen(!isOpen());
    else if (isOpen() && /^[1-9]$/.test(e.key) && links[e.key - 1]) links[e.key - 1].click();
  });
})();
