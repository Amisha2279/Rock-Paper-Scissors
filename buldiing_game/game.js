let user_score=0;
let computer_score=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =document.querySelector("#user_score");
const computerScorePara =document.querySelector("#computer_score");

const genCompChoice=()=>{
    const options =["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=> {
    msg.innerText = "game was draw! Play Again.";
    msg.style.backgroundColor = "#081b31";

}

const show_Winner= (userwin, userchoice, compChoices)=>{
    if(userwin){
        user_score++;
        userScorePara.innerText= user_score;
        msg.innerText = `Congratulation! You Win, Your ${userchoice} beats ${compChoices}.`;
        msg.style.backgroundColor = "green";

    }else{
        console.log("You Lose");
        computer_score++;
        computerScorePara.innerText = computer_score;
        msg.innerText = `You Lose!  Computer's ${compChoices} beats your ${userchoice}.`;
        msg.style.backgroundColor = "red";

    }
}

const playGame =(userchoice)=>{
    // console.log("user choice = ", userchoice);
    // generate computer choice
    const compChoices = genCompChoice();
    // console.log("computer choice = ", compChoices);

    if(userchoice===compChoices){
        drawGame();
    } else{
        let userwin = true;
        if(userchoice ==="Rock" ){
            // Paper scissors
            userwin= compChoices === "Paper" ? false : true;
        }
        else if(userchoice==="Paper"){
            // rock , scissors
            userwin= compChoices === "Scissors" ? false : true;
        } 
        else if ( userchoice==="Scissors"){
            userwin = compChoices ==="Rock" ? false : true;
        }

        show_Winner(userwin,userchoice, compChoices);
    
    }

};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});


// 8:22