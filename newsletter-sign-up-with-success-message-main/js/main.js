const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const container = document.querySelector(".container");
const value = input.value;

btn.addEventListener("click", (e) => {
  if (input.value == "" || input.value.indexOf("@") != 1) {
    error.innerText = "Valid email required";
    input.style.borderColor = "red";
    input.style.backgroundColor = "hsl(356, 100%, 93%)";
    input.style.color = "hsl(0, 97%, 73%)";
  } else {
    error.innerText = "";
    input.style.borderColor = "hsl(231, 7%, 60%)";
    container.innerHTML = "Thanks for subscribing!";
  }
});
