//A-1

function checkPasswordA1() {
    var passwordInput = document.getElementById('A-1-password').value;
    var correctPassword = '8888';
    if (passwordInput === correctPassword) {
        document.getElementById('A-1-link-container').style.display = 'block';
        document.getElementById('A-1-error-message').style.display = 'none';
    } else {
        document.getElementById('A-1-link-container').style.display = 'none';
        document.getElementById('A-1-error-message').style.display = 'block';
    }
}
//A-1
//A-2

function checkPasswordA2() {
    var passwordInput = document.getElementById('A-2-password').value;
    var correctPassword = '0220';

    if (passwordInput === correctPassword) {
        document.getElementById('A-2-link-container').style.display = 'block';
        document.getElementById('A-2-error-message').style.display = 'none';
    } else {
        document.getElementById('A-2-link-container').style.display = 'none';
        document.getElementById('A-2-error-message').style.display = 'block';
    }
}
// A-2
// A-3

function checkPasswordA3() {
    var passwordInput = document.getElementById('A-3-password').value;
    var correctPassword = '0003';

    if (passwordInput === correctPassword) {
        document.getElementById('A-3-link-container').style.display = 'block';
        document.getElementById('A-3-error-message').style.display = 'none';
    } else {
        document.getElementById('A-3-link-container').style.display = 'none';
        document.getElementById('A-3-error-message').style.display = 'block';
    }
}
// A-3
// A-4

function checkPasswordA4() {
    var passwordInput = document.getElementById('A-4-password').value;
    var correctPassword = '0004';

    if (passwordInput === correctPassword) {
        document.getElementById('A-4-link-container').style.display = 'block';
        document.getElementById('A-4-error-message').style.display = 'none';
    } else {
        document.getElementById('A-4-link-container').style.display = 'none';
        document.getElementById('A-4-error-message').style.display = 'block';
    }
}
// A-4

// A-5

function checkPasswordA5() {
    var passwordInput = document.getElementById('A-5-password').value;
    var correctPassword = '0005';

    if (passwordInput === correctPassword) {
        document.getElementById('A-5-link-container').style.display = 'block';
        document.getElementById('A-5-error-message').style.display = 'none';
    } else {
        document.getElementById('A-5-link-container').style.display = 'none';
        document.getElementById('A-5-error-message').style.display = 'block';
    }
}

// A-5

// nvar 

    // Esperar a que el documento esté listo
    document.addEventListener("DOMContentLoaded", function() {
        // Obtener el botón de alternar navegación
        var navbarToggler = document.querySelector(".navbar-toggler");

        // Obtener el elemento de la barra de navegación colapsable
        var navbarCollapse = document.querySelector(".navbar-collapse");

        // Agregar evento de clic al botón de alternar navegación
        navbarToggler.addEventListener("click", function() {
            // Alternar la clase "show" para mostrar u ocultar la barra de navegación colapsable
            navbarCollapse.classList.toggle("show");
        });
    });

// nvar 
