const header = document.querySelector("header");
const hero = document.querySelector(".hero");

// Header turns solid once the page is scrolled; the hero background scrolls at half speed
function updateHeader() {
  const scrolled = window.scrollY;
  header.classList.toggle("is-solid", scrolled > 40);

  if (scrolled < window.innerHeight) {
    hero.style.setProperty("--parallax", `${scrolled * 0.5}px`);
  }
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// Projects page: clicking a thumbnail swaps the main screenshot
document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const mainImage = gallery.querySelector(".gallery-main");
  const thumbButtons = gallery.querySelectorAll(".gallery-thumbs button");

  thumbButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const thumb = button.querySelector("img");
      mainImage.src = thumb.src;
      mainImage.alt = thumb.alt;

      thumbButtons.forEach((other) => other.removeAttribute("aria-current"));
      button.setAttribute("aria-current", "true");
    });
  });
});
