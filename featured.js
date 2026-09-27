/**
 * ゲームの差し替えはこのファイルとカバー画像だけで完了する。
 *
 * 手順:
 * 1. games/ にカバーを置く（推奨 1600×1200 JPEG）
 * 2. games に1件足す。Featured は featured: true を1つだけ
 *    本格開発の特別枠は spotlight: true（Featured とは別にオーラ付きで出す）
 * 3. 更新があった作品だけ updates を足す。無い作品にはタグを出さない。
 *    updates: [{ date: "2026.09.27", text: "変わったこと" }]
 *    新しいものを配列の先頭に書く。
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
      updates: [
        {
          date: "2026.09.27",
          text: "v0.1.6 シェアカード\nゴール後の「シェア」で、ゴールした瞬間の月夜の景色と記録が1枚の画像になる。\n背景は、月夜の桟橋に座る黒猫。そのときの景色がそのままカードになる。\n猫耳のランクバッジ。Perfect Nightは三日月つきの月光色、それ以外は金色。\n蛍の数・ミス・タイムに加え、「Perfect Night」「All Fireflies」「No Miss」の勲章。ランキングの名前も入る。\n猫へ向かう足あと、青緑の蛍の光、きらきらの飾りつき。\nスマホは「画像つきでシェア」で、X・LINE・インスタなどに画像と文面をそのまま送れる。\nPCは「Xでポスト」で文面入りの投稿画面が開く。画像は保存かコピーして添付する。\nシェア文には #CatWalk が入る。",
        },
        {
          date: "2026.09.27",
          text: "v0.1.5 オンラインランキング\nゴール後の結果カードで「ランキングに登録」。名前は12文字まで。次回から自動で入る。\nタイトル画面左下の「ランキング」で上位20人。自分の行は青く光り、20位より下でも自分の順位が出る。\n1人1行。より良い記録を送ったときだけ更新され、下回る記録ではベストは消えない。\n順位は、ランク（Perfect Night → S → A → B → C）、集めた蛍、ミスの少なさ、タイム、同じなら先に達成した人。\n送られるのは記録と名前だけ。ログインは不要で、「登録」を押したときだけ送信される。\nランクはサーバーで計算し直す。あり得ない記録は受け付けない。不適切な名前や記録は非表示にすることがある。\n記録は端末とブラウザごと。スマホとPCでは別の行になる。",
        },
        {
          date: "2026.09.27",
          text: "v0.1.4\n最高勲章「Perfect Night」。ノーミスで蛍をすべて集めてゴールすると獲得。三日月のランクと、月が明るく光る演出。一度取るとタイトルのベスト記録に残る。\n蛍を100%集めると、座った猫のまわりを蛍が輪になって昇る。ミスがあっても見られる。\nAとSランクは文字が着地して火花と和音。Sは光の筋が回る。結果の一言もランクで変わる。\nミスは水に落ちた回数（ちゃぽん）と、置いていかれた回数に分けて表示。\nランク条件。Perfect Night＝ノーミス・蛍100% / S＝ノーミス・90%以上 / A＝ミス1回まで・70%以上 / B＝ミス3回まで・45%以上 / C＝それ以外。\n蛍の色を青緑に。暖色の街灯と見分けやすくした。\n日よけのトランポリンと後半の水路の蛍を、着地できる軌道の上へ移動。ジャンプの難しさは変えていない。\n蛍の取り判定を猫の体の長さに合わせ、かすめたときも取りやすくした。\n係船柱・植木鉢・木箱・樽を明るくして、暗い場所でも引っかかりが分かるようにした。\n歩くときの尻尾の細かい震えを直し、付け根から先端へゆったり揺れるようにした。",
        },
      ],
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
