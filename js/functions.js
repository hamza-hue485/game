function prepareEggAnimation(eggs){    
        moveEgg(eggs.eq(0), Math.random() * 8, 0);
        moveEgg(eggs.eq(1), Math.random() * 13, 1);
        moveEgg(eggs.eq(2), Math.random() * 16, 2);
        isEggHunted(eggs[0]);
        isEggHunted(eggs[1]);
        isEggHunted(eggs[2]);
        let theGame = requestAnimationFrame(function(){
            prepareEggAnimation(eggs);
        });
        if(lifeScore <= 0){
                cancelAnimationFrame(theGame);
                $("#Start").slideDown(500);
                $("#Start h5").text("Game Over Try Again! ^-^");
        };
};
function moveEgg(egg, speed, index){
    let topOfEgg = egg.offset().top,
        distance = (Math.random() * speed) + 1,
        basketBottom = $("#Basket").offset().top + $("#Basket").outerHeight(true);
        
    if(topOfEgg <= basketBottom){
            egg.offset({
                top : topOfEgg + distance,
            });
    }else{
        if(lifeScore > 0){
            backEgg(egg);
            brokenEggs.eq(index).fadeIn(500).delay(250).fadeOut(500);
            $("#LifeScore").text(--lifeScore);
        };
    };
};
/*****************back to egg********************************/
function backEgg(egg){
        $(egg).offset({top : 125});
};
/**************************Is egg in basket*************************************/
function isEggHunted(egg){
    if(collision(egg, $basket)){
        $(".score").text(++score);
        backEgg(egg);
        highestScore();
    };
};
function collision(item1, item2){
    let r1 = $(item1).offset().left + $(item1).outerWidth(true),
        t1 = $(item1).offset().top,
        l1 = $(item1).offset().left,
        b1 = $(item1).offset().top + $(item1).outerHeight(true),

        r2 = $(item2).offset().left + $(item2).outerWidth(true),
        t2 = $(item2).offset().top,
        l2 = $(item2).offset().left,
        b2 = $(item2).offset().top + $(item2).outerHeight(true);

   if(r1 < l2 || t1 > b2 || l1 > r2 || b1 < t2){
       return false;
    };
    return true;
};
/*******************restGame*******************/
function resetGame(){
    backEgg(eggs[0]);
    backEgg(eggs[1]);
    backEgg(eggs[2]);
    highestScore();
    lifeScore = 5;
    $("#LifeScore").text(lifeScore);
    score = 0;
    $(".score").text(score);
};
/******************high score************************/
function highestScore(){
    let highScore = parseInt(localStorage.getItem("highestScore")) ||0;
    $(".highestScore").text(highScore);
    if(score > highScore)highScore = score;
    $(".highestScore").text(highScore);
    localStorage.setItem("highestScore", highScore);
};