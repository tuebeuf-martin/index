/* First Push */
let imgHead = document.querySelectorAll(".imgHead");

let headArray = [];
    headArray[0] = "assets/img/troll.png";
    headArray[1] = "assets/img/troll2.png";
    headArray[2] = "assets/img/troll3.png";
    // After launch random img appear with delay

let headOnScreenCount = 0;
let headMax = 9;

window.setInterval( () => { 
    if (headOnScreenCount < headMax) {
        addHead();
    }    
}, 1000);

function addHead() {
    let rIndex = Math.floor(Math.random() * headArray.length);
    let imgRIndex = Math.floor(Math.random() * imgHead.length);
    
    if (imgHead[imgRIndex].getAttribute("src") == "") {
        console.log("img src empty");
        imgHead[imgRIndex].src = headArray[rIndex];
        headOnScreenCount++;
    }
}