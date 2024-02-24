const player1 = document.querySelector("#onePlayer");
const player2 = document.querySelector("#twoPlayer");
const reset = document.querySelector("#reset");
const score = document.querySelector("h1");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score")
const winnigScoreSelect = document.querySelector("#goal")
let p1Display = 0;
let p2Display = 0;
let winningScore = 5;
let gameOver = false;



player1.addEventListener("click", function(e){
    if(!gameOver){
        p1Display += 1;
        if(p1Display === winningScore){
            gameOver = true
            p1Score.classList.add("winner")
            p2Score.classList.add("loser")
            player1.disabled = true;
            player2.disabled = true;

        }
        p1Score.textContent = p1Display
    }
})
player2.addEventListener("click", function(e){
    if(!gameOver){
        p2Display += 1;
        if(p2Display === winningScore){
            gameOver = true
            p2Score.classList.add("winner")
            p1Score.classList.add("loser")
            player1.disabled = true;
            player2.disabled = true;
        }
        p2Score.textContent = p2Display
    }
})

reset.addEventListener("click", resetFunc)

 function resetFunc () {
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    gameOver = false;
    p1Display = 0;
    p2Display = 0;
    p1Score.classList.remove("winner", "loser");
    p2Score.classList.remove("winner", "loser");
    player1.disabled = false;
    player2.disabled = false;

}

winnigScoreSelect.addEventListener("change",function(){
    winningScore = parseInt(this.value)
    resetFunc();
})