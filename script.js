// Wait until page fully loads
window.addEventListener("DOMContentLoaded", function () {

    // Fade in effect
    document.body.classList.add("fade-in");

    // Smooth navigation fade-out
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {

            const target = this.getAttribute("href");

            // Only apply effect to internal html pages
            if (target && target.endsWith(".html")) {
                e.preventDefault();
                document.body.classList.remove("fade-in");

                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            }
        });
    });

});

// Surprise message
function showMessage() {
    const msg = document.getElementById("surprise");
    if (msg) {
        msg.innerText = "You are my favorite person in the whole world ❤️";
    }
}

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "kalya❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 600);