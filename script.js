const pages = [
  {
    type: "cover",
    title: "失われた招待状",
    text: "この結婚式には、本来もう一枚の招待状が存在していました。しかし長い年月の中で失われ、最後のメッセージだけが欠けてしまったのです。封印された招待状を開き、残された断片を集めてください。"
  },
  {
    type: "puzzle",
    id: 1,
    leftTitle: "第一の断片",
    story: "古い封筒の中から、破れた招待状の一部が見つかりました。そこには、ふたりが今日いちばん伝えたい相手を示す言葉が隠されています。",
    puzzleTitle: "第一の謎",
    question: "ふたりが大切にしている言葉です。『ありがとう』の気持ちを、今日という日に一番届けたい相手は誰でしょう？",
    answer: "みなさま",
    explanation: "正解は「みなさま」。今日ここに集まってくださった一人ひとりへ、ふたりから感謝を込めて。",
    restoredPiece: 1,
    restoredText: "皆さまへ"
  },
  {
    type: "ending",
    title: "復元された招待状",
    text: "人生は謎解きによく似ています。\n\n一人では解けない問題も、\n誰かとなら答えに辿り着ける。\n\n今日ここに集まってくださった皆さまのおかげで、\n私たちはここまで歩んでくることができました。\n\nそしてこれからも、\n二人で新しい謎を解き続けていきます。\n\n本日はご列席いただき、\n誠にありがとうございました。"
  }
];

const STORAGE_KEY = "lostInvitationProgress";

const runtimePages = buildRuntimePages(pages);
const book = document.getElementById("book");
const pageCount = document.getElementById("page-count");
const restoreCount = document.getElementById("restore-count");

const state = loadProgress();
state.currentPageIndex = clampPageIndex(state.currentPageIndex);
state.unlockedPageIndex = clampPageIndex(state.unlockedPageIndex);

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return {
      currentPageIndex: 0,
      unlockedPageIndex: 0,
      restoredPieces: []
    };
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      currentPageIndex: Number(parsed.currentPageIndex) || 0,
      unlockedPageIndex: Number(parsed.unlockedPageIndex) || 0,
      restoredPieces: Array.isArray(parsed.restoredPieces) ? parsed.restoredPieces : []
    };
  } catch {
    return {
      currentPageIndex: 0,
      unlockedPageIndex: 0,
      restoredPieces: []
    };
  }
}

