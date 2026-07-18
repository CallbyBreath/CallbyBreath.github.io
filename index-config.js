// index-config.js
// Все настраиваемые данные главной страницы CallbyBreath.
// Меняйте значения здесь – и страница обновится автоматически.

const indexConfig = {
  // ================= ПРЕВЬЮ ПОСЛЕДНЕГО РЕЛИЗА =================
  hero: {
    label: "Latest Release",                     // Текст над превью
    thumbnail: "Images/Thumbnails/remix001.jpg", // Картинка превью
    listenLink: "releases/remix_01.html",        // Ссылка на ♪ LISTEN
    watchLink: "https://youtu.be/Rj0nKMv3GrQ?si=7wyYJzPvnr38diyp", // Ссылка на ► WATCH
    trackTitle: "Die In a Fire Remix/Cover (feat. @OomuraMiki)"  // Название трека
  },

  // ================= СЕКЦИЯ "ABOUT" =================
  about: {
    title: "About",  // Заголовок секции
    // HTML-текст. Для жёлтого выделения используйте <span class="highlight">...</span>
    textHTML: `<p><span class="highlight">CallbyBreath</span> has been a solo artist since <span class="highlight">June 25, 2020</span>. The musician gained fame for his remixes of iconic FNAF songs, while also releasing original tracks on his YouTube channel. The musician's real name is <span class="highlight">Artem Maizinger (born June 20, 2007)</span>; he lives and writes music in <span class="highlight">Russia</span>.</p>`
  },

  // ================= СОЦИАЛЬНЫЕ СЕТИ (нижняя панель + оверлей Social) =================
  socialLinks: [
    { name: "youtube",     url: "https://www.youtube.com/@CallbyBreath" },
    { name: "instagram",   url: "https://www.instagram.com/callbybreath.official" },
    { name: "pinterest",   url: "https://pinterest.com/callbybreath" },
    { name: "telegram",    url: "https://t.me/callbybreath" },
    { name: "spotify",     url: "https://open.spotify.com/artist/4RJTPseEgwmAZIto7YDuV6" },
    { name: "apple music", url: "https://music.apple.com/ru/artist/callbybreath/1602956679" },
    { name: "soundcloud",  url: "https://soundcloud.com/callbybreath" }
  ],

  // ================= РЕЛИЗЫ ДЛЯ БЕСКОНЕЧНОЙ ЛЕНТЫ =================
  releaseItems: [
    { image: "Images/Releases/remix_01.jpg", url: "releases/remix_01.html" },
    { image: "Images/Releases/single_19.jpeg", url: "releases/single_19.html" },
    { image: "Images/Releases/single_18.jpeg", url: "releases/single_18.html" },
    { image: "Images/Releases/single_17.jpeg", url: "releases/single_17.html" },
    { image: "Images/Releases/single_16.jpeg", url: "releases/single_16.html" },
    { image: "Images/Releases/single_15.jpeg", url: "releases/single_15.html" },
    { image: "Images/Releases/single_14.png", url: "releases/single_14.html" },
    { image: "Images/Releases/single_13.png", url: "releases/single_13.html" },
    { image: "Images/Releases/single_12.jpg", url: "releases/single_12.html" },
    { image: "Images/Releases/single_11.jpg", url: "releases/single_11.html" },
    { image: "Images/Releases/single_10.jpg", url: "releases/single_10.html" },
    { image: "Images/Releases/single_09.jpg", url: "releases/single_09.html" },
    { image: "Images/Releases/single_08.jpg", url: "releases/single_08.html" },
    { image: "Images/Releases/single_07.jpg", url: "releases/single_07.html" },
    { image: "Images/Releases/single_06.jpg", url: "releases/single_06.html" },
    { image: "Images/Releases/single_05.jpg", url: "releases/single_05.html" },
    { image: "Images/Releases/single_04.jpg", url: "releases/single_04.html" },
    { image: "Images/Releases/single_03.jpg", url: "releases/single_03.html" },
    { image: "Images/Releases/single_02.jpg", url: "releases/single_02.html" },
    { image: "Images/Releases/single_01.jpg", url: "releases/single_01.html" },
    { image: "Images/Releases/ep_01.png", url: "releases/ep_01.html" }
  ],

  // ================= ССЫЛКА "Follow your platforms" =================
  platformsLink: "links.html"
};