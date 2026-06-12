

/* ==========================================
   RESPONSIVE CANVAS
========================================== */

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

/* ==========================================
   EVENT DATABASE TOGGLE
========================================== */

const trigger =
document.getElementById("eventTrigger");

const eventList =
document.getElementById("eventList");

trigger.addEventListener("click", () => {

    eventList.classList.toggle("active");

    if (eventList.classList.contains("active")) {

        trigger.innerHTML =
        "DATABASE CONNECTED ✓";

    } else {

        trigger.innerHTML =
        "ACCESS DATABASE";

    }

});

/* ==========================================
   COUNTDOWN TIMER
========================================== */

const targetDate =
new Date("December 18, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance =
    targetDate - now;

    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (distance %
            (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance %
            (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance %
            (1000 * 60)) / 1000
    );

    document.getElementById("days").innerHTML =
    days < 10 ? "0" + days : days;

    document.getElementById("hours").innerHTML =
    hours < 10 ? "0" + hours : hours;

    document.getElementById("minutes").innerHTML =
    minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("seconds").innerHTML =
    seconds < 10 ? "0" + seconds : seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(0,0,0,0.85)";

        navbar.style.boxShadow =
            "0 0 20px rgba(57,255,20,0.2)";

    } else {

        navbar.style.background =
            "rgba(0,0,0,0.4)";

        navbar.style.boxShadow =
            "none";

    }

});

/* ==========================================
   CYBORG EYE TRACKING
========================================== */

const leftEye =
document.querySelector(".left-eye");

const rightEye =
document.querySelector(".right-eye");

document.addEventListener(
    "mousemove",
    (e) => {

        const x =
        (e.clientX / window.innerWidth - 0.5) * 12;

        const y =
        (e.clientY / window.innerHeight - 0.5) * 6;

        leftEye.style.transform =
        `translate(${x}px,${y}px)`;

        rightEye.style.transform =
        `translate(${x}px,${y}px)`;

    }
);

/* ==========================================
   SECTION FADE-IN ANIMATION
========================================== */

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add(
"show-section"
);

}

});

},

{
threshold: 0.15
}

);

document
.querySelectorAll(
".about, .events, .countdown, .technoholix, .register, .stats"
)
.forEach((section) => {

section.classList.add(
"hidden-section"
);

observer.observe(section);

});

/* ==========================================
   PARTICLE CURSOR TRAIL
========================================== */

for (let i = 0; i < 30; i++) {

    const particle =
    document.createElement("div");

    particle.classList.add(
        "cursor-particle"
    );

    document.body.appendChild(
        particle
    );
}

const particles =
document.querySelectorAll(
".cursor-particle"
);

let current = 0;

document.addEventListener(
"mousemove",
(e) => {

const p = particles[current];

p.style.left =
e.pageX + "px";

p.style.top =
e.pageY + "px";

p.style.opacity = 1;

p.style.transform =
"scale(1)";

setTimeout(() => {

p.style.opacity = 0;

p.style.transform =
"scale(0)";

}, 500);

current++;

if (current >= particles.length)
current = 0;

}
);

/* ==========================================
   SMOOTH BUTTON GLOW
========================================== */

const buttons =
document.querySelectorAll(
".primary-btn, .secondary-btn, .register-main, .register-btn"
);

buttons.forEach((btn) => {

btn.addEventListener(
"mouseenter",
() => {

btn.style.boxShadow =
"0 0 30px #39FF14";

}
);

btn.addEventListener(
"mouseleave",
() => {

btn.style.boxShadow =
"none";

}
);

});

/* ==========================================
   CONSOLE EASTER EGG
========================================== */

console.log(`
████████╗███████╗ ██████╗██╗  ██╗
╚══██╔══╝██╔════╝██╔════╝██║  ██║
   ██║   █████╗  ██║     ███████║
   ██║   ██╔══╝  ██║     ██╔══██║
   ██║   ███████╗╚██████╗██║  ██║
   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝

TECHFEST IIT BOMBAY
CYBORG EDITION
THE FUTURE IS NOW
`);