let timer;
let isRunning = false;
let [hours, minutes, seconds, microseconds] = [0, 0, 0, 0];

const timeDisplay = document.getElementById('time');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

const hoursInput = document.getElementById('hoursInput');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');
const microsecondsInput = document.getElementById('microsecondsInput');

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        if (!isRunning) {
            hours = parseInt(hoursInput.value) || 0;
            minutes = parseInt(minutesInput.value) || 0;
            seconds = parseInt(secondsInput.value) || 0;
            microseconds = parseInt(microsecondsInput.value) || 0;
        }
        timer = setInterval(updateTime, 10);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    [hours, minutes, seconds, microseconds] = [0, 0, 0, 0];
    timeDisplay.textContent = '00:00:00.000';
    startStopBtn.textContent = 'Start';
    isRunning = false;
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
    microsecondsInput.value = '';
});

function updateTime() {
    microseconds += 10;
    if (microseconds === 1000) {
        microseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(microseconds).padStart(3, '0')}`;
}
