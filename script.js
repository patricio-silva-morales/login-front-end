document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const formMessage = document.getElementById("formMessage");
    const passwordToggle = document.querySelector(".password-toggle");

    function setError(input, message) {
        const errorElement = document.querySelector(
            `.form-error[data-error-for="${input.id}"]`
        );
        if (errorElement) {
            errorElement.textContent = message || "";
        }
        input.classList.toggle("form-input--error", !!message);
    }

    function clearErrors() {
        setError(usernameInput, "");
        setError(passwordInput, "");
        formMessage.textContent = "";
        formMessage.style.color = "";
    }

    function validateForm() {
        clearErrors();
        let isValid = true;

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "") {
            setError(usernameInput, "Ingresa tu usuario o correo.");
            isValid = false;
        }

        if (password === "") {
            setError(passwordInput, "Ingresa tu contraseña.");
            isValid = false;
        } else if (password.length < 4) {
            setError(passwordInput, "La contraseña debe tener al menos 4 caracteres.");
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!validateForm()) {
            formMessage.textContent = "Revisa los campos marcados en rojo.";
            formMessage.style.color = "#b91c1c";
            return;
        }

        // Aquí podrías hacer fetch() hacia tu backend
        // Ejemplo de “simulación” de login correcto:
        formMessage.textContent = "Credenciales válidas. Procesando inicio de sesión...";
        formMessage.style.color = "#15803d";

        // Simulación de redireccionamiento
        setTimeout(function () {
            // window.location.href = "/dashboard";
        }, 800);
    });

    // Mostrar / ocultar contraseña
    if (passwordToggle) {
        passwordToggle.addEventListener("click", function () {
            const isPassword = passwordInput.type === "password";
            passwordInput.type = isPassword ? "text" : "password";
            passwordToggle.setAttribute("aria-pressed", String(isPassword));
        });
    }
});
