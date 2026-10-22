/* Traduction FR / EN.
   Le français est la langue source (texte du HTML et des scripts). L'anglais vient du dictionnaire
   window.I18N_EN (JS/i18n-en.js) : clé = texte français normalisé, valeur = texte anglais. */
(() => {
  const root = document.documentElement;
  let lang = "fr";
  try {
    lang = localStorage.getItem("lang") || ((navigator.language || "fr").slice(0, 2) === "fr" ? "fr" : "en");
  } catch {}
  if (lang !== "fr" && lang !== "en") lang = "fr";
  const EN = window.I18N_EN || {};
  const locale = lang === "en" ? "en-GB" : "fr-FR";
  const norm = (s) => s.replace(/\s+/g, " ").trim();
  const hasLetters = (s) => /[A-Za-zÀ-ÿ]/.test(s);

  /** Traduit une phrase française ; {nom} est remplacé par vars.nom. */
  const t = (fr, vars) => {
    let s = lang === "en" && EN[fr] !== undefined ? EN[fr] : fr;
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return s;
  };
  /** Pluriel : tp(3, "version", "versions") → « 3 versions » / « 3 versions ». */
  const isPlural = (n) => (lang === "en" ? n !== 1 : n > 1);
  const tp = (n, one, many) => `${n} ${t(isPlural(n) ? many : one)}`;

  const SKIP = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "KBD", "PRE", "SVG", "CANVAS", "TEXTAREA", "LINK"]);
  const ATTRS = ["aria-label", "title", "placeholder", "alt", "data-text"];

  function metaAttr(el) {
    if (el.tagName !== "META") return null;
    const name = el.getAttribute("name");
    const prop = el.getAttribute("property");
    return name === "description" || prop === "og:title" || prop === "og:description" ? "content" : null;
  }

  /** Parcourt le DOM et liste ce qui est traduisible : textes, blocs mixtes (texte + balises) et attributs. */
  function collect(rootEl) {
    const found = { texts: [], units: [], attrs: [] };
    const visit = (el) => {
      if (SKIP.has(el.tagName.toUpperCase()) || el.hasAttribute("data-notranslate")) return;
      const own = [...ATTRS, metaAttr(el)].filter(Boolean);
      for (const a of own) {
        if (el.hasAttribute(a)) {
          const key = norm(el.getAttribute(a));
          if (key && hasLetters(key)) found.attrs.push([el, a, key]);
        }
      }
      const kids = [...el.childNodes];
      const text = kids.some((n) => n.nodeType === 3 && /\S/.test(n.nodeValue));
      const inner = kids.some((n) => n.nodeType === 1);
      if (text && inner) {
        const key = norm(el.innerHTML);
        if (hasLetters(key)) found.units.push([el, key]);
        return;
      }
      for (const n of kids) {
        if (n.nodeType === 3) {
          const key = norm(n.nodeValue);
          if (key && hasLetters(key)) found.texts.push([n, key]);
        } else if (n.nodeType === 1) visit(n);
      }
    };
    visit(rootEl);
    return found;
  }

  function apply(found) {
    for (const [n, key] of found.texts) {
      const en = EN[key];
      if (en !== undefined) n.nodeValue = n.nodeValue.replace(/\S[\s\S]*\S|\S/, () => en);
    }
    for (const [el, key] of found.units) {
      const en = EN[key];
      if (en !== undefined) el.innerHTML = en;
    }
    for (const [el, a, key] of found.attrs) {
      const en = EN[key];
      if (en !== undefined) el.setAttribute(a, en);
    }
  }

  const found = collect(root);
  const keys = new Set([...found.texts, ...found.units, ...found.attrs].map((x) => x[x.length - 1]));
  root.lang = lang;
  if (lang === "en") apply(found);
  root.classList.remove("i18n-wait");

  const setLang = (l) => {
    try {
      localStorage.setItem("lang", l);
    } catch {}
    location.reload();
  };

  window.t = t;
  window.tp = tp;
  window.I18N = {
    lang,
    locale,
    t,
    tp,
    plural: isPlural,
    setLang,
    /** Outils de contrôle : clés du HTML statique absentes du dictionnaire. */
    keys: [...keys],
    missing: () => {
      const same = new Set(window.I18N_SAME || []);
      return [...keys].filter((k) => EN[k] === undefined && !same.has(k));
    },
  };
})();
