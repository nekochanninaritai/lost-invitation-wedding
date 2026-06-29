const pages = [
  {
    type: "cover",
    title: "蝶が運ぶ、はじまりの旋律",
    text: "深い森の奥に、百年に一度だけ姿を現す祝福の館がありました。止まったままのオルゴールに四つの旋律を戻すため、白い蝶が二人を館へと導きます。"
  },
  {
    type: "story",
    title: "Prelude ― 前奏 ―",
    text: "深い森の奥。\n\n木々のざわめきが、かすかな音階のように聞こえる小道を進むと、一軒の古い洋館が姿を現しました。\n\nその館の名は――\n\n祝福の館。\n\n今日という特別な日にだけ、ゲストを迎え入れる不思議な館です。\n\n扉の前で、一匹の白い蝶がふわりと舞いました。\n\n蝶に導かれて中へ入ると、広間の中央に大きなオルゴールが置かれています。\n\nけれど、その箱はまだ静かなまま。\n\nそばには、一通の手紙がありました。\n\n「祝福の館へようこそ。\n\nこのオルゴールには、新郎新婦の門出を祝う音色が眠っています。\n\nけれど、完成に必要な四つの旋律は、館の中へ散らばってしまいました。\n\nどうか蝶の導きに従い、四つの謎を解いてください。\n\nあなたが見つけた答えは、二人へ届く祝福の一部になります。」"
  },
  {
    type: "story",
    title: "祝福の館からの手紙",
    image: "assets/images/letter.png",
    imageAlt: "祝福の館からの手紙",
    text: "祝福の館へようこそ。\n\nこのオルゴールには、新郎新婦の門出を祝う音色が眠っています。\n\nけれど、完成に必要な四つの旋律は、館の中へ散らばってしまいました。\n\nどうか蝶の導きに従い、四つの謎を解いてください。\n\nあなたが見つけた答えは、二人へ届く祝福の一部になります。"
  },
  {
    type: "story",
    title: "Prelude ― 前奏 ―",
    text: "白い蝶が、そっと奥の扉へ飛んでいきます。\n\n扉の隙間から、淡い金色の光がこぼれました。\n\n最初の謎は、もう目の前です。"
  },
  {
    type: "puzzle",
    id: 1,
    leftTitle: "第一章 Prelude ― 前奏 ―",
    story: "扉の先は、小さな応接間でした。\n\n古い招待状、封蝋の残る手紙、色あせた楽譜。\n\nどれも長い時間を越えて、今日の来訪者を待っていたように見えます。\n\n机の上には、欠けた招待状の一部が置かれていました。\n\n白い蝶がその上に止まると、紙面に小さな光が灯ります。\n\nここから始まるのは、\n\n二人へ贈る一曲を、\nあなたの手で完成させる旅。\n\n招待状の余白に、最初の謎が浮かび上がりました。\n\n蝶は羽を震わせ、答えを待っています。",
    puzzleTitle: "謎解き①",
    question: "ふたりが大切にしている言葉です。『ありがとう』の気持ちを、今日という日に一番届けたい相手は誰でしょう？",
    answer: "みなさま",
    explanation: "答えを告げた瞬間、眠っていた白い蝶がゆっくりと羽を広げました。\n\n紙片が招待状にはまり、金色の線がすっと走ります。\n\nオルゴールの奥で、澄んだ一音が鳴りました。\n\n最初の音が戻ったのです。\n\n蝶は嬉しそうにあなたの周りを一度だけ舞うと、次の廊下へ飛んでいきました。\n\nその先で、古い時計がかすかに揺れています。",
    restoredPiece: 1,
    restoredText: "第一の旋律"
  },
  {
    type: "story",
    title: "Cantabile ― 歌うように ―",
    text: "廊下には、いくつもの時計が並んでいました。\n\n大きな振り子時計。\n\n小さな置き時計。\n\n止まったままの懐中時計。\n\nどれも針を止めたまま、静かに時を抱えています。\n\n壁には、二人のこれからを見守るように、長い五線譜が続いていました。\n\n白い蝶は時計の間を抜け、ひとつの扉の前で止まります。\n\n扉には小さな鍵穴。\n\nその横に、二つ目の謎が刻まれていました。\n\n過ぎてきた時間も、これから歩む時間も。\n\nそのすべてが、今日の一音につながっています。\n\n扉の向こうで、時計の針が動き出すのを待っています。"
  },
  {
    type: "puzzle",
    id: 2,
    leftTitle: "第二章 Cantabile ― 歌うように ―",
    story: "扉には小さな鍵穴。\n\nその横に、二つ目の謎が刻まれていました。\n\n過ぎてきた時間も、これから歩む時間も。\n\nそのすべてが、今日の一音につながっています。\n\n扉の向こうで、時計の針が動き出すのを待っています。",
    puzzleTitle: "謎解き②",
    question: "テスト２",
    answer: "２",
    explanation: "二つ目の答えが届くと、廊下に並ぶ時計のひとつが、静かに音を立てました。\n\nこちり、と針が進みます。\n\n続いて別の時計も、またひとつ。\n\n止まっていた時間が、少しずつ呼吸を取り戻していきます。\n\nオルゴールには、二つ目の音が重なりました。\n\n廊下の奥から、温かな光が差し込みます。\n\n白い蝶はその光へ向かい、花の香りがする場所へ飛んでいきました。",
    restoredPiece: 2,
    restoredText: "第二の旋律"
  },
  {
    type: "story",
    title: "Crescendo ― だんだん強く ―",
    text: "光の先には、小さな温室がありました。\n\nガラス越しの陽だまりの中で、花々が静かに咲いています。\n\nその中心で、金色の蝶が羽を休めていました。\n\n白い蝶が近づくと、金色の蝶はゆっくりと目を覚ますように羽を開きます。\n\n温室の譜面台には、まだ途中までしか書かれていない楽譜。\n\nその余白に、三つ目の謎が浮かびました。\n\n大きな言葉でなくてもかまいません。\n\n拍手、笑顔、そっと見守るまなざし。\n\nあなたがここで見つける答えも、二人の未来を照らす小さな光になります。\n\n花びらが揺れ、金色の蝶が謎の上へ舞い降りました。"
  },
  {
    type: "puzzle",
    id: 3,
    leftTitle: "第三章 Crescendo ― だんだん強く ―",
    story: "温室の譜面台には、まだ途中までしか書かれていない楽譜。\n\nその余白に、三つ目の謎が浮かびました。\n\n大きな言葉でなくてもかまいません。\n\n拍手、笑顔、そっと見守るまなざし。\n\nあなたがここで見つける答えも、二人の未来を照らす小さな光になります。\n\n花びらが揺れ、金色の蝶が謎の上へ舞い降りました。",
    puzzleTitle: "謎解き③",
    question: "テスト３",
    answer: "３",
    explanation: "三つ目の答えが重なると、温室いっぱいに光が広がりました。\n\n閉じていた花が少しずつ開き、蝶たちが一斉に舞い上がります。\n\nオルゴールは、短いフレーズを奏で始めました。\n\nもう、ただの一音ではありません。\n\n館のあちこちで、楽譜が淡く輝き始めています。\n\nあと一つ。\n\n最後の空白だけが、まだ静かに残っています。\n\n蝶たちは大広間へ向かい、あなたを導くようにゆっくりと飛んでいきました。",
    restoredPiece: 3,
    restoredText: "第三の旋律"
  },
  {
    type: "story",
    title: "Encore ― アンコール ―",
    text: "大広間の扉が、音もなく開きました。\n\n高い天井。\n\n金色に輝く譜面。\n\n中央には、三つの音を宿したオルゴール。\n\n館中の蝶が、この場所へ集まっています。\n\nけれど、最後のページだけがまだ白いままでした。\n\nそこに記されるのは、誰か一人の言葉ではありません。\n\n今日ここにいるあなたの答え。\n\nそして、二人の門出を見守るすべての人の気持ちです。\n\n白い蝶が、最後の謎のそばへ降り立ちました。\n\n金色の蝶たちが、広間の上をゆっくり巡ります。\n\nさあ、最後の音を届けましょう。\n\n二人の新しい物語が、扉の向こうで待っています。"
  },
  {
    type: "puzzle",
    id: 4,
    leftTitle: "第四章 Encore ― アンコール ―",
    story: "白い蝶が、最後の謎のそばへ降り立ちました。\n\n金色の蝶たちが、広間の上をゆっくり巡ります。\n\nさあ、最後の音を届けましょう。\n\n二人の新しい物語が、扉の向こうで待っています。",
    puzzleTitle: "謎解き④",
    question: "テスト４",
    answer: "４",
    explanation: "最後の答えが届いた瞬間。\n\nオルゴールのふたが、ゆっくりと開きました。\n\n重なった四つの音がひとつになり、広間いっぱいに優しい響きが満ちていきます。\n\n時計が鳴り、花が揺れ、蝶たちが金色の光の中を舞い上がりました。\n\n四つの音が重なり、\n\n今日という日のためだけの\n祝福の音楽が完成しました。\n\n扉の向こうから、あたたかな拍手のような光が差し込みます。",
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
const musicboxGauge = document.getElementById("musicbox-gauge");
const audioStartButton = document.getElementById("audio-start");
const audioToggleButton = document.getElementById("audio-toggle");

const audioPaths = {
  intro: "assets/audio/musicbox_intro.mp3",
  click: "assets/audio/click.mp3",
  correct: "assets/audio/correct.mp3",
  wrong: "assets/audio/wrong.mp3",
  ending: "assets/audio/ending_musicbox.mp3",
  newOverture: "assets/audio/new_overture.mp3"
};

const imagePaths = {
  butterfly: "assets/images/butterfly.gif"
};

const audioState = {
  enabled: false,
  sfxEnabled: false,
  endingStarted: false,
  endingAudio: null,
  ambientAudio: null,
  ambientKey: "",
  introAudio: null,
  currentEffects: []
};

const state = loadProgress();
state.currentPageIndex = clampPageIndex(state.currentPageIndex);
state.unlockedPageIndex = clampPageIndex(state.unlockedPageIndex);
let pageTurnTimer;

detectOptionalImages();

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return {
      currentPageIndex: 0,
      unlockedPageIndex: 0,
      restoredPieces: [],
      clearedPuzzleIds: [],
      answers: {},
      audioEnabled: false,
      sfxEnabled: false
    };
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      currentPageIndex: Number(parsed.currentPageIndex) || 0,
      unlockedPageIndex: Number(parsed.unlockedPageIndex) || 0,
      restoredPieces: Array.isArray(parsed.restoredPieces) ? parsed.restoredPieces : [],
      clearedPuzzleIds: Array.isArray(parsed.clearedPuzzleIds) ? parsed.clearedPuzzleIds : [],
      answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {},
      audioEnabled: Boolean(parsed.audioEnabled),
      sfxEnabled: Boolean(parsed.sfxEnabled ?? parsed.audioEnabled)
    };
  } catch {
    return {
      currentPageIndex: 0,
      unlockedPageIndex: 0,
      restoredPieces: [],
      clearedPuzzleIds: [],
      answers: {},
      audioEnabled: false,
      sfxEnabled: false
    };
  }
}

