const openBtn = document.getElementById("openBtn");
const opnBtn2 = document.getElementById("opnBtn2");
const model = document.getElementById("popup");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {
  model.style.display = "block";
};
closeBtn.onclick = () => {
  model.style.display = "none";
};
opnBtn2.onclick = () => {
  model.style.display = "block";
};
// Extra: Close when user clicks outside the modal
window.onclick = (e) => {
  if (e.target == model) {
    model.style.display = "none";
  }
};
// this code for page scrolling
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // ye smooth scrolling karta hai
  });
}
// /this code for like button
const likebtn = document.querySelectorAll(".like-icon");
likebtn.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.classList.toggle("liked");
  });
});
