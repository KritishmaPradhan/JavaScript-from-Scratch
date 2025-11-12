let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let winnerPlayer = document.querySelector("#winner_player");
let winnerDisp = document.querySelector(".winnerdisp");
let playBtn = document.querySelector(".playbtn");
let themeBtn = document.querySelector("#ToggleThemeBtn");
let bgVideoid = document.querySelector("#backgndVid");

turnX = true;
const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () =>{
        if (turnX){
        box.innerText = "X";
        turnX = false;
        }
        else{
        box.innerText = "O";
        turnX = true;  
        }
        box.disabled = true;
        winCheck();
    }); 
});

const clearboxes = () => {
    turnX = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    winnerDisp.classList.add("hidedisplay");
}
const disableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const winnerdisplay = (winner) =>{
    winnerDisp.classList.remove("hidedisplay");
    winnerPlayer.innerText = `The winner is ${winner}`;
    disableboxes();
    generateConfetti();
}
const winCheck = () =>{
    for(let pattern of winningPattern){
        let boxPos1 = boxes[pattern[0]].innerText;
        let boxPos2 =  boxes[pattern[1]].innerText;
        let boxPox3 = boxes[pattern[2]].innerText;

        if (boxPos1 != "" && boxPos2 != ""  && boxPox3 != ""){
            if(boxPos1 === boxPos2 && boxPos2 === boxPox3){
                winnerdisplay(boxPos1);
            }
        }
    }
};
playBtn.addEventListener("click",clearboxes);
resetbtn.addEventListener("click", clearboxes);


// additional animations and confetti
function generateConfetti() {
        const confettiContainer = document.getElementById('confetti');
        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti-piece');
            // confettiPiece.style.backgroundColor = `hsl(${Math.random() * 60 + 90}, 100%, 50%)`;
            let hue;
            // 50% chance green, 50% chance whitish-yellow
            if (Math.random() < 0.5) {
              // Green shades (90–150)
              hue = Math.random() * 60 + 90;
            } else {
              // Whitish-yellow shades (40–60)
              hue = Math.random() * 20 + 40;
            }
            confettiPiece.style.backgroundColor = `hsl(${hue}, 100%, ${Math.random() * 20 + 70}%)`;
            confettiPiece.style.left = `${Math.random() * window.innerWidth}px`;
            confettiPiece.style.animationDuration = `${Math.random() * 2 + 2}s`; // Random speed
            confettiPiece.style.animationDelay = `${Math.random() * 1}s`; // Random delay               
            confettiContainer.appendChild(confettiPiece);               
            setTimeout(() => {
                confettiPiece.remove();
            }, 2000);
        }
    }

// backgroung theme toggle function
const themeOptions = [
    "videos/purplemesh.mp4",
    "videos/earth.mp4",
    "videos/galaxyforgame.mp4",
    "videos/technology.mp4"
];
let currentIndex = 0;
themeBtn.addEventListener("click", () =>{
    currentIndex = (currentIndex + 1 ) % themeOptions.length;
    bgVideoid.src = themeOptions[currentIndex];
    bgVideoid.load();
    bgVideoid.play();
});