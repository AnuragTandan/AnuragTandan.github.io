const slides = document.querySelectorAll(".slide");
    const track = document.querySelector(".slider-track");
    const totalSlides = slides.length;
    let counter = 1;

    // Set initial position
    track.style.transform = `translateX(-${counter * 100}%)`;

    const goNext = () => {
      if (counter >= totalSlides - 1) return;
      counter++;
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${counter * 100}%)`;

      // Loop to start when reaching the end
      track.addEventListener("transitionend", () => {
        if (counter === totalSlides - 1) {
          track.style.transition = "none";
          counter = 1;
          track.style.transform = `translateX(-${counter * 100}%)`;
        }
      });
    };

    const goPrev = () => {
      if (counter <= 0) return;
      counter--;
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${counter * 100}%)`;

      // Loop to end when reaching the start
      track.addEventListener("transitionend", () => {
        if (counter === 0) {
          track.style.transition = "none";
          counter = totalSlides - 2;
          track.style.transform = `translateX(-${counter * 100}%)`;
        }
      });
    };