function showSurprise() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("secret").classList.remove("hidden");
}

function unlockGift() {
    const password =
        document.getElementById("password").value;

    if (password.toLowerCase() === "iloveyou") {
        document.getElementById("secret").classList.add("hidden");

        document.getElementById("birthday").classList.remove("hidden");

        startFireworks();
    } else {
        document.getElementById("error").innerText =
            "Oops! Try again, my love! 💗";
    }
}

function startFireworks() {
    const symbols = ["✨", "💖", "🎉", "🌟", "💕"];

    let count = 0;

    const interval = setInterval(() => {
        const firework = document.createElement("span");

        firework.className = "firework";
        firework.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        firework.style.left = Math.random() * 90 + "vw";
        firework.style.top = Math.random() * 70 + "vh";

        document.body.appendChild(firework);

        setTimeout(() => firework.remove(), 1500);

        count++;

        if (count >= 25) {
            clearInterval(interval);
        }
    }, 250);
}

function showLetter() {
    document.getElementById("birthday").classList.add("hidden");

    document.getElementById("loveletter").classList.remove("hidden");
}

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);

function openEnvelope() {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letterPaper");

    envelope.classList.add("open");

    setTimeout(() => {
        letter.classList.remove("hidden");
        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 900);
}


function showReasons() {

    // Hide all pages
    document.querySelectorAll("main").forEach(page => {
        page.classList.add("hidden");
    });

    // Show Reasons page
    document.getElementById("reasons").classList.remove("hidden");

    window.scrollTo(0, 0);
}

function showMusic() {

    // Hide all pages
    document.querySelectorAll("main").forEach(page => {
        page.classList.add("hidden");
    });

    // Show Music page
    document.getElementById("music").classList.remove("hidden");

    window.scrollTo(0, 0);
}

function backToReasons() {

    // Stop the song
    const song = document.getElementById("birthdaySong");

    song.pause();
    song.currentTime = 0;

    // Hide all pages
    document.querySelectorAll("main").forEach(page => {
        page.classList.add("hidden");
    });

    // Return to Reasons page
    document.getElementById("reasons").classList.remove("hidden");

    window.scrollTo(0, 0);
}

// Open Sachu's Football Stadium
function showFootball() {

    const song = document.getElementById("birthdaySong");

    // Pause music when entering stadium
    song.pause();

    document.querySelectorAll("main").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById("football").classList.remove("hidden");

    window.scrollTo(0, 0);
}


// Return to Music Page
function backToMusic() {

    document.querySelectorAll("main").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById("music").classList.remove("hidden");

    window.scrollTo(0, 0);
}


// Reveal Birthday Trophy
function revealTrophy() {

    document.getElementById("trophyMessage")
        .classList.remove("hidden");

}


// Create 21 birthday candles
const candleContainer = document.getElementById("candles");

if (candleContainer) {
    for (let i = 0; i < 21; i++) {
        const candle = document.createElement("div");
        candle.className = "candle";

        const flame = document.createElement("span");
        flame.className = "flame";

        candle.appendChild(flame);
        candleContainer.appendChild(candle);
    }
}

// Blow out all birthday candles
function blowCandles() {
    const candles = document.querySelectorAll("#candles .candle");

    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.classList.add("blown");
        }, index * 70);
    });

    document.getElementById("blowButton").disabled = true;
    document.getElementById("blowButton").textContent = "✨ Wish Made!";

    document.getElementById("candleInstruction").textContent =
        "Your wish is on its way! 💫";

    setTimeout(() => {
        document.getElementById("birthdayWishMessage")
            .classList.remove("hidden");

        launchBirthdayConfetti();
    }, 1800);
}

// Simple birthday confetti
function launchBirthdayConfetti() {
    for (let i = 0; i < 70; i++) {
        const confetti = document.createElement("div");

        confetti.textContent = ["🎉", "✨", "💖", "🎊"][
            Math.floor(Math.random() * 4)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "20px";
        confetti.style.zIndex = "100";
        confetti.style.pointerEvents = "none";
        confetti.style.animation =
            `birthdayFall ${2 + Math.random() * 3}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

// Navigation
function showBirthdayWish() {
    document.querySelectorAll("main").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById("birthdayWish").classList.remove("hidden");
    document.getElementById("birthdayWish").scrollTop = 0;
}

function backToFootball() {
    document.querySelectorAll("main").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById("football").classList.remove("hidden");
    document.getElementById("football").scrollTop = 0;
}

