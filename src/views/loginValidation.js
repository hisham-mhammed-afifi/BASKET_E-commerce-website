const emailID = document.getElementById("email");
const passwordID = document.getElementById("password");
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
          console.log(form.checkValidity());
          login(emailID.value, passwordID.value);
          location.href = "../../index.html";
        }
        event.preventDefault();
        event.stopPropagation();
        console.log(emailID.value);
        console.log(passwordID.value);

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

///////////////////////////  SIGN UP & LOGIN FUNCTIONS ///////////////////////////////

function login(email, password) {
  const signedupUser = JSON.parse(localStorage.getItem(email));
  if (email === signedupUser.email && password === signedupUser.password) {
    sessionStorage.setItem("logedIn", email);
    return true;
  } else {
    return false;
  }
}
