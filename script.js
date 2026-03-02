// 🎉 Name Greeting
function updateGreeting() {
    const name = document.getElementById("nameInput").value;
    const greeting = document.getElementById("greeting");

    if (name.trim() !== "") {
        greeting.innerText = `Happy Holi, ${name}! 🌈`;
    }
}

// 🎨 Powder Splash Particles
document.addEventListener("click", function(e) {

    const colors = ["#ff4e50", "#fc913a", "#f9d423", "#24c6dc", "#a044ff"];

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        const size = Math.random() * 15 + 5;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        particle.style.left = e.pageX + "px";
        particle.style.top = e.pageY + "px";

        const x = (Math.random() - 0.5) * 300 + "px";
        const y = (Math.random() - 0.5) * 300 + "px";

        particle.style.setProperty("--x", x);
        particle.style.setProperty("--y", y);

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});

// 🎊 Confetti Rain
function createConfetti() {
    const container = document.querySelector(".confetti-container");
    const colors = ["#ff4e50", "#fc913a", "#f9d423", "#24c6dc", "#a044ff"];

    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

    container.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

setInterval(createConfetti, 200);
