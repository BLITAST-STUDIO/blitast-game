/**
 * ゲームの差し替えはこのファイルとカバー画像だけで完了する。
 *
 * 手順:
 * 1. games/ にカバーを置く（推奨 1600×1200 JPEG）
 * 2. games に1件足す。Featured は featured: true を1つだけ
 *
 * Strike a Pose - Friend Test は Restricted のため公開ライブラリには入れない。
 */
window.BLITAST = {
  studio: {
    name: "BLITAST GAME",
    tagline: "個人開発のさまざまなゲーム",
    itch: "https://blitastxyz.itch.io/",
    x: "https://x.com/blitast_studio",
    xHandle: "@blitast_studio",
    github: "https://github.com/BLITAST-STUDIO",
  },
  games: [
    {
      title: "Buttered Cat Flappy Paradox",
      url: "https://blitastxyz.itch.io/buttered-cat-flappy-paradox",
      blurb: "背中にバタートーストを乗せた猫。クリックかスペースで飛び、どこまで生き残れるか。",
      cover: "games/buttered-cat.jpg",
      coverAlt: "Buttered Cat Flappy Paradox — バタートーストを背負って飛ぶオレンジの猫",
      genre: "Arcade",
      featured: true,
    },
    {
      title: "おかえりひつじ",
      url: "https://blitastxyz.itch.io/okaeri-hitsuji",
      blurb: "タッチしてひつじさんをおうちへ。2歳から遊べるやさしいゲーム。",
      cover: "games/okaeri-hitsuji.jpg",
      coverAlt: "おかえりひつじ — 小屋の前に立つ白いひつじ",
      genre: "For kids",
    },
    {
      title: "くらがり",
      url: "https://blitastxyz.itch.io/kuragari",
      blurb: "廃屋のくらやみを、懐中電灯で探す。おばけかくれんぼ。",
      cover: "games/kuragari.jpg",
      coverAlt: "くらがり — 暗い廃屋を懐中電灯で照らす",
      genre: "Horror",
    },
    {
      title: "のっぺらCATCH",
      url: "https://blitastxyz.itch.io/noppera-catch",
      blurb: "のっぺらぼうの顔面で、落ちてくる眉・目・鼻・口をキャッチする。",
      cover: "games/noppera-catch.jpg",
      coverAlt: "のっぺらCATCH — のっぺらぼうの顔にパーツが落ちてくる",
      genre: "Action",
    },
  ],
};
