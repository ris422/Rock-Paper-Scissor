let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    const options = ["Rock","Paper","Scissor"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const draw = () => {
    msg.innerText = "Game was a draw";
};
const showWinner = (userwin, userChoice, compchoice) =>{
    if(userwin){
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = `You Win! ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = `You lose. ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

   
}
const playgame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    const compchoice = genCompChoice();
    console.log("computer choice = ",compchoice);

    if(compchoice === userChoice){
        draw();
    }
    else{
        let userwin = true;
        if(userChoice === "Rock"){
           userwin = compchoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
           userwin = compchoice === "Scissor" ? false : true;
        }
        else{
            userwin = compchoice === "Rock" ? false : true;
        }
        showWinner(userwin, userChoice, compchoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
    });
});