function clampPageIndex(index) {
  return Math.max(0, Math.min(Number(index) || 0, runtimePages.length - 1));
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  state.currentPageIndex = 0;
  state.unlockedPageIndex = 0;
  state.restoredPieces = [];
  state.clearedPuzzleIds = [];
  state.answers = {};
  state.audioEnabled = false;
  state.sfxEnabled = false;
  setAudioEnabled(false, { persist: false });
  renderPage();
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
  renderMusicboxGauge(restoredTotal, puzzleTotal);

  book.classList.remove("is-turning");
  void book.offsetWidth;
  book.classList.add("is-turning");
  window.clearTimeout(pageTurnTimer);
  pageTurnTimer = window.setTimeout(() => {
    book.classList.remove("is-turning");
  }, 700);

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
  updateAmbientAudio(page);
  schedulePageOverflowUpdate();
}

function schedulePageOverflowUpdate() {
  requestAnimationFrame(updatePageOverflow);
}

function updatePageOverflow() {
  document.querySelectorAll(".book-spread").forEach((spreadElement) => {
    const hasOverflow = spreadElement.scrollHeight > spreadElement.clientHeight + 2;
    spreadElement.classList.toggle("is-scrollable", hasOverflow);
  });

  document.querySelectorAll(".page").forEach((pageElement) => {
    const hasOverflow = pageElement.scrollHeight > pageElement.clientHeight + 2;
    pageElement.classList.toggle("is-scrollable", hasOverflow);
  });
}

