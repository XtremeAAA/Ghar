function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
const scrollElements = document.querySelectorAll(".scroll-reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

scrollElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
const scrollElements = document.querySelectorAll(".scroll-reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

scrollElements.forEach((el) => observer.observe(el));
});