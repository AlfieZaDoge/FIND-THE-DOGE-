function detectConsole() {
    const threshold = 100;
    const isConsoleOpen = window.outerHeight - window.innerHeight > threshold;

    // Check if the popup element exists before attempting to show it
    const popup = document.getElementById("ConsoleDetectionPopup");

    if (isConsoleOpen) {
        console.log("Console is open!");
        if (popup) {
            popup.style.display = "block";
        }
    } else {
        console.log("Console is closed.");
        if (popup) {
            popup.style.display = "none";
        }
    }
}

window.onload = function() {
    setInterval(detectConsole, 1000); // Check every second
};


// this is how the anti cheat works i prefer not to just put the open source html file due to people might try and claim that they made it so i incrypted it!
// tbh half the time this shit does not even work lol
