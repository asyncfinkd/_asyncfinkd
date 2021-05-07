const Modal = document.getElementById("modal:alert");
const Agree = document.getElementById("agree:button");
const D_Agree = document.getElementById("d_agree:button");

setTimeout(() => {
  if (localStorage.getItem("_cookie_:modal") != "true") {
    Modal.classList.remove("hide");
  }
}, 2000);

Agree.addEventListener("click", () => {
  Modal.classList.add("hide");
  localStorage.setItem("_cookie_:modal", "true");
});

D_Agree.addEventListener("click", () => {
  Modal.classList.add("hide");
  localStorage.setItem("_cookie_:modal", "true");
});
