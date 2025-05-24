const SUN = "M15 4a8 8 0 100 8 8 8 0 000-8";
const MOON = "M15 4a8 8 0 100 8 5 5 0 110-8";
const DARKMODE_ICON = document.getElementById("darkmode-icon");
const USING_DARKMODE = localStorage.getItem("dark-mode");
const PREFERS_LIGHT = window.matchMedia("(prefers-color-scheme: light)").matches;
const PREFERS_DARK = window.matchMedia("(prefers-color-scheme: dark)").matches;

let darkMode = true;
if (USING_DARKMODE === "true") {
    darkMode = true;
} else if (USING_DARKMODE === "false") {
    darkMode = false;
} else if (PREFERS_DARK) {
    darkMode = true;
} else if (PREFERS_LIGHT) {
    darkMode = false;
}

if (darkMode) {
    document.body.classList.add("dark-mode");
    DARKMODE_ICON.setAttribute("d", SUN);
}

function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem("dark-mode", darkMode);
    document.body.classList.toggle("dark-mode");
    if (darkMode) {
        DARKMODE_ICON.setAttribute("d", SUN);
    } else {
        DARKMODE_ICON.setAttribute("d", MOON);
    }
}