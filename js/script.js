// Hero Section Start //
/* ===== HERO COUNTER ANIMATION ===== */

const counters = document.querySelectorAll(".stat-item strong");

const startCounter = (counter) => {
    const target = parseInt(counter.innerText);
    let count = 0;

    const speed = target / 130; // smooth speed

    const update = () => {
        count += speed;

        if (count < target) {
            counter.innerText = Math.floor(count) + "+";
            requestAnimationFrame(update);
        } else {
            counter.innerText = target + "+";
        }
    };

    update();
};

/* ===== TRIGGER ON LOAD ===== */
window.addEventListener("load", () => {
    counters.forEach(counter => startCounter(counter));
});
// Hero Section End //
document.addEventListener("DOMContentLoaded", function () {

  const slider = document.querySelector(".designer-grid");
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });

});

// === FAQ JS START === //
document.addEventListener("DOMContentLoaded", () => {

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

      // close all (accordion behavior)
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
        }
      });

      // toggle current
      item.classList.toggle("active");

    });

  });

});
// === FAQ JS END === //
