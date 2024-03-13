let userScore=0;
let compScore=0;
let total=0;
let draws=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userPar=document.querySelector("#user-score");
const compPar=document.querySelector("#comp-score");
const attempts=document.querySelector("#Attempts");
const drawsPar=document.querySelector("#draw-score");

const genCompChoice = () => {// generate computer choice 
    let options=["rock","paper","scissors"];
    const ranIndex=Math.floor(Math.random()*3);//evaluating random 0 to 2
    return options[ranIndex];
}

const drawGame = () => {
    msg.innerText="Game was draw. Play Again!";
    msg.style.backgroundColor="#0a2c53";
    draws++;
    drawsPar.innerText=draws;
}

const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userPar.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compPar.innerText=compScore;
        msg.innerText=`You lost! Computers' ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame= (userChoice) => {
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false :true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false : true;
        }
        else{
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        total++;
        attempts.innerText=total;
        playGame(userChoice);
    })
})