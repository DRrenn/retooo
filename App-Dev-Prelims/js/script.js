const burgirBtn = document.querySelector('.burgir');
const headerNav = document.querySelector('.link');
const kamote = document.querySelector('.kamote');
const dropdown = document.querySelector(".fa-solid.fa-circle-plus");


burgirBtn.addEventListener("click", () => {    
    burgirBtn.classList.toggle('open');
    headerNav.classList.toggle('open');
    kamote.classList.toggle('open');
    dropdown.classList.toggle('open');
})



const header = document.querySelector(".header");
window.addEventListener("scroll" , () => {
  console.log(scrollY);
  if (scrollY >= 100) {
  header.classList.add("blue");
} else {
  header.classList.remove("blue")
}
});

const fontcolor = document.querySelector("a");

// accordion
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accord');

  accordions.forEach(acc => {
      acc.addEventListener('click', () => {
          // Close all other accordions
          accordions.forEach(otherAcc => {
              if (otherAcc !== acc) {
                  otherAcc.classList.remove('active');
              }
          });

          // Toggle the clicked accordion
          acc.classList.toggle('active');
      });
  });
});

// card
// // script.js
// const carousel = document.querySelector(".card_cont");
// const divBtns = document.querySelectorAll(".container div");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;

// divBtns.forEach(btn => {
//   btn.addEventListener("click", () => {
//     carousel.scrollLeft += btn.id === "next" ? - firstCardWidth : firstCardWidth;
   
//   })
// });


// let isDragging = false, startX, startScrollLeft;

// const dragSTart = (e) => {
//   isDragging = true;
//   carousel.classList.add("dragging"); 
//   startX = e.pageX;
//   startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//   if (!isDragging) return;
//   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// }

// carousel.addEventListener("mousedown", dragSTart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

// script.js
// const carousel = document.querySelector(".card_cont");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");

// // Function to get the width of one card plus gap
// const getVisibleCardWidth = () => {
//   const cardWidth = carousel.querySelector(".card").offsetWidth;
//   const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
//   return cardWidth + gap;
// };

// const scrollCarousel = (direction) => {
//   const visibleCardWidth = getVisibleCardWidth();
//   carousel.scrollLeft += direction * visibleCardWidth;
// };

// nextBtn.addEventListener("click", () => scrollCarousel(1));
// prevBtn.addEventListener("click", () => scrollCarousel(-1));

// // Dragging functionality
// let isDragging = false, startX, startScrollLeft;

// const dragStart = (e) => {
//   isDragging = true;
//   carousel.classList.add("dragging");
//   startX = e.pageX || e.touches[0].pageX; // Handle touch events
//   startScrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//   if (!isDragging) return;
//   const x = e.pageX || e.touches[0].pageX; // Handle touch events
//   carousel.scrollLeft = startScrollLeft - (x - startX);
// };

// const dragStop = () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

// carousel.addEventListener("touchstart", dragStart);
// carousel.addEventListener("touchmove", dragging);
// document.addEventListener("touchend", dragStop);




// almost
// const carousel = document.querySelector(".card_cont");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");

// // Function to get the width of one card plus gap
// const getVisibleCardWidth = () => {
//   const cardWidth = carousel.querySelector(".card").offsetWidth;
//   const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
//   return cardWidth + gap;
// };

// const scrollCarousel = (direction) => {
//   const visibleCardWidth = getVisibleCardWidth();
//   carousel.scrollLeft += direction * visibleCardWidth;
// };

// nextBtn.addEventListener("click", () => scrollCarousel(1));
// prevBtn.addEventListener("click", () => scrollCarousel(-1));

// // Dragging functionality
// let isDragging = false, startX, startScrollLeft;

// const dragStart = (e) => {
//   isDragging = true;
//   carousel.classList.add("dragging");
//   startX = e.pageX || e.touches[0].pageX; // Handle touch events
//   startScrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//   if (!isDragging) return;
//   const x = e.pageX || e.touches[0].pageX; // Handle touch events
//   carousel.scrollLeft = startScrollLeft - (x - startX);
// };

// const dragStop = () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

// carousel.addEventListener("touchstart", dragStart);
// carousel.addEventListener("touchmove", dragging);
// document.addEventListener("touchend", dragStop);


//card carousel
const carousel = document.querySelector(".card_cont");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Function to get the width of one card plus gap
const getVisibleCardWidth = () => {
  const cardWidth = carousel.querySelector(".card").offsetWidth;
  const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
  return cardWidth + gap;
};

const scrollCarousel = (direction) => {
  const visibleCardWidth = getVisibleCardWidth();
  carousel.scrollLeft += direction * visibleCardWidth;
};

nextBtn.addEventListener("click", () => scrollCarousel(1));
prevBtn.addEventListener("click", () => scrollCarousel(-1));

// Dragging functionality
let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX || e.touches[0].pageX; // Handle touch events
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  const x = e.pageX || e.touches[0].pageX; // Handle touch events
  carousel.scrollLeft = startScrollLeft - (x - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);



