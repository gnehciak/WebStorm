
const parllax = document.querySelector(".parallax");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parllax.style.backgroundPositionY = offset * 0.5 + 'px';
});