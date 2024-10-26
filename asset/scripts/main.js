let hamburger = document.querySelectorAll(".hamburger");
let menu = document.querySelectorAll(".header__menu");
let globeList = document.querySelectorAll(".dropdown__menu");
let icons = document.querySelectorAll(".fa-solid.fa-bars-staggered");
let globe = document.querySelectorAll(".fa-globe");
let chevron = document.querySelectorAll(".card__chevron");
let cardDesc = document.querySelectorAll(".card__qcm-answer");
// HAMBUER TOGGLE 
hamburger.forEach((item) => {
  item.addEventListener("click", () => {
    menu.forEach((menu) => {
      menu.classList.toggle("active");
    });
    icons.forEach((icon) => {
      if (icon.classList.contains("fa-bars-staggered")) {
        icon.classList.replace("fa-bars-staggered", "fa-x");
      } else {
        icon.classList.replace("fa-x", "fa-bars-staggered");
      }
    });
  });
});

// LANGUAGES TOGGLE 
globe.forEach((item) => {
  item.addEventListener("click", () => {
    globeList.forEach((list) => {
      list.classList.toggle("active");
    });
  });
});

// FAQ SHOW ANSWER 
chevron.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    const desc = cardDesc[index];
    if (desc) {
      desc.classList.toggle("active");
    }
  });
});


// SHOW CURRENT DATE IN SEARCH INPUTS
const today = new Date().toISOString().split("T")[0];
document.getElementById("departure_date").value = today;
