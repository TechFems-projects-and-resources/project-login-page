let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".error");
let successIcon = document.querySelector(".success-icon");
let failureIcon = document.querySelector(".failure-icon");
let button = document.querySelector("#button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");

  if (username.value === "") {
    console.log("error username");
   
    username.style.border = "2px solid red";
    failureIcon.style.opacity = "1";
    successIcon.style.opacity = "0";
  } else if (email.value === "") {
    console.log("error email");

    email.style.border = "2px solid red";
    failureIcon.style.opacity = "1";
    successIcon.style.opacity = "0";
  } else if (password.value === "") {
    console.log("error password");

    password.style.border = "2px solid red";
    failureIcon.style.opacity = "1";
    successIcon.style.opacity = "0";
  } else {
    errorMessage1.innerText = "";
    errorMessage2.innerText = "";
    errorMessage3.innerText = "";
    successIcon.style.opacity = "1";
    failureIcon.style.opacity = "0";
  }
});

// let validation = (id, serial, message) => {
//   if (id.value === "") {
//     errorMessage[serial].innerHTML = message

//     id.style.border = "2px solid red"
//     failureIcon[serial].style.opacity = "1"
//     successIcon[serial].style.opacity = "0"
//   }
//   else {
//     errorMessage[serial].innerHTML = ""

//     id.style.border = "2px solid green"
//     failureIcon[serial].style.opacity = "0"
//     successIcon[serial].style.opacity = "1"
//   }
// }
