// Obtener los botones de play y stop
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const home = document.getElementById('home');

// Crear un objeto de audio
const music = new Audio('img/musicaRetro.mp3'); // Reemplaza con la ruta de tu archivo de audio

// Configurar para que la música esté en bucle
music.loop = true;

// Función para reproducir música
playButton.addEventListener('click', () => {
    if (music.paused || music.ended) {
        music.play(); // Reproduce la música si está pausada o ha terminado
    }
});

// Función para detener música
stopButton.addEventListener('click', () => {
    music.pause(); // Pausa la música
});

home.addEventListener('click', () => {
    window.location.href = "index.html";
});
