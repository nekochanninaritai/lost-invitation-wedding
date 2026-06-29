const pages = [
  {
    type: "cover",
    title: "蝶が運ぶ、最後の祝福",
    text: "深い森の奥に、百年に一度だけ姿を現す祝福の館がありました。止まったままのオルゴールに四つの旋律を戻すため、白い蝶が二人を館へと導きます。"
  },
  {
    type: "puzzle",
    id: 1,
    leftTitle: "Prelude ― 前奏 ―",
    story: "祝福の館へようこそ。この館では百年前から、祝福の演奏会が止まったままです。オルゴールを完成させる四つの旋律は館の各所へ散り、その音色を失いました。白い蝶に導かれ、二人は最初の旋律が眠る部屋へ足を踏み入れます。",
    puzzleTitle: "謎解き①",
    question: "ふたりが大切にしている言葉です。『ありがとう』の気持ちを、今日という日に一番届けたい相手は誰でしょう？",
    answer: "みなさま",
    explanation: "謎が解かれた瞬間、館の奥から澄んだ音色がひとつ響き渡ります。眠っていた蝶が羽を広げ、嬉しそうに奥の廊下へ飛んでいきました。最初の旋律が、オルゴールへ戻ったのです。",
    restoredPiece: 1,
    restoredText: "第一の旋律"
  },
  {
    type: "puzzle",
    id: 2,
    leftTitle: "Cantabile ― 歌うように ―",
    story: "館の廊下には、長い年月を重ねた家具や時計、色とりどりのオルゴールが静かに並んでいました。女性が小さな違和感に足を止めるたび、男性はそっと近づき、二人で答えを探していきます。見守るように蝶たちが数を増やし、二つ目の部屋へ導きました。",
    puzzleTitle: "謎解き②",
    question: "テスト２",
    answer: "２",
    explanation: "二つ目の旋律が戻ると、長い間止まっていた大時計の針が静かに一歩だけ進みました。窓から差し込む光は少し暖かくなり、館全体が柔らかな空気に包まれていきます。",
    restoredPiece: 2,
    restoredText: "第二の旋律"
  },
  {
    type: "puzzle",
    id: 3,
    leftTitle: "Crescendo ― だんだん強く ―",
    story: "蝶に導かれた先には、小さな温室がありました。色とりどりの花が咲き誇るその場所で、羽を閉じた金色の蝶が静かに佇んでいます。百年前から待ち続けていた想いを知った二人の前で、失われた三つ目の旋律が柔らかな光を放ち始めました。",
    puzzleTitle: "謎解き③",
    question: "テスト３",
    answer: "３",
    explanation: "三つ目の旋律が戻ると、館中の蝶たちが一斉に舞い上がりました。止まっていたオルゴールは、短い旋律を奏で始めます。あと一つ。最後の旋律が戻れば、百年待ち続けた演奏会が始まります。",
    restoredPiece: 3,
    restoredText: "第三の旋律"
  },
  {
    type: "puzzle",
    id: 4,
    leftTitle: "Encore ― アンコール ―",
    story: "蝶たちが二人を導いた先には、大きなオルゴールが置かれた大広間がありました。館中の蝶がその場所へ集まっています。けれど、最後の旋律だけがまだ欠けたままでした。二人は穏やかに微笑み、最後の旋律へ手を伸ばします。",
    puzzleTitle: "謎解き④",
    question: "テスト４",
    answer: "４",
    explanation: "最後の旋律が戻った瞬間、館いっぱいに美しい音楽が響き渡りました。百年眠り続けていたオルゴールは、待ち続けた想いを解き放つように、優しく、温かく歌い始めます。",
    restoredPiece: 4,
    restoredText: "最後の旋律"
  },
  {
    type: "ending",
    title: "祝福の演奏会",
    text: "おめでとうございます。\n\nあなたのおかげで、\n百年眠っていた祝福の演奏会は、\n再び始まりました。\n\n蝶たちは館を飛び立ちます。\n森を越え、空を越え、\n新しい物語が始まる場所へ。\n\nこの館の物語は、ここで終わるものではありません。\n最後のページを閉じたその瞬間から、\nその続きを歩むのは――\nあなたです。\n\n今日、新たな人生という物語を歩み始める二人へ。\nどうか皆様の祝福を、あたたかな拍手に乗せて届けてください。\n\n幸せを運ぶ蝶たちは、\nその想いをきっと未来へ運んでくれるでしょう。"
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

  document.body.dataset.pageType = page.type;
  pageCount.textContent = `${state.currentPageIndex + 1} / ${runtimePages.length} ページ`;
  restoreCount.textContent = `旋律 ${restoredTotal} / ${puzzleTotal}`;

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
          <p class="eyebrow">Blessing Manor</p>
          <h1>${escapeHtml(page.title)}</h1>
          <p class="lead">${escapeHtml(page.text)}</p>
          <button class="primary-button" type="button" data-action="open-book">祝福の館へ入る</button>
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
          <div class="paper-fragment">${escapeHtml(page.restoredText || "旋律の欠片")}</div>
          <p class="eyebrow">Restored</p>
          <h2>旋律が戻りました</h2>
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
        <p class="eyebrow">Completed Melody</p>
        <h2>${escapeHtml(page.title)}</h2>
        ${renderInvitationPreview(true)}
      </article>
      <article class="page">
        <p class="eyebrow">Final Message</p>
        <p class="ending-text">${escapeHtml(page.text)}</p>
        <button class="secondary-button" type="button" data-action="restart">もう一度、館を訪れる</button>
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
          <button class="secondary-button" type="button" data-action="back-to-unlocked">開いている扉へ戻る</button>
        </div>
      </article>
    </div>
  `;
}

function renderInvitationPreview(isComplete = false) {
  const puzzlePages = pages.filter((item) => item.type === "puzzle");
  const pieces = puzzlePages.map((puzzle) => {
    const restored = isComplete || state.restoredPieces.includes(puzzle.restoredPiece);
    const label = restored ? puzzle.restoredText : "失われた旋律";

    return `<div class="invitation-piece ${restored ? "is-restored" : ""}">${escapeHtml(label)}</div>`;
  });

  if (isComplete) {
    pieces.push('<div class="invitation-piece is-restored">祝福の演奏会が再び始まりました。</div>');
  }

  return `<div class="invitation-preview" aria-label="復元中のオルゴール">${pieces.join("")}</div>`;
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

  input.addEventListener("input", () => {
    const converted = toFullWidthKatakana(input.value);

    if (input.value !== converted) {
      input.value = converted;
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isCorrectAnswer(input.value, page)) {
      restorePiece(page.restoredPiece);
      unlockPage(state.currentPageIndex + 1);
      setPage(state.currentPageIndex + 1);
      return;
    }

    errorMessage.textContent = "まだ違うようです。蝶が示した手がかりをもう一度見直してみましょう。";
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

function toFullWidthKatakana(value) {
  return value
    .normalize("NFKC")
    .replace(/[\u3041-\u3096]/g, (char) =>
      String.fromCharCode(char.charCodeAt(0) + 0x60)
    )
    .replace(/[A-Za-z0-9]/g, (char) =>
      String.fromCharCode(char.charCodeAt(0) + 0xfee0)
    );
}

function normalizeAnswer(value) {
  return toFullWidthKatakana(value)
    .trim()
    .replace(/\s+/g, "")
    .toUpperCase();
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
