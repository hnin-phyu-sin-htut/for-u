export interface SongItem {
    id: number;
    title: string;
    artist: string;
    playlist: string;
    src: string;
    download?: string;
}

export const musics: SongItem[] = [
    { id: 1, title: "မေတ္တသုတ် ၁၁ ခေါက်", artist: "မင်းကွန်းဆရာတော်ဘုရားကြီး", playlist: "Buddhist", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641069/song1_lpcr2u.mp4" },
    { id: 2, title: "သုဂတော(၅)ချက်", artist: "Buddhist Chant", playlist: "Buddhist", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641403/song2_ya5yaa.mp4" },
    { id: 3, title: "သမ္ဓုဒ္ဓေ ဂါထာတော်ကြီး", artist: "Buddhist Chant", playlist: "Buddhist", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782645992/song3_omx7pb.mp4" },

    { id: 4, title: "Moshi Moshi?", artist: "Unknown", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641164/song4_tvfsgq.mp4" },
    { id: 5, title: "စီးကရက်မကြိုက်တဲ့ကောင်မလေး", artist: "Unknown", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641210/song5_yblxi1.mp4" },
    { id: 6, title: "1990", artist: "Shine", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641170/song6_nksj3f.mp4" },
    { id: 7, title: "သဲနု", artist: "Derek Millar", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641167/song7_lrtrge.mp4" },
    { id: 8, title: "သိုးမည်းတွေအကြောင်း", artist: "ဗဒင်", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641174/song8_py9oxk.mp4" },
    { id: 9, title: "သိပ်သိပ် ချစ်ရတယ် နွဲ့တင်ရယ်", artist: "Sai Htee Saing", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641180/song9_nyhgdk.mp4" },
    { id: 10, title: "1970", artist: "သားကို", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641208/song10_plvqsl.mp4" },
    { id: 11, title: "အရာရာ", artist: "Gae Gae", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641188/song11_jpuxsv.mp4" },

    { id: 12, title: "Tell Me Where to Go", artist: "John Derek", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641193/song12_bf41fy.mp4" },
    { id: 13, title: "Wings", artist: "Adjustor", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641196/song13_bdwyr2.mp4" },
    { id: 14, title: "Give Me Some Sunshine", artist: "3 Idiots Cast", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641222/song14_udc3sy.mp4" },
    { id: 15, title: "You're On Your Own, Kid", artist: "Taylor Swift", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641204/song15_h2d1dw.mp4" },
    { id: 16, title: "hate that i made you love me", artist: "Ariana Grande", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641225/song16_skoznx.mp4" },
    { id: 17, title: "Sunshine in the Rain", artist: "BWO", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641220/song17_m9l2jj.mp4" },
    { id: 18, title: "Treat You Better", artist: "Shawn Mendes", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641228/song18_ktrecf.mp4" },
    { id: 19, title: "Confident", artist: "Justin Bieber", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641221/song19_fsmfqh.mp4" },
    { id: 20, title: "STAMINA", artist: "J. Par", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641223/song20_jrxfio.mp4" },

    { id: 21, title: "Good Goodbye", artist: "HWASA", playlist: "K-Pop", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641254/song21_hjl5ay.mp4" },
    { id: 22, title: "10 Minutes", artist: "Lee Hyori", playlist: "K-Pop", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641277/song22_txuph7.mp4" },

    { id: 23, title: "zhi dui ni you gan jue", artist: "Fahrenheit ft. Hebe", playlist: "Chinese", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641241/song23_xbnav4.mp4" },

    { id: 24, title: "ONE PUNCH", artist: "MILLI", playlist: "Thai", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641235/song24_rufb13.mp4" },

    { id: 25, title: "တကယ်လို့", artist: "Unknown", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641267/song25_r1m5vp.mp4" },
    { id: 26, title: "ရင်ခုန်ရလွန်းလို့", artist: "ဇော်ပိုင်", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641257/song26_wul2a1.mp4" },
    { id: 27, title: "လေပြင်းသွေးတဲ့ညချမ်းခါ", artist: "Unknown", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641240/song27_qovsmq.mp4" },

    { id: 28, title: "အလင်းဆီ", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641371/song28_qwjeph.mp4" },
    { id: 29, title: "လေထဲမှာအိမ်ဆောက်ခဲ့တဲ့ နေ့စွဲများ", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641257/song29_zmsvtb.mp4" },
    { id: 30, title: "နှင်းဝေ (Hnin Wai)", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641262/song30_fgkt9q.mp4" },
    { id: 31, title: "Tain Sin Yit Nay", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641374/song31_wilond.mp4" },
    { id: 32, title: "နင်နဲ့ငါနေ့စွဲများ", artist: "Square Lake Pirates x Kayarr", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641272/song32_jk5zof.mp4" },
    { id: 33, title: "ငြိမ်ငြိမ်လေး", artist: "Square Lake Pirates x Kayarr", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641275/song33_qqxcre.mp4" },
    { id: 34, title: "Mama Help Me!", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641286/song34_nc2rne.mp4" },
    { id: 35, title: "စိတ်ကူးလွှာ", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641284/song35_dfbdgw.mp4" },
    { id: 36, title: "YES or NO", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641280/song36_ajymvn.mp4" },
    { id: 37, title: "မီးလင်းဖို", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641289/song37_bfiuwl.mp4" },
    { id: 38, title: "Dreaming on you", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641287/song38_q1wtna.mp4" },
    { id: 39, title: "နှလုံးသားနဲ့ ရွက်လွှင့်မယ်", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641288/song39_q1vb9y.mp4" },
    { id: 40, title: "ကံ့ကော်", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641293/song40_aaxza7.mp4" },
    { id: 41, title: "လောကကြီးရဲ့အဝေး", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641296/song41_p9td7q.mp4" },
    { id: 42, title: "ကျနော့်သူငယ်ချင်း လင်မယားနှစ်ယောက် စက်ဘီးပျောက်ခြင်း", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641298/song42_rtd0zj.mp4" },
    { id: 43, title: "Tall Tales From The Sea (ပင်လယ်ပြင်မှ ယုံတမ်းပုံပြင်များ)", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641311/song43_vxafqg.mp4" },
    { id: 44, title: "အိမ်ကိုပြန်ခဲ့ပါ", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641320/song44_bmnrac.mp4" },
    { id: 45, title: "ပင်လယ်ပျော်", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641315/song45_j8fcsq.mp4" },
    { id: 46, title: "25", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641339/song46_lfdll7.mp4" },
    { id: 47, title: "တိမ်စဥ်ရစ်နေ", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641318/song47_o3zkfw.mp4" },
    { id: 48, title: "လိုက်လို့ရှာ", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641310/song48_gx7nya.mp4" },
    { id: 49, title: "အလင်းဆီ", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641321/song49_jmlqvg.mp4" },
    { id: 50, title: "Mama Help Me", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641358/song50_nojqzb.mp4" },
    { id: 51, title: "အိမ်ကိုပြန်ခဲ့မယ်", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641365/song51_fucqyc.mp4" },
    { id: 52, title: "1 Second Thar Thar", artist: "Square Lake Pirates", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641370/song52_thnxfl.mp4" },

    { id: 53, title: "နွေဦးကံ့ကော်", artist: "ထူးအိမ်သင်", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641348/song53_zfty86.mp4" },
    { id: 54, title: "စကားလုံးတွေမလိုဘူး", artist: "ထူးအိမ်သင်", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641347/song54_tvp2mc.mp4" },
    { id: 55, title: "မင်းအကြောင်း အိပ်မက်", artist: "ထူးအိမ်သင်", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641359/song55_jppiv5.mp4" },

    { id: 56, title: "Magic of Love", artist: "Kym (Jin Sha)", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641356/song56_wb62bj.mp4" },
    { id: 57, title: "You!", artist: "LANY", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641366/song57_yd2grl.mp4" },
    { id: 58, title: "Self Aware", artist: "Temper City", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641378/song58_hyydyq.mp4" },
    { id: 59, title: "Can't Behave", artist: "Courtney Jaye", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641369/song59_jlxeit.mp4" },
    { id: 60, title: "End of Beginning", artist: "Djo", playlist: "English", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641428/song60_lpn2oh.mp4" },
    { id: 61, title: "အသက်ရယ်ကိုယ်စိတ်မချလို့ပါကွာ", artist: "မောင်စွမ်း", playlist: "Myanmar", src: "https://res.cloudinary.com/dwuywkdqh/video/upload/v1782641378/song61_qqbmxh.mp4" },
];