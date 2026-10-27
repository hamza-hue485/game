let eggs = $(".egg"),
    brokenEggs = $(".brokenEgg"),
    lifeScore = 5,
    $basket = $("#Basket"),
    score = 0;
$(window).mousemove(function (e) {
    let distanceX = e.pageX,
        basketEl = $("#Basket"),
        halfOfBasket = basketEl.outerWidth(true) / 2; 
    if(distanceX >= halfOfBasket && distanceX <= $(window).width() - halfOfBasket){
            basketEl.offset({
            left: distanceX - halfOfBasket,
        }); 
    };
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
