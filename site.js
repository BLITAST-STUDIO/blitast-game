/* BLITAST GAME — site behaviour (vanilla JS, no build step).
   All content comes from window.BLITAST in featured.js. Every data string is
   HTML-escaped before it reaches the page; URLs must be http(s). */
(() => {
  "use strict";

  /* featured.js can fail on a flaky connection: then keep the static counts
     and show a "could not load" message instead of "0 games". */
  const loaded = Boolean(window.BLITAST && typeof window.BLITAST === "object");
  const data = loaded ? window.BLITAST : {};
  const studio = data.studio && typeof data.studio === "object" ? data.studio : {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const idle = (fn) => (window.requestIdleCallback ? window.requestIdleCallback(fn, { timeout: 1200 }) : setTimeout(fn, 300));

  /* ---------- helpers ---------- */
  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ESC[char]);
  const safeUrl = (value) => {
    const url = String(value ?? "").trim();
    return /^https?:\/\/[^\s"'<>\\]+$/i.test(url) ? url : "";
  };
  const safeAsset = (value) => {
    const src = String(value ?? "").trim();
    if (!src || /^(javascript|data|vbscript):/i.test(src) || /["'<>\\\s]/.test(src)) return "";
    return src;
  };
  const safePosition = (value) => {
    const pos = String(value ?? "").trim();
    return /^[a-z0-9.%\s-]{1,40}$/i.test(pos) ? pos : "";
  };
  /* Proportional Japanese punctuation for display text. The web builds of the
     Japanese fonts ignore "palt", so the blank half of 「」（）、。 is trimmed
     with a negative margin instead (the text itself is unchanged). */
  const KERN_OPEN = "「『（【〈《［〔";
  const KERN_CLOSE = "」』）】〉》］〕、。";
  /* The very last character is left alone unless more text follows (trimEnd):
     a trailing negative margin makes shrink-to-fit boxes wrap their last word. */
  const kern = (value, trimEnd = false) => {
    const chars = [...String(value ?? "")];
    return chars.map((ch, i) => {
      if (KERN_OPEN.includes(ch)) return `<span class="yk-o">${ch}</span>`;
      if (KERN_CLOSE.includes(ch) && (trimEnd || i < chars.length - 1)) return `<span class="yk-c">${ch}</span>`;
      if (ch === "・") return '<span class="yk-m">・</span>';
      return esc(ch);
    }).join("");
  };
  /* Game titles mix Latin (Instrument Serif) and Japanese (Mincho): only the
     Japanese runs get the tighter, palt-like tracking (.ja). */
  const JA_RUN = /[぀-ヿ㐀-鿿豈-﫿々〆〜「」『』（）【】〈〉《》［］〔〕、。・]+/g;
  const titleHtml = (value) => {
    const text = String(value ?? "");
    let out = "";
    let last = 0;
    text.replace(JA_RUN, (run, index) => {
      out += `${esc(text.slice(last, index))}<span class="ja">${kern(run, index + run.length < text.length)}</span>`;
      last = index + run.length;
      return run;
    });
    return out + esc(text.slice(last));
  };
  /* Optional phrase hints in featured.js blurbs: "みぎはしで|つぎの ページへ".
     A "|" never shows; it marks where a line may break. Hinted text keeps its
     phrases whole (word-break: keep-all, see .has-hints) on every engine. */
  const hasHints = (value) => String(value ?? "").includes("|");
  const plain = (value) => String(value ?? "").replace(/\|/g, "");
  const phraseHtml = (value) => {
    const text = String(value ?? "");
    if (!text.includes("|")) return esc(text);
    return text.split("|").map((part) => esc(part)
      .replace(/([、。！？）」』])(?![、。！？）」』]|$)/g, "$1<wbr>")
      .replace(/(\d+〜\d+歳?)/g, '<span class="nowrap">$1</span>')).join("<wbr>");
  };
  const blurbAttrs = (value, cls) => `class="${cls}${hasHints(value) ? " has-hints" : ""}"`;
  /* Scroll the page without the CSS smooth behaviour (keeps a control under the finger). */
  function jumpBy(dy) {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollBy(0, dy);
    root.style.scrollBehavior = previous;
  }
  const toLines = (text) => String(text ?? "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const pad = (n) => String(n).padStart(2, "0");
  /* Rough visual width: full-width (Japanese) = 1, half-width = .55. */
  const visualLength = (text) => [...String(text)].reduce((sum, ch) => sum + (/[\u0000-ɏ]/.test(ch) ? 0.55 : 1), 0);
  const lengthClass = (text) => { const len = visualLength(text); return len > 11 ? " is-xlong" : len > 7.5 ? " is-long" : ""; };

  /* ---------- dates: 「2026年9月27日（日）」＋（今日）/（きのう）/（n日前） ---------- */
  const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];
  function parseDate(value) {
    const match = /^(\d{4})[.\-/](\d{1,2})[.\-/](\d{1,2})$/.exec(String(value ?? "").trim());
    if (!match) return null;
    const y = Number(match[1]);
    const m = Number(match[2]);
    const d = Number(match[3]);
    const date = new Date(y, m - 1, d);
    if (Number.isNaN(date.getTime()) || date.getMonth() !== m - 1 || date.getDate() !== d) return null;
    return { y, m, d, date, key: `${y}${pad(m)}${pad(d)}` };
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysAgo = (p) => (p ? Math.round((today - p.date) / 86400000) : NaN);
  const fmt = {
    iso: (p) => (p ? `${p.y}-${pad(p.m)}-${pad(p.d)}` : ""),
    weekday: (p) => (p ? WEEKDAYS[p.date.getDay()] : ""),
    full: (p) => (p ? `${p.y}年${p.m}月${p.d}日（${WEEKDAYS[p.date.getDay()]}）` : ""),
    rel: (p) => {
      const days = daysAgo(p);
      if (days === 0) return "今日";
      if (days === 1) return "きのう";
      if (days >= 2 && days <= 7) return `${days}日前`;
      return "";
    },
  };
  const dateHtml = (p, cls = "") => {
    if (!p) return "";
    const rel = fmt.rel(p);
    return `<time${cls ? ` class="${cls}"` : ""} datetime="${esc(fmt.iso(p))}">${kern(fmt.full(p), Boolean(rel))}${rel ? `<span class="rel">${kern(`・${rel}`)}</span>` : ""}</time>`;
  };
  const NEW_DAYS = 14;
  const isFresh = (p) => { const days = daysAgo(p); return days < NEW_DAYS && days > -60; };

  const GENRES = Object.assign(Object.create(null), {
    "for kids": { key: "kids", label: "こども向け" },
    kids: { key: "kids", label: "こども向け" },
    platformer: { key: "action", label: "アクション" },
    action: { key: "action", label: "アクション" },
    casual: { key: "casual", label: "カジュアル" },
    puzzle: { key: "puzzle", label: "パズル" },
    arcade: { key: "arcade", label: "アーケード" },
    horror: { key: "horror", label: "ホラー" },
  });
  function genreOf(raw) {
    const name = String(raw ?? "").trim();
    if (!name) return { key: "other", label: "その他" };
    const lower = name.toLowerCase();
    if (Object.prototype.hasOwnProperty.call(GENRES, lower)) return GENRES[lower];
    const key = [...lower].map((ch) => (/[a-z0-9]/.test(ch) ? ch : `-${ch.codePointAt(0).toString(36)}`)).join("").slice(0, 60);
    return { key: `raw-${key}`, label: name };
  }

  /* ---------- headlines ----------
     "v0.1.8 夜明けモード" → version pill + title.
     "v0.1.4" alone → the first sentence of the notes becomes the headline. */
  function splitVersion(line) {
    const match = /(^|\s)(v\d+(?:\.\d+)+[a-z0-9-]*)(?=\s|$|[、。:：])/i.exec(line);
    if (!match) return { version: "", title: line };
    const rest = (line.slice(0, match.index) + match[1] + line.slice(match.index + match[0].length))
      .replace(/^[\s:：\-–—]+/, "").replace(/\s{2,}/g, " ").trim();
    return { version: match[2], title: rest };
  }
  const OPEN = "「『（(【［[〈《";
  const CLOSE = "」』）)】］]〉》";
  function firstSentence(text) {
    const s = String(text);
    let depth = 0;
    for (let i = 0; i < s.length; i += 1) {
      const ch = s[i];
      if (OPEN.includes(ch)) depth += 1;
      else if (CLOSE.includes(ch)) depth = Math.max(0, depth - 1);
      else if (depth === 0 && /[。！？!?]/.test(ch)) {
        return { head: s.slice(0, i + (ch === "。" ? 0 : 1)).trim(), rest: s.slice(i + 1).trim() };
      }
    }
    return { head: s.trim(), rest: "" };
  }
  function headlineFromNotes(details) {
    if (!details.length) return { title: "", details };
    const line = details[0];
    const { head, rest } = firstSentence(line);
    if (head && visualLength(head) <= 30) {
      return { title: head, details: rest ? [rest, ...details.slice(1)] : details.slice(1) };
    }
    const comma = line.indexOf("、");
    if (comma >= 4 && comma <= 24) return { title: line.slice(0, comma), details };
    return { title: `${[...line].slice(0, 22).join("")}…`, details };
  }
  function readNote(item) {
    if (typeof item === "string") item = { text: item };
    if (!item || typeof item !== "object") return null;
    const lines = toLines(item.text);
    const explicitTitle = String(item.title ?? "").trim();
    if (!lines.length && !explicitTitle) return null;
    const head = explicitTitle || lines[0];
    let details = explicitTitle ? lines : lines.slice(1);
    let { version, title } = splitVersion(head);
    if (!title) ({ title, details } = headlineFromNotes(details));
    return { raw: item, version, title, details };
  }

  const ICONS = {
    arrow: '<svg class="icon-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>',
    down: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4" /></svg>',
    out: '<svg class="icon-out" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" /></svg>',
    play: '<svg class="icon-play" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" /></svg>',
    close: '<svg class="icon-close" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" /></svg>',
    check: '<svg class="icon-check" viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7" /></svg>',
    share: '<svg class="icon-share" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 10V2M5 5l3-3 3 3M3 8v5.5h10V8" /></svg>',
  };
  const brandTile = '<span class="tl-brand" aria-hidden="true"><span class="brand-symbol"><span></span><span></span><span></span></span></span>';

  /* ---------- normalise data ---------- */
  const rawGames = Array.isArray(data.games) ? data.games.filter((g) => g && typeof g === "object") : [];
  const usedSlugs = new Set();
  const games = rawGames.map((raw, index) => {
    const url = safeUrl(raw.url);
    let slug = url.replace(/[?#].*$/, "").replace(/\/+$/, "").split("/").pop() || "";
    slug = slug.toLowerCase().replace(/[^a-z0-9_-]/g, "") || `game-${index + 1}`;
    if (!url) slug = `game-${index + 1}`;
    while (usedSlugs.has(slug)) slug = `${slug}-${index + 1}`;
    usedSlugs.add(slug);

    const title = String(raw.title ?? "").trim() || "タイトル未定";
    const list = Array.isArray(raw.updates) ? raw.updates : [];
    const updates = list
      .map((item, n) => {
        const note = readNote(item);
        if (!note) return null;
        const date = parseDate(note.raw.date);
        /* Ids count from the oldest item, so adding a new update on top never changes old links. */
        return { n, stable: list.length - 1 - n, date, dateKey: date ? date.key : "00000000", version: note.version, title: note.title || "アップデート", details: note.details };
      })
      .filter(Boolean)
      .sort((a, b) => b.dateKey.localeCompare(a.dateKey) || a.n - b.n);

    return {
      index,
      no: `No.${pad(index + 1)}`,
      slug,
      title,
      url,
      blurb: String(raw.blurb ?? "").trim(),
      cover: safeAsset(raw.cover),
      coverLarge: safeAsset(raw.coverLarge),
      coverAlt: String(raw.coverAlt ?? "").trim() || title,
      coverPosition: safePosition(raw.coverPosition),
      genre: genreOf(raw.genre),
      featured: Boolean(raw.featured),
      spotlight: Boolean(raw.spotlight),
      mobile: raw.mobile !== false,
      released: parseDate(raw.released),
      updates,
      latest: updates[0] || null,
    };
  });
  const bySlug = new Map(games.map((game) => [game.slug, game]));

  /* Timeline entries: every update, every release, every studio post. */
  const entries = [];
  games.forEach((game) => {
    game.updates.forEach((update) => {
      entries.push({
        type: "update", id: `upd-${game.slug}-${update.stable}`, game, date: update.date, dateKey: update.dateKey,
        version: update.version, title: update.title, details: update.details, source: 1,
      });
    });
    if (game.released) {
      entries.push({
        type: "release", id: `rel-${game.slug}`, game, date: game.released, dateKey: game.released.key,
        version: "", title: `「${game.title}」を公開しました`, details: game.blurb ? [plain(game.blurb)] : [], source: 2,
      });
    }
  });
  (Array.isArray(data.news) ? data.news : []).forEach((item, i, all) => {
    const note = readNote(item);
    if (!note) return;
    const date = parseDate(note.raw.date);
    entries.push({
      type: "news", id: `news-${all.length - 1 - i}`, game: null, date, dateKey: date ? date.key : "00000000",
      version: note.version, title: note.title || "おしらせ", details: note.details, url: safeUrl(note.raw.url), source: 0,
    });
  });
  entries.forEach((entry, order) => { entry.order = order; });
  /* Same-day order: studio news, then game updates, then releases. */
  entries.sort((a, b) => b.dateKey.localeCompare(a.dateKey) || a.source - b.source || a.order - b.order);
  const entryById = new Map(entries.map((entry) => [entry.id, entry]));
  const historyFor = (game) => entries.filter((entry) => entry.game === game);

  const TYPE_LABEL = { update: "アップデート", release: "新作公開", news: "おしらせ" };
  const WHAT_LABEL = { update: "何が変わった？", release: "どんなゲーム？", news: "内容" };

  /* ---------- small renderers ---------- */
  /* coverLarge (optional, about 1600px wide) is offered to big frames and
     high-density screens through srcset; the small cover stays the fallback. */
  const SIZES = {
    card: "(max-width: 600px) 34vw, (max-width: 1180px) 50vw, 33vw",
    poster: "(max-width: 960px) 100vw, 56vw",
    detail: "(max-width: 960px) 100vw, 60vw",
    thumb: "200px",
  };
  const srcsetAttr = (game, sizes) => (game.coverLarge
    ? ` srcset="${esc(game.cover)} 640w, ${esc(game.coverLarge)} 1600w" sizes="${sizes}"`
    : "");
  const coverImg = (game, { cls = "", alt = "", width = 1600, height = 1000, tint = false, sizes = "" } = {}) => {
    if (!game.cover) return "";
    const style = game.coverPosition ? ` style="object-position:${esc(game.coverPosition)}"` : "";
    return `<img${cls ? ` class="${cls}"` : ""} src="${esc(game.cover)}"${sizes ? srcsetAttr(game, sizes) : ""} alt="${esc(alt)}" width="${width}" height="${height}" loading="lazy" decoding="async"${tint ? " data-tint" : ""}${style} />`;
  };
  /* A frame that fills with the cover when the shapes match, and otherwise
     letterboxes on a colour-carrying blur of the same image. */
  const fitFrame = (game, { cls = "", mode = "fixed", ratio = "1.3333", alt = "", eager = false, sizes = SIZES.poster } = {}) => {
    const load = eager ? "" : ' loading="lazy"';
    const inner = game.cover
      ? `<img class="fit-fill" src="${esc(game.cover)}" alt="" aria-hidden="true" width="1600" height="1200"${load} decoding="async" />`
        + `<img class="fit-main" src="${esc(game.cover)}"${srcsetAttr(game, sizes)} alt="${esc(alt)}" width="1600" height="1200"${load} decoding="async" data-tint />`
      : `<span class="fit-empty">${brandTile}</span>`;
    return `<span class="fit-frame is-cover ${cls}" data-fit="${mode}" data-ratio="${ratio}">${inner}</span>`;
  };
  const playLink = (game, label, extra = "", variant = "btn-primary") => (game.url
    ? `<a class="btn ${variant} ${extra}" href="${esc(game.url)}" target="_blank" rel="noopener noreferrer">${ICONS.play}<span>${label}</span>${ICONS.out}<span class="sr-only">（${esc(game.title)}・itch.io が新しいタブで開きます）</span></a>`
    : "");
  const bigPlay = (game, extra = "") => (game.url
    ? `<a class="btn btn-primary btn-xl d-play ${extra}" href="${esc(game.url)}" target="_blank" rel="noopener noreferrer">
        <span class="d-play-main">${ICONS.play}<span>itch.io であそぶ</span>${ICONS.out}</span>
        <span class="d-play-sub">新しいタブで開きます</span><span class="sr-only">（${esc(game.title)}）</span>
      </a>`
    : "");
  /* In the detail the badge is a link down to the update history. */
  const updBadge = (game, asLink = false) => {
    if (!game.latest) return "";
    const p = game.latest.date;
    const when = p ? (fmt.rel(p) || `${p.m}月${p.d}日`) : "";
    const cls = `upd-badge${isFresh(p) ? " is-fresh" : ""}`;
    const inner = `<i aria-hidden="true"></i>更新あり${when ? `<span aria-hidden="true">・</span>${esc(when)}` : ""}`;
    return asLink
      ? `<a class="${cls} is-link" href="#game/${esc(game.slug)}/log">${inner}<span class="sr-only">（更新の記録へ）</span></a>`
      : `<span class="${cls}">${inner}</span>`;
  };
  const verPill = (version) => (version ? `<span class="ver">${esc(version)}</span>` : "");

  /* Keyboard use: script-moved focus (a linked update, a revealed news card)
     shows its ring only then, never on a cold shared link or after a tap. */
  const rootEl = document.documentElement;
  document.addEventListener("keydown", (event) => {
    if (/^(Tab|Enter| |Spacebar|Arrow|Page|Home|End|Escape)/.test(event.key)) rootEl.classList.add("kbd-nav");
  }, true);
  document.addEventListener("pointerdown", () => rootEl.classList.remove("kbd-nav"), true);

  /* ---------- live region + toast ----------
     A modal <dialog> makes the rest of the page inert, so while it is open the
     toast and the announcement move into the dialog. */
  const srStatus = $("#sr-status");
  const dialogStatus = $("#detail-status");
  const detailDialog = $("#detail");
  const inDialog = () => Boolean(detailDialog && detailDialog.open);
  let announceTimer;
  function announce(message) {
    const region = inDialog() && dialogStatus ? dialogStatus : srStatus;
    if (!region) return;
    [srStatus, dialogStatus].forEach((el) => { if (el) el.textContent = ""; });
    clearTimeout(announceTimer);
    announceTimer = setTimeout(() => { region.textContent = message; }, 60);
  }
  const toastEl = $("#toast");
  const toastHome = toastEl ? toastEl.parentNode : null;
  let toastTimer;
  if (toastEl) toastEl.addEventListener("click", () => toastEl.classList.remove("is-visible"));
  function toast(message, ms = 2600) {
    announce(message);
    if (!toastEl) return;
    const host = inDialog() ? detailDialog : toastHome;
    if (host && toastEl.parentNode !== host) host.appendChild(toastEl);
    toastEl.textContent = message;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), ms);
  }

  /* ---------- studio links + counts ---------- */
  $$("[data-studio-link]").forEach((link) => {
    const url = safeUrl(studio[link.dataset.studioLink]);
    if (url) link.href = url;
  });
  const setText = (selector, value) => { $$(selector).forEach((el) => { el.textContent = value; }); };
  /* The static counts in the HTML are kept only when featured.js failed to load;
     a loaded but empty list hides them instead of promising 13 games. */
  if (loaded) {
    const count = String(games.length);
    setText("#library-count", count);
    setText("#hero-count", count);
    setText("[data-count]", count);
    const mobileCount = games.filter((game) => game.mobile).length;
    const allMobile = mobileCount === games.length;
    setText("#hero-mobile", allMobile ? "スマホOK" : `スマホ対応 ${mobileCount}作品`);
    setText("#library-mobile", allMobile ? "スマホでもパソコンでも遊べます。" : `うち${mobileCount}作品はスマホでも遊べます。`);
    setText("#guide-mobile", allMobile ? "スマホでもパソコンでも遊べます。" : "スマホでもパソコンでも遊べます（一部パソコン向けの作品があります）。");
    if (!games.length) {
      $$("#hero-count, [data-count], #library-count").forEach((el) => {
        const holder = el.closest("li, [data-count-holder]") || el.parentElement;
        if (holder) holder.hidden = true;
      });
    }
  }
  setText("#year", String(new Date().getFullYear()));
  const itchHome = safeUrl(studio.itch) || "https://blitastxyz.itch.io/";
  /* featured.js loaded but has a typing slip (a missing comma or quote): say so
     instead of blaming the visitor's connection. The owner (on a local preview)
     also gets the line number; the inline listener in index.html records it. */
  const dataError = Number(window.__featuredError) || 0;
  const isLocal = /^(localhost|127\.0\.0\.1|\[::1\]|)$/.test(location.hostname) || location.protocol === "file:";
  const failReason = (what) => (dataError
    ? (isLocal
      ? `featured.js の ${dataError} 行目あたりに書きまちがいがあります。<br />カンマ（,）や引用符（"）のぬけ・多すぎを確かめて、保存してから再読み込みしてください。`
      : `${what}を表示できませんでした。<br />サイトの不具合です。しばらくしてから、もう一度ご覧ください。`)
    : `${what}を読み込めませんでした。<br />電波のよい場所で、ページを再読み込みしてください。`);
  const loadFailHtml = (what) => `<p class="load-fail-text">${failReason(what)}</p>
    <p class="load-fail-actions"><button class="btn btn-ghost" type="button" data-reload>再読み込み</button>
    <a class="btn btn-soft" href="${esc(itchHome)}" target="_blank" rel="noopener noreferrer">itch.io でゲームを見る${ICONS.out}<span class="sr-only">（新しいタブで開きます）</span></a></p>`;
  if (dataError) console.error(`[BLITAST] featured.js line ${dataError}: the game data could not be read (check commas and quotes).`);
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-reload]")) location.reload();
  });

  /* ---------- marquee ---------- */
  const marquee = $("#marquee-track");
  if (marquee && games.length) {
    const run = games.map((g) => `<span>${esc(g.title)}</span><span class="mq-star">✦</span>`).join("");
    marquee.innerHTML = run + run;
  } else if (marquee && marquee.parentElement) {
    marquee.parentElement.hidden = true;
  }

  /* ---------- showcase: featured + spotlight ---------- */
  const featured = games.find((g) => g.featured) || games[0] || null;
  const spotlight = games.find((g) => g.spotlight && g !== featured) || null;

  function featureBlock(game, kind) {
    const isSpot = kind === "spotlight";
    const label = isSpot
      ? '<span class="fl-ja"><i aria-hidden="true"></i>本格開発中</span><span class="fl-en" aria-hidden="true">In Development</span>'
      : '<span class="fl-ja"><i aria-hidden="true"></i>おすすめ</span><span class="fl-en" aria-hidden="true">Featured</span>';
    const history = historyFor(game);
    let updates = "";
    if (isSpot && game.updates.length) {
      updates = `<div class="feature-updates">
        <p class="fu-head">最近のアップデート<span aria-hidden="true">Latest notes</span></p>
        <ul class="fu-list">${game.updates.slice(0, 3).map((u) => `<li>${verPill(u.version)}<span class="fu-title">${kern(u.title)}</span>${dateHtml(u.date, "fu-date")}</li>`).join("")}</ul>
        <a class="text-link" href="#game/${esc(game.slug)}/log" aria-haspopup="dialog">更新の記録をすべて読む（${history.length}件）</a>
      </div>`;
    }
    const caption = game.latest && game.latest.date ? `最終更新 ${esc(fmt.full(game.latest.date))}` : "無料・ブラウザで遊べる";
    return `<article class="feature feature-${kind}" data-reveal data-anim data-glow aria-labelledby="feature-${esc(game.slug)}">
      <div class="feature-ambient" aria-hidden="true">${game.cover ? `<img src="${esc(game.cover)}" alt="" width="1600" height="1200" loading="lazy" decoding="async" />` : ""}</div>
      <div class="feature-inner shell">
        <div class="feature-copy">
          <p class="feature-label">${label}</p>
          <p class="feature-genre">${esc(game.genre.label)}</p>
          <h3 class="feature-title${lengthClass(game.title)}" id="feature-${esc(game.slug)}">${titleHtml(game.title)}</h3>
          ${game.blurb ? `<p ${blurbAttrs(game.blurb, "feature-blurb")}>${phraseHtml(game.blurb)}</p>` : ""}
          <div class="feature-actions">
            ${playLink(game, "あそぶ", "btn-lg")}
            <a class="btn btn-ghost btn-lg" href="#game/${esc(game.slug)}" aria-haspopup="dialog">くわしく見る<span class="sr-only">（${esc(game.title)}）</span></a>
          </div>
          ${game.url ? `<p class="new-tab-hint">${ICONS.out}<span>「あそぶ」を押すと、<span class="nowrap">itch.io（ゲームのサイト）が</span><strong>新しいタブ</strong>で開きます</span></p>` : ""}
          ${updates}
        </div>
        <a class="feature-poster" href="#game/${esc(game.slug)}" aria-haspopup="dialog" tabindex="-1" aria-label="${esc(game.title)} のくわしい説明を見る">
          ${isSpot ? '<span class="poster-aura" aria-hidden="true"></span>' : ""}
          <span class="poster-frame">
            ${fitFrame(game, { cls: "poster-fit", ratio: "1.3333", alt: game.coverAlt, sizes: SIZES.poster })}
            ${isSpot ? '<span class="poster-ring" aria-hidden="true"></span>' : ""}
            <span class="poster-open" aria-hidden="true">くわしく見る ${ICONS.arrow}</span>
          </span>
          <span class="poster-caption" aria-hidden="true"><span>${esc(game.no)} — ${esc(game.title)}</span><span>${caption}</span></span>
        </a>
      </div>
    </article>`;
  }
  const showcase = $("#showcase");
  if (showcase) {
    showcase.innerHTML = [featured && featureBlock(featured, "featured"), spotlight && featureBlock(spotlight, "spotlight")]
      .filter(Boolean).join("");
  }

  /* ---------- grid + filters ---------- */
  const grid = $("#game-grid");
  function cardHtml(game, position) {
    const flag = game === spotlight
      ? '<span class="card-flag"><i aria-hidden="true"></i>本格開発中</span>'
      : game === featured ? '<span class="card-flag is-featured"><i aria-hidden="true"></i>おすすめ</span>' : "";
    return `<li class="card-item" data-genre="${esc(game.genre.key)}" data-reveal style="--d:${(position % 3) * 0.08}s">
      <article class="card" data-glow>
        <div class="card-media">${coverImg(game, { tint: true, sizes: SIZES.card })}${game.cover ? "" : brandTile}${flag}</div>
        <div class="card-body">
          <p class="card-meta"><span class="card-no" aria-hidden="true">${esc(game.no)}</span><span class="card-genre">${esc(game.genre.label)}</span>${game.mobile ? "" : '<span class="card-pc">パソコン向け</span>'}${updBadge(game)}</p>
          <h4 class="card-title${lengthClass(game.title)}"><a class="card-link" href="#game/${esc(game.slug)}" aria-haspopup="dialog">${titleHtml(game.title)}</a></h4>
          ${game.blurb ? `<p ${blurbAttrs(game.blurb, "card-blurb")}>${phraseHtml(game.blurb)}</p>` : ""}
        </div>
        <div class="card-actions">
          ${playLink(game, "あそぶ", "btn-sm card-play", "btn-play")}
          <a class="btn btn-quiet btn-sm card-detail" href="#game/${esc(game.slug)}" aria-haspopup="dialog">くわしく<span class="sr-only">（${esc(game.title)}の説明と更新の記録）</span>${ICONS.arrow}</a>
        </div>
      </article>
    </li>`;
  }
  const itchUrl = itchHome;
  /* The end tile fans a few covers so it never reads as an empty slab. */
  const fanPicks = games.filter((g) => g.cover).slice(-5);
  const endFan = fanPicks.length >= 3
    ? `<span class="end-fan" aria-hidden="true">${fanPicks.map((g, i) => `<span class="end-card" style="--i:${i - (fanPicks.length - 1) / 2};--a:${Math.abs(i - (fanPicks.length - 1) / 2)}"><img src="${esc(g.cover)}" alt="" width="640" height="480" loading="lazy" decoding="async"${g.coverPosition ? ` style="object-position:${esc(g.coverPosition)}"` : ""} /></span>`).join("")}</span>`
    : "";
  const endTile = `<li class="grid-end" id="grid-end">
      <a class="end-tile" href="${esc(itchUrl)}" target="_blank" rel="noopener noreferrer">
        ${endFan}
        <span class="end-en" aria-hidden="true">More worlds on itch.io</span>
        <span class="end-ja">${kern("itch.io の作品ページで、")}<br />すべてのゲームを見る<span class="sr-only">（新しいタブで開きます）</span></span>
        <span class="end-url" aria-hidden="true">${esc(itchUrl.replace(/^https?:\/\//, "").replace(/\/$/, ""))}${ICONS.out}</span>
      </a>
    </li>`;
  function fitEndTile(count) {
    const end = document.getElementById("grid-end");
    if (!end) return;
    end.style.setProperty("--span3", String(3 - (count % 3) || 3));
    end.style.setProperty("--span2", String(2 - (count % 2) || 2));
  }
  if (grid) {
    grid.innerHTML = games.length
      ? games.map(cardHtml).join("") + endTile
      : loaded
        ? '<li class="grid-empty">ゲームはまだ登録されていません。</li>'
        : `<li class="grid-empty load-fail">${loadFailHtml("ゲーム一覧")}</li>`;
    fitEndTile(games.length);
  }

  const filters = $("#filters");
  const filterStatus = $("#filter-status");
  const genreCounts = new Map();
  games.forEach((game) => {
    const hit = genreCounts.get(game.genre.key) || { ...game.genre, count: 0, first: game.index };
    hit.count += 1;
    genreCounts.set(game.genre.key, hit);
  });
  const statusText = (key, shown) => (key === "all"
    ? `すべてのゲーム（${shown}作品）を表示しています`
    : `「${genreCounts.get(key).label}」のゲーム（${shown}作品）を表示しています`);
  /* speak: animate + announce. announce: false keeps the animation but leaves the
     sentence to a focus move (so a screen reader does not hear it twice). */
  let currentFilter = "all";
  const statusHtml = (text) => {
    const tail = "を表示しています";
    return text.endsWith(tail) ? `${kern(text.slice(0, -tail.length), true)}<span class="nowrap">${tail}</span>` : kern(text);
  };
  function applyFilter(key, { speak = true, announce: say = speak } = {}) {
    if (key !== "all" && !genreCounts.has(key)) key = "all";
    currentFilter = key;
    if (filters) $$(".chip", filters).forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.filter === key)));
    let shown = 0;
    if (grid) {
      $$(".card-item", grid).forEach((item) => {
        const match = key === "all" || item.dataset.genre === key;
        item.hidden = !match;
        item.classList.remove("is-entering", "reveal-pending");
        if (match) {
          item.style.setProperty("--d", `${Math.min(shown, 8) * 0.05}s`);
          if (speak && !reduceMotion.matches) { void item.offsetWidth; item.classList.add("is-entering"); }
          shown += 1;
        }
      });
    }
    fitEndTile(shown);
    const text = statusText(key, shown);
    if (filterStatus) {
      filterStatus.innerHTML = `<span class="fs-body"><span class="fs-text">${statusHtml(text)}</span>${key !== "all" ? '<button class="status-reset" type="button" data-filter-reset>すべて表示にもどす</button>' : ""}</span>`;
    }
    if (say) announce(text);
  }
  if (filters && games.length) {
    const genreList = [...genreCounts.values()].sort((a, b) => b.count - a.count || a.first - b.first);
    const chip = (key, label, count, pressed) => `<button class="chip" type="button" data-filter="${esc(key)}" aria-pressed="${pressed}">${esc(label)}<span class="chip-count" aria-hidden="true">${count}</span><span class="sr-only">（${count}作品）</span></button>`;
    filters.innerHTML = chip("all", "すべて", games.length, true) + (genreList.length > 1 ? genreList.map((g) => chip(g.key, g.label, g.count, false)).join("") : "");
    filters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (button) applyFilter(button.dataset.filter);
    });
    if (filterStatus) filterStatus.innerHTML = `<span class="fs-body"><span class="fs-text">${statusHtml(statusText("all", games.length))}</span></span>`;
  } else if (filterStatus) {
    filterStatus.hidden = true;
  }
  if (filterStatus) {
    filterStatus.addEventListener("click", (event) => {
      if (event.target.closest("[data-filter-reset]")) { applyFilter("all"); const all = filters && $('[data-filter="all"]', filters); if (all) all.focus(); }
    });
  }
  /* In-page jumps made by script leave a history entry, like the menu links do,
     so the browser's Back returns to where the visitor was instead of leaving. */
  function markJump(hash) {
    if (location.hash === hash) return;
    try {
      // remember the filter and scroll of the entry being left, so Back restores both
      history.replaceState({ ...(history.state || {}), blitastFilter: currentFilter, blitastY: window.scrollY }, "");
      history.pushState(null, "", hash);
    } catch (_) { /* file:// or sandboxed */ }
  }
  window.addEventListener("popstate", (event) => {
    const saved = event.state;
    if (!saved || typeof saved.blitastFilter !== "string" || saved.blitastFilter === currentFilter) return;
    applyFilter(saved.blitastFilter, { speak: false });
    if (typeof saved.blitastY === "number") requestAnimationFrame(() => jumpTo(saved.blitastY));
  });
  /* 「こども向けを見る」: apply the filter, then bring the grid into view. */
  $$("[data-set-filter]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!games.length) return;
      event.preventDefault();
      markJump("#all-games");
      applyFilter(link.dataset.setFilter, { announce: false });
      const head = document.getElementById("all-games");
      if (head) head.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
      if (filterStatus) filterStatus.focus({ preventScroll: true });
    });
  });

  /* ---------- timeline ---------- */
  const timeline = $("#timeline");
  const moreWrap = $("#timeline-more-wrap");
  const moreButton = $("#timeline-more");
  const PAGE = 4;
  let visibleCount = PAGE;

  function miniThumb(entry, cls) {
    if (entry.game && entry.game.cover) return `<span class="${cls}">${coverImg(entry.game, { width: 640, height: 400 })}</span>`;
    return `<span class="${cls}">${brandTile}</span>`;
  }
  function entryHtml(entry, i) {
    const p = entry.date;
    const runStart = i === 0 || entries[i - 1].dateKey !== entry.dateKey;
    const game = entry.game;
    const summary = entry.details[0] || "";
    /* A one-line note gets its 「全文を読む」 only when the 2-line clamp actually
       cuts it (checked after layout in syncClamps). */
    const hasMore = entry.details.length > 1 || Boolean(summary);
    const clampOnly = entry.details.length <= 1;
    const gameName = game ? esc(game.title) : "BLITAST GAME";
    const rel = fmt.rel(p);
    const thumbInner = (game && game.cover ? coverImg(game, { width: 640, height: 400 }) : brandTile)
      + (entry.version ? `<span class="tl-thumb-ver">${esc(entry.version)}</span>` : "")
      + (entry.type === "release" ? '<span class="tl-thumb-ver">New</span>' : "");
    const thumb = game
      ? `<a class="tl-thumb" href="#game/${esc(game.slug)}" aria-haspopup="dialog" tabindex="-1" aria-hidden="true">${thumbInner}</a>`
      : `<span class="tl-thumb" aria-hidden="true">${thumbInner}</span>`;
    const gameLine = game
      ? `<a class="tl-game" href="#game/${esc(game.slug)}" aria-haspopup="dialog">${miniThumb(entry, "tl-mini")}<span>${gameName}</span><span class="sr-only">のくわしい説明を見る</span></a>`
      : `<p class="tl-game">${miniThumb(entry, "tl-mini")}<span>${gameName}</span></p>`;
    const actions = [];
    if (hasMore) {
      actions.push(`<button class="tl-btn" type="button" aria-expanded="false" aria-controls="${esc(entry.id)}-full" data-toggle-entry="${esc(entry.id)}"${clampOnly ? ` data-clamp-check${visualLength(summary) > 80 ? "" : " hidden"}` : ""}><span class="tl-btn-label">全文を読む</span><span class="plus" aria-hidden="true"></span></button>`);
    }
    if (game) {
      actions.push(`<a class="tl-btn tl-btn-game" href="#game/${esc(game.slug)}/${esc(entry.id)}" aria-haspopup="dialog">くわしく<span class="sr-only">（${gameName}の説明と更新の記録）</span>${ICONS.arrow}</a>`);
    } else if (entry.url) {
      actions.push(`<a class="tl-btn tl-btn-game" href="${esc(entry.url)}" target="_blank" rel="noopener noreferrer">くわしく見る${ICONS.out}<span class="sr-only">（新しいタブで開きます）</span></a>`);
    }
    /* The first entry of a same-day run shows the big editorial date in the
       column; on wide screens its meta line then keeps the date for screen
       readers only, so the same date is never printed twice side by side. */
    const dateCol = runStart && p
      ? `<span class="tl-md"><span class="tl-n">${p.m}</span>月<span class="tl-n">${p.d}</span>日<span class="tl-wd">${kern(`（${fmt.weekday(p)}）`)}</span></span><span class="tl-y">${p.y}年</span>${rel ? `<span class="tl-rel">${esc(rel)}</span>` : ""}`
      : "";
    return `<li class="tl-item${runStart ? " is-run-start" : ""}" id="${esc(entry.id)}" data-reveal${i >= visibleCount ? " hidden" : ""}>
      <div class="tl-date" aria-hidden="true">${dateCol}</div>
      <div class="tl-rail" aria-hidden="true"></div>
      <article class="tl-card" tabindex="-1" aria-labelledby="${esc(entry.id)}-title">
        ${thumb}
        <div class="tl-body">
          <p class="tl-meta">
            <span class="type type-${entry.type}">${TYPE_LABEL[entry.type]}</span>
            ${isFresh(p) ? '<span class="new-badge">NEW</span>' : ""}
            ${dateHtml(p, "tl-meta-date")}
          </p>
          ${gameLine}
          <h3 class="tl-title" id="${esc(entry.id)}-title">${verPill(entry.version)}<span class="tl-title-text">${kern(entry.title)}</span></h3>
          ${summary ? `<p class="tl-what" aria-hidden="true">― ${WHAT_LABEL[entry.type]}</p>` : ""}
          ${summary ? `<p class="tl-summary">${esc(summary)}</p>` : ""}
          ${hasMore ? `<div class="tl-full" id="${esc(entry.id)}-full" hidden><ul class="notes">${entry.details.map((line) => `<li>${esc(line)}</li>`).join("")}</ul></div>` : ""}
          ${actions.length ? `<div class="tl-actions">${actions.join("")}</div>` : ""}
        </div>
      </article>
    </li>`;
  }
  function syncMore() {
    if (!timeline) return;
    const items = $$(".tl-item", timeline);
    items.forEach((item, i) => {
      item.hidden = i >= visibleCount;
      item.classList.toggle("is-last", i === Math.min(visibleCount, items.length) - 1);
    });
    const remaining = items.length - visibleCount;
    if (moreWrap && moreButton) {
      moreWrap.hidden = remaining <= 0;
      moreButton.textContent = `もっと見る（あと${remaining}件）`;
    }
  }
  /* Show 「全文を読む」 on one-line notes only while the 2-line clamp cuts them. */
  function syncClamps() {
    if (!timeline) return;
    $$("[data-clamp-check]", timeline).forEach((button) => {
      if (button.getAttribute("aria-expanded") === "true") return;
      const item = button.closest(".tl-item");
      const summary = item && $(".tl-summary", item);
      if (!summary || item.hidden || !summary.getClientRects().length) return;
      button.hidden = summary.scrollHeight - summary.clientHeight <= 2;
    });
  }
  if (timeline) {
    timeline.innerHTML = entries.length
      ? entries.map(entryHtml).join("")
      : loaded
        ? '<li class="timeline-empty">まだおしらせはありません。新しいアップデートがあると、ここにのります。</li>'
        : `<li class="timeline-empty load-fail">${loadFailHtml("おしらせ")}</li>`;
    if (entries.length) syncMore();
    timeline.addEventListener("click", (event) => {
      const button = event.target.closest("[data-toggle-entry]");
      if (!button) return;
      const open = button.getAttribute("aria-expanded") !== "true";
      /* Closing a long note: keep the button where the finger is, so the reader
         stays on this entry instead of being thrown to the next one. */
      const before = button.getBoundingClientRect().top;
      setEntryOpen(button.dataset.toggleEntry, open);
      if (!open) {
        const shift = button.getBoundingClientRect().top - before;
        if (Math.abs(shift) > 1) jumpBy(shift);
      }
    });
    syncClamps();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncClamps).catch(() => {});
    let clampTimer;
    window.addEventListener("resize", () => { clearTimeout(clampTimer); clampTimer = setTimeout(syncClamps, 180); }, { passive: true });
  }
  const newsLast = $("#news-last");
  if (newsLast) newsLast.innerHTML = entries.length && entries[0].date ? dateHtml(entries[0].date) : "—";
  setText("#news-total", String(entries.length));
  if (!loaded) { const stats = $(".ns-stats"); if (stats) stats.hidden = true; }

  if (moreButton) {
    moreButton.addEventListener("click", () => {
      const firstNew = visibleCount;
      visibleCount += 10;
      syncMore();
      syncClamps();
      const target = $$(".tl-item", timeline)[firstNew];
      const card = target && $(".tl-card", target);
      if (card) card.focus({ preventScroll: false });
    });
  }
  function setEntryOpen(id, open) {
    const item = document.getElementById(id);
    if (!item) return;
    const button = $("[data-toggle-entry]", item);
    const full = document.getElementById(`${id}-full`);
    const summary = $(".tl-summary", item);
    if (!button || !full) return;
    if (open && button.hidden) return; /* nothing is cut off, so nothing to expand */
    button.setAttribute("aria-expanded", String(open));
    $(".tl-btn-label", button).textContent = open ? "全文をとじる" : "全文を読む";
    full.hidden = !open;
    if (summary) summary.hidden = open;
  }
  function revealEntry(id, { expand = true, focus = true } = {}) {
    const item = document.getElementById(id);
    if (!item || !timeline || !timeline.contains(item)) return false;
    const index = $$(".tl-item", timeline).indexOf(item);
    if (index >= visibleCount) { visibleCount = index + 1; syncMore(); syncClamps(); }
    item.classList.remove("reveal-pending");
    item.classList.add("is-revealed");
    if (expand) setEntryOpen(id, true);
    const card = $(".tl-card", item);
    item.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    if (card) {
      if (focus) card.focus({ preventScroll: true });
      card.classList.remove("is-flash");
      void card.offsetWidth;
      card.classList.add("is-flash");
    }
    return true;
  }

  /* ---------- hero latest chip ---------- */
  const latestSlot = $("#latest-slot");
  const latestEntry = entries.find((e) => e.game) || entries[0];
  const CHIP_LABEL = { update: "最新アップデート", release: "新作公開", news: "最新のおしらせ" };
  let latestChip = null;
  if (latestSlot && latestEntry) {
    const p = latestEntry.date;
    const who = latestEntry.game ? latestEntry.game.title : "BLITAST GAME";
    latestSlot.innerHTML = `<a class="latest-chip" href="#${esc(latestEntry.id)}" data-jump-entry="${esc(latestEntry.id)}">
      ${miniThumb(latestEntry, "lc-thumb")}
      <span class="lc-body">
        <span class="lc-top">${CHIP_LABEL[latestEntry.type]}${isFresh(p) ? '<span class="new-badge">NEW</span>' : ""}<span class="lc-date-full">${dateHtml(p)}</span>${p ? `<span class="lc-date-short">${esc(fmt.rel(p) || `${p.m}月${p.d}日`)}</span>` : ""}</span>
        <span class="lc-title"><b>${esc(who)}</b>${verPill(latestEntry.version)}<span class="lc-headline">${kern(latestEntry.title)}</span></span>
      </span>
      <span class="lc-arrow" aria-hidden="true">${ICONS.down}</span>
    </a>`;
    latestChip = $(".latest-chip", latestSlot);
    latestSlot.addEventListener("click", (event) => {
      const link = event.target.closest("[data-jump-entry]");
      if (!link) return;
      const id = link.dataset.jumpEntry;
      const item = document.getElementById(id);
      if (!item || !timeline || !timeline.contains(item)) return;
      event.preventDefault();
      markJump(`#${id}`);
      revealEntry(id);
    });
  }
  /* Visitors whose system asks for reduced motion see a still background; this button lets them
     opt in to the moving one (remembered in this browser). */
  const motionToggle = $("#motion-toggle");
  if (motionToggle && reduceMotion.matches) {
    const label = $("#motion-toggle-label");
    const stored = () => { try { return localStorage.getItem("blitast-motion") === "on"; } catch (_) { return false; } };
    const paint = (on) => {
      motionToggle.setAttribute("aria-pressed", String(on));
      if (label) label.textContent = on ? "背景を止める" : "背景を動かす";
    };
    paint(stored());
    motionToggle.hidden = false;
    motionToggle.addEventListener("click", () => {
      const on = motionToggle.getAttribute("aria-pressed") !== "true";
      try { localStorage.setItem("blitast-motion", on ? "on" : "off"); } catch (_) { /* this visit only */ }
      paint(on);
      window.dispatchEvent(new CustomEvent("blitast:motion", { detail: { on } }));
    });
  }

  /* The 3D scene fires "blitast:pulse" on every core pulse: sweep the chip in sync. */
  const heroEl = $(".hero");
  window.addEventListener("blitast:pulse", () => {
    if (!latestChip || reduceMotion.matches || document.hidden) return;
    if (heroEl && heroEl.classList.contains("is-offscreen")) return;
    latestChip.classList.remove("is-pulse");
    void latestChip.offsetWidth;
    latestChip.classList.add("is-pulse");
  });
  if (latestChip) {
    latestChip.addEventListener("animationend", (event) => {
      if (event.animationName === "chip-sweep") latestChip.classList.remove("is-pulse");
    });
  }

  /* ---------- cover colour + frame fitting ---------- */
  const glowCache = new Map();
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h /= 6;
    }
    return [h, s, l];
  }
  function hslToRgb(h, s, l) {
    if (!s) { const v = Math.round(l * 255); return [v, v, v]; }
    const hue = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1 / 6) return p + (q - p) * 6 * t; if (t < 1 / 2) return q; if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6; return p; };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    return [hue(p, q, h + 1 / 3), hue(p, q, h), hue(p, q, h - 1 / 3)].map((v) => Math.round(v * 255));
  }
  function sampleGlow(image) {
    const w = 24;
    const h = 16;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return "";
    ctx.drawImage(image, 0, 0, w, h);
    const px = ctx.getImageData(0, 0, w, h).data;
    let r = 0; let g = 0; let b = 0; let total = 0;
    for (let i = 0; i < px.length; i += 4) {
      const R = px[i]; const G = px[i + 1]; const B = px[i + 2];
      const max = Math.max(R, G, B);
      const min = Math.min(R, G, B);
      const sat = max ? (max - min) / max : 0;
      const weight = 0.05 + sat * sat * 2 * (max > 40 ? 1 : 0.15);
      r += R * weight; g += G * weight; b += B * weight; total += weight;
    }
    if (!total) return "";
    const [hh, ss, ll] = rgbToHsl(r / total, g / total, b / total);
    return hslToRgb(hh, Math.min(0.85, Math.max(0.42, ss * 1.25)), Math.min(0.7, Math.max(0.58, ll))).join(" ");
  }
  function fitToFrame(frame, image) {
    const r = image.naturalWidth / image.naturalHeight;
    if (!r || !Number.isFinite(r)) return;
    let R;
    if (frame.dataset.fit === "auto") {
      R = Math.min(16 / 9, Math.max(4 / 3, r));
      frame.style.setProperty("--ar", R.toFixed(4));
    } else {
      R = Number(frame.dataset.ratio) || 4 / 3;
    }
    const close = Math.abs(r / R - 1) <= 0.08;
    frame.classList.toggle("is-cover", close);
    frame.classList.toggle("is-contain", !close);
  }
  function prepareMedia(scope) {
    $$("img[data-tint]", scope).forEach((image) => {
      const run = () => {
        const frame = image.closest("[data-fit]");
        if (frame) fitToFrame(frame, image);
        const src = image.getAttribute("src");
        let rgb = glowCache.get(src);
        if (rgb === undefined) {
          try { rgb = sampleGlow(image); } catch (_) { rgb = ""; }
          glowCache.set(src, rgb);
        }
        if (!rgb) return;
        if (frame) frame.style.setProperty("--glow", rgb);
        const host = image.closest("[data-glow]");
        if (host) host.style.setProperty("--glow", rgb);
      };
      /* A tint is decoration: it must never stop the caller (the router opens
         the detail through here, synchronously when the cover is cached). */
      const safeRun = () => { try { run(); } catch (_) { /* keep the plain frame */ } };
      if (image.complete && image.naturalWidth) safeRun();
      else image.addEventListener("load", safeRun, { once: true });
    });
  }

  /* ---------- detail dialog ---------- */
  const dialog = $("#detail");
  const sheet = $("#detail-sheet");
  const STATE_KEY = "blitastDetail";
  const baseTitle = document.title;
  let lastFocus = null;
  let currentSlug = "";
  let pendingScroll = "";
  let suppressUntil = 0;
  let openedAt = -1e9;

  function relatedHtml(game) {
    const same = games.filter((g) => g !== game && g.genre.key === game.genre.key);
    const others = games.filter((g) => g !== game && g.genre.key !== game.genre.key);
    const picks = [...same, ...others].slice(0, 3);
    if (!picks.length) return "";
    /* The genre goes in the heading only when every pick really is that genre. */
    const heading = picks.every((g) => g.genre.key === game.genre.key) ? `${kern(game.genre.label)}のほかのゲーム` : "ほかのゲーム";
    return `<section class="d-related" aria-labelledby="d-related-title">
      <h3 class="d-sub" id="d-related-title">${heading}</h3>
      <ul class="d-related-list">${picks.map((g) => `<li><a class="d-related-link" href="#game/${esc(g.slug)}" aria-haspopup="dialog" data-related>
        <span class="d-related-media">${coverImg(g, { width: 640, height: 400 })}${g.cover ? "" : brandTile}</span>
        <span class="d-related-body"><span class="d-related-genre">${esc(g.genre.label)}</span><span class="d-related-title">${titleHtml(g.title)}</span></span>
      </a></li>`).join("")}</ul>
    </section>`;
  }

  function detailHtml(game) {
    const history = historyFor(game);
    const log = history.length
      ? `<ol class="d-entries">${history.map((entry) => `<li class="d-entry" id="d-${esc(entry.id)}" tabindex="-1">
          <p class="d-entry-head">${dateHtml(entry.date, "d-date")}<span class="type type-${entry.type}">${TYPE_LABEL[entry.type]}</span>${isFresh(entry.date) ? '<span class="new-badge">NEW</span>' : ""}</p>
          <h4 class="d-entry-title">${verPill(entry.version)}<span>${kern(entry.title)}</span></h4>
          ${entry.details.length ? `<p class="tl-what" aria-hidden="true">― ${WHAT_LABEL[entry.type]}</p><ul class="notes">${entry.details.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>` : ""}
        </li>`).join("")}</ol>`
      : '<p class="d-empty">まだ更新の記録はありません。<br />アップデートがあると、ここと「おしらせ」にのります。</p>';
    const flag = game === spotlight ? '<span class="d-flag is-dev"><i aria-hidden="true"></i>本格開発中</span>'
      : game === featured ? '<span class="d-flag"><i aria-hidden="true"></i>おすすめ</span>' : "";
    const checklist = game.url ? `<ul class="d-check" aria-label="遊ぶ前に">
        <li>${ICONS.check}<span>無料・会員登録なし</span></li>
        <li>${ICONS.check}<span>${game.mobile ? "パソコン・スマホのブラウザで遊べます" : "パソコン向けのゲームです（マウスやキーボードで遊びます）"}</span></li>
        <li>${ICONS.check}<span>itch.io が開いたら、ゲーム画面か<span class="nowrap">「Run game」</span>を<span class="nowrap">押すとスタート</span></span></li>
      </ul>
      <a class="text-link d-guide" href="#guide" data-guide-link>はじめての方へ（遊びかたの説明）</a>`
      : '<p class="d-empty">このゲームの遊べるページは準備中です。</p>';
    return `<div class="d-bar">
        <p class="d-crumb">ゲームの詳細<span aria-hidden="true">${esc(game.no)}</span></p>
        <button class="d-close" type="button" data-close>${ICONS.close}とじる</button>
      </div>
      <div class="d-top" data-glow>
        ${fitFrame(game, { cls: "d-cover", mode: "auto", alt: game.coverAlt, eager: true, sizes: SIZES.detail })}
        <div class="d-info">
          <p class="d-meta"><span class="d-genre">${esc(game.genre.label)}</span>${flag}${updBadge(game, true)}</p>
          <h2 class="d-title${lengthClass(game.title)}" id="detail-title" tabindex="-1">${titleHtml(game.title)}</h2>
          ${game.blurb ? `<p ${blurbAttrs(game.blurb, "d-blurb")}>${phraseHtml(game.blurb)}</p>` : ""}
          ${game.url ? `<div class="d-play-desktop">${bigPlay(game)}</div>` : ""}
          ${checklist}
        </div>
      </div>
      <div class="d-body">
        <section class="d-log" id="d-log" tabindex="-1" aria-labelledby="d-log-title">
          <div class="d-log-head"><h3 class="d-sub" id="d-log-title">更新の記録</h3><span>${history.length ? `全${history.length}件` : "なし"}</span></div>
          ${log}
        </section>
        ${relatedHtml(game)}
      </div>
      <div class="d-foot">
        <button class="btn btn-ghost d-foot-btn" type="button" data-share-game="${esc(game.slug)}">${ICONS.share}<span class="d-share-label">このゲームをシェア</span></button>
        <button class="btn btn-ghost d-foot-btn" type="button" data-close>${ICONS.close}とじる</button>
      </div>
      ${game.url ? `<div class="d-sticky">${bigPlay(game)}</div>` : ""}`;
  }

  /* Where the visitor was when a detail opened from the page: closing puts
     them back exactly there (and on the control they used). */
  let returnY = null;
  let holdY = null;
  let holdUntil = 0;
  const jumpTo = (y) => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, y);
    root.style.scrollBehavior = previous;
  };
  function holdScroll() {
    if (holdY === null || performance.now() > holdUntil || pendingScroll) return;
    if (Math.abs(window.scrollY - holdY) > 2) jumpTo(holdY);
  }

  /* The 3D hero pauses while the detail covers it (hero-scene.js listens). */
  const signalModal = (open) => {
    try { window.dispatchEvent(new CustomEvent("blitast:modal", { detail: { open } })); } catch (_) { /* old engine */ }
  };

  /* Scroll the sheet so a linked update (or the history) sits under the bar,
     then move focus there. WebKit settles its own scroll during the first
     frames after showModal(), so this waits two frames and re-aims once the
     entrance animation ends, unless the visitor has scrolled meanwhile. */
  let sheetAim = null;
  function aimSheet(aim) {
    const bar = $(".d-bar", sheet);
    sheet.scrollTop = Math.max(0, aim.target.offsetTop - (bar ? bar.offsetHeight : 0) - 12);
    aim.at = sheet.scrollTop;
  }
  function scrollSheetTo(target) {
    const aim = { target, at: null };
    sheetAim = aim;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (sheetAim !== aim || !target.isConnected || !dialog.open) return;
      aimSheet(aim);
      target.focus({ preventScroll: true });
      if (target.classList.contains("d-entry")) {
        target.classList.remove("is-flash");
        void target.offsetWidth;
        target.classList.add("is-flash");
      }
    }));
  }
  const reAim = () => {
    const aim = sheetAim;
    if (!aim || aim.at === null || !aim.target.isConnected || !dialog || !dialog.open) return;
    if (Math.abs(sheet.scrollTop - aim.at) > 2) { sheetAim = null; return; } /* the visitor scrolled */
    aimSheet(aim);
  };
  if (sheet) {
    sheet.addEventListener("animationend", (event) => { if (event.target === sheet) reAim(); });
    sheet.addEventListener("wheel", () => { sheetAim = null; }, { passive: true });
    sheet.addEventListener("touchmove", () => { sheetAim = null; }, { passive: true });
  }

  function openDetail(game, entryId) {
    if (!dialog || !sheet) return;
    const wasOpen = dialog.open;
    if (!wasOpen && !lastFocus) lastFocus = document.activeElement;
    if (currentSlug !== game.slug || !wasOpen) {
      sheet.innerHTML = detailHtml(game);
      prepareMedia(sheet);
      sheet.scrollTop = 0;
      sheetAim = null;
    }
    currentSlug = game.slug;
    document.title = `${game.title} — BLITAST GAME`;
    if (!wasOpen) {
      openedAt = performance.now();
      try { dialog.showModal(); } catch (_) { dialog.setAttribute("open", ""); }
      document.documentElement.classList.add("is-locked");
      signalModal(true);
    }
    const target = entryId === "log" ? $("#d-log", sheet) : entryId ? document.getElementById(`d-${entryId}`) : null;
    if (target) {
      /* Focus goes to the update itself (not the title far above it), so the
         first Tab and a screen reader both start there. */
      scrollSheetTo(target);
    } else {
      sheetAim = null;
      const heading = $("#detail-title", sheet);
      if (heading) heading.focus({ preventScroll: true });
    }
  }
  function closeDetail() {
    if (!dialog || !dialog.open) return;
    dialog.close();
    document.documentElement.classList.remove("is-locked");
    signalModal(false);
    document.title = baseTitle;
    currentSlug = "";
    sheetAim = null;
    if (toastEl && toastHome && toastEl.parentNode !== toastHome) toastHome.appendChild(toastEl);
    /* Going on to another section (「はじめての方へ」): focus follows the visitor
       there (scrollToSection), not back to the card far above. */
    if (!pendingScroll && lastFocus && typeof lastFocus.focus === "function" && document.contains(lastFocus) && lastFocus !== document.body) {
      lastFocus.focus({ preventScroll: true });
    }
    lastFocus = null;
    if (returnY !== null && !pendingScroll) {
      holdY = returnY;
      holdUntil = performance.now() + 700;
      holdScroll();
    }
    returnY = null;
  }
  /* Never leave the site: step back only over the entry this page pushed
     itself; a detail opened from a shared link just closes and clears the hash. */
  /* History calls can be refused (sandboxed frames, some file:// previews):
     the page keeps working, only Back loses its extra step. */
  function setHistory(method, state, url) {
    try { history[method](state, "", url); return true; } catch (_) { return false; }
  }
  function requestClose() {
    if (!dialog || !dialog.open) return false;
    const pushed = Boolean(history.state && history.state[STATE_KEY]);
    const onGameHash = /^#game\//.test(location.hash);
    closeDetail();
    if (onGameHash) {
      if (pushed) {
        suppressUntil = performance.now() + 700;
        history.back();
        return true;
      }
      setHistory("replaceState", null, location.pathname + location.search);
    }
    return false;
  }
  /* Scroll to a section and put keyboard / screen-reader focus on its heading. */
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    const title = document.getElementById(`${id}-title`);
    if (title) {
      if (!title.hasAttribute("tabindex")) title.setAttribute("tabindex", "-1");
      title.focus({ preventScroll: true });
    }
  }

  function parseGameHash(hash) {
    let value = String(hash || "");
    try { value = decodeURIComponent(value); } catch (_) { return null; }
    const match = /^#game\/([\w-]+)(?:\/([\w-]+))?$/.exec(value);
    return match ? { slug: match[1].toLowerCase(), entry: match[2] || "" } : null;
  }
  /* A known update id, or "log" (the history heading); anything else opens the top. */
  const targetOf = (parsed) => (parsed && parsed.entry && (parsed.entry === "log" || entryById.has(parsed.entry)) ? parsed.entry : "");

  /* Every #game/… link (cards, banners, news, related games) opens the detail
     here; only the first open adds a history entry. */
  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href^="#game/"]');
    if (!link) return;
    const parsed = parseGameHash(link.getAttribute("href"));
    const game = parsed && bySlug.get(parsed.slug);
    if (!game) return;
    event.preventDefault();
    const entry = targetOf(parsed);
    const hash = `#game/${game.slug}${entry ? `/${entry}` : ""}`;
    if (dialog && dialog.open) {
      setHistory("replaceState", history.state, hash);
    } else {
      lastFocus = link;
      returnY = window.scrollY;
      /* Drop an in-page anchor (#library, #news, #guide…) from the entry we are
         leaving: stepping back onto a fragment would make the browser jump to
         that section and blur the control the visitor used. */
      if (location.hash && !parseGameHash(location.hash)) {
        setHistory("replaceState", history.state, location.pathname + location.search);
      }
      setHistory("pushState", { [STATE_KEY]: true }, hash);
    }
    openDetail(game, entry);
    if (!entry && sheet) sheet.scrollTo({ top: 0, behavior: "auto" });
  });

  let shareGame = () => {};
  if (dialog) {
    /* A quick second tap (a double-tap on 「くわしく」) must not land on whatever
       the new sheet put under the finger (the play bar, the guide link, the
       backdrop): ignore pointer clicks for a moment after the detail opens. */
    dialog.addEventListener("click", (event) => {
      if (event.detail !== 0 && performance.now() - openedAt < 500) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);
    dialog.addEventListener("cancel", (event) => { event.preventDefault(); requestClose(); });
    dialog.addEventListener("click", (event) => {
      const guide = event.target.closest("[data-guide-link]");
      if (guide) {
        event.preventDefault();
        pendingScroll = "guide";
        if (!requestClose()) { pendingScroll = ""; scrollToSection("guide"); }
        return;
      }
      const share = event.target.closest("[data-share-game]");
      if (share) { shareGame(share.dataset.shareGame, share); return; }
      if (event.target === dialog || event.target.closest("[data-close]")) requestClose();
    });
    dialog.addEventListener("close", () => {
      document.documentElement.classList.remove("is-locked");
      signalModal(false);
    });
    /* Keep Tab / Shift+Tab inside the open dialog. */
    dialog.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const focusable = $$('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])', dialog)
        .filter((el) => !el.hasAttribute("data-wrap") && el.getClientRects().length && getComputedStyle(el).visibility !== "hidden");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    });
    /* Safari's default Tab order skips links, so "the last focusable" above is
       never reached there: an end-of-dialog stop sends focus back to the top. */
    const wrap = $("[data-wrap]", dialog);
    if (wrap) {
      wrap.addEventListener("focus", () => {
        const close = $(".d-close", dialog);
        if (close) close.focus();
      });
    }
  }

  /* ---------- routing (#game/<slug>[/<entry>] and #<entry-id>) ---------- */
  function route() {
    const parsed = parseGameHash(location.hash);
    const game = parsed && bySlug.get(parsed.slug);
    if (game) {
      openDetail(game, targetOf(parsed));
      return;
    }
    if (dialog && dialog.open) closeDetail();
    if (parsed && games.length) {
      /* An old or renamed #game/<slug> link: say so and show the list. */
      setHistory("replaceState", null, location.pathname + location.search);
      requestAnimationFrame(() => {
        const head = document.getElementById("all-games");
        if (head) head.scrollIntoView({ behavior: "auto", block: "start" });
        toast("このゲームは見つかりませんでした。\n一覧からえらんでください", 6000);
      });
      return;
    }
    if (pendingScroll) {
      const id = pendingScroll;
      pendingScroll = "";
      requestAnimationFrame(() => scrollToSection(id));
      return;
    }
    /* Back / 「とじる」: keep the visitor where they were, even if the browser
       tries to restore or jump somewhere else during the history step. */
    holdScroll();
    requestAnimationFrame(holdScroll);
    if (performance.now() < suppressUntil) return;
    const hash = (() => { try { return decodeURIComponent(location.hash || ""); } catch (_) { return ""; } })();
    const entryMatch = /^#((?:upd|rel|news)-[\w-]+)$/.exec(hash);
    if (entryMatch && entryById.has(entryMatch[1])) revealEntry(entryMatch[1], { focus: false });
  }
  window.addEventListener("popstate", route);
  window.addEventListener("hashchange", route);
  /* First load. A shared #game/… link opens on top of the site: the page itself
     goes under it in history, so the phone's Back closes the detail onto the
     library instead of leaving (a reload keeps the entry it already has). */
  function initialRoute() {
    const parsed = parseGameHash(location.hash);
    if (parsed && bySlug.get(parsed.slug) && !(history.state && history.state[STATE_KEY])) {
      try {
        const hash = location.hash;
        history.replaceState(null, "", location.pathname + location.search);
        history.pushState({ [STATE_KEY]: true }, "", hash);
      } catch (_) { /* keep the single entry */ }
    }
    route();
  }

  /* ---------- header state + active nav ---------- */
  const header = $("#site-header");
  const heroCopy = $("#hero-copy");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = window.scrollY;
      if (header) header.classList.toggle("is-scrolled", y > 24);
      if (heroCopy && !reduceMotion.matches) {
        const h = window.innerHeight || 800;
        if (y < h * 1.2) {
          heroCopy.style.transform = y > 0 ? `translate3d(0, ${(y * 0.16).toFixed(1)}px, 0)` : "";
          heroCopy.style.opacity = y > 0 ? String(Math.max(0, 1 - y / (h * 0.85)).toFixed(3)) : "";
        }
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const navLinks = $$(".nav-link[data-nav]");
  if ("IntersectionObserver" in window && navLinks.length) {
    const sections = navLinks.map((link) => document.getElementById(link.dataset.nav)).filter(Boolean);
    const navObserver = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (!item.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.dataset.nav === item.target.id) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((section) => navObserver.observe(section));
    // the hero and the footer belong to no menu item
    const clearCurrent = new IntersectionObserver((items) => {
      if (items.some((item) => item.isIntersecting)) navLinks.forEach((link) => link.removeAttribute("aria-current"));
    }, { rootMargin: "-45% 0px -50% 0px" });
    [heroEl, $(".site-footer")].forEach((el) => { if (el) clearCurrent.observe(el); });
  }

  /* ---------- pause looping animations while they are off screen ---------- */
  if ("IntersectionObserver" in window) {
    const animated = $$("[data-anim], .hero, .dock");
    animated.forEach((el) => { if (el !== heroEl) el.classList.add("is-offscreen"); });
    /* A block whose edge only touches the fold still counts as intersecting,
       so shrink the root by 2px: loops start only once they are really visible. */
    const animObserver = new IntersectionObserver((items) => {
      items.forEach((item) => item.target.classList.toggle("is-offscreen", !(item.isIntersecting && item.intersectionRatio > 0)));
    }, { rootMargin: "-2px 0px -2px 0px", threshold: [0, 0.01] });
    animated.forEach((el) => animObserver.observe(el));
  }

  /* ---------- scroll reveal ----------
     Only hand scrolling (wheel / touch / keys) arms it, and only for content
     just below the screen. Content is never hidden while nobody is scrolling,
     so links, jumps and screenshots always see the finished page. */
  if (!reduceMotion.matches && "IntersectionObserver" in window) {
    let pending = $$("[data-reveal]");
    let lastIntent = -1e9;
    const revealObserver = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (!item.isIntersecting) return;
        item.target.classList.add("is-revealed");
        revealObserver.unobserve(item.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    const armBand = () => {
      const vh = window.innerHeight || 800;
      pending = pending.filter((el) => {
        if (!el.isConnected || el.hidden) return false;
        const top = el.getBoundingClientRect().top;
        if (top < vh) return false;
        if (top > vh * 2.2) return true;
        el.classList.add("reveal-pending");
        revealObserver.observe(el);
        return false;
      });
    };
    const markIntent = () => { lastIntent = performance.now(); };
    window.addEventListener("wheel", markIntent, { passive: true });
    window.addEventListener("touchmove", markIntent, { passive: true });
    window.addEventListener("keydown", (event) => {
      if (["ArrowDown", "PageDown", " ", "End", "Spacebar"].includes(event.key)) markIntent();
    });
    window.addEventListener("scroll", () => {
      if (pending.length && performance.now() - lastIntent < 1200) armBand();
    }, { passive: true });
  }

  prepareMedia(document);

  /* ---------- warm the next rows of images when the connection allows ---------- */
  const conn = navigator.connection || null;
  const frugal = Boolean(conn && (conn.saveData || /(^|-)2g$/.test(String(conn.effectiveType || ""))));
  if (!frugal && "IntersectionObserver" in window) {
    const warm = () => {
      const warmer = new IntersectionObserver((items) => {
        items.forEach((item) => {
          if (!item.isIntersecting) return;
          warmer.unobserve(item.target);
          idle(() => { item.target.loading = "eager"; });
        });
      }, { rootMargin: "0px 0px 120% 0px" });
      $$('#game-grid img[loading="lazy"], #showcase img[loading="lazy"], #timeline img[loading="lazy"]').forEach((image) => warmer.observe(image));
    };
    if (document.readyState === "complete") idle(warm);
    else window.addEventListener("load", () => idle(warm), { once: true });
  }

  /* ---------- BGM (header toggle on wide screens, footer dock everywhere) ---------- */
  const audio = $("#bgm-audio");
  const bgmToggles = $$("[data-bgm-toggle]");
  const bgmVolumes = $$("[data-bgm-volume]");
  if (audio && bgmToggles.length) {
    try {
      const saved = localStorage.getItem("blitast-bgm-vol");
      if (saved !== null && Number(saved) >= 0 && Number(saved) <= 1) bgmVolumes.forEach((v) => { v.value = saved; });
    } catch (_) { /* storage unavailable */ }
    audio.volume = Number(bgmVolumes[0] ? bgmVolumes[0].value : 0.32);
    /* Screen readers say "32%" instead of the raw 0.32. */
    const speakVolume = () => bgmVolumes.forEach((v) => v.setAttribute("aria-valuetext", `${Math.round(Number(v.value) * 100)}%`));
    speakVolume();
    bgmVolumes.forEach((slider) => {
      slider.addEventListener("input", () => {
        audio.volume = Number(slider.value);
        bgmVolumes.forEach((other) => { if (other !== slider) other.value = slider.value; });
        speakVolume();
        try { localStorage.setItem("blitast-bgm-vol", slider.value); } catch (_) { /* ignore */ }
      });
    });
    const setPlaying = (playing) => {
      bgmToggles.forEach((toggle) => {
        toggle.setAttribute("aria-pressed", String(playing));
        const state = $(".bgm-state", toggle);
        if (state) state.textContent = playing ? "オン" : "オフ";
      });
      document.documentElement.classList.toggle("is-bgm-on", playing);
    };
    bgmToggles.forEach((toggle) => {
      toggle.addEventListener("click", async () => {
        if (audio.paused) {
          try { await audio.play(); } catch (_) { setPlaying(false); toast("BGMを再生できませんでした"); }
        } else {
          audio.pause();
        }
      });
    });
    audio.addEventListener("pause", () => setPlaying(false));
    audio.addEventListener("play", () => setPlaying(true));
  }

  /* ---------- share ---------- */
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (_) { /* fall back to the older copy command below */ }
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    (dialog && dialog.open ? dialog : document.body).appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    if (!ok) throw new Error("copy failed");
  }
  async function shareUrl({ title, text, url, copied, labelEl, idleLabel }) {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (error) {
        if (error && error.name === "AbortError") return;
      }
    }
    try {
      await copyText(url);
      if (labelEl) labelEl.textContent = "コピーしました";
      toast(copied);
    } catch (_) {
      toast("コピーできませんでした。アドレス欄のURLをお使いください");
    }
    if (labelEl) setTimeout(() => { if (labelEl.isConnected) labelEl.textContent = idleLabel; }, 2200);
  }
  const pageUrl = () => location.href.split("#")[0];
  shareGame = (slug, button) => {
    const game = bySlug.get(slug);
    if (!game) return;
    shareUrl({
      title: `${game.title} — BLITAST GAME`,
      text: `${game.title}（BLITAST GAME・無料・ブラウザで遊べます）`,
      url: `${pageUrl()}#game/${game.slug}`,
      copied: "このゲームのURLをコピーしました",
      labelEl: button ? $(".d-share-label", button) : null,
      idleLabel: "このゲームをシェア",
    });
  };
  const shareButton = $("#share-button");
  if (shareButton) {
    shareButton.addEventListener("click", () => shareUrl({
      title: "BLITAST GAME",
      text: "BLITAST GAME — 小さな世界を、ひとつずつ。",
      url: pageUrl(),
      copied: "このサイトのURLをコピーしました",
      labelEl: $("#share-label"),
      idleLabel: "このサイトをシェア",
    }));
  }

  /* Routing runs last, after every control above is wired, so nothing a
     shared #game/… link opens can ever leave BGM, share or the header dead. */
  try {
    initialRoute();
  } catch (error) {
    console.error("[BLITAST] could not open the linked page:", error);
  }
})();
