let eggs = $(".egg"),
    brokenEggs = $(".brokenEgg"),
    lifeScore = 5,
    $basket = $("#Basket"),
    score = 0;
$(window).mousemove(function (e) {
    moveBasket(e.pageX)
});
highestScore();
/************************toStart***********************/
$("#Start").click(function () { 
    resetGame();
    $(this).slideUp(500, function () {
        prepareEggAnimation(eggs);
    });
    $("h5", this).text("Start Game");
});
/***********************************on tablet and phone */
const gameArea = document.getElementById("Game");

gameArea.addEventListener("touchmove", function (e) {
    e.preventDefault(); 
    let touch = e.touches[0];
    if (touch) {
        moveBasket(touch.pageX);
    }
}, { passive: false });

gameArea.addEventListener("touchstart", function (e) {
    let touch = e.touches[0];
    if (touch) {
        moveBasket(touch.pageX);
    }
}, { passive: false });