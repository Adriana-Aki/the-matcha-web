document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: {
      home: "Home",
      menu: "Menu",
      galery: "Gallery",
      contact: "About us",
      menumatcha: "Our MatCha Menu",
    },
    sk: {
      home: "Domov",
      menu: "Menu",
      galery: "Galéria",
      contact: "O nás",
      menumatcha: "Naše Matcha Menu",
    },
    cs: {
      home: "Domov",
      menu: "Menu",
      galery: "Galéria",
      contact: "O nás",
      menumatcha: "Naše Matcha Menu",
    },
  };

  // Detect browser language
  let userLang = (navigator.language || navigator.userLanguage)
    .slice(0, 2)
    .toLowerCase();

  // Default to Slovak unless language is not sk or cs
  const lang = ["sk", "cs"].includes(userLang) ? userLang : "en";

  // Replace text content for each translatable element
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});
