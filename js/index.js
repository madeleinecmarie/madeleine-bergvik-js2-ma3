import alert from "./components/alert.js";
import { saveToLocalStorage } from "./libs/localStorage.js";

import { testLengthofTextBox, testEmail } from "./libs/validation.js";

let form = document.querySelector(".form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.onsubmit = async function (event) {
  event.preventDefault();

  if (testLengthofTextBox(password.value, 1) && testEmail(email.value)) {
    try {
      const { data } = await axios.post(
        "http://localhost:1337/auth/local",

        {
          identifier: email.value,
          password: password.value,
        }
      );

      console.log(data);

      saveToLocalStorage("jwt", data.jwt);
      saveToLocalStorage("user", data.user);

      window.location.href = "./success.html";
    } catch (error) {
      alert("alert-danger", "Your credentials were incorrect");
    }
  } else {
    alert("alert-danger", "Please enter proper value for password or email");
  }
};
