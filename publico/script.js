document.addEventListener("DOMContentLoaded", function () {
  const usuario = document.getElementById("usuario");
  const form = document.getElementById("form");
  form.addEventListener("input", (e) => {
    e.preventDefault();
    let isValid = true;
    function aplicaClasse(input, isValid) {
      input.classList.toggle("is-valid", isValid);
      input.classList.toggle("is-invalid", isValid);
    }
    //validação de e-mail

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.value);
    aplicaClasse(usuario, emailValido);
    if (!emailValido) isValid = false;
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
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

 
});
