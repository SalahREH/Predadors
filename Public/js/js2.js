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


let arrsound = [PlaySound1 , PlaySound2 , PlaySound3 , PlaySound4 , PlaySound5 , PlaySound6 , PlaySound7 , PlaySound8 , playpum , playrk];









function playrandom() {
   let rdm = arrsound[Math.floor(Math.random() * arrsound.length)]
   rdm()
}


function redirect2() {
    
   window.location.href = "index.html"
}


document.querySelector(".button-footer").addEventListener("click", redirect2)