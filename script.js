// --- Configuration: Edit your dates here ---
const milestones = [
    {
        title: "The Proposal",
        date: "14-02-2023",
        color: "red"
    },
    {
        title: "Love Accepted",
        date: "22-04-2023",
        color: "green"
    },
    {
        title: "First Outing",
        date: "15-08-2023",
        color: "orange"
    },
    {
        title: "We Got Married",
        date: "07-11-2030",
        color: "purple"
    },
    {
        title: "Our Daughter Born",
        date: "16-07-2031",
        color: "pink"
    }
];

// --- Logic ---

const balloonContainer = document.getElementById('balloon-gallery');
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
const heartsContainer = document.getElementById('hearts-container');

// 1. Helper function to calculate time difference
// (Removed days-difference feature as requested)

// 2. Render Balloons
milestones.forEach((item, index) => {
    // Create Elements
    const wrapper = document.createElement('div');
    wrapper.classList.add('balloon-wrapper');

    // Add staggered animation delay so they don't rise all at once
    wrapper.style.animationDelay = `${index * 0.5}s`;

    wrapper.innerHTML = `
        <div class="balloon ${item.color}">
            <div class="milestone-title">${item.title}</div>
            <div class="milestone-date">${item.date}</div>
        </div>
    `;

    balloonContainer.appendChild(wrapper);
});

// 3. Background Music Toggle
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerText = "🎵 Play Music";
    } else {
        bgMusic.play();
        musicBtn.innerText = "⏸ Pause Music";
    }
    isPlaying = !isPlaying;
});

// 4. Create Floating Background Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '💖';

    // Randomize position and size
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 7 + 's'; // 7-10 seconds
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';

    heartsContainer.appendChild(heart);

    // Remove heart after animation to prevent memory leaks
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Spawn a heart every 500ms
setInterval(createHeart, 500);