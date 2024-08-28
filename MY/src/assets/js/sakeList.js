const source = document.getElementById('sakeList').innerHTML;
const template = Handlebars.compile(source);
const value = {
    sakeList : [
        {image:'Kissui-Hidariuma-Junmaishu.png',maker:'ARIGA JOZO',name:'Kissui Hidariuma Junmaishu',alink:'Kissui-Hidariuma-Junmaishu.html'},
        {image:'Kamoshibito-Kuheiji-Junmai-Daiginjyo-Omachi-Sauvage.png',maker:'BANJO JOZO CO., LTD.',name:'Kamoshibito Kuheiji Junmai Daiginjyo Omachi Sauvage',alink:'Kamoshibito-Kuheiji-Junmai-Daiginjyo-Omachi-Sauvage.html'},
        {image:'Echigozakura-Daiginyo-Yamadanishiki-38.png',maker:'ECHIGOZAKURA SHUZO',name:'Echigozakura Daiginyo Yamadanishiki (38) ',alink:'Echigozakura-Daiginyo-Yamadanishiki-38.html'},
        {image:'Haneya-Junmai-Ginjou-Kirabi-Nama-Genshu.png',maker:'FUMIGIKU SHUZO CO., LTD. (HANEYA)',name:'Haneya Junmai Ginjou Kirabi Nama Genshu',alink:'Haneya-Junmai-Ginjou-Kirabi-Nama-Genshu.html' },
        {image:'Hiwata-Junmai-Daiginjo-Omachi-45.png',maker:'HAGINO SHUZO',name:'Hiwata Junmai Daiginjo Omachi 45%',alink:'Hiwata-Junmai-Daiginjo-Omachi-45.html'},
        {image:'ICHIJI.png',maker:'HINEMOS (MORIYAMA SAKE BREWERY)',name:'ICHIJI (1:00am)',alink:'ICHIJI.html'},
        {image:'NIJI.png',maker:'HINEMOS (MORIYAMA SAKE BREWERY)',name:'NIJI (2:00am)',alink:'NIJI.html'},
        {image:'SHICHIJI.png',maker:'HINEMOS (MORIYAMA SAKE BREWERY)',name:'SHICHIJI (7:00pm)',alink:'SHICHIJI.html'},
        {image:'Genmaishu.png',maker:'KAMEMAN SHUZO',name:'Genmaishu',alink:'Genmaishu.html'},
        {image:'Kamonishiki-Nifudazake-Junmai-Daiginjo-Kisuisen.png',maker:'KAMONISHIKI SHUZO',name:'Kamonishiki Nifudazake Junmai Daiginjo Kisuisen',alink:'Kamonishiki-Nifudazake-Junmai-Daiginjo-Kisuisen.html'},
        {image:'Kikkawa-Afuri-Akatsuki-Mizumoto-Wine-Barrel.png',maker:'KIKKAWA JOZO',name:'Kikkawa Afuri “Akatsuki” Mizumoto Wine Barrel',alink:'Kikkawa-Afuri-Akatsuki-Mizumoto-Wine-Barrel.html'},
        {image:'Junmai-Rokugoh-Jikomi-Yamadanishiki.png',maker:'KIKKAWA JOZO',name:'Kikkawa Afuri Junmai “Rokugoh” Jikomi Yamadanishiki',alink:'Junmai-Rokugoh-Jikomi-Yamadanishiki.html'},
        {image:'Kikkawa-Afuri Kimoto-Ohanasake.png',maker:'KIKKAWA JOZO',name:'Kikkawa Afuri Kimoto Ohanasake',alink:'Kikkawa-Afuri-Kimoto-Ohanasake.html'},
        {image:'Kikuyu-Usunigori-Mono-Cloud.png',maker:'KIKKAWA JOZO',name:'Kikuyu Usunigori “Momo Cloud”',alink:'Kikuyu-Usunigori-Mono-Cloud.html'},
        {image:'Nito-Junmai-Ginjo-Omachi-55.png',maker:'MARUISHI SHUZO',name:'Nito Junmai Ginjo Omachi 55',alink:'Nito-Junmai-Ginjo-Omachi-55.html'},
        {image:'LOHAS-Sake-Junmai-One-time-pasteurization.png',maker:'MINENOYUKI BREWERY',name:'LOHAS Sake Junmai (One-time pasteurization)',alink:'LOHAS-Sake-Junmai-One-time-pasteurization.html'},
        {image:'Miyanoyuki-Yamahai-Jikomi-Tokubetsu-Junmai.png',maker:'MIYAZAKI HONTEN',name:'Miyanoyuki Yamahai Jikomi Tokubetsu Junmai',alink:'Miyanoyuki-Yamahai-Jikomi-Tokubetsu-Junmai.html'},
        {image:'Kikusui-Shiroki-Tenryu-Honjyozo-Nigori-Sake.png',maker:'NAGANO KIKUSUI',name:'Kikusui Shiroki Tenryu Honjyozo Nigori Sake',alink:'Kikusui-Shiroki-Tenryu-Honjyozo-Nigori-Sake.html'},
        {image:'Nanbubijin-Junmai-Daiginjo-Sake-mirai-Tenkei.png',maker:'NANBU BIJIN',name:'Nanbubijin Junmai Daiginjo Sakemirai Tenkei',alink:'Nanbubijin-Junmai-Daiginjo-Sake-mirai-Tenkei.html'},
        {image:'Nanbubijin-Tokubetsu-Junmai.png',maker:'NANBU BIJIN',name:'Nanbubijin Tokubetsu Junmai',alink:'Nanbubijin-Tokubetsu-Junmai.html'},
        {image:'Noguchi-Junmai-Ginjo-Muroka-Nama-Genshu-JAS-Organic-Rice-2019.png',maker:'NOGUCHI NAOHIKO SAKE INSTITUTE',name:'Noguchi Junmai Ginjo Muroka Nama Genshu JAS Organic Rice 2019',alink:'Noguchi-Junmai-Ginjo-Muroka-Nama-Genshu-JAS-Organic-Rice-2019.html'},
        {image:'Taiten-Shiragiku-Kimoto-Junmai-Omachinanaju.png',maker:'SHIRAGIKU SHUZO CO., LTD.',name:'Taiten Shiragiku Kimoto Junmai Omachinanaju',alink:'Taiten-Shiragiku-Kimoto-Junmai-Omachinanaju.html'},
        {image:'Taiten-Shiragiku-Winterbomb-Nama-Junmai-Sparkling.png',maker:'SHIRAGIKU SHUZO CO., LTD.',name:'Taiten Shiragiku Winter Bomb Nama Junmai Sparkling',alink:'Taiten-Shiragiku-Winterbomb-Nama-Junmai-Sparkling.html'},
        {image:'Zenri.png',maker:'TAMANOHIKARI SAKE BREWERY',name:'Zenri',alink:'Zenri.html'},
        {image:'Echizen-Misaki-Junmai-Daiginjo-Sakahomare.png',maker:'TANABE SHUZO',name:'Echizen Misaki Junmai Daiginjo Sakahomare',alink:'Echizen-Misaki-Junmai-Daiginjo-Sakahomare.html'},
        {image:'Manatsuru-Hyoutengakoi-Junmai-shu.png',maker:'THE MANATURU SAKE BREWERY',name:'Manaturu Hyoutengakoi Junmai-shu',alink:'Manatsuru-Hyoutengakoi-Junmai-shu.html'},
        {image:'Keigetsu-Junmai-Daiginjo-Sparkling-HAO.png',maker:'TOSA SHUZO',name:'Keigetsu Junmai Daiginjo Sparkling HAO',alink:'Keigetsu-Junmai-Daiginjo-Sparkling-HAO.html'},
        {image:'Gozenshu-Junmai-1859-Bodaimoto.png',maker:'TSUJI HONTEN',name:'Gozenshu Junmai 1859 Bodaimoto',alink:'Gozenshu-Junmai-1859-Bodaimoto.html'},
        {image:'Yamawa-Junmai-Ginjo-Miyamanishiki.png',maker:'YAMAWA SHUZOTEN',name:'Yamawa Junmai Ginjo Miyamanishiki',alink:'Yamawa-Junmai-Ginjo-Miyamanishiki.html'},
        {image:'Tedorigawa-Junmai-Ookarakuchi-MEIRYU.png',maker:'YOSHIDA SHUZOTEN CO., LTD.',name:'Tedorigawa Junmai Ookarakuchi MEIRYU',alink:'Tedorigawa-Junmai-Ookarakuchi-MEIRYU.html'},

    ]
};
const compiledHtml = template(value);
const fill = document.getElementById('sakeListInsert');
fill.innerHTML = compiledHtml;
