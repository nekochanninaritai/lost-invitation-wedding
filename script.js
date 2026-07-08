const pages = [
  {
    type: "cover",
    title: "蝶が運ぶ、はじまりの旋律",
    text: "深い森の奥に、祝福の館がありました。白い蝶に導かれ、止まったオルゴールへ四つの旋律を戻す物語が始まります。"
  },
  {
    type: "story",
    title: "Prelude ― 前奏 ―",
    text: "深い森の奥。\n\n小道を進むと、古い洋館が姿を現しました。\n\nその館の名は――\n祝福の館。\n\n今日だけ、ゲストを迎え入れる不思議な館です。\n\n扉の前で、白い蝶がふわりと舞いました。\n\n中へ入ると、広間の中央に大きなオルゴールがあります。けれど、その箱はまだ静かなまま。\n\nそばの手紙には、こう記されていました。",
    chunkImages: {
      1: {
        image: "assets/images/letter.png?v=20260629-letter",
        imageAlt: "祝福の館からの手紙"
      }
    }
  },
  {
    type: "story",
    title: "Prelude ― 前奏 ―",
    text: "白い蝶が、奥の扉へ飛んでいきます。\n\n隙間から、淡い金色の光がこぼれました。\n\n最初の謎は、もう目の前です。"
  },
  {
    type: "puzzle",
    id: 1,
    leftTitle: "第一章 Prelude ― 前奏 ―",
    story: "扉の先は、小さな応接間でした。\n\n古い招待状、封蝋の手紙、色あせた楽譜。どれも今日の来訪者を待っていたようです。\n\n机の上には、欠けた招待状の一部。\n白い蝶が止まると、紙面に光が灯ります。\n\nここから始まるのは、二人へ贈る一曲を完成させる旅。\n\n余白に、最初の謎が浮かびました。",
    puzzleTitle: "謎解き①",
    question: "蝶は迷路の中を飛びながら、いくつかの文字を通り過ぎました。\n\nSからGまでたどり、通り道にある文字を順番どおりにつなげてください。",
    questionImage: "assets/question1.png",
    questionImageAlt: "蝶が通る迷路の問題画像",
    answer: "ブーケ",
    explanation: "答えを告げると、白い蝶が羽を広げました。\n\n紙片が招待状にはまり、金色の線が走ります。\n\nオルゴールの奥で、澄んだ一音が鳴りました。\n\n蝶は次の廊下へ飛んでいきます。",
    restoredPiece: 1,
    restoredText: "第一の旋律"
  },
  {
    type: "story",
    title: "Cantabile ― 歌うように ―",
    text: "廊下には、いくつもの時計が並んでいました。\n\n振り子時計、置き時計、懐中時計。どれも針を止めたまま、静かに時を抱えています。\n\n壁には、長い五線譜。\n二人のこれからを見守るように続いていました。\n\n白い蝶は時計の間を抜け、ひとつの扉の前で止まります。\n\n鍵穴の横に、二つ目の謎が刻まれていました。"
  },
  {
    type: "puzzle",
    id: 2,
    leftTitle: "第二章 Cantabile ― 歌うように ―",
    story: "扉には小さな鍵穴。\n\nその横に、二つ目の謎が刻まれていました。\n\n過ぎてきた時間も、これから歩む時間も。\nすべてが、今日の一音につながっています。\n\n扉の向こうで、時計の針が動き出すのを待っています。",
    puzzleTitle: "謎解き②",
    question: "テスト２",
    answer: "２",
    explanation: "答えが届くと、時計が静かに音を立てました。\n\nこちり、と針が進みます。\n\n止まっていた時が、少しずつ動き出しました。\n\n廊下の奥から、温かな光が差し込みます。",
    restoredPiece: 2,
    restoredText: "第二の旋律"
  },
  {
    type: "story",
    title: "Crescendo ― だんだん強く ―",
    text: "光の先には、小さな温室がありました。\n\n陽だまりの中で花々が咲き、中心では金色の蝶が羽を休めています。\n\n白い蝶が近づくと、金色の蝶はゆっくり羽を開きました。\n\n譜面台には、途中までの楽譜。\nその余白に、三つ目の謎が浮かびます。\n\n拍手、笑顔、見守るまなざし。\nあなたの答えも、小さな光になります。"
  },
  {
    type: "puzzle",
    id: 3,
    leftTitle: "第三章 Crescendo ― だんだん強く ―",
    story: "温室の譜面台には、途中までしか書かれていない楽譜。\n\nその余白に、三つ目の謎が浮かびました。\n\n大きな言葉でなくてもかまいません。\n拍手、笑顔、見守るまなざし。\n\nあなたの答えも、二人の未来を照らす小さな光になります。",
    puzzleTitle: "謎解き③",
    question: "テスト３",
    answer: "３",
    explanation: "三つ目の答えが重なると、温室に光が広がりました。\n\n花が開き、蝶たちが舞い上がります。\n\nオルゴールは、短いフレーズを奏で始めました。\n\nあと一つ。\n最後の空白が待っています。",
    restoredPiece: 3,
    restoredText: "第三の旋律"
  },
  {
    type: "story",
    title: "Encore ― アンコール ―",
    text: "大広間の扉が、音もなく開きました。\n\n高い天井。金色に輝く譜面。\n中央には、三つの音を宿したオルゴール。\n\n館中の蝶が集まっています。\n\nけれど、最後のページだけは白いまま。\n\nそこに記されるのは、今日ここにいるあなたの答えです。\n\nさあ、最後の音を届けましょう。"
  },
  {
    type: "puzzle",
    id: 4,
    leftTitle: "第四章 Encore ― アンコール ―",
    story: "白い蝶が、最後の謎のそばへ降り立ちました。\n\n金色の蝶たちが、広間をゆっくり巡ります。\n\nさあ、最後の音を届けましょう。\n\n二人の新しい物語が、扉の向こうで待っています。",
    puzzleTitle: "謎解き④",
    question: "テスト４",
    answer: "４",
    explanation: "最後の答えが届いた瞬間。\n\nオルゴールのふたが、ゆっくりと開きました。\n\n四つの音が重なり、広間いっぱいに響きます。\n\n今日だけの祝福の音楽が完成しました。\n\n扉の向こうから、拍手のような光が差し込みます。",
    restoredPiece: 4,
    restoredText: "最後の旋律"
  },
  {
    type: "story",
    title: "Epilogue 1 ― 手紙のはじまり ―",
    text: "白い蝶が、そっと一枚の手紙を\nあなたのもとへ運んできました。\n\nその封を開くと、\nそこに綴られていたのは――\n\n祝福の館からの言葉ではありませんでした。",
    buttonText: "次のページへ",
    ambientAudioKey: "ending",
    variant: "epilogue",
    preventSplit: true
  },
  {
    type: "story",
    title: "Epilogue 2 ― 感謝の気持ちを込めて ―",
    text: "",
    letterImage: true,
    buttonText: "次のページへ",
    ambientAudioKey: "ending",
    variant: "epilogue",
    preventSplit: true
  },
  {
    type: "story",
    title: "Epilogue 3 ― これからの二人へ祝福を ―",
    text: "オルゴールの音色は、\nもう館だけに響くものではありません。\n\n皆さまの祝福とともに、\nこれから始まる私たちの人生へ、\nいつまでも優しく寄り添い続けます。\n\n**本日は、本当にありがとうございました。**",
    image: "assets/images/story-ending.png",
    imageAlt: "祝福の光に包まれたオルゴール",
    imageFirst: true,
    buttonText: "披露宴へ戻る",
    extraButton: true,
    ambientAudioKey: "ending",
    variant: "epilogue epilogue-final",
    finalPage: true,
    preventSplit: true
  },
  {
    type: "extra",
    title: "Extra Contents",
    subtitle: "祝福の館からの小さな贈り物",
    ambientAudioKey: "ending"
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
  intro: "assets/audio/%E3%83%97%E3%83%AD%E3%83%AD%E3%83%BC%E3%82%B0.mp3",
  click: "assets/audio/click.mp3",
  correct: "assets/audio/correct.mp3",
  wrong: "assets/audio/wrong.mp3",
  ending: "assets/audio/%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0.mp3",
  chapter1: "assets/audio/1%E7%AB%A0.mp3",
  chapter2: "assets/audio/2%E7%AB%A0.mp3",
  chapter3: "assets/audio/3%E7%AB%A0.mp3",
  chapter4: "assets/audio/4%E7%AB%A0.mp3"
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
let pageCueTimer;
let correctCueTimer;

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
  const themeClass = getPageTheme(page);
  const restoredTotal = state.restoredPieces.length;
  const puzzleTotal = pages.filter((item) => item.type === "puzzle").length;

  document.body.dataset.pageType = page.type;
  document.body.dataset.roomTheme = themeClass.replace("theme-", "");
  document.body.dataset.awakeLevel = String(Math.min(restoredTotal, puzzleTotal));
  pageCount.textContent = `${state.currentPageIndex + 1} / ${runtimePages.length} ページ`;
  restoreCount.textContent = `旋律 ${restoredTotal} / ${puzzleTotal}`;
  renderMusicboxGauge(restoredTotal, puzzleTotal);

  book.classList.remove("is-turning");
  void book.offsetWidth;
  book.classList.add("is-turning");
  document.body.classList.remove("is-page-arriving");
  void document.body.offsetWidth;
  document.body.classList.add("is-page-arriving");
  window.clearTimeout(pageTurnTimer);
  window.clearTimeout(pageCueTimer);
  pageTurnTimer = window.setTimeout(() => {
    book.classList.remove("is-turning");
  }, 500);
  pageCueTimer = window.setTimeout(() => {
    document.body.classList.remove("is-page-arriving");
  }, 520);

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

  if (page.type === "extra") {
    book.innerHTML = renderExtraPage(page);
  }

  bindCommonActions();
  bindPuzzleForm(page);
  updateAmbientAudio(page);
  bindMediaOverflowUpdates();
  schedulePageOverflowUpdate();
}

function schedulePageOverflowUpdate() {
  requestAnimationFrame(() => {
    updatePageOverflow();
    bindScrollMotion();
  });
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

function bindMediaOverflowUpdates() {
  const updateAfterLayout = () => {
    schedulePageOverflowUpdate();
    window.setTimeout(schedulePageOverflowUpdate, 120);
  };

  book.querySelectorAll("img").forEach((image) => {
    if (image.complete) {
      updateAfterLayout();
      return;
    }

    image.addEventListener("load", updateAfterLayout, { once: true });
    image.addEventListener("error", updateAfterLayout, { once: true });
  });

  book.querySelectorAll("video").forEach((video) => {
    if (video.readyState >= 1) {
      updateAfterLayout();
      return;
    }

    video.addEventListener("loadedmetadata", updateAfterLayout, { once: true });
    video.addEventListener("error", updateAfterLayout, { once: true });
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
    <div class="book-spread theme-prelude">
      <article class="page cover-page room-page">
        ${renderPaperEffects()}
        ${renderRoomDecor("theme-prelude")}
        <div class="cover-inner">
          <div class="envelope-mark" aria-hidden="true"></div>
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
  const themeClass = getPageTheme(page);
  const imageClass = page.image ? " has-story-image" : "";
  const storyText = page.text ? `<div class="story-body">${formatStoryText(page.text, page)}</div>` : "";
  const storyLetter = page.letterImage ? renderEndingLetterFrame() : "";
  const storyImage = page.image ? renderStoryImage(page) : "";
  const storyContent = page.imageFirst
    ? [storyImage, storyText, storyLetter].join("")
    : [storyText, storyLetter, storyImage].join("");
  const variantClasses = page.variant
    ? page.variant.split(/\s+/).filter(Boolean).map((variant) => `is-${variant}`)
    : [];
  const pageClass = ["page", "story-page", "room-page", imageClass.trim(), ...variantClasses]
    .filter(Boolean)
    .join(" ");
  const nextButtonText = page.buttonText || "次のページへ";
  const buttonAction = page.finalPage ? "restart" : "next-page";
  const buttonClass = page.finalPage ? "secondary-button" : "primary-button";
  const extraButton = page.extraButton ? renderExtraContentsButton() : "";

  return `
    <div class="book-spread story-spread ${themeClass}">
      <article class="${pageClass}">
        ${renderPaperEffects()}
        ${renderRoomDecor(themeClass)}
        <p class="eyebrow">Story</p>
        <h2>${escapeHtml(page.title)}</h2>
        ${storyContent}
        <div class="page-actions">
          ${previousButton}
          <button class="${buttonClass}" type="button" data-action="${buttonAction}">${escapeHtml(nextButtonText)}</button>
          ${extraButton}
        </div>
      </article>
      <article class="page room-visual-page" aria-hidden="true">
        ${renderPaperEffects()}
        ${renderRoomDecor(themeClass)}
        ${renderRoomVisual(themeClass)}
      </article>
    </div>
  `;
}

function renderExtraContentsButton() {
  return `
    <button class="extra-contents-button" type="button" data-action="next-page">
      <span class="extra-contents-button__label">Extra Contents</span>
      <span class="extra-contents-button__sub">祝福の館から、もうひとつの贈り物</span>
    </button>
  `;
}

function renderStoryImage(page) {
  const imageClass = [
    page.image?.includes("letter.png") ? "is-letter-image" : "",
    page.variant === "epilogue" ? "is-epilogue-image" : ""
  ].filter(Boolean).join(" ");

  return `
    <figure class="story-image-frame ${imageClass}">
      <img src="${escapeHtml(page.image)}" alt="${escapeHtml(page.imageAlt || page.title)}" onerror="this.closest('figure').classList.add('is-missing-image'); this.remove();">
    </figure>
  `;
}

function renderEndingLetterFrame() {
  return `
    <figure class="ending-letter-frame">
      <img src="assets/images/ending_letter.png" alt="新郎新婦から皆さまへのメッセージ" onerror="this.closest('figure').classList.add('is-missing-image'); this.remove();">
    </figure>
  `;
}

function renderPuzzlePage(page) {
  const previousButton = renderPreviousButton();
  const themeClass = getPageTheme(page);

  return `
    <div class="book-spread ${themeClass}">
      <article class="page room-page">
        ${renderPaperEffects()}
        ${renderRoomDecor(themeClass)}
        <p class="eyebrow">Story</p>
        <h2>${escapeHtml(page.leftTitle)}</h2>
        <p class="story-text">${escapeHtml(page.story)}</p>
        ${renderInvitationPreview()}
      </article>
      <article class="page question-page room-page">
        ${renderPaperEffects()}
        ${renderRoomDecor(themeClass)}
        ${renderRoomVisual(themeClass)}
        <p class="eyebrow">Question</p>
        <h3>${escapeHtml(page.puzzleTitle)}</h3>
        <div class="question-text">${formatStoryText(page.question)}</div>
        ${renderQuestionImage(page)}
        <form class="answer-form" id="answer-form">
          <label for="answer-input">答え</label>
          <input id="answer-input" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" inputmode="text" enterkeyhint="done" placeholder="答えを入力">
          <button class="primary-button" type="submit">回答する</button>
          <p id="error-message" class="error-message" role="alert" aria-live="polite"></p>
        </form>
        ${previousButton}
      </article>
    </div>
  `;
}

function renderQuestionImage(page) {
  if (!page.questionImage) {
    return "";
  }

  return `
    <figure class="question-image-frame">
      <img src="${escapeHtml(page.questionImage)}" alt="${escapeHtml(page.questionImageAlt || page.puzzleTitle)}" loading="lazy">
    </figure>
  `;
}

function renderRestorePage(page) {
  const previousButton = renderPreviousButton();
  const themeClass = getPageTheme(page);

  return `
    <div class="book-spread ${themeClass}">
      <article class="page restore-card room-page">
        ${renderPaperEffects()}
        ${renderRoomDecor(themeClass)}
        ${renderRoomVisual(themeClass)}
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
  const themeClass = getPageTheme(page);

  return `
    <div class="book-spread ${themeClass}">
      <article class="page room-page">
        ${renderPaperEffects()}
        ${renderRoomDecor(themeClass)}
        ${renderRoomVisual(themeClass)}
        <p class="eyebrow">Completed Melody</p>
        <h2>${escapeHtml(page.title)}</h2>
        ${renderInvitationPreview(true)}
      </article>
      <article class="page room-page">
        ${renderPaperEffects()}
        ${renderRoomDecor(themeClass)}
        <p class="eyebrow">Final Message</p>
        ${renderEndingLetterFrame()}
        <div class="page-actions">
          ${previousButton}
          <button class="secondary-button" type="button" data-action="restart">もう一度、館を訪れる</button>
        </div>
      </article>
    </div>
  `;
}

function renderExtraPage(page) {
  const previousButton = renderPreviousButton();
  const themeClass = getPageTheme(page);

  return `
    <div class="book-spread extra-spread ${themeClass}">
      <article class="page extra-page room-page">
        ${renderPaperEffects()}
        ${renderRoomDecor(themeClass)}
        <p class="eyebrow">Secret Room</p>
        <h2>${escapeHtml(page.title)}</h2>
        <p class="extra-subtitle">${escapeHtml(page.subtitle)}</p>
        <div class="story-body extra-intro">
          ${formatStoryText("白い蝶が最後に羽ばたくと、\n\n本棚の奥から小さな引き出しが静かに開きました。\n\nそこには、\nまだ誰にも見つかっていなかった小さな贈り物が残されています。\n\nここまで物語を見届けてくださったあなたへ。\n\n祝福の館から、心ばかりのお礼です。")}
        </div>
        ${renderEscapeGameCard()}
        ${renderExtraVideo()}
        <div class="story-body extra-closing">
          ${formatStoryText("祝福の館は、\n\n今日という日だけ、\n\n静かにその扉を開きました。\n\n皆さまとともに紡いだこの物語は、\n\n私たちにとって一生忘れられない思い出です。\n\nまたどこかで、\n\n笑顔でお会いできる日を楽しみにしています。\n\n**本日は、本当にありがとうございました。**")}
        </div>
        <div class="page-actions">
          ${previousButton}
          <button class="secondary-button" type="button" data-action="restart">タイトルへ戻る</button>
        </div>
      </article>
      <article class="page room-visual-page" aria-hidden="true">
        ${renderPaperEffects()}
        ${renderRoomDecor(themeClass)}
        ${renderRoomVisual(themeClass)}
      </article>
    </div>
  `;
}

function renderEscapeGameCard() {
  const url = "https://dasshutsu.games/game/-NM2y3ZPZ1nQLpa620TF";

  return `
    <a class="extra-card" href="${url}" target="_blank" rel="noopener noreferrer">
      <span class="extra-card__ribbon">Another Gift</span>
      <span class="extra-card__thumb">
        <img src="assets/images/dgm-thumbnail.webp" alt="もうひとつの祝福の館" loading="lazy" onerror="this.closest('.extra-card__thumb').classList.add('is-missing-image'); this.remove();">
      </span>
      <span class="extra-card__body">
        <span class="extra-card__title">もうひとつの祝福の館</span>
        <span class="extra-card__text">この物語を別の形でも楽しめる、<br>脱出ゲームメーカー版です。<br>スマートフォンから気軽に遊べます。</span>
        <span class="extra-card__button">脱出ゲームメーカーで遊ぶ</span>
      </span>
    </a>
  `;
}

function renderExtraVideo() {
  return `
    <section class="extra-video-section" aria-labelledby="extra-video-title">
      <p class="eyebrow">Behind The Story</p>
      <h3 id="extra-video-title">NGシーン</h3>
      <p class="extra-video-subtitle">実はこんな舞台裏もありました。</p>
      <p class="extra-video-text">少しだけ肩の力を抜いて、<br>最後まで楽しんでいただけたら嬉しいです。</p>
      <video class="extra-video" controls preload="metadata" playsinline poster="assets/images/story-ending.png">
        <source src="assets/videos/story_endding.mp4" type="video/mp4">
        お使いのブラウザでは動画を再生できません。
      </video>
    </section>
  `;
}

function renderSealedPage() {
  return `
    <div class="book-spread theme-prelude">
      <article class="page sealed-card room-page">
        ${renderPaperEffects()}
        ${renderRoomDecor("theme-prelude")}
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

function getPageTheme(page) {
  if (!page) {
    return "theme-prelude";
  }

  if (page.type === "extra" || page.variant?.includes("epilogue")) {
    return "theme-finale";
  }

  if (page.id === 1 || page.sourceId === 1) {
    return "theme-invitation";
  }

  if (page.id === 2 || page.sourceId === 2 || page.title?.includes("Cantabile") || page.leftTitle?.includes("Cantabile")) {
    return "theme-time";
  }

  if (page.id === 3 || page.sourceId === 3 || page.title?.includes("Crescendo") || page.leftTitle?.includes("Crescendo")) {
    return "theme-garden";
  }

  if (page.id === 4 || page.sourceId === 4 || page.title?.includes("Encore") || page.leftTitle?.includes("Encore") || page.type === "ending") {
    return "theme-finale";
  }

  if (page.image) {
    return "theme-invitation";
  }

  if (page.type === "cover" || page.title?.includes("Prelude") || page.leftTitle?.includes("Prelude")) {
    return "theme-prelude";
  }

  return "theme-prelude";
}

function renderRoomDecor(themeClass) {
  return `
    <div class="room-decor ${themeClass}" aria-hidden="true">
      <span class="room-mark mark-1"></span>
      <span class="room-mark mark-2"></span>
      <span class="room-mark mark-3"></span>
    </div>
  `;
}

function renderRoomVisual(themeClass) {
  return `
    <div class="room-visual ${themeClass}" aria-hidden="true">
      <span class="visual-piece piece-1"></span>
      <span class="visual-piece piece-2"></span>
      <span class="visual-piece piece-3"></span>
    </div>
  `;
}

function renderPaperEffects() {
  return `
    <div class="paper-effects" aria-hidden="true">
      <span class="music-note note-1">♪</span>
      <span class="music-note note-2">♫</span>
      <span class="music-note note-3">♬</span>
      <span class="butterfly butterfly-1 direction-ltr"><span class="butterfly-sprite"></span></span>
      <span class="butterfly butterfly-2 direction-rtl"><span class="butterfly-sprite"></span></span>
      <span class="butterfly butterfly-guide direction-ltr"><span class="butterfly-sprite"></span></span>
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
      <span class="musicbox-object musicbox-gear gear-2"></span>
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
      triggerButtonCue();
      playSound("click");
      unlockPage(1);
      setPage(1);
    });
  }

  if (nextPageButton) {
    nextPageButton.addEventListener("click", () => {
      triggerButtonCue();
      playSound("click");
      unlockPage(state.currentPageIndex + 1);
      setPage(state.currentPageIndex + 1);
    });
  }

  if (previousPageButton) {
    previousPageButton.addEventListener("click", () => {
      triggerButtonCue();
      playSound("click");
      setPage(state.currentPageIndex - 1);
    });
  }

  if (restartButton) {
    restartButton.addEventListener("click", () => {
      triggerButtonCue();
      playSound("click");
      setPage(0);
    });
  }

  if (resetProgressButton) {
    resetProgressButton.addEventListener("click", () => {
      triggerButtonCue();
      playSound("click");
      resetProgress();
    });
  }

  if (backButton) {
    backButton.addEventListener("click", () => {
      triggerButtonCue();
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
    state.answers[answerKey] = input.value;
    saveProgress();
  });

  input.addEventListener("blur", () => {
    normalizeVisibleAnswer(input, answerKey);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    normalizeVisibleAnswer(input, answerKey);

    if (isCorrectAnswer(input.value, page)) {
      const nextPageIndex = state.currentPageIndex + 1;

      triggerCorrectCue(page.restoredPiece);
      markPuzzleCleared(page.id);
      restorePiece(page.restoredPiece);
      unlockPage(nextPageIndex);
      playSound("correct");
      updateAmbientAudio(runtimePages[nextPageIndex]);
      window.setTimeout(() => {
        setPage(nextPageIndex);
      }, prefersReducedMotion() ? 0 : 520);
      return;
    }

    playSound("wrong");
    input.classList.remove("is-wrong");
    void input.offsetWidth;
    input.classList.add("is-wrong");
    errorMessage.textContent = "まだ違うようです。蝶が示した手がかりをもう一度見直してみましょう。";
  });
}

function normalizeVisibleAnswer(input, answerKey) {
  const converted = toFullWidthKatakana(input.value);

  if (input.value !== converted) {
    input.value = converted;
  }

  state.answers[answerKey] = input.value;
  saveProgress();
}

function triggerButtonCue() {
  document.body.classList.remove("is-button-cue");
  void document.body.offsetWidth;
  document.body.classList.add("is-button-cue");
  window.setTimeout(() => {
    document.body.classList.remove("is-button-cue");
  }, 680);
}

function triggerCorrectCue(pieceId) {
  document.body.classList.remove(
    "is-correct-cue",
    "is-correct-piece-1",
    "is-correct-piece-2",
    "is-correct-piece-3",
    "is-correct-piece-4"
  );
  void document.body.offsetWidth;
  document.body.classList.add("is-correct-cue", `is-correct-piece-${pieceId}`);
  window.clearTimeout(correctCueTimer);
  correctCueTimer = window.setTimeout(() => {
    document.body.classList.remove(
      "is-correct-cue",
      "is-correct-piece-1",
      "is-correct-piece-2",
      "is-correct-piece-3",
      "is-correct-piece-4"
    );
  }, 2400);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function bindScrollMotion() {
  const scrollers = book.querySelectorAll(".book-spread.is-scrollable, .page.is-scrollable");

  scrollers.forEach((element) => {
    if (element.dataset.scrollMotionBound === "true") {
      return;
    }

    element.dataset.scrollMotionBound = "true";
    element.addEventListener("scroll", () => {
      const shift = Math.min(24, element.scrollTop * 0.04);
      element.style.setProperty("--scroll-shift", `${shift}px`);
    }, { passive: true });
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
    if (page.preventSplit) {
      return [page];
    }

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

  return chunks.map((text, index) => {
    const chunkImage = page.chunkImages?.[index];

    return {
      ...page,
      chunkImages: undefined,
      title: page.title && chunks.length > 1 ? `${page.title} ${index + 1}/${chunks.length}` : page.title,
      [textKey]: text,
      ...(chunkImage || {})
    };
  });
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

function formatStoryText(value, page = {}) {
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
  audio.volume = getEffectVolume(name);
  audioState.currentEffects.push(audio);
  audio.addEventListener("ended", () => {
    audioState.currentEffects = audioState.currentEffects.filter((item) => item !== audio);
  }, { once: true });
  const shouldPlayIntroAfterEffect = ["click", "wrong"].includes(name) && !isEndingPage();

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

  if (audioState.introAudio && !audioState.introAudio.paused) {
    return;
  }

  if (audioState.introAudio) {
    audioState.introAudio.pause();
    audioState.introAudio.currentTime = 0;
  }

  audioState.introAudio = new Audio(audioPaths.intro);
  audioState.introAudio.loop = true;
  audioState.introAudio.volume = 0;
  audioState.introAudio
    .play()
    .then(() => fadeAudioIn(audioState.introAudio, 0.3, 760))
    .catch(() => {});
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

  const shouldFadeIn = audioState.ambientKey !== ambientKey;

  if (shouldFadeIn) {
    stopAmbientAudio();
    audioState.ambientAudio = new Audio(audioPaths[ambientKey]);
    audioState.ambientAudio.loop = true;
    audioState.ambientAudio.volume = 0;
    audioState.ambientKey = ambientKey;
  }

  audioState.ambientAudio
    .play()
    .then(() => {
      if (shouldFadeIn) {
        fadeAudioIn(audioState.ambientAudio, getAmbientVolume(ambientKey), 920);
      }
    })
    .catch(() => {});
}

function getEffectVolume(name) {
  const volumes = {
    click: 0.24,
    correct: 0.36,
    wrong: 0.22
  };

  return volumes[name] ?? 0.3;
}

function getAmbientVolume(ambientKey) {
  if (ambientKey.startsWith("chapter")) {
    return 0.34;
  }

  if (ambientKey === "ending") {
    return 0.31;
  }

  return 0.3;
}

function fadeAudioIn(audio, targetVolume, duration) {
  const startedAt = performance.now();

  function step(now) {
    if (audio.paused) {
      return;
    }

    const progress = Math.min(1, (now - startedAt) / duration);
    audio.volume = targetVolume * progress;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function getAmbientAudioKey(page) {
  if (page.ambientAudioKey) {
    return page.ambientAudioKey;
  }

  if (page.type === "ending" || page.type === "extra") {
    return "ending";
  }

  const latestChapter = getLatestRestoredChapterForPage(state.currentPageIndex);

  return latestChapter ? `chapter${latestChapter}` : "";
}

function getLatestRestoredChapterForPage(pageIndex) {
  for (let index = pageIndex; index >= 0; index -= 1) {
    const candidate = runtimePages[index];

    if (candidate?.type === "restore" && candidate.sourceId >= 1 && candidate.sourceId <= 4) {
      return candidate.sourceId;
    }
  }

  return 0;
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
