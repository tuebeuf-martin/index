/* First Push */

let circleSize = document.getElementsByClassName('circleSize');
let circleSizeArray = [... circleSize];

let startGame = document.getElementById('startGame');
let timerJeu = document.getElementById('timerJeu');

let qrcode = document.getElementById('qrcode');
let pageAcceuil = document.getElementById('pageAcceuil');
let containerPageJeu = document.getElementById('containerPageJeu');

qrcode.addEventListener('click', function(){
    pageAcceuil.classList.add('d-none');
    containerPageJeu.classList.add('d-block');
})

let sec = 00;
let min = 00;
let hour = 00;

let verifTimer = false;

/* circleSizeArray.forEach(element => {
    element.addEventListener('click', function(){
        console.log(this)
    })
}); */


startGame.addEventListener('click', function(){
    verifTimer = true;
    activateClock();
})

function activateClock(){
    if( verifTimer == true){
        setInterval(clock, 1000);
    } else {
        setInterval(clock, 0);
    }
}

function clock(){
    /*var message = document.getElementById("timer");
    message.innerHTML = "The time is " + Date();
    */

    sec += 1;
    console.log(hour + ":" + min + ":" + sec);
    if (sec == 60) {
        min += 1;
        sec = 00;
        console.log(hour + ":" + min + ":" + sec);
        if (min == 60) {
            min = 00;
            hour += 1;
            console.log(hour + ":" + min + ":" + sec);
        }
    }
    document.getElementById("timerJeu").innerHTML = hour + ":" + min + ":" + sec;
}


























