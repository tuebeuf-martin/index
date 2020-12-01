/* First Push */
$(document).ready(function(){
    var score = 0;
    var difficulty = 0;
    $("#button").click(function(){ 
        if (difficulty < 10){
            score += 10;
        }
        else if (difficulty >= 10){
            score += 20;
        }
        else if (difficulty >= 35){
            score += 60;
        }
        else if (difficulty >= 50){
            score += 100;
        }
        difficulty++;
        $("#score").html(score);
        console.log(difficulty)
        console.log(score)
    });
});

