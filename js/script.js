var button = document.querySelector(".button-find");
var popup = document.querySelector(".form-unshow");
var form = document.querySelector("form");
var text = popup.querySelector("[name=date-arrival]");
var number = popup.querySelector("[name=number]");

document.addEventListener("DOMContentLoaded", function() {
  form.classList.add("form-show");
});

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-unshow");
  text.focus();

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("form-show")) {
      evt.preventDefault();
      popup.classList.remove("form-unshow");
    }
  }
});


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!text.value || !number.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("text", text.value);
    }
  }
});
