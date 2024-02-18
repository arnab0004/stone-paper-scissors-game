let userscore = 0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msgcon");
const  userscorepara = document.querySelector("#user-score");
const  compscorepara = document.querySelector("#computer-score");





const gencompchoice =()=>{
    const options = ["rock","paper","scissors"];
    let randomnumber = Math.floor(Math.random()*3);
    return options[randomnumber];
}

const drawgame =()=>{
    // console.log(" this match was draw......😒😒😒😒😒😒😒😒😒😒😒😒😒😒");
    msg.innerText= "this match was draw......😒😒😒...Try Again!!!!!!";
    msg.style.backgroundColor = "#081b31";

}



const showwinner =(userwin,userchoice,compChoice)=>{
        if(userwin){
            userscore++;
            userscorepara.innerText = userscore;
            // console.log("You Won.........🎆🎆🎆")
            msg.innerText = `You Won.........🎆🎆🎆 your ${userchoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        }else{
            compscore++;
            compscorepara.innerText = compscore;
            // console.log("You lose........🩴🩴🩴")
            msg.innerText= `You lose........🩴🩴🩴 ${compChoice} beats your ${userchoice}`;
            msg.style.backgroundColor = "red";

        }
}



const playgame = (userchoice)=>{
    console.log("Your choice  = ",userchoice);

    const compChoice = gencompchoice();
    console.log("Computer choose  = ",compChoice);

        if (userchoice === compChoice){
            drawgame();
        }else{
            let userwin = true;
            if (userchoice === "rock" ){
              userwin =  compChoice ==="paper" ? false :true;
            }else if ( userchoice ==="paper"){
               userwin = compChoice === "scissors" ? false : true;
            }else  {
                userwin =  compChoice === "rock" ? false : true;
            };
            showwinner(userwin,userchoice,compChoice);
        }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
        });
});