function detectOptionalImages() {
  const image = new Image();
  image.onload = () => {
    document.body.classList.add("has-butterfly-image");
  };
  image.src = imagePaths.butterfly;
}

function renderCoverPage(page) {
  return `
    <div class="book-spread">
      <article class="page cover-page">
        ${renderPaperEffects()}
        <div class="cover-inner">
          <div class="envelope-mark" aria-hidden="true"></div>
          <div class="seal" aria-hidden="true">封</div>
          <p class="eyebrow">Blessing Manor</p>
          <h1 class="cover-title">${renderAnimatedTitle(page.title)}</h1>
          <p class="lead">${escapeHtml(page.text)}</p>
          <button class="primary-button" type="button" data-action="open-book">祝福の館へ入る</button>
          <button class="secondary-button reset-button" type="button" data-action="reset-progress">最初からやり直す</button>
        </div>
      </article>
    </div>
  `;
}

function renderStoryPage(page) {
  const previousButton = renderPreviousButton();
  const storyContent = page.image
    ? renderStoryImage(page)
    : `<div class="story-body">${formatStoryText(page.text)}</div>`;

  return `
    <div class="book-spread story-spread">
      <article class="page story-page">
        ${renderPaperEffects()}
        <p class="eyebrow">Story</p>
        <h2>${escapeHtml(page.title)}</h2>
        ${storyContent}
        <div class="page-actions">
          ${previousButton}
          <button class="primary-button" type="button" data-action="next-page">次のページへ</button>
        </div>
      </article>
    </div>
  `;
}

