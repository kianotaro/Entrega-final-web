
// ELEMENTOS DEL HTML

const botonAbrir = document.getElementById("abrir-donacion");

const botonCerrar = document.getElementById("cerrar-donacion");

const ventanaDonacion = document.getElementById("modal-donacion");

const montos = document.querySelectorAll(".monto");

const otroMonto = document.getElementById("otro-monto");

const botonContinuar = document.getElementById("continuar-donacion");

const mensaje = document.getElementById("mensaje-donacion");


// ABRIR LA VENTANA

botonAbrir.addEventListener("click", function(event) {

    event.preventDefault();

    ventanaDonacion.hidden = false;

});


// CERRAR LA VENTANA

botonCerrar.addEventListener("click", function() {

    ventanaDonacion.hidden = true;

});


// CERRAR AL HACER CLIC FUERA DE LA VENTANA

ventanaDonacion.addEventListener("click", function(event) {

    if (event.target === ventanaDonacion) {

        ventanaDonacion.hidden = true;

    }

});


// CERRAR CON LA TECLA ESCAPE

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        ventanaDonacion.hidden = true;

    }

});


// SELECCIONAR UN MONTO

montos.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Quitar la seleccion anterior

        montos.forEach(function(opcion) {

            opcion.classList.remove("seleccionado");

        });

        // Seleccionar el monto elegido

        boton.classList.add("seleccionado");

        // Limpiar otro monto

        otroMonto.value = "";

        // Limpiar mensaje anterior

        mensaje.textContent = "";

    });

});


// INGRESAR OTRO MONTO

otroMonto.addEventListener("input", function() {

    // Quitar la seleccion de los botones

    montos.forEach(function(boton) {

        boton.classList.remove("seleccionado");

    });

    mensaje.textContent = "";

});


// BOTON CONTINUAR

botonContinuar.addEventListener("click", function() {

    let montoElegido = "";

    // Comprobar si se selecciono un monto

    montos.forEach(function(boton) {

        if (boton.classList.contains("seleccionado")) {

            montoElegido = boton.dataset.monto;

        }

    });

    // Comprobar si se ingreso otro monto

    if (otroMonto.value.trim() !== "") {

        const valor = otroMonto.value.trim();

        if (!/^\d+$/.test(valor) || Number(valor) <= 0) {

            mensaje.textContent = "Ingresá un monto válido.";

            return;

        }

        montoElegido = valor;

    }

    // Comprobar que haya un monto elegido

    if (montoElegido === "") {

        mensaje.textContent = "Por favor, seleccioná un monto para donar.";

        return;

    }

    // Mostrar confirmacion

    const montoFormateado = Number(montoElegido).toLocaleString("es-AR");

    mensaje.textContent =
        "¡Gracias por querer aportar $" + montoFormateado +
        " a Marea Azul!";

});
