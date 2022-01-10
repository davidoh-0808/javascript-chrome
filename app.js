const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  //   loginInput.value;
  const username = loginInput.nodeValue;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
