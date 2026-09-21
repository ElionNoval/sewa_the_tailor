const heroVideos = [...document.querySelectorAll(".hero-video")];
let heroIndex = 0;
setInterval(() => {
  if (!heroVideos.length) return;
  heroVideos[heroIndex].classList.remove("active");
  heroIndex = (heroIndex + 1) % heroVideos.length;
  heroVideos[heroIndex].classList.add("active");
  heroVideos[heroIndex].play().catch(()=>{});
}, 5200);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll(".reveal,.reveal-card").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.querySelectorAll("video").forEach(v => {
  v.addEventListener("loadeddata", () => {
    v.play().catch(()=>{});
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
