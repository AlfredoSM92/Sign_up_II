//Importación Elementos DOM.
const signUpButton= document.getElementById("signup__button");
const terms = document.getElementById("terms");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const pass = document.getElementById("password")



signUpButton.onclick = (event) => {
    event.preventDefault()
    if (firstName.value != '' && lastName.value != '' && email.value != '' && pass.value != '' && terms.checked == true) {
        Swal.fire({
            title: `¡Bienvenid@!`,
            text: 'Disfruta esta experiencia',
            icon: 'success',
            confirmButtonText: "OK",
            confirmButtonColor: '#3454DB',
            footer: `Ningún dato es registrado en ninguna base de datos, localStorage, ni en algún otro sitio o servidor.
                    Todo es con fines de práctica y demostración de portafolio. Los términos y condiciones son inexistentes.`,
        })
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Debes llenar todos los campos y aceptar los términos y condiciones',
            icon: 'error',
            confirmButtonText: "OK",
            confirmButtonColor: '#3454DB',
            footer: `Ningún dato es registrado en ninguna base de datos, localStorage, ni en algún otro sitio o servidor.
                    Todo es con fines de práctica y demostración de portafolio. Los términos y condiciones son inexistentes.`,
        })
    }
}
