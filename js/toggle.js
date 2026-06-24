const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

// Menu Open
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Menu Close
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Let's Build button js Start //

document.querySelectorAll(".nav-right-cta-btn").forEach(btn => {
  btn.addEventListener("click", function (e) {

    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    circle.style.width = circle.style.height = size + "px";
    circle.style.left = (e.clientX - rect.left - size / 2) + "px";
    circle.style.top = (e.clientY - rect.top - size / 2) + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

const btn = document.querySelector(".nav-right-cta-btn");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // 🔥 default link stop

  const message = "Hi RK Interior, I want interior design services in Gurgaon.";
  const url = "https://wa.me/919717949994?text=" + encodeURIComponent(message);

  window.open(url, "_blank"); // 🔥 new tab with message
});

// Let's Build button js end //