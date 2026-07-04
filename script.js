function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent =
        String(now.getHours()).padStart(2,'0') + ':' +
        String(now.getMinutes()).padStart(2,'0') + ':' +
        String(now.getSeconds()).padStart(2,'0');
}
// Current Date
function updateDate() {
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", options);
}

updateDate();

// Dark/Light Theme Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "dark");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️ Light Mode";
}
setInterval(updateClock, 1000);
updateClock();

let seconds = 0;
let interval = null;

function updateStopwatch() {
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById('stopwatch').textContent =
        String(hrs).padStart(2,'0') + ':' +
        String(mins).padStart(2,'0') + ':' +
        String(secs).padStart(2,'0');
}

document.getElementById('start').onclick = () => {
    if (!interval) interval = setInterval(updateStopwatch, 1000);
};
document.getElementById('pause').onclick = () => {
    clearInterval(interval);
    interval = null;
};
document.getElementById('reset').onclick = () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    document.getElementById('stopwatch').textContent = '00:00:00';
};