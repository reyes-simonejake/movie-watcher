var swiper = new Swiper(".popular-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Select elements
let playButton = document.querySelector(".play-movie");
let videoContainer = document.querySelector(".video-container");
let myVideo = document.querySelector("#myvideo");
let closeButton = document.querySelector(".close-video");

// Show video container and play video
playButton.onclick = () => {
  videoContainer.classList.add("show-video");
  myVideo.play().catch((err) => console.error("Playback error:", err));
};

// Close video container and pause video
closeButton.onclick = () => {
  videoContainer.classList.remove("show-video");
  myVideo.pause();
  myVideo.currentTime = 0; // Reset video time
};