function renderStoryImage(page) {
  return `
    <figure class="story-image-frame">
      <img src="${escapeHtml(page.image)}" alt="${escapeHtml(page.imageAlt || page.title)}">
    </figure>
  `;
}

function renderPuzzlePage(page) {
  const previousButton = renderPreviousButton();

  return `
    <div class="book-spread">
      <article class="page">
        ${renderPaperEffects()}
        <p class="eyebrow">Story</p>
        <h2>${escapeHtml(page.leftTitle)}</h2>
        <p class="story-text">${escapeHtml(page.story)}</p>
        ${renderInvitationPreview()}
      </article>
      <article class="page">
        ${renderPaperEffects()}
        <p class="eyebrow">Question</p>
        <h3>${escapeHtml(page.puzzleTitle)}</h3>
        <p class="question-text">${escapeHtml(page.question)}</p>
        <form class="answer-form" id="answer-form">
          <label for="answer-input">答え</label>
          <input id="answer-input" type="text" autocomplete="off" inputmode="text" placeholder="答えを入力">
          <button class="primary-button" type="submit">回答する</button>
          <p id="error-message" class="error-message" role="alert" aria-live="polite"></p>
        </form>
        ${previousButton}
      </article>
    </div>
  `;
}

function renderRestorePage(page) {
  const previousButton = renderPreviousButton();

  return `
    <div class="book-spread">
      <article class="page restore-card">
        ${renderPaperEffects()}
        <div>
          <div class="paper-fragment">${escapeHtml(page.restoredText || "旋律の欠片")}</div>
          <p class="eyebrow">Restored</p>
          <h2>旋律が戻りました</h2>
          <div class="explanation-text">${formatStoryText(page.explanation)}</div>
          <div class="page-actions">
            ${previousButton}
            <button class="primary-button" type="button" data-action="next-page">次のページへ</button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderEndingPage(page) {
  const previousButton = renderPreviousButton();

  return `
    <div class="book-spread">
      <article class="page">
        ${renderPaperEffects()}
        <p class="eyebrow">Completed Melody</p>
        <h2>${escapeHtml(page.title)}</h2>
        ${renderInvitationPreview(true)}
      </article>
      <article class="page">
        ${renderPaperEffects()}
        <p class="eyebrow">Final Message</p>
        <div class="ending-text">${formatStoryText(page.text)}</div>
        <div class="page-actions">
          ${previousButton}
          <button class="secondary-button" type="button" data-action="restart">もう一度、館を訪れる</button>
        </div>
      </article>
    </div>
  `;
}

function renderSealedPage() {
  return `
    <div class="book-spread">
      <article class="page sealed-card">
        ${renderPaperEffects()}
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

function renderAnimatedTitle(title) {
  return Array.from(title).map((character, index) => {
    const displayCharacter = character === " " ? "&nbsp;" : escapeHtml(character);
    return `<span style="--title-delay: ${index * 70}ms">${displayCharacter}</span>`;
  }).join("");
}

function renderPaperEffects() {
  return `
    <div class="paper-effects" aria-hidden="true">
      <span class="music-note note-1">♪</span>
      <span class="music-note note-2">♫</span>
      <span class="music-note note-3">♬</span>
      <span class="butterfly butterfly-1 direction-ltr"><span class="butterfly-sprite"></span></span>
      <span class="butterfly butterfly-2 direction-rtl"><span class="butterfly-sprite"></span></span>
      <span class="sparkle sparkle-1"></span>
      <span class="sparkle sparkle-2"></span>
      <span class="sparkle sparkle-3"></span>
      <span class="gold-dust dust-1"></span>
      <span class="gold-dust dust-2"></span>
      <span class="gold-dust dust-3"></span>
      <span class="gold-dust dust-4"></span>
      <span class="light-orb light-orb-1"></span>
      <span class="musicbox-object musicbox-disc"></span>
      <span class="musicbox-object musicbox-gear gear-1"></span>
      <span class="light-ribbon"></span>
    </div>
  `;
}

function renderMusicboxGauge(restoredTotal, puzzleTotal) {
  musicboxGauge.classList.toggle("is-complete", restoredTotal === puzzleTotal);
  musicboxGauge.innerHTML = Array.from({ length: puzzleTotal }, (_, index) => {
    const filled = index < restoredTotal;
    return `<span class="gauge-dot ${filled ? "is-filled" : ""}" aria-hidden="true"></span>`;
  }).join("");
  musicboxGauge.setAttribute("aria-label", `オルゴール ${restoredTotal} / ${puzzleTotal}`);
}

function renderPreviousButton() {
  if (state.currentPageIndex <= 0) {
    return "";
  }

  return '<button class="secondary-button" type="button" data-action="previous-page">前のページへ戻る</button>';
}

function bindCommonActions() {
  const openBookButton = book.querySelector("[data-action='open-book']");
  const nextPageButton = book.querySelector("[data-action='next-page']");
  const previousPageButton = book.querySelector("[data-action='previous-page']");
  const restartButton = book.querySelector("[data-action='restart']");
  const resetProgressButton = book.querySelector("[data-action='reset-progress']");
  const backButton = book.querySelector("[data-action='back-to-unlocked']");

  if (openBookButton) {
    openBookButton.addEventListener("click", () => {
      playSound("click");
      unlockPage(1);
      setPage(1);
    });
  }

  if (nextPageButton) {
    nextPageButton.addEventListener("click", () => {
      playSound("click");
      unlockPage(state.currentPageIndex + 1);
      setPage(state.currentPageIndex + 1);
    });
  }

  if (previousPageButton) {
    previousPageButton.addEventListener("click", () => {
      playSound("click");
      setPage(state.currentPageIndex - 1);
    });
  }

  if (restartButton) {
    restartButton.addEventListener("click", () => {
      playSound("click");
      setPage(0);
    });
  }

  if (resetProgressButton) {
    resetProgressButton.addEventListener("click", () => {
      playSound("click");
      resetProgress();
    });
  }

  if (backButton) {
    backButton.addEventListener("click", () => {
      playSound("click");
      setPage(state.unlockedPageIndex);
    });
  }
}

function bindPuzzleForm(page) {
  if (!page || page.type !== "puzzle") {
    return;
  }

  const form = document.getElementById("answer-form");
  const input = document.getElementById("answer-input");
  const errorMessage = document.getElementById("error-message");
  const answerKey = String(page.id);

  input.value = state.answers[answerKey] || "";

  input.addEventListener("input", () => {
    const converted = toFullWidthKatakana(input.value);

    if (input.value !== converted) {
      input.value = converted;
    }

    state.answers[answerKey] = input.value;
    saveProgress();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isCorrectAnswer(input.value, page)) {
      playSound("correct");
      markPuzzleCleared(page.id);
      restorePiece(page.restoredPiece);
      unlockPage(state.currentPageIndex + 1);
      setPage(state.currentPageIndex + 1);
      return;
    }

    playSound("wrong");
    input.classList.remove("is-wrong");
    void input.offsetWidth;
    input.classList.add("is-wrong");
    errorMessage.textContent = "まだ違うようです。蝶が示した手がかりをもう一度見直してみましょう。";
    input.select();
  });
}

