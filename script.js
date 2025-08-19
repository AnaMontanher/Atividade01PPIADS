document.addEventListener("DOMContentLoaded", function () {
  const usuario = document.getElementById("usuario");
  const senhar = document.getElementById("senha");
});

(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          alert.classList.remove("visually-hidden");
          event.preventDefault();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
