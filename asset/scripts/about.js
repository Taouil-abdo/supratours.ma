

let currentIndex = 0;
const cardsSec = document.querySelector(".cards-sec-1");
const totalCards = document.querySelectorAll(".card").length;

document.querySelector(".next").addEventListener("click", function () {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateSlider();
    }
});

document.querySelector(".prev").addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    const translateX = -currentIndex * (100 / totalCards); 
    cardsSec.style.transform = `translateX(${translateX}%)`;
}
