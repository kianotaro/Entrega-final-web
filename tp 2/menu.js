// MENU HAMBURGUESA (solo se ve en celular)

// ELEMENTOS DEL HTML

const botonMenu = document.getElementById("boton-menu");

const menuNav = document.getElementById("menu-nav");


// ABRIR / CERRAR EL MENU

function abrirMenu() {

    botonMenu.classList.add("abierto");

    menuNav.classList.add("abierto");

    botonMenu.setAttribute("aria-expanded", "true");

    botonMenu.setAttribute("aria-label", "Cerrar menú");

}

function cerrarMenu() {

    botonMenu.classList.remove("abierto");

    menuNav.classList.remove("abierto");

    botonMenu.setAttribute("aria-expanded", "false");

    botonMenu.setAttribute("aria-label", "Abrir menú");

}

botonMenu.addEventListener("click", function() {

    if (menuNav.classList.contains("abierto")) {

        cerrarMenu();

    } else {

        abrirMenu();

    }

});


// CERRAR AL TOCAR UN LINK DEL MENU

menuNav.querySelectorAll("a").forEach(function(enlace) {

    enlace.addEventListener("click", cerrarMenu);

});


// CERRAR AL TOCAR FUERA DE LA BARRA

document.addEventListener("click", function(event) {

    if (!event.target.closest("nav")) {

        cerrarMenu();

    }

});




// CERRAR SI LA PANTALLA SE AGRANDA (por ejemplo, al girar el celular)

window.addEventListener("resize", function() {

    if (window.innerWidth > 600) {

        cerrarMenu();

    }

});