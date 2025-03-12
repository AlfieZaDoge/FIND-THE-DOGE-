document.getElementById("tweetBtn").onclick = function() {
    const elapsedTime = 10.5; // Replace with actual elapsed time variable
    const tweetText = `I found the Doge on FindTheDoge.com in ${elapsedTime.toFixed(1)} seconds! 🐶✨`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, "_blank");
};