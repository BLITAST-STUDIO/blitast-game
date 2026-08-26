/**
 * Featured の差し替えは、このファイルとカバー画像だけで完了する。
 *
 * 手順:
 * 1. games/ にカバーを置く（推奨 1600×1200 JPEG）
 * 2. 下の featured を書き換える
 */
window.BLITAST = {
  studio: {
    name: "BLITAST GAME",
    tagline: "個人が作る、すぐ遊べる小さなゲームたち",
    itch: "https://blitastxyz.itch.io/",
    x: "https://x.com/blitast_studio",
    xHandle: "@blitast_studio",
    github: "https://github.com/BLITAST-STUDIO",
  },
  also: [
    {
      title: "のっぺらCATCH",
      url: "https://blitastxyz.itch.io/noppera-catch",
      blurb: "のっぺらぼうの顔面で、落ちてくる眉・目・鼻・口をキャッチする。完成した顔はだいたい変です。",
      cover: "games/noppera-catch.jpg",
      coverAlt: "のっぺらCATCH — のっぺらぼうの顔にパーツが落ちてくる"
    }
  ],
  featured: {
    title: "Buttered Cat Flappy Paradox",
    url: "https://blitastxyz.itch.io/buttered-cat-flappy-paradox",
    blurb:
      "背中にバタートーストを乗せた猫。クリックかスペースで飛び、どこまで生き残れるか。",
    cover: "games/buttered-cat.jpg",
    coverAlt:
      "Buttered Cat Flappy Paradox — バタートーストを背負って飛ぶオレンジの猫",
  },
};
