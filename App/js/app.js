let menuIcon = document.getElementById("menu-icon");
let navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

// ========== CLOSE MENU WİTH SCROLLBAR ==========
function closeMenu() {
  navbar.classList.remove("active");
  menuIcon.classList.remove("bx-x");
}
window.onscroll = () => {
  if (window.innerWidth < 768) {
    closeMenu();
  }
};

// ========== CLOSE MENU WİTH ESC ==========

function closeMenuOnEsc() {
  navbar.classList.remove("active");
  menuIcon.classList.remove("bx-x");
}
window.onkeydown = (event) => {
  if (event.key === "Escape") {
    closeMenuOnEsc();
  }
};
// ========== CLOSE MENU WİTH OUTSİDE CLİCK ==========
function closeMenuOnClickOutside() {
  if (event.target !== navbar && event.target !== menuIcon) {
    closeMenu();
  }
}
window.onclick = () => {
  closeMenuOnClickOutside();
};