function markPuzzleCleared(puzzleId) {
  if (!state.clearedPuzzleIds.includes(puzzleId)) {
    state.clearedPuzzleIds.push(puzzleId);
  }
  saveProgress();
}

function restorePiece(pieceId) {
  if (!state.restoredPieces.includes(pieceId)) {
    state.restoredPieces.push(pieceId);
  }
  saveProgress();
}

function buildRuntimePages(sourcePages) {
  return sourcePages.flatMap((page) => {
    if (page.type === "story") {
      return splitTextPage(page, "text", 6);
    }

    if (page.type === "ending") {
      return splitTextPage(page, "text", 5);
    }

    if (page.type !== "puzzle") {
      return [page];
    }

    const restorePages = splitTextPage({
      type: "restore",
      sourceId: page.id,
      explanation: page.explanation,
      restoredPiece: page.restoredPiece,
      restoredText: page.restoredText
    }, "explanation", 4);

    return [
      page,
      ...restorePages
    ];
  });
}

function splitTextPage(page, textKey, maxBlocks) {
  const blocks = splitTextBlocks(page[textKey]);

  if (blocks.length <= maxBlocks) {
    return [page];
  }

  const chunks = [];

  for (let index = 0; index < blocks.length; index += maxBlocks) {
    chunks.push(blocks.slice(index, index + maxBlocks).join("\n\n"));
  }

  return chunks.map((text, index) => ({
    ...page,
    title: page.title && chunks.length > 1 ? `${page.title} ${index + 1}/${chunks.length}` : page.title,
    [textKey]: text
  }));
}

