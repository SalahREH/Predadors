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

function PlaySound7() {
    let d1 = new Audio();
    d1.src = "./mp3/Tom.wav"
    d1.play();
}

function PlaySound8() {
    let d1 = new Audio();
    d1.src = "./mp3/Tom.wav"
    d1.play();
}

function playpum() {
    let d1 = new Audio();
    d1.src = "./mp3/PUM.mp3"
    d1.play();
}

function playrk() {
    let d1 = new Audio();
    d1.src = "./mp3/Rakataka.mp3"
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
    if (e.keyCode === 68) {
        PlaySound2()
    }
}

function s3f(e) {
    if (e.keyCode === 82) {
        PlaySound3()
    }
}

function s4f(e) {
    if (e.keyCode === 69) {
        PlaySound4()
    }
}

function s5f(e) {
    if (e.keyCode === 74) {
        PlaySound5()
    }
}

function s6f(e) {
    if (e.keyCode === 75) {
        PlaySound6()
    }
}

function s7f(e) {
    if (e.keyCode === 85) {
        PlaySound7()
    }
}

function s8f(e) {
    if (e.keyCode === 73) {
        PlaySound8()
    }
}

function pum(e) {
    if (e.keyCode === 80) {
        playpum()
    }
}

function rk(e) {
    if (e.keyCode === 70) {
        playrk()
    }
}

document.addEventListener('keyup', s1f)
document.addEventListener('keyup', s2f)
document.addEventListener('keyup', s3f)
document.addEventListener('keyup', s4f)
document.addEventListener('keyup', s5f)
document.addEventListener('keyup', s6f)
document.addEventListener('keyup', s7f)
document.addEventListener('keyup', s8f)

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




