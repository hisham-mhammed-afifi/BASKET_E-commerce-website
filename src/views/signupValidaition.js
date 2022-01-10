const nameID = document.getElementById("name");
const emailID = document.getElementById("email");
const passwordID = document.getElementById("password");
const confirmID = document.getElementById("confirm");
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          if (isSame()) {
            event.preventDefault();
            event.stopPropagation();
            signup(nameID.value, emailID.value, passwordID.value);
            location.href = "../../index.html";
          }
        }
        event.preventDefault();
        event.stopPropagation();
        console.log(nameID.value);
        console.log(emailID.value);
        console.log(passwordID.value);
        console.log(confirmID.value);

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function isSame() {
  if (
    passwordID.value !== "" &&
    confirmID.value !== "" &&
    passwordID.value == confirmID.value
  ) {
    confirmID.classList.add("is-valid");
    return true;
  }
  confirmID.classList.add("is-invalid");

  return false;
}

///////////////////////////  SIGN UP & LOGIN FUNCTIONS ///////////////////////////////

function signup(name, email, password) {
  const newUser = { name, email, password };

  localStorage.setItem(email, JSON.stringify(newUser));
}
