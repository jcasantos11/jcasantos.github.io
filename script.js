const cards = document.querySelectorAll(".service-card, .project-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

cards.forEach(card => {
  observer.observe(card);
});


const slider = document.getElementById("experienceSlider");
const cards2 = slider.querySelectorAll(".itunes-card");

function setActiveCenterCard() {
  const sliderRect = slider.getBoundingClientRect();
  const sliderCenter = sliderRect.left + sliderRect.width / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards2.forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(sliderCenter - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  cards2.forEach(card => card.classList.remove("active"));

  if (closestCard) {
    closestCard.classList.add("active");
  }
}

slider.addEventListener("scroll", () => {
  window.requestAnimationFrame(setActiveCenterCard);
});

cards2.forEach(card => {
  card.addEventListener("click", () => {
    card.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  });
});

window.addEventListener("load", setActiveCenterCard);
window.addEventListener("resize", setActiveCenterCard);