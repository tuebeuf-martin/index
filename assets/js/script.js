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
    window.setInterval( () => { 
        if (headOnScreenCount < headMax) {
            addHead();
        }    
    }, 1000);
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


























let imgHead = document.querySelectorAll(".imgHead");

let headArray = [];
    headArray[0] = "assets/img/troll.png";
    headArray[1] = "assets/img/troll2.png";
    headArray[2] = "assets/img/troll3.png";
    // After launch random img appear with delay

let headOnScreenCount = 0;
let headMax = 9;



function addHead() {


    let rIndex = Math.floor(Math.random() * headArray.length);
    let imgRIndex = Math.floor(Math.random() * imgHead.length);
    
    if (imgHead[imgRIndex].getAttribute("src") == "") {
        console.log("img src empty");
        
        
        imgHead[imgRIndex].style.transition = "opacity .3s ease-in";
        imgHead[imgRIndex].style.opacity = "1";
        imgHead[imgRIndex].src = headArray[rIndex];

        headOnScreenCount++;
    } 

    deleteHead(imgHead[imgRIndex]);
}

function deleteHead(a) {
    window.setTimeout( () => { 
        

        a.style.opacity = "0";
        a.src = "";
        headOnScreenCount--;
    }, 1000);
}

let soundA = document.getElementById("soundA");
let soundB = document.getElementById("soundB");

imgHead.forEach(e => {
    e.addEventListener("click", () => {
        let r = Math.floor(Math.random() * 2);
        console.log(r);
        if (r == 1) {
            soundA.play();
        }
        else {
            soundB.play();
        }
        e.src = "";
            
        headOnScreenCount--;
        // if (imgHead[imgRIndex].getAttribute("src") != "") {
        //     console.log("eeeeeee " + e.src)
        //     e.src = "";
            
        //     headOnScreenCount--;
        // }
    });
});
