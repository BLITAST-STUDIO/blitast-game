(() => {
  const data = window.BLITAST;
  if (!data) return;

  const games = Array.isArray(data.games) ? data.games : [];
  const $ = (selector) => document.querySelector(selector);
  document.querySelectorAll("[data-studio-link]").forEach((link) => {
    const url = data.studio?.[link.dataset.studioLink];
    if (url) link.href = url;
  });
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);
  const dateTime = (date) => /^\d{4}\.\d{2}\.\d{2}$/.test(date) ? date.replaceAll(".", "-") : "";
  const gameId = (index) => `game-${index}`;

  function latestUpdate(game) {
    if (!Array.isArray(game.updates) || !game.updates.length) return null;
    return [...game.updates].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))[0];
  }

  function updateLog(game, index) {
    if (!Array.isArray(game.updates) || !game.updates.length) return "";
    const entries = [...game.updates].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
    return `<div class="update-log">
      <button class="update-toggle" type="button" aria-expanded="false" aria-controls="updates-${index}">
        <span>更新履歴 <b>${entries.length}</b></span><span class="update-toggle-icon" aria-hidden="true">＋</span>
      </button>
      <div class="update-panel" id="updates-${index}" hidden>
        <ol>${entries.map((entry) => {
          const lines = String(entry.text || "").split("\n").map((line) => line.trim()).filter(Boolean);
          return `<li><time datetime="${escapeHtml(dateTime(entry.date))}">${escapeHtml(entry.date)}</time>
            <div><strong>${escapeHtml(lines[0] || "アップデート")}</strong>${lines.slice(1).map((line) => `<p>${escapeHtml(line)}</p>`).join("")}</div>
          </li>`;
        }).join("")}</ol>
      </div>
    </div>`;
  }

  function highlightCard(game, index, type) {
    return `<article class="highlight-card highlight-${type}" id="${gameId(index)}">
      <a class="highlight-link" href="${escapeHtml(game.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(game.title)}をitch.ioで遊ぶ">
        <div class="highlight-image"><img src="${escapeHtml(game.cover)}" alt="${escapeHtml(game.coverAlt || game.title)}" width="1600" height="1200" loading="lazy" />
          <span class="image-action" aria-hidden="true">↗</span>
          <span class="image-label">${type === "featured" ? "FEATURED GAME" : "IN DEVELOPMENT"}</span>
        </div>
        <div class="highlight-content">
          <div class="card-topline"><span>${escapeHtml(game.genre || "GAME")}</span><span>${type === "featured" ? "01 / FEATURED" : "02 / SPOTLIGHT"}</span></div>
          <h3>${escapeHtml(game.title)}</h3>
          <p>${escapeHtml(game.blurb)}</p>
          <span class="play-link">itch.io で遊ぶ <span aria-hidden="true">↗</span></span>
        </div>
      </a>
      ${updateLog(game, index)}
    </article>`;
  }

  function standardCard(game, index) {
    const update = latestUpdate(game);
    return `<li class="game-item" id="${gameId(index)}">
      <a class="game-card" href="${escapeHtml(game.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(game.title)}をitch.ioで遊ぶ">
        <div class="game-image"><img src="${escapeHtml(game.cover)}" alt="${escapeHtml(game.coverAlt || game.title)}" width="1600" height="1200" loading="lazy" />
          <span class="image-action" aria-hidden="true">↗</span>
          ${update ? `<span class="image-label">UPDATED ${escapeHtml(update.date)}</span>` : ""}
        </div>
        <div class="card-topline"><span>${escapeHtml(game.genre || "GAME")}</span><span>${String(index + 1).padStart(2, "0")}</span></div>
        <h3>${escapeHtml(game.title)}</h3>
        <p>${escapeHtml(game.blurb)}</p>
      </a>
      ${updateLog(game, index)}
    </li>`;
  }

  const featured = games.find((game) => game.featured) || games[0];
  const spotlight = games.find((game) => game.spotlight && game !== featured);
  const highlights = [featured, spotlight].filter(Boolean);
  const highlightGrid = $("#highlight-grid");
  const gameGrid = $("#game-grid");
  if (highlightGrid) {
    highlightGrid.innerHTML = highlights.map((game, position) => highlightCard(game, games.indexOf(game), position === 0 ? "featured" : "spotlight")).join("");
  }
  if (gameGrid) {
    gameGrid.innerHTML = games.map((game, index) => highlights.includes(game) ? "" : standardCard(game, index)).join("");
  }
  const count = $("#game-count");
  if (count) count.textContent = String(games.length).padStart(2, "0");

  const news = games.map((game, index) => ({ game, index, update: latestUpdate(game) }))
    .filter((item) => item.update)
    .sort((a, b) => String(b.update.date || "").localeCompare(String(a.update.date || "")) || a.index - b.index);
  const newsList = $("#news-list");
  if (newsList) {
    newsList.innerHTML = news.length ? news.map(({ game, index, update }, position) => {
      const lines = String(update.text || "").split("\n").map((line) => line.trim()).filter(Boolean);
      return `<article class="news-card ${position === 0 ? "news-card-lead" : ""}">
        <a class="news-image" href="#${gameId(index)}" data-news-target="${index}" aria-label="${escapeHtml(game.title)}の更新履歴へ">
          <img src="${escapeHtml(game.cover)}" alt="" width="1600" height="1200" loading="${position === 0 ? "eager" : "lazy"}" />
          <span class="news-image-corner" aria-hidden="true">↗</span>
        </a>
        <div class="news-content">
          <div class="news-meta"><span class="news-badge"><span aria-hidden="true"></span> NEW UPDATE</span><time datetime="${escapeHtml(dateTime(update.date))}">${escapeHtml(update.date)}</time></div>
          <p class="news-game">${escapeHtml(game.title)}</p>
          <h3>${escapeHtml(lines[0] || "新しいアップデート")}</h3>
          ${lines[1] ? `<p class="news-summary">${escapeHtml(lines[1])}</p>` : ""}
          <a class="news-read" href="#${gameId(index)}" data-news-target="${index}">更新内容を見る <span aria-hidden="true">↗</span></a>
        </div>
      </article>`;
    }).join("") : `<div class="news-empty"><span class="live-dot" aria-hidden="true"></span><p>新しいアップデートが届いたら、ここに表示します。</p></div>`;
    newsList.addEventListener("click", (event) => {
      const link = event.target.closest("[data-news-target]");
      if (!link) return;
      const button = document.querySelector(`#updates-${link.dataset.newsTarget}`)?.parentElement?.querySelector(".update-toggle");
      if (button) {
        button.setAttribute("aria-expanded", "true");
        document.getElementById(button.getAttribute("aria-controls")).hidden = false;
      }
    });
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".update-toggle");
    if (!button) return;
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!panel) return;
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  const audio = $("#bgm-audio");
  const audioToggle = $("#audio-toggle");
  const volume = $("#audio-volume");
  if (audio && audioToggle && volume) {
    try {
      const savedVolume = localStorage.getItem("blitast-bgm-vol");
      if (savedVolume !== null && Number(savedVolume) >= 0 && Number(savedVolume) <= 1) volume.value = savedVolume;
    } catch (_) { /* Storage may be unavailable. */ }
    audio.volume = Number(volume.value);
    volume.addEventListener("input", () => {
      audio.volume = Number(volume.value);
      try { localStorage.setItem("blitast-bgm-vol", volume.value); } catch (_) { /* Ignore. */ }
    });
    const setAudioState = (playing) => {
      audioToggle.setAttribute("aria-pressed", String(playing));
      audioToggle.setAttribute("aria-label", playing ? "BGMを停止" : "BGMを再生");
      audioToggle.classList.toggle("is-playing", playing);
    };
    audioToggle.addEventListener("click", async () => {
      if (audio.paused) {
        try { await audio.play(); setAudioState(true); } catch (_) { setAudioState(false); }
      } else {
        audio.pause();
        setAudioState(false);
      }
    });
    audio.addEventListener("pause", () => setAudioState(false));
  }

  const shareButton = $("#share-button");
  const shareLabel = $("#share-label");
  if (shareButton && shareLabel) {
    let resetTimer;
    shareButton.addEventListener("click", async () => {
      const url = window.location.href.split("#")[0];
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(url);
        } else {
          const input = document.createElement("textarea");
          input.value = url;
          input.style.position = "fixed";
          input.style.left = "-9999px";
          document.body.appendChild(input);
          input.select();
          const copied = document.execCommand("copy");
          input.remove();
          if (!copied) throw new Error("Copy unavailable");
        }
        shareLabel.textContent = "COPIED";
        shareButton.setAttribute("aria-label", "URLをコピーしました");
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          shareLabel.textContent = "SHARE";
          shareButton.setAttribute("aria-label", "ページのURLをコピー");
        }, 1800);
      } catch (_) {
        shareLabel.textContent = "RETRY";
      }
    });
  }
})();
