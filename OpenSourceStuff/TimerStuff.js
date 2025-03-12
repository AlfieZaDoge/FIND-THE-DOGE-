        let startTime, timerInterval, dogeX, dogeY, gameOver = false;

        function startTimer() {
            startTime = performance.now();
            timerInterval = setInterval(updateTimer, 100);
        }

        function updateTimer() {
            const elapsedTime = (performance.now() - startTime) / 1000;
            document.getElementById("timer").innerText = `Time: ${elapsedTime.toFixed(1)}s`;
        }

        function stopTimer() {
            clearInterval(timerInterval);
        }

// this is how the timer works i prefer not to just put the open source html file due to people might try and claim that they made it so i incrypted it!
