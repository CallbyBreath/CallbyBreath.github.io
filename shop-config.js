// shop-config.js
// Все товары магазина в одном месте. Чтобы добавить новый товар, скопируй объект внутри квадратных скобок.

const shopConfig = {
  products: [
    // ---------- ТОВАР 1 (пример) ----------
    {
      name: "Free Sample",               // Название товара
      price: "$0.00",                    // Цена
      image: "Images/logo.png",          // Обложка
      purchaseCode: "CALLBYBREATH2025",  // Код для получения ссылок на скачивание
      buyLink: "https://example.com",    // Ссылка, куда ведёт кнопка BUY (если не нужна, оставь пустые кавычки "")
      downloadLinks: {                   // Ссылки на облака (появляются после ввода кода)
        mega: "https://mega.nz/folder/zz5lhBoD#C-qVTfiRYx2T4Ebc9zLptw",
        googleDrive: "https://drive.google.com/drive/folders/1vy2p-7udxfTRceKRZmSSEzesqPOFyc-A?usp=sharing",
        mediaFire: "https://www.mediafire.com/folder/qvhambzpcn67m/CallbyBreath_Archive",
        yandexDisk: "https://disk.yandex.ru/d/M9at-fEbbHcSGg"
      }
    },
    // ---------- ТОВАР 2 (пример) ----------
    {
      name: "Free Sample2",               // Название товара
      price: "$0.002",                    // Цена
      image: "Images/logo.png2",          // Обложка
      purchaseCode: "CALLBYBREATH20252",  // Код для получения ссылок на скачивание
      buyLink: "https://callbybreath.neocities.org",    // Ссылка, куда ведёт кнопка BUY (если не нужна, оставь пустые кавычки "")
      downloadLinks: {                   // Ссылки на облака (появляются после ввода кода)
        mega: "https://mega.nz/folder/zz5lhBoD#C-qVTfiRYx2T4Ebc9zLptw",
        googleDrive: "https://drive.google.com/drive/folders/1vy2p-7udxfTRceKRZmSSEzesqPOFyc-A?usp=sharing",
        mediaFire: "https://www.mediafire.com/folder/qvhambzpcn67m/CallbyBreath_Archive",
        yandexDisk: "https://disk.yandex.ru/d/M9at-fEbbHcSGg"
      }
    }
  ]
};