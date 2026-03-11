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

function openImage(img){
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");

lightbox.style.display="flex";
lightboxImg.src=img.src;
}

function closeImage(){
document.getElementById("lightbox").style.display="none";
}

setInterval(createHeart, 700);

document.addEventListener("DOMContentLoaded", function(){

const reasons = [

"Your smile brightens my darkest days",
"The way you laugh fills my heart with joy",
"You understand me like no one else",
"Your kindness to everyone around you",
"The peace I feel when I am with you",
"The way you look at me",
"Our endless late night conversations",
"The warmth of your heart",
"Your beautiful soul",
"The way you care about the little things",
"The comfort of your presence",
"How you support my dreams",
"The memories we keep creating",
"Your patience with me",
"How you inspire me to be better",
"The love you show so naturally",
"The happiness you bring into my life",
"The way you make ordinary days special",
"The future I see with you",
"And simply because you are you"

];

let index = 0;
const box = document.getElementById("reasonBox");

function showReason(){

box.style.opacity = 0;

setTimeout(function(){

box.textContent = reasons[index];
box.style.opacity = 1;

index++;

if(index >= reasons.length){
index = 0;
}

},1000);

}

setInterval(showReason,4000);

showReason();

});