const pages = [
  {
    type: "cover",
    title: "蝶が運ぶ、最後の祝福",
    text: "深い森の奥。"
  },
  {
    type: "story",
    title: "Prelude ― 前奏 ―",
    text: "木々のざわめきさえ、どこか音楽のように聞こえる場所に、一軒の古い洋館が静かに佇んでいました。\n\nその館の名は――\n\n**祝福の館。**\n\n百年に一度だけ姿を現し、\"誰かを心から想う二人\"を迎え入れる、不思議な館です。\n\nけれど今、館は長い眠りについていました。\n\n大広間に置かれた大きなオルゴールは動きを止め、館を彩っていた蝶たちも静かに羽を休めています。\n\nそんなある日、一匹の白い蝶が、一人の若い女性の前へ舞い降りました。\n\n「……こっちへ来て、ってことかな。」\n\n女性が優しく微笑むと、少し離れた場所にいた若い男性が蝶へ視線を向けます。\n\n男性は多くを語ることはありません。\n\nけれど女性が歩き出すと、迷うことなくその隣へ並びました。\n\n蝶は嬉しそうに羽ばたき、森の奥へと二人を導いていきます。\n\nやがて木々が開け、その先には古い洋館が姿を現しました。\n\n重厚な扉は、まるで二人を待っていたかのように静かに開いていきます。\n\n館へ足を踏み入れると、小さな机の上に一通の手紙が置かれていました。"
  },
  {
    type: "story",
    title: "祝福の館からの手紙",
    text: "**祝福の館へようこそ。**\n\nこの館では百年前から、\"祝福の演奏会\"が止まったままです。\n\nオルゴールを完成させる四つの旋律は館の各所へ散り、その音色を失いました。\n\nどうか蝶たちの導きに従い、失われた旋律を見つけてください。\n\n四つの旋律が揃う時、館には再び祝福の音楽が響き渡るでしょう。"
  },
  {
    type: "story",
    title: "Prelude ― 前奏 ―",
    text: "女性は目を輝かせました。\n\n「なんだか素敵な物語が始まりそう。」\n\n男性は静かに頷きます。\n\nその瞳には、すでに冒険への好奇心が宿っていました。\n\nすると館のどこかで、かすかなオルゴールの音が一音だけ響きます。\n\n最初の旋律が、二人を待っていました。"
  },
  {
    type: "puzzle",
    id: 1,
    leftTitle: "≪謎解き①≫",
    story: "最初の旋律が、二人を待っていました。",
    puzzleTitle: "謎解き①",
    question: "ふたりが大切にしている言葉です。『ありがとう』の気持ちを、今日という日に一番届けたい相手は誰でしょう？",
    answer: "みなさま",
    explanation: "謎が解かれた瞬間。\n\n館の奥から澄んだ音色がひとつ響き渡ります。\n\n眠っていた蝶がゆっくりと羽を広げ、二人の周りを一周すると、どこか嬉しそうに奥の廊下へ飛んでいきました。\n\n最初の旋律が、オルゴールへ戻ったのです。",
    restoredPiece: 1,
    restoredText: "第一の旋律"
  },
  {
    type: "story",
    title: "Cantabile ― 歌うように ―",
    text: "館の廊下には、長い年月を重ねた家具や時計、色とりどりのオルゴールが静かに並んでいました。\n\n女性は気になるものを見つけるたび、ふと足を止めます。\n\n古びた楽譜。\n\n壁に飾られた蝶の標本。\n\n小さな鍵穴。\n\nどれも今にも物語を語り出しそうでした。\n\n「この館には、まだたくさん秘密が隠れている気がする。」\n\n女性の言葉に、男性はそっと近づきます。\n\n女性が見つけた小さな違和感を、一つひとつ丁寧に確かめながら、静かに答えを探していきました。\n\n言葉は多くありません。\n\nけれど二人は自然と役割を分け合い、少しずつ館の秘密へ近づいていきます。\n\nその様子を見守るように、蝶たちが少しずつ数を増やしながら舞い始めました。\n\nやがて二人は、二つ目の部屋へたどり着きます。\n\nそこには、まだ奏でられていない旋律が静かに眠っていました。"
  },
  {
    type: "puzzle",
    id: 2,
    leftTitle: "≪謎解き②≫",
    story: "そこには、まだ奏でられていない旋律が静かに眠っていました。",
    puzzleTitle: "謎解き②",
    question: "テスト２",
    answer: "２",
    explanation: "二つ目の旋律が戻ると、長い間止まっていた大時計の針が静かに一歩だけ進みました。\n\n窓から差し込む光は少し暖かくなり、館全体が柔らかな空気に包まれていきます。\n\nけれど館の最も奥深くからは、どこか切ない風が流れてきました。",
    restoredPiece: 2,
    restoredText: "第二の旋律"
  },
  {
    type: "story",
    title: "Crescendo ― だんだん強く ―",
    text: "蝶に導かれた先には、小さな温室がありました。\n\n色とりどりの花が咲き誇るその場所で、一匹だけ羽を閉じた金色の蝶が静かに佇んでいます。\n\nその蝶は、もう長い間飛んでいないようでした。\n\n二人が近づくと、蝶は静かに語り始めます。\n\n> 百年前、この館では幸せを願う演奏会が開かれました。\n>\n> けれど最後の旋律だけは誰にも奏でられることなく、演奏会は終わりを迎えてしまいました。\n>\n> それ以来、館も蝶たちも、ずっと待ち続けていたのです。\n>\n> 誰かを心から想い、その幸せを願える二人が訪れる日を。\n\n女性は蝶へ優しく微笑みます。\n\n男性も静かに頷きました。\n\nここまで歩いてきた理由が、少しだけ分かった気がしたのです。\n\n失われた三つ目の旋律が、柔らかな光を放ち始めました。"
  },
  {
    type: "puzzle",
    id: 3,
    leftTitle: "≪謎解き③≫",
    story: "失われた三つ目の旋律が、柔らかな光を放ち始めました。",
    puzzleTitle: "謎解き③",
    question: "テスト３",
    answer: "３",
    explanation: "三つ目の旋律が戻ると、館中の蝶たちが一斉に舞い上がりました。\n\n止まっていたオルゴールは、短い旋律を奏で始めます。\n\nあと一つ。\n\n最後の旋律が戻れば、百年待ち続けた演奏会が始まります。",
    restoredPiece: 3,
    restoredText: "第三の旋律"
  },
  {
    type: "story",
    title: "Encore ― アンコール ―",
    text: "蝶たちが二人を導いた先には、大きなオルゴールが置かれた大広間がありました。\n\n館中の蝶が、その場所へ集まっています。\n\nけれど、最後の旋律だけがまだ欠けたままでした。\n\n女性は優しく笑います。\n\n「ここまで来られたね。」\n\n男性も穏やかに微笑み返しました。\n\n「最後まで、一緒に。」\n\n二人は最後の旋律へ手を伸ばします。"
  },
  {
    type: "puzzle",
    id: 4,
    leftTitle: "≪謎解き④≫",
    story: "二人は最後の旋律へ手を伸ばします。",
    puzzleTitle: "謎解き④",
    question: "テスト４",
    answer: "４",
    explanation: "その瞬間。\n\n館いっぱいに、美しい音楽が響き渡りました。\n\n百年眠り続けていたオルゴールは、まるで待ち続けた想いを解き放つように、優しく、温かく歌い始めます。\n\n蝶たちは一斉に空へ舞い上がり、金色の光が館中を包み込みました。\n\n羽を閉じていた金色の蝶も、ゆっくりと大空へ羽ばたきます。\n\n> おめでとうございます。\n>\n> あなたのおかげで、\n> 百年眠っていた祝福の演奏会は、\n> 再び始まりました。\n\n蝶たちは館を飛び立ちます。\n\n森を越え、\n\n空を越え、\n\n新しい物語が始まる場所へ。",
    restoredPiece: 4,
    restoredText: "最後の旋律"
  },
  {
    type: "ending",
    title: "祝福の演奏会",
    text: "この館の物語は、ここで終わるものではありません。\n\n最後のページを閉じたその瞬間から、\n\nその続きを歩むのは――\n\n**あなたです。**\n\n今日、新たな人生という物語を歩み始める二人へ。\n\nどうか皆様の祝福を、あたたかな拍手に乗せて届けてください。\n\n幸せを運ぶ蝶たちは、その想いをきっと未来へ運んでくれるでしょう。"
  }
];

