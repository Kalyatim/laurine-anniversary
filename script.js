// Fade in on load
window.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");
});

// Smooth page transition
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            const target = this.getAttribute("href");

            if (target.endsWith(".html")) {
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
        msg.innerText = "You are my forever, Laurine ❤️";
    }
}

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 700);
