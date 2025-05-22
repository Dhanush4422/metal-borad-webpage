/* home background image change */

const backgrounds = [
  {
    img: "im.jpg",
    text: "Strong & Durable: Built to withstand weather and time",
  },
  {
    img: "image1.jpg",
    text: "Professional Look: Sleek finish for modern, clean signage",
  },
  {
    img: "image3.jpg",
    text: "Versatile Use: Ideal for shops, homes, offices, and factories",
  },
  { img: "image5.jpg", text: "Perfect for Outdoor & Indoor Use" },
];

let index = 0;
const section = document.getElementById("hero");
const textEl = document.getElementById("hero-text");

function updateBackground() {
  section.style.backgroundImage = `url('${backgrounds[index].img}')`;
  textEl.innerText = backgrounds[index].text;
  textEl.classList.remove("image-text");
  void textEl.offsetWidth;
  textEl.classList.add("image-text");
  index = (index + 1) % backgrounds.length;
}

updateBackground();
setInterval(updateBackground, 4000);

/* home  section loading  */

function showSection(id) {
  document
    .querySelectorAll(".content-section")
    .forEach((sec) => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/*  why chouse us  */

// Check if element is in view
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function animateProgressBars() {
  const bars = document.querySelectorAll(".progress-bar");
  const counts = document.querySelectorAll(".count");

  bars.forEach((bar, index) => {
    const target = +bar.getAttribute("data-target");
    if (!bar.classList.contains("animated") && isInViewport(bar)) {
      bar.classList.add("animated");
      bar.style.width = target + "%";

      // Animate number counter
      let count = 0;
      const counter = counts[index];
      const step = Math.ceil(target / 30); // speed of count
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        counter.innerText = count + "%";
      }, 50);
    }
  });
}

document.addEventListener("scroll", animateProgressBars);
window.addEventListener("load", animateProgressBars);

//  whatsapp button

const whatsappBtn = document.getElementById("whatsappButton");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    whatsappBtn.style.display = "block";
  } else {
    whatsappBtn.style.display = "none";
  }
});

// topgle button

function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.classList.remove("active"); // Hide all
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active"); // Show selected
  }

  // Collapse mobile navbar
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false,
  });
  bsCollapse.hide();
}
