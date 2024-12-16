
const playButton = document.getElementById("play"); // Selecciona el segundo botón (PLAY)

playButton.addEventListener("click", function () {
    document.body.classList.add("glitch"); // Añade la clase para la animación glitch

    setTimeout(function () {
        window.location.href = "main.html"; // Redirige después de la animación
    }, 2500); // Tiempo de la animación (1.5s en este caso)
});
