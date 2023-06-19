            // Seleccionar el elemento con la clase "navbar-brand"
            const navbarBrand = document.querySelector('.navbar-brand');

            // Esperar 5 segundos y ocultar el nombre de la navbar
            setTimeout(() => {
                navbarBrand.style.display = 'none';
            }, 5000);