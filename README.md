# 蝶が運ぶ、最後の祝福

結婚式向けの静的Web謎解きサイトです。

百年に一度だけ姿を現す「祝福の館」を舞台に、問題を解くたびにオルゴールの旋律が戻っていくストーリーです。

## 公開URL

GitHub Pages:

https://nekochanninaritai.github.io/lost-invitation-wedding/

## 構成

- `index.html`: 画面の土台
- `style.css`: 見た目、アニメーション、レスポンシブ対応
- `script.js`: ページ描画、問題データ、回答判定、進行状況保存
- `assets/images/`: 画像素材用
- `assets/audio/`: BGMなど将来用

## 現在の問題

現在は4問構成です。

1. 謎解き① / Prelude ― 前奏 ―
2. テスト２ / 回答: ２
3. テスト３ / 回答: ３
4. テスト４ / 回答: ４

回答入力は自動で全角カタカナ、全角数字に変換されます。

## 問題を追加・変更する方法

`script.js` の `pages` 配列にある `type: "puzzle"` の項目を編集します。

```js
{
  type: "puzzle",
  id: 5,
  leftTitle: "第五の断片",
  story: "ここにストーリーを入れる",
  puzzleTitle: "第五の謎",
  question: "ここに問題文を入れる",
  answer: "こたえ",
  explanation: "ここに解説を入れる",
  restoredPiece: 5,
  restoredText: "第五の断片"
}
```

## ローカル確認

PowerShellで以下を実行すると、ブラウザで `index.html` を開けます。

```powershell
cd "C:\Users\Ikeda Remi\Documents\Codex\2026-05-30\wedding-web-4-html-css-javascript"
start .\index.html
```

GitHub Pagesと同じURL形式で確認したい場合は、任意のローカルサーバーを使ってください。

例:

```powershell
npx serve .
```

## GitHub Pages設定

GitHubのリポジトリで以下を設定します。

- `Settings` → `Pages`
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

## 進行状況の保存

進行状況はブラウザの `localStorage` に保存されます。

最初から確認したい場合は、サイト内の「最初から読む」ボタンを使うか、ブラウザのサイトデータを削除してください。
