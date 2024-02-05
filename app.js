let imgs = document.querySelectorAll(".choice");
let users = document.querySelector("#user-score");
let comps = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

let userscore = 0;
let compscore = 0;

imgs.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log(" choice was clicked",userchoice);
        playgame(userchoice);
    })
});

const playgame = (userchoice) =>{
    console.log("userchoice is ",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice is ",compchoice);

    if(userchoice === compchoice){
        console.log("its draw");
        msg.style.backgroundColor = "green";
        msg.innerText = " It's Draw Match";
    }else if(userchoice === "rock" && compchoice === "scissor" || userchoice === "paper" && compchoice === "rock" || userchoice === "scissor" && compchoice === "paper"){
        console.log("you win");
        userscore = userscore + 1;
        users.innerText = userscore;
        
        msg.innerText = `You win, ${userchoice} Beats ${compchoice}`;
        msg.style.backgroundColor = "blue";

    }else if (userchoice === "rock" && compchoice === "paper" || userchoice === "paper" && compchoice === "scissor" || userchoice === "scissor" && compchoice === "rock"){
        console.log("you loose, computer win ");
        compscore = compscore + 1;
        comps.innerText = compscore;
        msg.innerText = `You loose, ${compchoice} Beats  ${userchoice}`;
        msg.style.backgroundColor = "red";

    }

};

const gencompchoice = (compchoice) => {
    const options = ["rock", "paper", "scissor"]
    const comp = Math.floor(Math.random() * options.length)
    return options[comp];
}





