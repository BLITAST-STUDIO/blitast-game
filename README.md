# BLITAST GAME

個人が作る、すぐ遊べる小さなゲームたち。

ゲームの実体と一覧は [itch.io](https://blitastxyz.itch.io/) にあります。このリポジトリは薄い看板です。

**公開 URL:** https://blitast-studio.github.io/blitast-game/

## Featured の差し替え

編集するのは `featured.js` とカバー画像だけです。

1. カバーを `games/` に置く（推奨 1600×1200 JPEG）
2. `featured.js` の `featured` を書き換える

```js
featured: {
  title: "新しいゲーム名",
  url: "https://blitastxyz.itch.io/your-game",
  blurb: "一言紹介。",
  cover: "games/your-game.jpg",
  coverAlt: "代替テキスト",
}
```

3. `main` に push する（Pages が自動で更新されます）

## リンク

- [itch.io](https://blitastxyz.itch.io/)
- [X @blitast_studio](https://x.com/blitast_studio)
- [GitHub](https://github.com/BLITAST-STUDIO)
