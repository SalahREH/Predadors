function PlaySound1() {
    let d1 = new Audio();
    d1.src = "./mp3/Kick.wav"
    d1.play();
}

function PlaySound2() {
    let d1 = new Audio();
    d1.src = "./mp3/Snare.wav"
    d1.play();
}

function PlaySound3() {
    let d1 = new Audio();
    d1.src = "./mp3/ClosedHat.wav"
    d1.play();
}

function PlaySound4() {
    let d1 = new Audio();
    d1.src = "./mp3/OpenHat.wav"
    d1.play();
}

function PlaySound5() {
    let d1 = new Audio();
    d1.src = "./mp3/Cymbal.wav"
    d1.play();
}

function PlaySound6() {
    let d1 = new Audio();
    d1.src = "./mp3/Tom.wav"
    d1.play();
}

function pm() {
    let d1 = new Audio();
    d1.src = "./mp3/PUM.mp3"
    d1.play();
}

// document.keypress(
// })

function s1f(e) {
    if (e.keyCode === 70) {
        PlaySound1()
    }
}

function s2f(e) {
    if (e.keyCode === 70) {
        PlaySound1()
    }
}

function s3f(e) {
    if (e.keyCode === 70) {
        PlaySound1()
    }
}

function pum(e) {
    if (e.keyCode === 80) {
        pm()
    }
}

function rk(e) {
    if (e.keyCode === 70) {
        PlaySound1()
    }
}

document.addEventListener('keyup', s1f)

document.addEventListener('keyup', pum)

// function s1f(e){
//     if (e.which == 70){
//         PlaySound1();
//     }
// }   



function redirect() {
     
     window.location.replace("indexmobile.html")
}

document.querySelector(".button-s1").addEventListener("click", redirect)

// function redirect2() {
     
//     window.location.href = "index.html"
// }

// function a(){
//     console.log("a")
// }



// document.querySelector(".button-footer").addEventListener("click", redirect2)




