// Seleccionar elementos del DOM
const timerDisplay = document.getElementById("timer"); // Muestra el tiempo restante
const startButton = document.getElementById("start"); // Botón para iniciar
const pauseButton = document.getElementById("pause"); // Botón para pausar
const resetButton = document.getElementById("reset"); // Botón para reiniciar

// Variables del temporizador
let workTime = 25 * 60; // Tiempo de trabajo en segundos (25 minutos)
let timeLeft = workTime; // Tiempo restante
let interval; // Almacena el intervalo del temporizador
let isRunning = false; // Indica si el temporizador está en marcha

// Función para actualizar el temporizador
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60); // Calcula los minutos restantes
    const seconds = timeLeft % 60; // Calcula los segundos restantes
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // Muestra el tiempo en formato MM:SS

    if (timeLeft === 0) {
        clearInterval(interval); // Detiene el temporizador
        alert("¡Tiempo de trabajo terminado! ¡Toma un descanso!"); // Notificación
        resetTimer(); // Reinicia el temporizador
    } else {
        timeLeft--; // Reduce el tiempo restante
    }
}

// Función para iniciar el temporizador
function startTimer() {
    if (!isRunning) {
        interval = setInterval(updateTimer, 1000); // Actualiza el temporizador cada segundo
        isRunning = true; // Marca el temporizador como en marcha
    }
}

// Función para pausar el temporizador
function pauseTimer() {
    clearInterval(interval); // Detiene el temporizador
    isRunning = false; // Marca el temporizador como pausado
}

// Función para reiniciar el temporizador
function resetTimer() {
    clearInterval(interval); // Detiene el temporizador
    timeLeft = workTime; // Reinicia el tiempo restante
    timerDisplay.textContent = "25:00"; // Muestra el tiempo inicial
    isRunning = false; // Marca el temporizador como detenido
}

// Event listeners para los botones
startButton.addEventListener("click", startTimer); // Inicia el temporizador
pauseButton.addEventListener("click", pauseTimer); // Pausa el temporizador
resetButton.addEventListener("click", resetTimer); // Reinicia el temporizador