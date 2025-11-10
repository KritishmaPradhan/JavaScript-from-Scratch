let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let winnerPlayer = document.querySelector(".winner_player");
let winnerDisp = document.querySelector(".winnerdisp");
let playBtn = document.querySelector(".playbtn");

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
    boxes.forEach((box) => {
        box.innerText = "";
    });
}

const winnerdisplay = (winner) =>{
    winnerDisp.classList.remove("hidedisplay");
    winnerPlayer.innerText = `The winner is ${winner}`;
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