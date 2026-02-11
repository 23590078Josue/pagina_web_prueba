/*
function validarLogin() {
    const correo = document.getElementById("correoLogin").value;
    const error = document.getElementById("error");

    if (!correo.includes("@")) {
        error.textContent = "El correo electrónico es incorrecto o no válido";
    } else {
        error.textContent = "";
        alert("Inicio de sesión correcto (simulado)");
    }
}

document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        correo: document.getElementById("correo").value,
        password: document.getElementById("password").value,
        fecha: new Date().toLocaleString()
    };

    fetch("AQUI_VA_TU_URL_DE_GOOGLE_APPS_SCRIPT", {
        method: "POST",
        body: JSON.stringify(datos)
    })
    .then(() => {
        alert("Registro enviado correctamente");
        document.getElementById("registerForm").reset();
    });
});
*/

const URL = "https://script.google.com/macros/s/AKfycbw-OhRohL5aCmSlUFTM3C-MK9H5Ed07XfO2bG7X7N0sG8fx4lKGe4ZEAkaIVHK0iMQPIg/exec";

function enviarLogin() {
    const correo = correoLogin.value;
    const password = passwordLogin.value;
    const error = document.getElementById("error");

    if (correo  === "" || password === "") {
        error.textContent = "El correo electrónico es incorrecto o no válido";
        return;
    }

    fetch(URL, {
        method: "POST",
        body: JSON.stringify({
            tipo: "login",
            correo: correo,
            password: password,
            fecha: new Date().toLocaleString()
        })
    })
/*
    .then(() => {
        alert("");
    })
    .catch(() => {
        alert("");
    });
    
*/
    error.textContent = "Correo o contraseña incorrectos";
}

document.getElementById("registerForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    fetch(URL, {
        method: "POST",
        body: JSON.stringify({
            tipo: "registro",
            nombre: nombre.value,
            apellido: apellido.value,
            edad: edad.value,
            telefono: telefono.value,
            correo: correo.value,
            password: password.value,
            fecha: new Date().toLocaleString()
        })
    })
/*
    .then(() => {
        alert("");
        window.location.href = "login.html";
    })
    .catch(() => {
        alert("");
    });
*/    
});

