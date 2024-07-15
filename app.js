let btns = document.querySelectorAll(".btns")
let playerChoose = document.querySelector(".player-choose");
let computerChoose = document.querySelector(".computer-choose");
let compBtns = document.querySelectorAll(".comp_btns");
let resultText = document.querySelector(".result");
let popUp = document.querySelector(".pop-up");
let congrats = document.querySelector(".congrats");
let message = document.querySelector(".message");
let playAgain = document.querySelector(".playagain")
let cancel = document.querySelector(".cancel")

let rps = ["rock", "paper", "scissors"];
let icons = {
    rock: '<i class="fa-solid fa-hand-fist"></i>',
    paper:'<i class="fa-solid fa-hand"></i>',
    scissors:'<i class="fa-solid fa-hand-scissors"></i>',
   }

let userResult = "";
let computerResult = "";
let computerWinCount =0;
let userWinCount =0;
let result = [];

btns.forEach(btn =>{
    btn.addEventListener("click", ()=>{

        playerChoose.innerHTML = icons[btn.id]
       
        if(userWinCount < 3 && computerWinCount < 3){
            userResult = btn.id;
            computerResult = computer_result();

            btns.forEach(button => {
                if(button.id != userResult){
                    button.style.color ="grey";
                }else{
                    button.style.color ="white";
                }
            });

            compBtns.forEach(com_btn =>{
                if(com_btn.id != computerResult){
                    com_btn.style.color ="grey";
                }else{
                    com_btn.style.color ="white";
                }
            });

            result_check()
        }

        if(computerWinCount == 1){
            document.getElementById("c-1").classList.add("fire")
        }else if(computerWinCount == 2){
            document.getElementById("c-2").classList.add("fire")
        }else if(computerWinCount == 3){
            document.getElementById("c-3").classList.add("fire")
        }

        if(userWinCount == 1){
            document.getElementById("u-1").classList.add("fire")
        }else if(userWinCount == 2){
            document.getElementById("u-2").classList.add("fire")
        }else if(userWinCount == 3){
            document.getElementById("u-3").classList.add("fire")
        }
        
        if(userWinCount ==3 || computerWinCount ==3 ){
            btn.style.pointerEvents = "none";
            if(userWinCount ==3){
                setTimeout(function() {
                    popUp.style.display = "block";
                }, 500);
            }

            if(computerWinCount == 3){
                setTimeout(function() {
                    congrats.innerText = "Computer got wins!!!"
                    message.innerText = "Good Luck for next Time"
                    popUp.style.display = "block"
                    popUp.classList.add("animate__slideInUp")
                }, 500);
            }
        }
    })
})

function computer_result(){
    let rpsIndex = Math.floor(Math.random() * rps.length);
    computerResult = rps[rpsIndex];
   computerChoose.innerHTML = icons[computerResult]
    console.log("Computer Choose " + computerResult)
    return computerResult;
}

function result_check(){
    if(userResult == computerResult){
        resultText.innerText = "Tie"
    }else if(userResult == rps[0] && computerResult == rps[1] || 
             userResult == rps[1] && computerResult == rps[2] || 
             userResult == rps[2] && computerResult == rps[0]){
        computerWinCount++;
        
        resultText.innerText = `Computer Got ${computerWinCount} Points`
    }else if(userResult == rps[1] && computerResult == rps[0] || 
             userResult == rps[2] && computerResult == rps[1] || 
             userResult == rps[0] && computerResult == rps[2]){    
        userWinCount++;
        resultText.innerText = `You Got ${userWinCount} Points`
    }
}

playAgain.addEventListener("click", ()=>{
    location.reload();
})

cancel.addEventListener("click", ()=>{
    popUp.style.display = "none";
    
})