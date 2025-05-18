document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: {
      home: "Home",
      menu: "Menu",
      galery: "Gallery",
      contact: "About us",
      menumatcha: "Our MatCha Menu",
      classicIcedMatcha: "Classic Iced Matcha",
      classicIcedMatchaDesc: "2g ceremonial matcha, milk, sugar syrup, ice",
      mangoMatcha: "Mango Matcha",
      mangoMatchaDesc:
        "2g ceremonial matcha, mango purée, milk, sugar syrup, ice",
      strawberryMatcha: "Strawberry Matcha",
      strawberryMatchaDesc:
        "2g ceremonial matcha, strawberry purée, milk, sugar syrup, ice",
      raspberryMatcha: "Raspberry Matcha",
      raspberryMatchaDesc:
        "2g ceremonial matcha, raspberry purée, milk, sugar syrup, ice",
      roseVanillaMatcha: "Rose Vanilla Matcha",
      roseVanillaMatchaDesc:
        "2g ceremonial matcha, milk, vanilla + rose syrup, ice",
      ubeFoamMatcha: "Ube Foam Matcha",
      ubeFoamMatchaDesc:
        "2g ceremonial matcha, ube, cream, milk, sugar syrup, ice",
      biscoffMatcha: "Biscoff Matcha",
      biscoffMatchaDesc:
        "2g ceremonial matcha, Lotus Biscoff spread, milk, maple syrup, Lotus cookies, ice",
      dalgonaMatcha: "Dalgona Matcha",
      dalgonaMatchaDesc: "2g ceremonial matcha, milk, cream, honey, ice",
      nitroMatcha: "Nitro Matcha",
      nitroMatchaDesc:
        "2g ceremonial matcha, plant-based milk, vanilla syrup, ice",
      menuother: "Coffee and Other Drinks",
      passionfruitMatcha: "Passionfruit Matcha",
      passionfruitMatchaDesc:
        "2g ceremonial matcha, passionfruit purée, vanilla syrup, soda, ice",
      yuzuMatcha: "Yuzu Matcha",
      yuzuMatchaDesc: "2g ceremonial matcha, yuzu purée, honey, soda, ice",
      coconutWaterMatcha: "Coconut Water Matcha",
      coconutWaterMatchaDesc:
        "2g ceremonial matcha, coconut water, cream, milk, honey, soda, ice",
      matchaOrange: "Matcha Orange",
      matchaOrangeDesc: "2g ceremonial matcha, orange juice, ice",
      matchaTonic: "Matcha Tonic",
      matchaTonicDesc: "2g ceremonial matcha, tonic, ice",
      matchaTea: "Matcha Tea",
      matchaTeaDesc: "2g Saemidori Matcha, hot water",
      matchaLatte: "Matcha Latte",
      matchaLatteDesc: "2g ceremonial matcha, foeamed milk",
      espresso: "Espresso",
      espressoDesc: "8g coffee, sugar",
      americano: "Americano",
      americanoDesc: "8g coffee, hot water, sugar",
      cappuccino: "Cappuccino",
      capuccinoDesc: "8g coffee, foamed milk, sugar",
      flatWhite: "Flat White",
      flatWhiteDesc: "16g coffee, foamed milk, sugar",
      icedLatte: "Iced Latte",
      icedLatteDesc: "8g coffee, milk, ice",
    },
    sk: {
      home: "Domov",
      menu: "Menu",
      galery: "Galéria",
      contact: "O nás",
      menumatcha: "Naše Matcha Menu",
      classicIcedMatcha: "Classic Iced Matcha",
      classicIcedMatchaDesc:
        "2g ceremoniálna matcha, mlieko, cukrový sirup, ľad",
      mangoMatcha: "Mango Matcha",
      mangoMatchaDesc:
        "2g ceremoniálna matcha, pyré mango, mlieko, cukrový sirup, ľad",
      strawberryMatcha: "Strawberry Matcha",
      strawberryMatchaDesc:
        "2g ceremoniálna matcha, pyré jahoda, mlieko, cukrový sirup, ľad",
      raspberryMatcha: "Raspberry Matcha",
      raspberryMatchaDesc:
        "2g ceremoniálna matcha, pyré malina, mlieko, cukrový sirup, ľad",
      roseVanillaMatcha: "Rose Vanilla Matcha",
      roseVanillaMatchaDesc:
        "2g ceremoniálna matcha, mlieko, sirup vanilka + ruža, ľad",
      ubeFoamMatcha: "Ube Foam Matcha",
      ubeFoamMatchaDesc:
        "2g ceremoniálna matcha, ube, smotana, mlieko, cukrový sirup, ľad",
      biscoffMatcha: "Biscoff Matcha",
      biscoffMatchaDesc:
        "2g ceremoniálna matcha, lotus boscoff krém, mlieko, javorový sirup, lotus keksíky, ľad",
      dalgonaMatcha: "Dalgona Matcha",
      dalgonaMatchaDesc: "2g ceremoniálna matcha, mlieko, smotana, med, ľad",
      nitroMatcha: "Nitro Matcha",
      nitroMatchaDesc:
        "2g ceremoniálna matcha, rastlinné mlieko, vanilkový sirup, ľad",
      menuother: "Káva a Iné nápoje",
      passionfruitMatcha: "Passionfruit Matcha",
      passionfruitMatchaDesc:
        "2g ceremoniálna matcha, pyré marakuja, vanilkový sirup, sóda, ľad",
      yuzuMatcha: "Yuzu Matcha",
      yuzuMatchaDesc: "2g ceremoniálna matcha, pyré yuzu, med, sóda, ľad",
      coconutWaterMatcha: "Coconut Water Matcha",
      coconutWaterMatchaDesc:
        "2g ceremoniálna matcha, kokosová voda, smotana, mlieko, med, sóda, ľad",
      matchaOrange: "Matcha Orange",
      matchaOrangeDesc: "2g ceremoniálna matcha, pomarančový džús, ľad",
      matchaTonic: "Matcha Tonic",
      matchaTonicDesc: "2g ceremoniálna matcha, tonic, ľad",
      matchaTea: "Matcha Tea",
      matchaTeaDesc: "2g Saemidori Matcha, horúca voda",
      matchaLatte: "Matcha Latte",
      matchaLatteDesc: "2g ceremoniálna matcha, napenené mlieko",
      espresso: "Espresso",
      espressoDesc: "8g káva, cukor",
      americano: "Americano",
      americanoDesc: "8g káva, horúca voda, cukor",
      cappuccino: "Cappuccino",
      capuccinoDesc: "8g káva, napenené mlieko, cukor",
      flatWhite: "Flat White",
      flatWhiteDesc: "16g káva, napenené mlieko, cukor",
      icedLatte: "Iced Latte",
      icedLatteDesc: "8g káva, mlieko, ľad",
    },
    cs: {
      home: "Domov",
      menu: "Menu",
      galery: "Galéria",
      contact: "O nás",
      menumatcha: "Naše Matcha Menu",
      classicIcedMatcha: "Classic Iced Matcha",
      classicIcedMatchaDesc:
        "2g ceremoniálna matcha, mlieko, cukrový sirup, ľad",
      mangoMatcha: "Mango Matcha",
      mangoMatchaDesc:
        "2g ceremoniálna matcha, pyré mango, mlieko, cukrový sirup, ľad",
      strawberryMatcha: "Strawberry Matcha",
      strawberryMatchaDesc:
        "2g ceremoniálna matcha, pyré jahoda, mlieko, cukrový sirup, ľad",
      raspberryMatcha: "Raspberry Matcha",
      raspberryMatchaDesc:
        "2g ceremoniálna matcha, pyré malina, mlieko, cukrový sirup, ľad",
      roseVanillaMatcha: "Rose Vanilla Matcha",
      roseVanillaMatchaDesc:
        "2g ceremoniálna matcha, mlieko, sirup vanilka + ruža, ľad",
      ubeFoamMatcha: "Ube Foam Matcha",
      ubeFoamMatchaDesc:
        "2g ceremoniálna matcha, ube, smotana, mlieko, cukrový sirup, ľad",
      biscoffMatcha: "Biscoff Matcha",
      biscoffMatchaDesc:
        "2g ceremoniálna matcha, lotus boscoff krém, mlieko, javorový sirup, lotus keksíky, ľad",
      dalgonaMatcha: "Dalgona Matcha",
      dalgonaMatchaDesc: "2g ceremoniálna matcha, mlieko, smotana, med, ľad",
      nitroMatcha: "Nitro Matcha",
      nitroMatchaDesc:
        "2g ceremoniálna matcha, rastlinné mlieko, vanilkový sirup, ľad",
      menuother: "Káva a Iné nápoje",
      passionfruitMatcha: "Passionfruit Matcha",
      passionfruitMatchaDesc:
        "2g ceremoniálna matcha, pyré marakuja, vanilkový sirup, sóda, ľad",
      yuzuMatcha: "Yuzu Matcha",
      yuzuMatchaDesc: "2g ceremoniálna matcha, pyré yuzu, med, sóda, ľad",
      coconutWaterMatcha: "Coconut Water Matcha",
      coconutWaterMatchaDesc:
        "2g ceremoniálna matcha, kokosová voda, smotana, mlieko, med, sóda, ľad",
      matchaOrange: "Matcha Orange",
      matchaOrangeDesc: "2g ceremoniálna matcha, pomarančový džús, ľad",
      matchaTonic: "Matcha Tonic",
      matchaTonicDesc: "2g ceremoniálna matcha, tonic, ľad",
      matchaTea: "Matcha Tea",
      matchaTeaDesc: "2g Saemidori Matcha, horúca voda",
      matchaLatte: "Matcha Latte",
      matchaLatteDesc: "2g ceremoniálna matcha, napenené mlieko",
      espresso: "Espresso",
      espressoDesc: "8g káva, cukor",
      americano: "Americano",
      americanoDesc: "8g káva, horúca voda, cukor",
      cappuccino: "Cappuccino",
      capuccinoDesc: "8g káva, napenené mlieko, cukor",
      flatWhite: "Flat White",
      flatWhiteDesc: "16g káva, napenené mlieko, cukor",
      icedLatte: "Iced Latte",
      icedLatteDesc: "8g káva, mlieko, ľad",
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
