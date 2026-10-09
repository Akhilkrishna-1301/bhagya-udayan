// ======================================
// 1. ANIMATED STARS
// ======================================

const stars = document.getElementById("stars");

for (let i = 0; i < 36; i++) {
    const star = document.createElement("span");

    star.className = "sparkle";
    star.textContent = Math.random() > 0.5 ? "✦" : "·";

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    star.style.fontSize =
        `${10 + Math.random() * 15}px`;

    star.style.animationDelay =
        `${Math.random() * 3}s`;

    stars.appendChild(star);
}


// ======================================
// 2. OPEN THE BIRTHDAY LETTER
// ======================================

const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");

openBtn.addEventListener("click", () => {

    // Reveal the hidden letter.
    letter.hidden = false;

    // Change the button text.
    openBtn.textContent = "💖 Your Letter Is Open";

    openBtn.disabled = true;

    // Scroll smoothly to the letter.
    letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // Release floating hearts.
    for (let i = 0; i < 28; i++) {

        setTimeout(() => {

            const heart = document.createElement("span");

            const symbols = [
                "💗",
                "💕",
                "💖",
                "✨",
                "🌸"
            ];

            heart.className = "floating-heart";

            heart.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            heart.style.left =
                `${Math.random() * 100}vw`;

            heart.style.fontSize =
                `${16 + Math.random() * 20}px`;

            heart.style.animationDuration =
                `${3 + Math.random() * 3}s`;

            document.body.appendChild(heart);

            // Remove the heart after its animation.
            setTimeout(() => {
                heart.remove();
            }, 6500);

        }, i * 90);

    }

});


// ======================================
// 3. FULLSCREEN PHOTO VIEWER
// ======================================

const photoViewer = document.getElementById("photoViewer");

const expandedPhoto = document.getElementById("expandedPhoto");

const closeViewer = document.getElementById("closeViewer");

let lastFocusedPhoto = null;


// Open a photo when clicked.
document.querySelectorAll(".photo-card img").forEach((photo) => {

    photo.addEventListener("click", () => {

        lastFocusedPhoto = photo;

        expandedPhoto.src = photo.src;
        expandedPhoto.alt = photo.alt;

        photoViewer.hidden = false;

        closeViewer.focus();

    });

});


// Close the photo viewer.
function closePhotoViewer() {

    photoViewer.hidden = true;

    expandedPhoto.src = "";

    if (lastFocusedPhoto) {
        lastFocusedPhoto.focus();
    }

}


// Close button.
closeViewer.addEventListener("click", closePhotoViewer);


// Close when clicking the dark background.
photoViewer.addEventListener("click", (event) => {

    if (event.target === photoViewer) {
        closePhotoViewer();
    }

});


// Close by pressing Escape.
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && !photoViewer.hidden) {
        closePhotoViewer();
    }

});


// ======================================
// 4. HANDLE MISSING PHOTOS
// ======================================

document.querySelectorAll(".photo-card img").forEach((photo) => {

    photo.addEventListener("error", () => {

        photo.alt = "Photo missing - add your picture to the images folder";

        photo.style.objectFit = "contain";
        photo.style.padding = "20px";
        photo.style.background = "#fff1f5";

    });

});

// ======================================
// 1. BLOW OUT THE BIRTHDAY CANDLES
// ======================================

const blowCandlesBtn = document.getElementById("blowCandlesBtn");
const cakeMessage = document.getElementById("cakeMessage");
const flames = document.querySelectorAll(".flame");

let candlesBlown = false;

blowCandlesBtn.addEventListener("click", () => {

    if (candlesBlown) {
        cakeMessage.textContent =
            "Your wish is on its way! May your dreams come true. 💖";
        return;
    }

    candlesBlown = true;

    // Turn off all the candle flames.
    flames.forEach((flame) => {
        flame.classList.add("off");
    });

    blowCandlesBtn.textContent = "💖 Make Another Wish";

    cakeMessage.textContent =
        "✨ Your wish has been made! May your year be full of love and happiness. ❤️";

    // Create a colorful confetti celebration.
    const confettiSymbols = [
        "💖", "💕", "✨", "🌸", "🎉", "💗", "🎊"
    ];

    for (let i = 0; i < 50; i++) {

        const confetti = document.createElement("span");

        confetti.className = "floating-heart";

        confetti.textContent =
            confettiSymbols[
                Math.floor(Math.random() * confettiSymbols.length)
            ];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.fontSize = (15 + Math.random() * 20) + "px";
        confetti.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 7500);
    }

});


