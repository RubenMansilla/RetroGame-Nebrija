const playButton = document.getElementById("play"); // Selecciona el botón (PLAY)

const sansElements = document.querySelectorAll(".sans"); // Selecciona todas las imágenes con la clase 'sans'
const musicSans = new Audio("img/sans voice.mp3"); // Ruta del archivo de audio
let reproduciendo = false; // Variable para controlar la reproducción

const glitch = new Audio('img/glitch.mp3'); 
glitch.loop = true;
playButton.addEventListener("click", function () {
    document.body.classList.add("glitch"); // Añade la clase para la animación glitch
    glitch.play();
    setTimeout(function () {
        window.location.href = "main.html"; // Redirige después de la animación
        document.body.classList.remove("glitch"); // Remueve la clase para la animación glitch
        
    }, 2500); // Tiempo de la animación (2.5s en este caso)
});

// Agregar el evento de reproducción a cada imagen
sansElements.forEach(sans => {
    sans.addEventListener("click", function () {
        if (!reproduciendo) {
            musicSans.play(); // Reproduce el audio
            reproduciendo = true; // Cambia el estado de la variable
        } else {
            musicSans.pause(); // Pausa el audio
            reproduciendo = false; // Cambia el estado de la variable
        }
    });
});

// Cambia el estado cuando el audio termina
musicSans.addEventListener("ended", function () {
    reproduciendo = false; // Cambia el estado a falso cuando el audio termina
});
