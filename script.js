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

// const timelineCards = document.querySelectorAll(".timeline-card");

// const featuredRole = document.getElementById("featuredRole");
// const featuredDate = document.getElementById("featuredDate");
// const featuredTitle = document.getElementById("featuredTitle");
// const featuredCompany = document.getElementById("featuredCompany");
// const featuredDescription = document.getElementById("featuredDescription");
// const featuredTags = document.getElementById("featuredTags");

// function updateFeaturedCard(card) {
//   timelineCards.forEach(item => item.classList.remove("active"));
//   card.classList.add("active");

//   featuredRole.classList.add("is-changing");

//   setTimeout(() => {
//     featuredDate.textContent = card.dataset.date;
//     featuredTitle.textContent = card.dataset.title;
//     featuredCompany.textContent = card.dataset.company;
//     featuredDescription.textContent = card.dataset.description;

//     featuredTags.innerHTML = "";

//     card.dataset.tags.split(",").forEach(tag => {
//       const span = document.createElement("span");
//       span.textContent = tag.trim();
//       featuredTags.appendChild(span);
//     });

//     featuredRole.classList.remove("is-changing");
//   }, 180);
// }

// timelineCards.forEach(card => {
//   card.addEventListener("click", () => {
//     updateFeaturedCard(card);
//   });
// });

// const observer2 = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         updateFeaturedCard(entry.target);
//       }
//     });
//   },
//   {
//     root: document.getElementById("timelineScroller"),
//     threshold: 0.65
//   }
// );

// timelineCards.forEach(card => observer2.observe(card));

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