const cambiarColorBtn = document.getElementById("cambiar-color");
const icono = document.getElementById("icono");

cambiarColorBtn.addEventListener("click", function () {
    if (icono.classList.contains("rojo")) {
        icono.classList.remove("rojo");
        icono.classList.add("verde");
    } else {
        icono.classList.remove("verde");
        icono.classList.add("rojo");
    }
});

