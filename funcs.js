// CURSOR
const cursor = document.getElementById("cursor");
const trail = document.getElementById("cursor-trail");
let mx = 0,
  my = 0,
  tx = 0,
  ty = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx - 6 + "px";
  cursor.style.top = my - 6 + "px";
});
function animTrail() {
  tx += (mx - tx) * 0.12;
  ty += (my - ty) * 0.12;
  trail.style.left = tx - 18 + "px";
  trail.style.top = ty - 18 + "px";
  requestAnimationFrame(animTrail);
}
animTrail();

// LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    const l = document.getElementById("loader");
    l.style.transition = "opacity 0.8s ease";
    l.style.opacity = "0";
    setTimeout(() => (l.style.display = "none"), 800);
  }, 2400);
});

// NAV SCROLL
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// CAROUSEL
function scrollCarousel(dir) {
  const c = document.getElementById("carousel");
  c.scrollBy({ left: dir * 300, behavior: "smooth" });
}

// MODAL
function openModal(title, cat, desc) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalTag").textContent = cat;
  document.getElementById("modalDesc").textContent = desc;
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}
function closeModalOutside(e) {
  if (e.target.id === "modal") closeModal();
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// PARALLAX HERO
window.addEventListener("scroll", () => {
  const s = window.scrollY;
  const m = document.querySelector(".hero-mascot");
  if (m) m.style.transform = `translateY(${s * 0.15}px)`;
  const bg = document.querySelector(".hero-bg");
  if (bg) bg.style.transform = `translateY(${s * 0.05}px)`;
});

// INTERSECTION OBSERVER for timeline
const items = document.querySelectorAll(".timeline-item,.project-card");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateX(0)";
      }
    });
  },
  { threshold: 0.2 },
);
items.forEach((i) => {
  i.style.opacity = "0";
  i.style.transform = "translateX(-20px)";
  i.style.transition = "opacity 0.6s ease,transform 0.6s ease";
  obs.observe(i);
});
