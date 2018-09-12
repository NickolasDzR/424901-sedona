  var button = document.querySelector(".button-find");
  var popup = document.querySelector(".form-show");
  var login = popup.querySelector("[type=text]");
  button.addEventListener('click', function (evt) {
  evt.preventDefault();

  popup.classList.toggle("form-unshow");
  login.focus();

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if(popup.classList.contains("form-show")) {
    evt.preventDefault();
    popup.classList.remove("form-unshow");
  }
}
});