function clampPageIndex(index) {
  return Math.max(0, Math.min(Number(index) || 0, runtimePages.length - 1));
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setPage(index) {
  state.currentPageIndex = Math.max(0, Math.min(index, runtimePages.length - 1));
  saveProgress();
  renderPage();
}

function unlockPage(index) {
  state.unlockedPageIndex = Math.max(state.unlockedPageIndex, Math.min(index, runtimePages.length - 1));
  saveProgress();
}

function renderPage() {
  const page = runtimePages[state.currentPageIndex];
  const restoredTotal = state.restoredPieces.length;
  const puzzleTotal = pages.filter((item) => item.type === "puzzle").length;

  pageCount.textContent = `${state.currentPageIndex + 1} / ${runtimePages.length} ページ`;
  restoreCount.textContent = `復元 ${restoredTotal} / ${puzzleTotal}`;

  book.classList.remove("is-turning");
  void book.offsetWidth;
  book.classList.add("is-turning");

  if (state.currentPageIndex > state.unlockedPageIndex) {
    book.innerHTML = renderSealedPage();
    bindCommonActions();
    return;
  }

  if (page.type === "cover") {
    book.innerHTML = renderCoverPage(page);
  }

  if (page.type === "puzzle") {
    book.innerHTML = renderPuzzlePage(page);
  }

  if (page.type === "restore") {
    book.innerHTML = renderRestorePage(page);
  }

  if (page.type === "ending") {
    book.innerHTML = renderEndingPage(page);
  }

  bindCommonActions();
  bindPuzzleForm(page);
}

function renderCoverPage(page) {
  return `
    <div class="book-spread">
      <article class="page cover-page">
        <div class="cover-inner">
          <div class="envelope-mark" aria-hidden="true"></div>
          <div class="seal" aria-hidden="true">封</div>
          <p class="eyebrow">A Hidden Invitation</p>
          <h1>${escapeHtml(page.title)}</h1>
          <p class="lead">${escapeHtml(page.text)}</p>
          <button class="primary-button" type="button" data-action="open-book">招待状を開く</button>
        </div>
      </article>
    </div>
  `;
}

function renderPuzzlePage(page) {
  return `
    <div class="book-spread">
      <article class="page">
        <p class="eyebrow">Story</p>
        <h2>${escapeHtml(page.leftTitle)}</h2>
        <p class="story-text">${escapeHtml(page.story)}</p>
        ${renderInvitationPreview()}
      </article>
      <article class="page">
        <p class="eyebrow">Question</p>
        <h3>${escapeHtml(page.puzzleTitle)}</h3>
        <p class="question-text">${escapeHtml(page.question)}</p>
        <form class="answer-form" id="answer-form">
          <label for="answer-input">答え</label>
          <input id="answer-input" type="text" autocomplete="off" inputmode="text" placeholder="答えを入力">
          <button class="primary-button" type="submit">回答する</button>
          <p id="error-message" class="error-message" role="alert" aria-live="polite"></p>
        </form>
      </article>
    </div>
  `;
}

function renderRestorePage(page) {
  return `
    <div class="book-spread">
      <article class="page restore-card">
        <div>
          <div class="paper-fragment">${escapeHtml(page.restoredText || "招待状の断片")}</div>
          <p class="eyebrow">Restored</p>
          <h2>断片が復元されました</h2>
          <p class="explanation-text">${escapeHtml(page.explanation)}</p>
          <button class="primary-button" type="button" data-action="next-page">次のページへ</button>
        </div>
      </article>
    </div>
  `;
}

function renderEndingPage(page) {
  return `
    <div class="book-spread">
      <article class="page">
        <p class="eyebrow">Completed Invitation</p>
        <h2>${escapeHtml(page.title)}</h2>
        ${renderInvitationPreview(true)}
      </article>
      <article class="page">
        <p class="eyebrow">Final Message</p>
        <p class="ending-text">${escapeHtml(page.text)}</p>
        <button class="secondary-button" type="button" data-action="restart">最初から読む</button>
      </article>
    </div>
  `;
}

function renderSealedPage() {
  return `
    <div class="book-spread">
      <article class="page sealed-card">
        <div>
          <div class="sealed-lock" aria-hidden="true"></div>
          <p class="eyebrow">Sealed Page</p>
          <h2>封印されています</h2>
          <p class="lead">このページは、前の謎を解くと開放されます。</p>
          <button class="secondary-button" type="button" data-action="back-to-unlocked">開いているページへ戻る</button>
        </div>
      </article>
    </div>
  `;
}

function renderInvitationPreview(isComplete = false) {
  const puzzlePages = pages.filter((item) => item.type === "puzzle");
  const pieces = puzzlePages.map((puzzle) => {
    const restored = isComplete || state.restoredPieces.includes(puzzle.restoredPiece);
    const label = restored ? puzzle.restoredText : "欠けた断片";

    return `<div class="invitation-piece ${restored ? "is-restored" : ""}">${escapeHtml(label)}</div>`;
  });

  if (isComplete) {
    pieces.push('<div class="invitation-piece is-restored">本日はご列席いただき、誠にありがとうございます。</div>');
  }

  return `<div class="invitation-preview" aria-label="復元中の招待状">${pieces.join("")}</div>`;
}

function bindCommonActions() {
  const openBookButton = book.querySelector("[data-action='open-book']");
  const nextPageButton = book.querySelector("[data-action='next-page']");
  const restartButton = book.querySelector("[data-action='restart']");
  const backButton = book.querySelector("[data-action='back-to-unlocked']");

  if (openBookButton) {
    openBookButton.addEventListener("click", () => {
      unlockPage(1);
      setPage(1);
    });
  }

  if (nextPageButton) {
    nextPageButton.addEventListener("click", () => {
      unlockPage(state.currentPageIndex + 1);
      setPage(state.currentPageIndex + 1);
    });
  }

  if (restartButton) {
    restartButton.addEventListener("click", () => {
      state.currentPageIndex = 0;
      state.unlockedPageIndex = 0;
      state.restoredPieces = [];
      saveProgress();
      renderPage();
    });
  }

  if (backButton) {
    backButton.addEventListener("click", () => setPage(state.unlockedPageIndex));
  }
}

function bindPuzzleForm(page) {
  if (!page || page.type !== "puzzle") {
    return;
  }

  const form = document.getElementById("answer-form");
  const input = document.getElementById("answer-input");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isCorrectAnswer(input.value, page)) {
      restorePiece(page.restoredPiece);
      unlockPage(state.currentPageIndex + 1);
      setPage(state.currentPageIndex + 1);
      return;
    }

    errorMessage.textContent = "まだ違うようです。招待状の断片をもう一度見直してみましょう。";
    input.select();
  });

  requestAnimationFrame(() => input.focus());
}

function restorePiece(pieceId) {
  if (!state.restoredPieces.includes(pieceId)) {
    state.restoredPieces.push(pieceId);
  }
  saveProgress();
}

function buildRuntimePages(sourcePages) {
  return sourcePages.flatMap((page) => {
    if (page.type !== "puzzle") {
      return [page];
    }

    return [
      page,
      {
        type: "restore",
        sourceId: page.id,
        explanation: page.explanation,
        restoredPiece: page.restoredPiece,
        restoredText: page.restoredText
      }
    ];
  });
}

function normalizeAnswer(value) {
  return value
    .trim()
    .normalize("NFKC")
    .replace(/\s+/g, "")
    .replace(/[\u30a1-\u30f6]/g, (char) =>
      String.fromCharCode(char.charCodeAt(0) - 0x60)
    )
    .toLowerCase();
}

function isCorrectAnswer(inputValue, page) {
  return normalizeAnswer(inputValue) === normalizeAnswer(page.answer);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

renderPage();
