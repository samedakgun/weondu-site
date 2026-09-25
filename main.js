(function () {
  var copy = {
    tr: {
      pageTitle: "WEONDU — Yakında",
      title: "YAKINDA",
      lead: "WEONDU, içerik, bağlantı ve fırsatların yeni bir düzende buluşacağı güçlü bir yapı için hazırlanıyor.",
      note: "Daha fazlası çok yakında.",
      follow: "Gelişmeleri Takip Et",
      early: "Erken Erişim",
      followSubject: "WEONDU - Gelişmeleri Takip Et",
      earlySubject: "WEONDU - Erken Erişim",
      p1: "Yeni Bir Yapı",
      p2: "Küresel Ufuk",
      p3: "Güçlü Bağlantılar",
      contact: "İletişim için:",
      legal: "WEONDU, KÖPRÜ İş Destek ve Ticaret A.Ş. tarafından geliştirilmiştir.",
      langLabel: "Dil seçimi"
    },
    en: {
      pageTitle: "WEONDU — Coming Soon",
      title: "COMING SOON",
      lead: "WEONDU is taking shape as a strong platform where content, connections and opportunities come together in a new order.",
      note: "More is on the way.",
      follow: "Follow Our Progress",
      early: "Early Access",
      followSubject: "WEONDU - Follow Our Progress",
      earlySubject: "WEONDU - Early Access",
      p1: "A New Structure",
      p2: "Global Horizon",
      p3: "Strong Connections",
      contact: "Contact:",
      legal: "WEONDU is developed by KÖPRÜ İş Destek ve Ticaret A.Ş.",
      langLabel: "Language"
    },
    ar: {
      pageTitle: "WEONDU — قريبًا",
      title: "قريبًا",
      lead: "تستعد WEONDU لتكون منصة قوية يلتقي فيها المحتوى والعلاقات والفرص في نظام جديد.",
      note: "المزيد قريبًا جدًا.",
      follow: "تابع المستجدات",
      early: "الوصول المبكر",
      followSubject: "WEONDU - تابع المستجدات",
      earlySubject: "WEONDU - الوصول المبكر",
      p1: "بنية جديدة",
      p2: "أفق عالمي",
      p3: "علاقات قوية",
      contact: "للتواصل:",
      legal: "تم تطوير WEONDU من قبل شركة KÖPRÜ İş Destek ve Ticaret A.Ş.",
      langLabel: "اختيار اللغة"
    }
  };

  var root = document.documentElement;
  var buttons = document.querySelectorAll(".lang button");

  function mail(subject) {
    return "mailto:info@kopruas.com?subject=" + encodeURIComponent(subject);
  }

  function apply(lang) {
    var t = copy[lang] || copy.tr;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    document.getElementById("btn-follow").href = mail(t.followSubject);
    document.getElementById("btn-early").href = mail(t.earlySubject);
    document.querySelector(".lang").setAttribute("aria-label", t.langLabel);

    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });

    try { localStorage.setItem("weondu-lang", lang); } catch (e) {}
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { apply(b.dataset.lang); });
  });

  var saved = null;
  try { saved = localStorage.getItem("weondu-lang"); } catch (e) {}
  var fromUrl = new URLSearchParams(location.search).get("lang");
  var initial = copy[fromUrl] ? fromUrl : copy[saved] ? saved : "tr";
  if (initial !== "tr") apply(initial);
})();
