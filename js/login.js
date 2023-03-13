import API_PATH from "./main.js";

const elLoginForm = document.querySelector(".js-login-form");
const elLoginEmail = elLoginForm.querySelector(".js-login-email");
const elLoginPass = elLoginForm.querySelector(".js-login-pass");
const elLoginBtn = elLoginForm.querySelector(".js-login-btn");
const elLoginImg = elLoginBtn.querySelector(".js-login-img");

const login = async (loginEmail, loginPass) => {
  try {
    const res = await fetch(API_PATH + "user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPass,
      }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("loginToken", data.token);

      window.location.replace("/");
    }

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

elLoginBtn.addEventListener("click", function() {
  if (elLoginPass.type === "password") {
    elLoginPass.type = "text";
    elLoginImg.src = "../images/eye-circulation.svg";
  } else {
    elLoginPass.type = "password";
    elLoginImg.src = "../images/action-hide-password.svg";
  }
});

elLoginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const email = elLoginEmail.value.trim();
  const pass = elLoginPass.value.trim();

  login(email, pass);
});
