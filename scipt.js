const byId = (id) => document.getElementById(id);

function initNavbar() {
  const menu = byId("navMenu");
  const collapse = bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => collapse.hide());
  });
}

function initPhoto() {
  const frame = byId("photoFrame");
  const photo = byId("photo");

  const showPlaceholder = () => frame.classList.add("no-photo");

  photo.addEventListener("error", showPlaceholder);

  if (photo.complete && photo.naturalWidth === 0) {
    showPlaceholder();
  }
}

function initFooterYear() {
  byId("year").textContent = new Date().getFullYear();
}

function init() {
  initNavbar();
  initPhoto();
  initFooterYear();
}

document.addEventListener("DOMContentLoaded", init);