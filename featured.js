/**
 * ゲームの差し替えはこのファイルとカバー画像だけで完了する。
 *
 * 手順:
 * 1. games/ にカバーを置く（推奨 1600×1200 JPEG）
 * 2. games に1件足す。Featured は featured: true を1つだけ
 *    本格開発の特別枠は spotlight: true（Featured とは別にオーラ付きで出す）
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
      title: "Brushy Hippo",
      url: "https://blitastxyz.itch.io/brushy-hippo",
      blurb: "かばさんといっしょに、はみがき。歯ブラシをなぞって汚れを落とし、コップでゆすぐ。",
      cover: "games/brushy-hippo.jpg",
      coverAlt: "Brushy Hippo — かばさんとはみがきする",
      genre: "For kids",
      featured: true,
    },
    {
      title: "CatWalk",
      url: "https://blitastxyz.itch.io/catwalk",
      blurb: "月が昇る運河の街。黒猫は灯りをたどり、ボタンひとつで跳びながら夜を歩く。",
      cover: "games/catwalk.jpg",
      coverAlt: "CatWalk — 月夜の運河を歩く黒猫",
      genre: "Platformer",
      spotlight: true,
    },
    {
      title: "みつばちぷぅ",
      url: "https://blitastxyz.itch.io/mitsubachi-puu",
      blurb: "ふれているあいだだけ、ぷぅがふわふわとすすむ。みぎはしでつぎのページへ。",
      cover: "games/mitsubachi-puu.jpg",
      coverAlt: "みつばちぷぅ — みつばちといっしょにページをめくる",
      genre: "For kids",
    },
    {
      title: "ながれぼし",
      url: "https://blitastxyz.itch.io/nagareboshi",
      blurb: "よぞらにながれるほしを、ゆびでタッチしてとろう。5つで花火。",
      cover: "games/nagareboshi.jpg",
      coverAlt: "ながれぼし — 夜空の流れ星をタッチしてとる",
      genre: "For kids",
    },
    {
      title: "にじそらキャッスル",
      url: "https://blitastxyz.itch.io/niji-sora-castle",
      blurb: "ユニコーンがはばたいて空を進む、4〜5歳向けのやさしいフラップゲーム。",
      cover: "games/niji-sora-castle.jpg",
      coverAlt: "にじそらキャッスル — ユニコーンが空のおしろを目指す",
      genre: "For kids",
    },
    {
      title: "ギリギリブリッジ",
      url: "https://blitastxyz.itch.io/girigiri-bridge",
      blurb: "七夕の夜空に浮かぶ島を、竹の橋で渡っていくワンボタンゲーム。",
      cover: "games/girigiri-bridge.jpg",
      coverAlt: "ギリギリブリッジ — 七夕の夜空に竹の橋を渡す",
      genre: "Casual",
    },
    {
      title: "そらあるき",
      url: "https://blitastxyz.itch.io/soraaruki",
      blurb: "ゆびでそらをずらすと、あさ・ひる・ゆうがた・よるがめぐるよ。",
      cover: "games/soraaruki.jpg",
      coverAlt: "そらあるき — 空をずらして朝昼夜をめぐる",
      genre: "For kids",
    },
    {
      title: "STAR KNUCKLE",
      url: "https://blitastxyz.itch.io/star-knuckle",
      blurb: "ループする夜の街を歩き、ジャンプとパンチとキックを試すベルトスクロール。",
      cover: "games/star-knuckle.jpg",
      coverAlt: "STAR KNUCKLE — 夜の街を歩くベルトスクロール",
      genre: "Action",
    },
    {
      title: "PURA",
      url: "https://blitastxyz.itch.io/pura",
      blurb: "散らばる雫を集め、ひとつの核にする。同色は融け合い、混色は純度を削る。",
      cover: "games/pura.jpg",
      coverAlt: "PURA — 暗い水面に浮かぶ色の雫",
      genre: "Puzzle",
    },
    {
      title: "Buttered Cat Flappy Paradox",
      url: "https://blitastxyz.itch.io/buttered-cat-flappy-paradox",
      blurb: "背中にバタートーストを乗せた猫。クリックかスペースで飛び、どこまで生き残れるか。",
      cover: "games/buttered-cat.jpg",
      coverAlt: "Buttered Cat Flappy Paradox — バタートーストを背負って飛ぶオレンジの猫",
      genre: "Arcade",
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
