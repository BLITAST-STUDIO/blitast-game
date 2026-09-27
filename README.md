# BLITAST GAME

個人開発ゲームのポートフォリオサイトです。ゲーム本体は [itch.io](https://blitastxyz.itch.io/) で公開し、このリポジトリは作品紹介と更新情報を掲載します。

**公開 URL:** https://blitast-studio.github.io/blitast-game/

## ローカルで確認

リポジトリのルートで `python -m http.server 8000` を実行し、`http://localhost:8000/` を開いてください。作品データやスタイルの編集にはビルド作業は不要です。

ヒーローのThree.jsシーンを変更する場合は、`npm ci` の後に `npm run build:scene` を実行し、生成された `hero-scene.js` もコミットしてください。公開ページは生成済みファイルを直接読み込むため、閲覧時のnpmや外部CDNへの接続は不要です。

## ゲームと更新情報の編集

作品データは `featured.js` の `games` 配列にまとめています。新しいゲームを追加するときは、カバー画像を `games/` に置き、以下の形式で配列に追加します。

```js
{
  title: "新しいゲーム名",
  url: "https://blitastxyz.itch.io/your-game",
  blurb: "一言紹介。",
  cover: "games/your-game.jpg",
  coverAlt: "画像の説明",
  genre: "Action",
}
```

`featured: true` はメインのおすすめ作品1本に、`spotlight: true` は本格開発中の特別枠1本に設定します。作品に更新があったら、同じゲームの `updates` 配列の先頭に追加してください。

```js
updates: [
  {
    date: "2026.09.27",
    text: "v0.1.8 新しい更新\n変更点の説明。",
  },
]
```

各ゲームの最新更新は、ヒーロー直後の「新着おしらせ」に日付順で自動表示されます。ライブラリ内の更新履歴にも、すべての更新が表示されます。更新のない作品には更新表示を出しません。

## サイトの構成

- `index.html` — ページ構造
- `styles.css` — デザインとレスポンシブ表示
- `site.js` — ゲーム一覧、更新情報、音声、共有ボタン
- `src/hero-scene.js` — Three.jsシーンの編集用ソース。動きを減らす設定を尊重します
- `hero-scene.js` — 公開用にまとめたシーンのコード
- `featured.js` — 作品データ
- `og.png` — SNSで共有したときのプレビュー画像

`main` ブランチのルートを GitHub Pages が公開しています。変更を `main` に反映すると、同じ公開 URL の内容が更新されます。
