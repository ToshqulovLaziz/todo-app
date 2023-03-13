const API_PATH = "http://192.168.0.116:5000/";

export default API_PATH;

const token = localStorage.getItem("loginToken");

// console.table(token);

const elTodoList = document.querySelector(".js-todo-list");
const elForm = document.querySelector(".form");
const elINput = document.querySelector(".input");

async function addTodo() {
  try {
    const res = await fetch(API_PATH + "todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        text: elINput.value,
      }),
    });

    const data = await res.json();

    console.log(data);
    getTodos();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function getTodos() {
  fetch(API_PATH + "todo")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   addTodo();
//   getTodos();
// });
