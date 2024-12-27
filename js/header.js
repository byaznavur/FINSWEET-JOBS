const menuBtn = document.querySelector(".menu-btn");
const menuBtnBx = document.querySelector(".menu-btn .bx");
const list = document.querySelector(".list");
console.log(menuBtnBx);

menuBtn.addEventListener("click", () => {
  menuBtnBx.classList.toggle("bx-x-circle");
  list.classList.toggle("show");
});
