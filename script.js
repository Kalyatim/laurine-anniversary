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

const reasons = [

"Your smile brightens my darkest days",
"The way you laugh makes the world lighter",
"You understand me in ways no one else does",
"Your kindness touches everyone around you",
"The warmth of your heart",
"The way you support my dreams",
"Our late night conversations",
"How peaceful life feels when I am with you",
"The way you look at me",
"Your beautiful soul",
"The memories we keep creating",
"The way you make ordinary days magical",
"Your patience with me",
"How you inspire me to be better",
"The way you care so deeply",
"The comfort of your presence",
"The love you show in the smallest things",
"Because with you, life feels right",
"Because my heart feels at home with you",
"Because loving you feels natural"

];

let index = 0;
const box = document.getElementById("reasonBox");

function showReason(){

box.style.opacity = 0;

setTimeout(() => {

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


/* floating hearts */

function createHeart(){

const heart = document.createElement("div");
heart.classList.add("heart");

heart.innerHTML="💖";

heart.style.left = Math.random()*100 + "vw";
heart.style.fontSize = (15 + Math.random()*20) + "px";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,500);