function splitTextBlocks(value) {
  return String(value)
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
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

function setupAudioControls() {
  audioStartButton.addEventListener("click", () => {
    setAudioEnabled(true);
    playSound("intro");
  });

  audioToggleButton.addEventListener("click", () => {
    setAudioEnabled(!audioState.enabled);
    playSound("click");
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pauseAllAudio({ showResumeButton: true });
    }
  });

  window.addEventListener("pagehide", () => pauseAllAudio({ showResumeButton: true }));
  window.addEventListener("beforeunload", () => pauseAllAudio({ showResumeButton: true }));
  window.addEventListener("blur", () => pauseAllAudio({ showResumeButton: true }));
}

function setAudioEnabled(enabled, options = {}) {
  const { persist = true, resumeAudio = true } = options;
  audioState.enabled = enabled;
  audioState.sfxEnabled = enabled;
  state.audioEnabled = enabled;
  state.sfxEnabled = enabled;
  document.body.classList.toggle("is-audio-enabled", enabled);
  audioStartButton.hidden = enabled && resumeAudio;
  audioToggleButton.textContent = enabled ? "音 ON" : "音 OFF";
  audioToggleButton.setAttribute("aria-pressed", String(enabled));

  if (!enabled) {
    pauseAllAudio();
  }

  if (persist) {
    saveProgress();
  }

  if (resumeAudio) {
    updateAmbientAudio(runtimePages[state.currentPageIndex]);
  }
}

