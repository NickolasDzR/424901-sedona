var button = document.querySelector(".button-find");
var popup = document.querySelector(".form-show");
var form = popup.querySelector(".show-variant");
var text = popup.querySelector("[type=text]");
var number = popup.querySelector("[type=number]");

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
