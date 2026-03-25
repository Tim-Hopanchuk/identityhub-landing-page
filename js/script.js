const burger = document.getElementById("header-burger");
const nav = document.getElementById("header-nav");

burger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  });
});
