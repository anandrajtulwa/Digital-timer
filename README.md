<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Timer</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="timer">
        <h1>DIGITAL TIMER BY ANAND</h1>
        <div id="time">00:00:00.000</div>
        <div class="inputs">
            <input type="number" id="hoursInput" placeholder="Hours" min="0">
            <input type="number" id="minutesInput" placeholder="Minutes" min="0" max="59">
            <input type="number" id="secondsInput" placeholder="Seconds" min="0" max="59">
            <input type="number" id="microsecondsInput" placeholder="Microseconds" min="0" max="999">
        </div>
        <button id="startStopBtn">Start</button>
        <button id="resetBtn">Reset</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
