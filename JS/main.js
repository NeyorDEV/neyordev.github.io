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
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
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
  const words = JSON.parse(typing.dataset.words);
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
$$(".project").forEach((card) => {
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

/* Captures des projets : image si elle existe, sinon le visuel par défaut */
$$(".shot[data-img]").forEach((shot) => {
  const img = new Image();
  img.alt = `Capture d'écran de ${shot.textContent.trim()}`;
  img.onload = () => shot.replaceChildren(img);
  img.src = shot.dataset.img;
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
  const langs = new Set(own.map((r) => r.language).filter(Boolean));
  const stars = own.reduce((n, r) => n + r.stargazers_count, 0);
  const values = { repos: own.length, langs: langs.size, stars };
  $$("[data-stat]").forEach((el) => countUp(el, values[el.dataset.stat]));
}

/* Liste des dépôts GitHub */
const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("fr-FR", { month: "short", year: "numeric" });

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
  desc.textContent = r.description || "Pas de description.";
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
  const langs = [...new Set(sorted.map((r) => r.language).filter(Boolean))];
  let active = "Tous";

  const draw = () => {
    const shown = sorted.filter((r) => active === "Tous" || r.language === active);
    list.replaceChildren(...shown.map(repoItem));
    filters
      .querySelectorAll("button")
      .forEach((b) => b.setAttribute("aria-pressed", String(b.textContent === active)));
  };

  filters.replaceChildren(
    ...["Tous", ...langs].map((l) => {
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
  if ($("[data-stat]")) renderStats(repos);
  if ($("#repos")) renderRepos(repos);
}
if ($("[data-stat]") || $("#repos")) loadRepos();
