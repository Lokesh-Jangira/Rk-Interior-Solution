document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".ctg-tabs li");
  const contents = document.querySelectorAll(".ctg-grid");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");

      const target = tab.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");

    });
  });

});

/* ===== IMAGE POPUP ===== */

const images = document.querySelectorAll(".ctg-grid img");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.getElementById("closePopup");

images.forEach(img => {
  img.addEventListener("click", () => {
    popup.classList.add("active");
    popupImg.src = img.src;
  });
});

/* CLOSE */
closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

/* CLICK OUTSIDE CLOSE */
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

// === Js for FAQ's Start === //
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;

    item.classList.toggle("active");
  });
});
// === Js for FAQ's End === //