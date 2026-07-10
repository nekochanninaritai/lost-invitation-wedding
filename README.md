# 蝶が運ぶ、はじまりの旋律

結婚式で楽しめる、物語仕立ての謎解きWebサイトです。

ゲストは蝶に導かれながら、祝福の館に眠る四つの旋律を集め、止まってしまったオルゴールを完成させていきます。

## 公開ページ

https://nekochanninaritai.github.io/lost-invitation-wedding/

## 内容

- スマートフォン向けの静的Webサイト
- 1つのHTMLで画面を切り替えるSPA風構成
- 謎解き、正解演出、エンディング演出
- 画像・音源素材を使ったアンティークな絵本風デザイン
- エピローグ後の「蝶の奇跡」署名はFirebase Realtime Databaseで共有表示できます

## 推奨環境

スマートフォンの縦画面での閲覧を想定しています。

## 蝶の奇跡の共有設定

`firebaseConfig.js` の `databaseURL` にFirebase Realtime DatabaseのURLを設定すると、署名されたニックネームが全員に共有されます。

```js
window.WEDDING_FIREBASE_CONFIG = {
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com"
};
```

未設定の場合は、同じブラウザ内だけに保存される確認用モードで動作します。

保存先パスは `/butterflyMiracleRecords` です。公開サイトで使う場合は、Firebase側でこのパスだけ読み書きできるルールを設定してください。

ルール例:

```json
{
  "rules": {
    "butterflyMiracleRecords": {
      ".read": true,
      "$recordId": {
        ".write": true,
        ".validate": "newData.hasChildren(['id', 'nickname', 'createdAt']) && newData.child('nickname').isString() && newData.child('nickname').val().length > 0 && newData.child('nickname').val().length <= 20"
      }
    },
    "lotteryEntries": {
      ".read": true,
      "$entryId": {
        ".write": true,
        ".validate": "newData.hasChildren(['id', 'completedAt', 'lotteryEntry', 'lotteryNumber']) && newData.child('lotteryEntry').val() === true && newData.child('lotteryNumber').isNumber()"
      }
    }
  }
}
```