const STORAGE_KEY = "lostInvitationProgress";

const runtimePages = buildRuntimePages(pages);
const book = document.getElementById("book");
const pageCount = document.getElementById("page-count");
const restoreCount = document.getElementById("restore-count");

const state = loadProgress();
state.currentPageIndex = 0;
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

  if (page.type === "story") {
    book.innerHTML = renderStoryPage(page);
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

function renderStoryPage(page) {
  return `
    <div class="book-spread story-spread">
      <article class="page story-page">
        <p class="eyebrow">Story</p>
        <h2>${escapeHtml(page.title)}</h2>
        <div class="story-body">${formatStoryText(page.text)}</div>
        <button class="primary-button" type="button" data-action="next-page">次のページへ</button>
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
          <div class="explanation-text">${formatStoryText(page.explanation)}</div>
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
        <div class="ending-text">${formatStoryText(page.text)}</div>
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

function formatStoryText(value) {
  return String(value)
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();

      if (!trimmed) {
        return "";
      }

      if (trimmed.startsWith(">")) {
        const quote = trimmed
          .split("\n")
          .map((line) => line.replace(/^>\s?/, ""))
          .map(formatInlineText)
          .join("<br>");

        return `<blockquote>${quote}</blockquote>`;
      }

      return `<p>${formatInlineText(trimmed).replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}

function formatInlineText(value) {
  return escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

renderPage();