function playSound(name) {
  if (name === "intro" && !audioState.enabled) {
    return;
  }

  if (name !== "intro" && !audioState.sfxEnabled) {
    return;
  }

  if (name === "intro") {
    playIntroSound();
    return;
  }

  const path = audioPaths[name];

  if (!path) {
    return;
  }

  const audio = new Audio(path);
  audio.volume = name === "ending" ? 0.35 : 0.55;
  audioState.currentEffects.push(audio);
  audio.addEventListener("ended", () => {
    audioState.currentEffects = audioState.currentEffects.filter((item) => item !== audio);
  }, { once: true });
  const shouldPlayIntroAfterEffect = ["click", "correct", "wrong"].includes(name) && !isEndingPage();

  if (shouldPlayIntroAfterEffect) {
    audio.addEventListener("ended", () => {
      if (!isEndingPage()) {
        playIntroSound();
      }
    }, { once: true });
  }

  audio.play().catch(() => {});
}

function playIntroSound() {
  if (!audioPaths.intro || getAmbientAudioKey(runtimePages[state.currentPageIndex])) {
    return;
  }

  if (audioState.introAudio) {
    audioState.introAudio.pause();
    audioState.introAudio.currentTime = 0;
  }

  audioState.introAudio = new Audio(audioPaths.intro);
  audioState.introAudio.volume = 0.5;
  audioState.introAudio.play().catch(() => {});
}

function pauseAllAudio(options = {}) {
  if (audioState.introAudio) {
    audioState.introAudio.pause();
    audioState.introAudio.currentTime = 0;
  }

  if (audioState.endingAudio) {
    audioState.endingAudio.pause();
    audioState.endingAudio.currentTime = 0;
    audioState.endingStarted = false;
  }

  if (audioState.ambientAudio) {
    audioState.ambientAudio.pause();
    audioState.ambientAudio.currentTime = 0;
    audioState.ambientAudio = null;
    audioState.ambientKey = "";
  }

  audioState.currentEffects.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  audioState.currentEffects = [];

  if (options.showResumeButton && audioState.enabled) {
    audioStartButton.hidden = false;
  }
}

function isEndingPage() {
  return runtimePages[state.currentPageIndex]?.type === "ending";
}

function updateAmbientAudio(page) {
  if (!audioState.enabled || document.hidden) {
    return;
  }

  if (audioState.introAudio) {
    audioState.introAudio.pause();
    audioState.introAudio.currentTime = 0;
  }

  const ambientKey = getAmbientAudioKey(page);

  if (!ambientKey) {
    stopAmbientAudio();
    return;
  }

  if (audioState.ambientKey !== ambientKey) {
    stopAmbientAudio();
    audioState.ambientAudio = new Audio(audioPaths[ambientKey]);
    audioState.ambientAudio.loop = true;
    audioState.ambientAudio.volume = ambientKey === "newOverture" ? 0.38 : 0.32;
    audioState.ambientKey = ambientKey;
  }

  audioState.ambientAudio.play().catch(() => {});
}

function getAmbientAudioKey(page) {
  if (page.type === "restore" && page.sourceId === 4) {
    return "newOverture";
  }

  if (page.type === "ending") {
    return "ending";
  }

  return "";
}

function stopAmbientAudio() {
  if (audioState.ambientAudio) {
    audioState.ambientAudio.pause();
    audioState.ambientAudio.currentTime = 0;
  }

  audioState.ambientAudio = null;
  audioState.ambientKey = "";
  audioState.endingStarted = false;
}

setupAudioControls();
renderPage();
setAudioEnabled(Boolean(state.audioEnabled), { persist: false, resumeAudio: false });
window.addEventListener("resize", schedulePageOverflowUpdate);
window.addEventListener("orientationchange", schedulePageOverflowUpdate);
