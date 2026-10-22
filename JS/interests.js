/* Centres d'intérêt : le fond de la section prend l'ambiance de la ligne survolée */
(() => {
  const section = document.querySelector(".interests");
  if (!section) return;
  const canvas = section.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const items = [...section.querySelectorAll(".interest")];

  const RED = "183, 75, 75";
  const HOT = "209, 25, 25";
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  let w = 0;
  let h = 0;
  let dpr = 1;
  let S = {};
  let current = null;
  let index = -1;
  let fade = 0;
  let last = performance.now();
  let visible = false;
  let hovering = false;
  let running = false;

  const scenes = {};

  /* ---------- Gaming : pièces qui tombent ---------- */
  const SHAPES = [
    [[0, 0], [1, 0], [2, 0], [3, 0]],
    [[0, 0], [1, 0], [0, 1], [1, 1]],
    [[0, 0], [1, 0], [2, 0], [1, 1]],
    [[0, 0], [0, 1], [0, 2], [1, 2]],
    [[1, 0], [1, 1], [1, 2], [0, 2]],
    [[0, 0], [1, 0], [1, 1], [2, 1]],
  ];
  scenes.gaming = {
    init() {
      S.cell = Math.max(22, Math.round(w / 34));
      S.make = (anywhere) => ({
        shape: pick(SHAPES),
        x: Math.floor(Math.random() * (w / S.cell - 3)) * S.cell,
        y: anywhere ? rnd(-h * 0.2, h) : -S.cell * 4,
        vy: rnd(40, 120),
        a: rnd(0.35, 0.9),
      });
      S.pieces = Array.from({ length: 16 }, () => S.make(true));
    },
    draw(dt) {
      const c = S.cell;
      ctx.strokeStyle = `rgba(${RED}, 0.07)`;
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += c) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (const p of S.pieces) {
        p.y += p.vy * dt;
        if (p.y > h) Object.assign(p, S.make(false));
        for (const [dx, dy] of p.shape) {
          const x = p.x + dx * c;
          const y = Math.round((p.y + dy * c) / c) * c;
          ctx.fillStyle = `rgba(${RED}, ${p.a * 0.5})`;
          ctx.fillRect(x + 1, y + 1, c - 2, c - 2);
          ctx.strokeStyle = `rgba(${HOT}, ${p.a})`;
          ctx.strokeRect(x + 1.5, y + 1.5, c - 3, c - 3);
        }
      }
    },
  };

  /* ---------- IA : réseau de neurones avec impulsions ---------- */
  scenes.ia = {
    init() {
      const L = 6;
      S.layers = Array.from({ length: L }, (_, i) => {
        const n = 4 + Math.floor(Math.random() * 3);
        const x = w * (0.06 + (0.88 * i) / (L - 1));
        return Array.from({ length: n }, (_, k) => ({
          x,
          y: h * (0.1 + (0.8 * (k + 0.5)) / n) + rnd(-10, 10),
          glow: 0,
        }));
      });
      S.edges = [];
      for (let l = 0; l < L - 1; l++)
        for (const a of S.layers[l]) for (const b of S.layers[l + 1]) S.edges.push([a, b]);
      S.pulses = [];
      S.timer = 0;
    },
    draw(dt) {
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${RED}, 0.3)`;
      for (const [a, b] of S.edges) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      S.timer -= dt;
      if (S.timer <= 0) {
        S.timer = 0.18;
        const first = pick(S.layers[0]);
        const e = pick(S.edges.filter(([a]) => a === first));
        S.pulses.push({ e, p: 0 });
      }
      S.pulses = S.pulses.filter((pl) => {
        pl.p += dt * 0.8;
        const [a, b] = pl.e;
        const x = a.x + (b.x - a.x) * pl.p;
        const y = a.y + (b.y - a.y) * pl.p;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 16);
        g.addColorStop(0, `rgba(${HOT}, 0.95)`);
        g.addColorStop(1, `rgba(${HOT}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fill();
        if (pl.p >= 1) {
          b.glow = 1;
          const next = S.edges.filter(([from]) => from === b);
          if (next.length) S.pulses.push({ e: pick(next), p: 0 });
          return false;
        }
        return true;
      });
      for (const layer of S.layers)
        for (const n of layer) {
          n.glow = Math.max(0, n.glow - dt * 1.6);
          ctx.fillStyle = `rgba(${RED}, ${0.8 + n.glow * 0.2})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 5 + n.glow * 5, 0, Math.PI * 2);
          ctx.fill();
          if (n.glow > 0) {
            ctx.strokeStyle = `rgba(${HOT}, ${n.glow})`;
            ctx.beginPath();
            ctx.arc(n.x, n.y, 8 + (1 - n.glow) * 14, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
    },
  };

  /* ---------- Volley : échange de balle de part et d'autre du filet ---------- */
  scenes.volley = {
    init() {
      S.floor = h * 0.86;
      S.ball = { t: 0, from: { x: w * 0.15 }, to: { x: w * 0.85 }, peak: h * 0.55 };
      S.trail = [];
    },
    draw(dt, time) {
      const fl = S.floor;
      ctx.strokeStyle = `rgba(${RED}, 0.7)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, fl);
      ctx.lineTo(w, fl);
      ctx.stroke();
      const nx = w / 2;
      const top = fl - h * 0.34;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(nx, fl);
      ctx.lineTo(nx, top);
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${RED}, 0.45)`;
      for (let i = 0; i < 9; i++) {
        const y = top + ((fl - top) * i) / 9;
        ctx.beginPath();
        ctx.moveTo(nx - 30, y);
        ctx.lineTo(nx + 30, y);
        ctx.stroke();
      }
      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();
        ctx.moveTo(nx + i * 10, top);
        ctx.lineTo(nx + i * 10, fl);
        ctx.stroke();
      }

      const b = S.ball;
      b.t += dt / 1.5;
      if (b.t >= 1) {
        b.t = 0;
        b.from = b.to;
        const left = b.from.x > nx;
        b.to = { x: left ? rnd(w * 0.08, w * 0.4) : rnd(w * 0.6, w * 0.92) };
        b.peak = rnd(h * 0.45, h * 0.62);
      }
      const x = b.from.x + (b.to.x - b.from.x) * b.t;
      const y = fl - 16 - b.peak * 4 * b.t * (1 - b.t);
      S.trail.push({ x, y, a: 0.7 });
      S.trail = S.trail.filter((p) => (p.a -= dt * 1.4) > 0);
      for (const p of S.trail) {
        ctx.fillStyle = `rgba(${HOT}, ${p.a * 0.5})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 10 * p.a + 3, 0, Math.PI * 2);
        ctx.fill();
      }
      const height = 1 - (fl - 16 - y) / (h * 0.7);
      ctx.fillStyle = `rgba(0, 0, 0, 0.5)`;
      ctx.beginPath();
      ctx.ellipse(x, fl + 6, 18 * Math.max(0.3, height), 4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(${HOT}, 0.9)`;
      ctx.lineWidth = 2;
      for (let k = 0; k < 3; k++) {
        const a = time * 3 + (k * Math.PI * 2) / 3;
        ctx.beginPath();
        ctx.arc(x, y, 20, a, a + 1.1);
        ctx.stroke();
      }
    },
  };

  /* ---------- Électronique : pistes de circuit et impulsions ---------- */
  function pointAt(path, d) {
    d = Math.max(0, Math.min(d, path.total));
    for (let i = 1; i < path.pts.length; i++) {
      if (d <= path.cum[i]) {
        const t = (d - path.cum[i - 1]) / (path.cum[i] - path.cum[i - 1] || 1);
        const [x0, y0] = path.pts[i - 1];
        const [x1, y1] = path.pts[i];
        return [x0 + (x1 - x0) * t, y0 + (y1 - y0) * t];
      }
    }
    return path.pts[path.pts.length - 1];
  }
  scenes.electronique = {
    init() {
      const g = 26;
      const cols = Math.floor(w / g);
      const rows = Math.floor(h / g);
      S.paths = Array.from({ length: 22 }, () => {
        let cx = Math.floor(Math.random() * cols);
        let cy = Math.floor(Math.random() * rows);
        let horizontal = Math.random() < 0.5;
        const pts = [[cx * g, cy * g]];
        const steps = 4 + Math.floor(Math.random() * 5);
        for (let s = 0; s < steps; s++) {
          const len = (2 + Math.floor(Math.random() * 6)) * (Math.random() < 0.5 ? -1 : 1);
          if (horizontal) cx = Math.max(0, Math.min(cols, cx + len));
          else cy = Math.max(0, Math.min(rows, cy + len));
          pts.push([cx * g, cy * g]);
          horizontal = !horizontal;
        }
        const cum = [0];
        for (let i = 1; i < pts.length; i++)
          cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
        return { pts, cum, total: cum[cum.length - 1], p: rnd(0, 600), speed: rnd(90, 200) };
      });
      S.chips = Array.from({ length: 3 }, () => ({
        x: Math.floor(rnd(2, Math.max(3, cols - 6))) * g,
        y: Math.floor(rnd(1, Math.max(2, rows - 4))) * g,
        w: g * 5,
        h: g * 3,
      }));
      S.g = g;
    },
    draw(dt) {
      ctx.lineJoin = "round";
      for (const p of S.paths) {
        ctx.strokeStyle = `rgba(${RED}, 0.45)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        p.pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.stroke();
        for (const [x, y] of [p.pts[0], p.pts[p.pts.length - 1]]) {
          ctx.strokeStyle = `rgba(${RED}, 0.6)`;
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.stroke();
        }
        p.p += p.speed * dt;
        if (p.p > p.total + 80) p.p = -rnd(0, 200);
        for (let k = 0; k < 12; k++) {
          const d = p.p - k * 7;
          if (d < 0 || d > p.total) continue;
          const [x, y] = pointAt(p, d);
          ctx.fillStyle = `rgba(${HOT}, ${1 - k / 12})`;
          ctx.beginPath();
          ctx.arc(x, y, k === 0 ? 4 : 3 - k * 0.15, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      for (const c of S.chips) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
        ctx.fillRect(c.x, c.y, c.w, c.h);
        ctx.strokeStyle = `rgba(${RED}, 0.7)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(c.x, c.y, c.w, c.h);
        ctx.fillStyle = `rgba(${RED}, 0.7)`;
        for (let i = 1; i < 6; i += 1) {
          ctx.fillRect(c.x + (c.w * i) / 6 - 2, c.y - 6, 4, 6);
          ctx.fillRect(c.x + (c.w * i) / 6 - 2, c.y + c.h, 4, 6);
        }
        ctx.beginPath();
        ctx.arc(c.x + 10, c.y + 10, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    },
  };

  /* ---------- Échecs : échiquier et cavalier ---------- */
  const KNIGHT = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
  scenes.echecs = {
    init() {
      S.sq = Math.max(48, Math.round(Math.min(w, h) / 7));
      S.cols = Math.ceil(w / S.sq);
      S.rows = Math.ceil(h / S.sq);
      S.pos = { c: Math.floor(S.cols / 2), r: Math.floor(S.rows / 2) };
      S.move = null;
      S.p = 1;
      S.trail = [];
    },
    draw(dt, time) {
      const q = S.sq;
      const center = (c, r) => [c * q + q / 2, r * q + q / 2];
      for (let r = 0; r < S.rows; r++)
        for (let c = 0; c < S.cols; c++) {
          if ((r + c) % 2) continue;
          const a = 0.14 + 0.1 * Math.sin(time * 1.3 + (r + c) * 0.6);
          ctx.fillStyle = `rgba(${RED}, ${a})`;
          ctx.fillRect(c * q, r * q, q, q);
        }

      if (S.p >= 1) {
        const options = KNIGHT.map(([dc, dr]) => ({ c: S.pos.c + dc, r: S.pos.r + dr, dc, dr })).filter(
          (m) => m.c >= 0 && m.c < S.cols && m.r >= 0 && m.r < S.rows
        );
        const m = pick(options);
        S.move = { from: { ...S.pos }, to: { c: m.c, r: m.r }, dc: m.dc, dr: m.dr };
        S.pos = S.move.to;
        S.p = 0;
      }
      S.p += dt / 0.8;
      const mv = S.move;
      const long = Math.abs(mv.dc) === 2;
      const [x0, y0] = center(mv.from.c, mv.from.r);
      const [x2, y2] = center(mv.to.c, mv.to.r);
      const corner = long ? [x2, y0] : [x0, y2];
      const t = Math.min(S.p, 1);
      const l1 = Math.hypot(corner[0] - x0, corner[1] - y0);
      const l2 = Math.hypot(x2 - corner[0], y2 - corner[1]);
      const d = t * (l1 + l2);
      const kx = d <= l1 ? x0 + ((corner[0] - x0) * d) / l1 : corner[0] + ((x2 - corner[0]) * (d - l1)) / l2;
      const ky = d <= l1 ? y0 + ((corner[1] - y0) * d) / l1 : corner[1] + ((y2 - corner[1]) * (d - l1)) / l2;

      if (S.p >= 1 && !mv.done) {
        mv.done = true;
        S.trail.push({ pts: [[x0, y0], corner, [x2, y2]], a: 1, cell: mv.to });
        if (S.trail.length > 7) S.trail.shift();
      }
      for (const tr of S.trail) {
        tr.a = Math.max(0, tr.a - dt * 0.18);
        ctx.fillStyle = `rgba(${HOT}, ${tr.a * 0.3})`;
        ctx.fillRect(tr.cell.c * q, tr.cell.r * q, q, q);
        ctx.strokeStyle = `rgba(${HOT}, ${tr.a * 0.8})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        tr.pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.stroke();
      }
      ctx.strokeStyle = `rgba(${HOT}, 0.9)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      if (d > l1) ctx.lineTo(corner[0], corner[1]);
      ctx.lineTo(kx, ky);
      ctx.stroke();

      ctx.font = `${q * 0.85}px "Segoe UI Symbol", "Noto Sans Symbols 2", serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = 2;
      ctx.strokeStyle = `rgba(${HOT}, 0.9)`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
      const hop = Math.sin(t * Math.PI) * q * 0.25;
      ctx.strokeText("♞", kx, ky - hop);
      ctx.fillText("♞", kx, ky - hop);
    },
  };

  /* ---------- Gestion des scènes ---------- */
  function activate(i) {
    index = i;
    current = items[i].dataset.scene;
    S = {};
    scenes[current].init();
    fade = 0;
    items.forEach((el, n) => {
      el.classList.toggle("active", n === i);
      el.setAttribute("aria-pressed", String(n === i));
    });
  }

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = section.clientWidth;
    h = section.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    if (current) {
      S = {};
      scenes[current].init();
    }
  }

  function frame(now) {
    running = visible;
    if (!visible) return;
    if (document.documentElement.classList.contains("calm")) {
      last = now;
      requestAnimationFrame(frame);
      return;
    }
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    if (current) {
      fade = Math.min(1, fade + dt * 2.5);
      ctx.globalAlpha = fade;
      scenes[current].draw(dt, now / 1000);
      ctx.globalAlpha = 1;
    }
    requestAnimationFrame(frame);
  }

  items.forEach((el, i) => {
    const on = () => {
      hovering = true;
      if (i !== index) activate(i);
    };
    el.addEventListener("pointerenter", on);
    el.addEventListener("focus", on);
    el.addEventListener("click", on);
    el.addEventListener("pointerleave", () => (hovering = false));
    el.addEventListener("blur", () => (hovering = false));
  });

  new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !running) {
        last = performance.now();
        running = true;
        requestAnimationFrame(frame);
      }
    },
    { threshold: 0.05 }
  ).observe(section);

  addEventListener("resize", resize);
  setInterval(() => {
    if (!hovering && visible) activate((index + 1) % items.length);
  }, 4500);

  resize();
  activate(0);
})();
