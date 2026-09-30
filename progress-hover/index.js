const fullTimeSeconds = 5; // Time(in seconds) to go from 0% to 100%

const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");
const progressValue = document.getElementById("progress-value");

let intervalId = null;
const interval = (fullTimeSeconds * 1000) / 100;
progress.style.transition = `width ${interval}ms linear`;

let progressPercentage = 0;

function updateProgress(value) {
    progressPercentage += value;

    progress.style.width = `${progressPercentage}%`;
    progressValue.textContent = `${progressPercentage}%`;
}

updateProgress(0);

progressBar.addEventListener("mouseenter", () => {
    updateProgress(1);

    if (intervalId !== null) clearInterval(intervalId);

    intervalId = setInterval(() => {
        updateProgress(1);

        if (progressPercentage >= 100) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }, interval);
});

progressBar.addEventListener("mouseleave", () => {
    updateProgress(-1);

    if (intervalId !== null) clearInterval(intervalId);

    intervalId = setInterval(() => {
        updateProgress(-1);

        if (progressPercentage <= 0) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }, interval);
});
