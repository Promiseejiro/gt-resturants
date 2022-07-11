const btns = document.querySelectorAll(".btn");
const pop = document.querySelector(".pop-up");
const cancelBtn = document.querySelector(".btn-cancel");
const form = document.querySelector("form");
const showPop = () => {
  pop.style.display = "block";
};

const closePop = () => {
  pop.style.display = "none";
};
form.addEventListener("click", (e) => {
  e.preventDefault();
  showPop()
});

cancelBtn.addEventListener("click", closePop);
btns.forEach((btn) => {
  btn.addEventListener("click", showPop);
});

console.log(pop);
console.log(cancelBtn);
