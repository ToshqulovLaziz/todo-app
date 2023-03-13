import API_PATH from "./main.js";

const elRegisterForm = document.querySelector(".js-register-form");
const elRegisterUserName = elRegisterForm.querySelector(
  ".js-register-username"
);
const elRegisterEmail = elRegisterForm.querySelector(".js-register-email");
const elRegisterTel = elRegisterForm.querySelector(".js-register-tel");
const elRegisterPassword = elRegisterForm.querySelector(
  ".js-register-password"
);

const token = localStorage.getItem("registerToken");

if (token) {
  window.location.pathname = "/login.html";
}

// user/register
async function register(userName, userEmail, userTel, userPassword) {
  try {
    const res = await fetch(API_PATH + "user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: userName,
        email: userEmail,
        phone: userTel,
        password: userPassword,
      }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("registerToken", data.token);
    }

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

elRegisterForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const userName = elRegisterUserName.value.trim();
  const email = elRegisterEmail.value.trim();
  const tel = elRegisterTel.value.trim();
  const password = elRegisterPassword.value.trim();

  register(userName, email, tel, password);
});
