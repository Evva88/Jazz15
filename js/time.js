// Fecha del evento: 26 de Septiembre de 2026 a las 13:00
const fechaEvento = new Date("September 26, 2026 13:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) /
        1000
    );

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    if (diferencia < 0) {
        clearInterval(intervalo);
        document.getElementById("dias").innerText = "¡YA!";
        document.getElementById("horas").innerText = "";
        document.getElementById("minutos").innerText = "";
        document.getElementById("segundos").innerText = "";
        document.querySelector("h2").innerHTML = "¡LLEGÓ EL GRAN DÍA! 🎉💕";
    }
}

// Ejecutar una vez al cargar
actualizarContador();

// Actualizar cada segundo
const intervalo = setInterval(actualizarContador, 1000);