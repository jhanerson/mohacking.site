window.onload = function () {

    $('#onload').fadeOut();
    $('body').removeClass('no-scroll')
}


// Escuchar el evento de cambio en el campo de contraseña 1
$("#contrasena1").on("keyup", function () {
    // Obtener el valor de la contraseña 1
    var contrasena1 = $(this).val();

    // Comprobar si la contraseña 1 es "mohacking20"
    if (contrasena1 === "Emprende20") {
        // Habilitar el botón 1 si la contraseña 1 es correcta
        $("#boton1").prop("disabled", false);
    } else {
        // Deshabilitar el botón 1 si la contraseña 1 es incorrecta
        $("#boton1").prop("disabled", true);
    }
});

// Escuchar el evento de cambio en el campo de contraseña 2
$("#contrasena2").on("keyup", function () {
    // Obtener el valor de la contraseña 2
    var contrasena2 = $(this).val();

    // Comprobar si la contraseña 2 es "Pymes20"
    if (contrasena2 === "Pymes10") {
        // Habilitar el botón 2 si la contraseña 2 es correcta
        $("#boton2").prop("disabled", false);
    } else {
        // Deshabilitar el botón 2 si la contraseña 2 es incorrecta
        $("#boton2").prop("disabled", true);
    }
});

// Escuchar el evento de clic del botón 1
$("#boton1").on("click", function () {
    // Redireccionar al enlace externo 1 cuando se haga clic en el botón 1
    window.location.href = "https://www.enlace1.com"; // Reemplaza "https://www.enlace1.com" con el enlace que desees
});

// Escuchar el evento de clic del botón 2
$("#boton2").on("click", function () {
    // Redireccionar al enlace externo 2 cuando se haga clic en el botón 2
    window.location.href = "https://moha-corp-vip.000webhostapp.com/"; // Reemplaza "https://www.enlace2.com" con el enlace que desees
});


// Escuchar el evento de cambio en el campo de contraseña
$("#contrasena").on("keyup", function () {
    // Obtener el valor de la contraseña
    var contrasena = $(this).val();

    // Comprobar si la contraseña es "mohacking20"
    if (contrasena === "Cliente-Vip") {
        // Habilitar el botón si la contraseña es correcta
        $("#boton").prop("disabled", false);
    } else {
        // Deshabilitar el botón si la contraseña es incorrecta
        $("#boton").prop("disabled", true);
    }
});

// Escuchar el evento de clic del botón
$("#boton").on("click", function () {
    // Obtener el valor de la contraseña ingresada
    var contrasena = $("#contrasena").val();

    // Comprobar si la contraseña es "mohacking20"
    if (contrasena === "mohacking20") {
        // Redireccionar a un enlace externo cuando se haga clic en el botón
        window.location.href = "./Vip"; // Reemplaza "https://www.ejemplo.com" con el enlace que desees
    }
});