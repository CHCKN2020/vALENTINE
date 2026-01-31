"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const tontonGifs = [
    "https://media.tenor.com/TUVAE2M_wz4AAAAi/chubby-tonton.gif",
    "https://media.tenor.com/pZk_U5JVWzUAAAAi/tonton-friends-tonton.gif",
    "https://media.tenor.com/Jkha__Yjf0oAAAAi/sad-depression.gif",
    "https://media.tenor.com/U0OPHZokzkUAAAAi/what-seriously.gif",
    "https://media.tenor.com/WKXMmSk3JJsAAAAi/chubby-tonton.gif",
    "https://media.tenor.com/ZHWV13jliTAAAAAi/chubby-tonton.gif",
  ];

  const messages = [
    "Sure naba? 😔",
    "Sureee? 🥺",
    "Sige na please 🥹",
    "Sakit mo naman 😭",
    "Sakit mo talaga ya 💔",
    "Yoko 😭💔",
  ];

  const title = document.querySelector(".title");
  const btnContainer = document.querySelector(".buttons");
  const yesBtn = document.querySelector(".btn-yes");
  const noBtn = document.querySelector(".btn-no");
  const img = document.querySelector(".img");

  let noCount = 0;
  let noButtonSize = 1;
  let yesButtonSize = 1;
  let heartInterval;
  let confettiInterval;

 
  yesBtn.addEventListener("click", () => {
    title.textContent = "YAY Love you Tol!! 💗";
    title.style.color = "#FF1493";
    title.style.animation = "titleBounce 1s ease";

    btnContainer.classList.add("hidden");

    const subtitle = document.querySelector(".subtitle");
    if (subtitle) subtitle.remove();

    img.src = "https://media.tenor.com/ACi1vdjNbpIAAAAi/%EC%9C%A0%ED%83%80-%ED%86%A4%ED%86%A4%ED%94%84%EB%A0%8C%EC%A6%88.gif";
    img.style.animation = "gifZoom 1s ease";

    document.body.style.animation = "bgGlow 1s ease";

    heartInterval = setInterval(createSparkHeart, 150);

    confettiInterval = setInterval(createConfetti, 100);
    setTimeout(() => {
      clearInterval(confettiInterval);
      clearInterval(heartInterval);
    }, 5000);
  });

  noBtn.addEventListener("click", () => {
    changeImageRandom();
    updateNoButtonText();
    resizeYesButton();
    shrinkNoButton();
    moveNoButtonSmooth();
  });


  function resizeYesButton() {
    yesButtonSize = Math.min(yesButtonSize * 1.2, 3);
    yesBtn.style.transform = `scale(${yesButtonSize})`;
  }

  function shrinkNoButton() {
    noButtonSize = Math.max(noButtonSize * 0.9, 0.2);
    noBtn.style.transform = `scale(${noButtonSize})`;
  }

  function changeImageRandom() {
    const index = Math.floor(Math.random() * tontonGifs.length);
    img.src = tontonGifs[index];
  }

  function updateNoButtonText() {
    noCount++;
    noBtn.textContent = messages[Math.min(noCount, messages.length - 1)];
  }

  function moveNoButtonSmooth() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.random() * (windowWidth - btnWidth);
    const randomY = Math.random() * (windowHeight - btnHeight);

    noBtn.style.position = "fixed";
    noBtn.style.transition = "left 0.5s ease, top 0.5s ease";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  }

  function createSparkHeart() {
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.style.position = "fixed";
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    heart.style.fontSize = `${Math.random() * 30 + 20}px`;
    heart.style.pointerEvents = "none";
    heart.style.zIndex = 1000;

    // Random bright color
    const colors = ["#FF1493", "#FF69B4", "#FFB6C1", "#FFC0CB", "#DB7093"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    heart.style.transition = "transform 1s ease-out, opacity 1s ease-out";

    document.body.appendChild(heart);

    const xMove = (Math.random() - 0.5) * 300;
    const yMove = (Math.random() - 0.5) * 300;

    setTimeout(() => {
      heart.style.transform = `translate(${xMove}px, ${yMove}px) scale(0) rotate(${Math.random()*360}deg)`;
      heart.style.opacity = 0;
    }, 10);

    setTimeout(() => heart.remove(), 1200);
  }

  /* ========== CONFETTI ========== */
  function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = `${Math.random() * window.innerWidth}px`;

    // Random confetti color
    const colors = ["#FF1493", "#FF69B4", "#FFB6C1", "#FFC0CB", "#DB7093", "#FFD700", "#ADFF2F"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Random size
    const size = Math.random() * 8 + 4;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    document.body.appendChild(confetti);

    // Random rotation + falling
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Remove after animation (3s)
    setTimeout(() => confetti.remove(), 3000);
  }
});
