/**
 * ゲームとおしらせの中身は、このファイルだけで書きかえられます。
 * （書きかえたら保存して、ページを再読み込みするだけ）
 *
 * ■ 書きかえたあと、ページに「書きまちがいがあります」「読み込めませんでした」と出たら
 *   このファイルのどこかで、カンマ（,）や引用符（"）がぬけているか多すぎます。
 *   パソコンで開いているときは、ページに何行目あたりかが出ます（ブラウザの開発者ツールの
 *   Console にも出ます）。直して保存し、もう一度再読み込みしてください。
 *
 * ■ ゲームを追加する
 *   1. games/ フォルダにカバー画像を入れる（横長のJPEG。例 1600×1200）
 *   2. 下の games: [ … ] に1件足す。いちばん上に書いたものが一覧の先頭になります。
 *      {
 *        title: "ゲームの名前",
 *        url: "https://blitastxyz.itch.io/game-name",   ← itch.io のページ（https のみ）
 *        blurb: "ひとことの説明。こども向けなら「2歳から」など年齢も書くと親切です。",
 *        cover: "games/game-name.jpg",
 *        coverAlt: "画像の説明（無くてもOK。無ければタイトルを使います）",
 *        genre: "For kids",   ← For kids / Action / Platformer / Casual / Puzzle / Arcade / Horror のどれか
 *                               （Platformer は「アクション」と表示されます。これ以外を書くと、
 *                                 書いた英語のままジャンル名になります）
 *      },
 *   ・大きい画像（横1600px以上）もあれば coverLarge: "games/game-name@2x.jpg" も足すと、
 *     大きな表示や高精細な画面ではそちらを使います（無くてもOK）。
 *   ・説明文（blurb）の中に | を入れると、そこで改行してよい区切りになります（| は表示されません）。
 *     ひらがなだけの文は、ことばの途中で改行されないように「みぎはしで|つぎの|ページへ。」のように
 *     区切りを入れておくと読みやすくなります（、。のあとは自動で区切ります）。
 *   ・スマホ（タッチ）では遊べないゲームには mobile: false を付ける
 *     → 一覧に「パソコン向け」と出て、「スマホ対応 ○作品」の数からも外れます。
 *   ・おすすめ枠に出すなら featured: true（1つだけ）
 *   ・本格開発中の特別枠に出すなら spotlight: true（1つだけ）
 *   ・ページのアドレスの最後に #game/game-name を付けると、そのゲームの詳細が開きます
 *     （game-name は itch.io のアドレスの最後の部分）。
 *
 * ■ アップデートを書く（そのゲームの updates に足す。新しいものを先頭に）
 *      updates: [
 *        { date: "2026.10.01", text: "v0.1.8 夜明けモード\n変わったこと1\n変わったこと2" },
 *      ],
 *   ・1行目が見出し。v0.1.8 のような番号は自動でバッジになります。
 *   ・1行目が「v0.1.8」だけのときは、2行目の最初の一文が見出しになります。
 *   ・2行目からが「何が変わった？」の中身（1行＝1項目）。
 *   ・日付は "2026.10.01" の形。7日以内なら「（今日）」「（きのう）」「（3日前）」も付きます。
 *   ・文字だけでもOK: updates: ["v0.1.8 夜明けモード\n変わったこと"]（日付なしで出ます）
 *   ・書いたアップデートは「おしらせ」と、そのゲームの「更新の記録」の両方に出ます。
 *
 * ■ 公開日を書く（新作のとき。そのゲームに1行足す）
 *      released: "2026.10.01",
 *   → 「おしらせ」に「新作公開」として出ます。
 *
 * ■ サイトからのおしらせを書く（下の news に足す。新しいものを先頭に）
 *      news: [
 *        { date: "2026.10.01", title: "見出し", text: "本文1行目\n本文2行目", url: "https://…（無くてもOK）" },
 *      ],
 *
 * ■ 一覧のサムネイルで見せたい位置を変える（coverPosition）
 *      coverPosition: "50% 20%",
 *   ・左右 上下 の順。"50% 0%" なら画像の上のほう、"50% 100%" なら下のほうが見えます。
 *   ・書かなければ画像のまんなかが見えます。
 *
 * ※ Strike a Pose - Friend Test は Restricted のため公開ライブラリには入れない。
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
  news: [
    {
      date: "2026.09.28",
      title: "サイトをリニューアルしました",
      text: "ゲーム一覧とおしらせを、見やすく作りなおしました。\nゲームの「くわしく」を押すと、ゲームの説明と「itch.io であそぶ」ボタン、これまでの更新の記録が見られます。\nゲームのアップデートは、このおしらせ欄に新しい順でのります。\nはじめての方は、「はじめての方へ」をご覧ください。遊びかたを3つのステップで紹介しています。",
    },
  ],
  games: [
    {
      title: "VS カラスのフン",
      url: "https://blitastxyz.itch.io/vs-karasu-no-fun",
      blurb: "電線の|カラスの動きを見て、|落ちてくる|フンを|左右に|かわす。|気軽な|おさんぽサバイバル。",
      cover: "games/vs-karasu-no-fun.jpg",
      coverPosition: "0% 50%",
      coverAlt: "VS カラスのフン — 住宅街の電線にとまるカラスと、歩いていく少年",
      genre: "Action",
      released: "2026.09.30",
    },
    {
      title: "Brushy Hippo",
      url: "https://blitastxyz.itch.io/brushy-hippo",
      blurb: "かばさんと|いっしょに、はみがき。歯ブラシを|なぞって|汚れを|落とし、コップで|ゆすぐ。",
      cover: "games/brushy-hippo.jpg",
      coverPosition: "50% 30%",
      coverAlt: "Brushy Hippo — かばさんとはみがきする",
      genre: "For kids",
      featured: true,
    },
    {
      title: "CatWalk",
      url: "https://blitastxyz.itch.io/catwalk",
      blurb: "月が昇る|運河の街。黒猫は|灯りを|たどり、ボタン|ひとつで|跳びながら|夜を歩く。",
      cover: "games/catwalk.jpg",
      coverPosition: "50% 20%",
      coverAlt: "CatWalk — 月夜の運河を歩く黒猫",
      genre: "Platformer",
      spotlight: true,
      updates: [
        {
          date: "2026.09.29",
          text: "v0.1.8 やさしい入り口・首輪・ぶるっ\nはじめて遊ぶ方が迷わないよう最初の1分をやさしくし、負けても楽しい小さなごほうび（首輪と「ぶるっ」）を足した。難所の難しさは変えていない。\n最初の水路で迷う方が多いと、匿名のデータから分かった。このあたりをやさしくした。\nジャンプの説明は、最初のジャンプをするまで消えない。落ちて最初に戻ったときも、もう一度表示される。\n最初の水路の手前に「水の上は、ジャンプで越えよう」と出し、水路の上に青緑の蛍を浮かべて跳ぶ位置を示した。蛍は143個から146個になった。\n落ちるごとに、崖の縁から跳べる猶予がごくわずか（0.025秒ずつ、最大0.075秒）延びる。次の街灯に着くと元に戻り、落ちない方には影響しない。\n2段の木箱のあとに続く水路の手前を、少し長くした。\nタイトル画面の下の丸いボタンで、猫の首輪を選べる。座っている猫にすぐ反映され、選んだ色はシェアカードにも写る。\n首輪の解放条件。紅＝最初から / 生成り＝ステージをクリア / 黄金＝ランクA以上でクリア / 蛍色（青緑）＝蛍をすべて集めてクリア / 月光（青白く光る）＝Perfect Nightを達成。\n未解放の色を押すと、解放の条件が表示される。解放したときは結果カードに「新しい首輪」と出る。解放の記録は、遊んだ端末の中に保存される。\n水に落ちたあとの「ぶるっ」。復活した猫は立ち止まって体をぶるっとひねり、水しぶきを飛ばして、しばらく雫を垂らす。ぶるぶるという音も付いている。",
        },
        {
          date: "2026.09.27",
          text: "v0.1.7 匿名プレイ統計\n難易度と蛍の配置をよくするため、日ごとの件数だけを集計する。遊び方は変わらない。\n集めるのは、遊びはじめた回数（PCかスマホか）、各街灯にたどり着いた回数、水に落ちた・置いていかれた場所（5m刻み）、ゴールした回数（ランク別）。\n集めないのは、名前やメールなどの個人情報、あなたを識別できる情報、操作の記録や画面。プレイヤーごとの記録は残らない。\n難しすぎる場所の調整、蛍の配置の見直し、次のステージづくりに使う。\n送られるのは「どこで何が起きたか」の小さなデータだけ。動きや読み込みの速さには影響しない。\nランキングとは別。名前が載るのは、これまでどおり「ランキングに登録」を押したときだけ。",
        },
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
      blurb: "ふれている|あいだだけ、ぷぅが|ふわふわと|すすむ。みぎはしで|つぎの|ページへ。",
      cover: "games/mitsubachi-puu.jpg",
      coverAlt: "みつばちぷぅ — みつばちといっしょにページをめくる",
      genre: "For kids",
    },
    {
      title: "ながれぼし",
      url: "https://blitastxyz.itch.io/nagareboshi",
      blurb: "よぞらに|ながれる|ほしを、ゆびで|タッチして|とろう。5つ|とると、はなび。",
      cover: "games/nagareboshi.jpg",
      coverPosition: "50% 90%",
      coverAlt: "ながれぼし — 夜空の流れ星をタッチしてとる",
      genre: "For kids",
    },
    {
      title: "にじそらキャッスル",
      url: "https://blitastxyz.itch.io/niji-sora-castle",
      blurb: "タップすると、ユニコーンが|はばたいて|空を|進む。4〜5歳向けの|やさしい|ゲーム。",
      cover: "games/niji-sora-castle.jpg",
      coverAlt: "にじそらキャッスル — ユニコーンが空のおしろを目指す",
      genre: "For kids",
    },
    {
      title: "ギリギリブリッジ",
      url: "https://blitastxyz.itch.io/girigiri-bridge",
      blurb: "七夕の|夜空に|浮かぶ|島を、竹の橋で|渡っていく|ワンボタンゲーム。",
      cover: "games/girigiri-bridge.jpg",
      coverAlt: "ギリギリブリッジ — 七夕の夜空に竹の橋を渡す",
      genre: "Casual",
    },
    {
      title: "そらあるき",
      url: "https://blitastxyz.itch.io/soraaruki",
      blurb: "ゆびで|そらを|ずらすと、あさ・|ひる・|ゆうがた・|よるが|めぐるよ。",
      cover: "games/soraaruki.jpg",
      coverAlt: "そらあるき — 空をずらして朝昼夜をめぐる",
      genre: "For kids",
    },
    {
      title: "STAR KNUCKLE",
      url: "https://blitastxyz.itch.io/star-knuckle",
      blurb: "ループする|夜の街を|歩き、ジャンプと|パンチと|キックを|試す|ベルトスクロール。",
      cover: "games/star-knuckle.jpg",
      coverAlt: "STAR KNUCKLE — 夜の街を歩くベルトスクロール",
      genre: "Action",
    },
    {
      title: "PURA",
      url: "https://blitastxyz.itch.io/pura",
      blurb: "散らばる|雫を|集め、ひとつの|核にする。同色は|融け合い、混色は|純度を|削る。",
      cover: "games/pura.jpg",
      coverAlt: "PURA — 暗い水面に浮かぶ色の雫",
      genre: "Puzzle",
    },
    {
      title: "Buttered Cat Flappy Paradox",
      url: "https://blitastxyz.itch.io/buttered-cat-flappy-paradox",
      blurb: "背中に|バタートーストを|乗せた猫。タップ（パソコンは|クリックか|スペース）で|飛び、どこまで|生き残れるか。",
      cover: "games/buttered-cat.jpg",
      coverAlt: "Buttered Cat Flappy Paradox — バタートーストを背負って飛ぶオレンジの猫",
      genre: "Arcade",
    },
    {
      title: "おかえりひつじ",
      url: "https://blitastxyz.itch.io/okaeri-hitsuji",
      blurb: "タッチして|ひつじさんを|おうちへ。2歳から|遊べる|やさしい|ゲーム。",
      cover: "games/okaeri-hitsuji.jpg",
      coverAlt: "おかえりひつじ — 小屋の前に立つ白いひつじ",
      genre: "For kids",
    },
    {
      title: "くらがり",
      url: "https://blitastxyz.itch.io/kuragari",
      blurb: "廃屋の|くらやみを、懐中電灯で|探す。おばけ|かくれんぼ。",
      cover: "games/kuragari.jpg",
      coverAlt: "くらがり — 暗い廃屋を懐中電灯で照らす",
      genre: "Horror",
    },
    {
      title: "のっぺらCATCH",
      url: "https://blitastxyz.itch.io/noppera-catch",
      blurb: "のっぺらぼうの|顔面で、落ちてくる|眉・目・鼻・口を|キャッチする。",
      cover: "games/noppera-catch.jpg",
      coverAlt: "のっぺらCATCH — のっぺらぼうの顔にパーツが落ちてくる",
      genre: "Action",
    },
  ],
};
