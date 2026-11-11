
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function startTimer() {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function() {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        document.getElementById("timer").innerText =
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);

    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("timer").innerText = "00:00:00";
}