// ======================================
// 2. ROMANTIC BACKGROUND MUSIC
// ======================================

const birthdayMusic = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
const musicMessage = document.getElementById("musicMessage");

musicBtn.addEventListener("click", async () => {

    if (birthdayMusic.paused) {

        try {

            await birthdayMusic.play();

            musicBtn.textContent = "⏸ Pause Our Song";

            musicMessage.textContent =
                "A little music, a lot of love. ❤️";

        } catch (error) {

            musicMessage.textContent =
                "Please add your song to the music folder and try again. 🎵";

        }

    } else {

        birthdayMusic.pause();

        musicBtn.textContent = "🎵 Play Our Song";

        musicMessage.textContent =
            "Your song is paused. Press play whenever you're ready. 💗";

    }

});


// ======================================
// 3. REVEAL THE SECRET LOVE MESSAGE
// ======================================

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

secretBtn.addEventListener("click", () => {

    secretMessage.hidden = false;

    secretBtn.textContent = "❤️ My Heart Is Yours";

    secretBtn.disabled = true;

    secretMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // Release a shower of hearts.
    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            const heart = document.createElement("span");

            heart.className = "floating-heart";
            heart.textContent = ["💗", "💕", "💖", "❤️"][
                Math.floor(Math.random() * 4)
            ];

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = "25px";
            heart.style.animationDuration = "4s";

            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 4500);

        }, i * 100);

    }

});


// ======================================
// 4. ROMANTIC PROMISES
// ======================================

const promises = [
    {
        emoji: "💖",
        text: "I promise to keep finding reasons to make you smile."
    },
    {
        emoji: "🌷",
        text: "I promise to listen to you and respect your feelings."
    },
    {
        emoji: "🤗",
        text: "I promise to be there for you when you need comfort."
    },
    {
        emoji: "🌈",
        text: "I promise to celebrate your successes and support your dreams."
    },
    {
        emoji: "💕",
        text: "I promise to keep making beautiful memories with you."
    },
    {
        emoji: "✨",
        text: "I promise to appreciate the little moments we share."
    },
    {
        emoji: "♾️",
        text: "I promise to keep choosing kindness, honesty, and love."
    }
];

const promiseBtn = document.getElementById("promiseBtn");
const promiseText = document.getElementById("promiseText");
const promiseEmoji = document.getElementById("promiseEmoji");

let promiseIndex = 0;

promiseBtn.addEventListener("click", () => {

    promiseIndex = (promiseIndex + 1) % promises.length;

    promiseEmoji.textContent = promises[promiseIndex].emoji;
    promiseText.textContent = promises[promiseIndex].text;

    promiseText.animate(
        [
            { opacity: 0, transform: "translateY(8px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 450,
            easing: "ease-out"
        }
    );

});


// ======================================
// 5. DREAMY NIGHT MODE
// ======================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    const isNight =
        document.body.classList.toggle("night-mode");

    themeBtn.textContent = isNight
        ? "☀️ Return to Pink Mode"
        : "🌙 Dreamy Night Mode";

    themeBtn.setAttribute(
        "aria-pressed",
        String(isNight)
    );

});


// ======================================
// 6. FLOATING HEARTS ON BACKGROUND CLICKS
// ======================================

document.addEventListener("click", (event) => {

    // Avoid creating hearts when clicking buttons, links or photos.
    if (
        event.target.closest("button") ||
        event.target.closest(".photo-card") ||
        event.target.closest(".photo-viewer")
    ) {
        return;
    }

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.textContent = ["💗", "💕", "✨"][
        Math.floor(Math.random() * 3)
    ];

    heart.style.left = event.clientX + "px";
    heart.style.bottom = (window.innerHeight - event.clientY) + "px";
    heart.style.fontSize = "22px";
    heart.style.animationDuration = "3s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3500);

});