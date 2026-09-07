/* Silvia Zucchinetti Maggioni — script principale (menu mobile + lightbox) */
(function () {
  "use strict";

  /* ---- Menu di navigazione mobile ---- */
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Lightbox per la galleria opere ---- */
  var items = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
  if (!items.length) return;

  var lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  var lbImg = lightbox.querySelector("img");
  var lbTitle = lightbox.querySelector(".lb-title");
  var lbSub = lightbox.querySelector(".lb-sub");
  var lbDesc = lightbox.querySelector(".lb-desc");
  var btnClose = lightbox.querySelector(".lightbox-close");
  var btnPrev = lightbox.querySelector(".lightbox-prev");
  var btnNext = lightbox.querySelector(".lightbox-next");

  var current = 0;
  var lastFocused = null;

  function openAt(index) {
    current = (index + items.length) % items.length;
    var el = items[current];
    lbImg.src = el.getAttribute("data-full");
    lbImg.alt = el.getAttribute("data-title") || "";
    lbTitle.textContent = el.getAttribute("data-title") || "";
    lbSub.textContent = el.getAttribute("data-sub") || "";
    if (lbDesc) lbDesc.textContent = el.getAttribute("data-desc") || "";

    lastFocused = document.activeElement;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    btnClose.focus();
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lbImg.src = "";
    if (lastFocused) lastFocused.focus();
  }

  items.forEach(function (el, i) {
    el.addEventListener("click", function () { openAt(i); });
  });

  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", function () { openAt(current - 1); });
  btnNext.addEventListener("click", function () { openAt(current + 1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") openAt(current - 1);
    if (e.key === "ArrowRight") openAt(current + 1);
  });
})();
