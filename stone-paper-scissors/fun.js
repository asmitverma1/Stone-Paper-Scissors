let users=0;
let opps=0;
const paramsg=document.querySelector("#msg");
const usersP=document.querySelector("#ours");
const oppsP=document.querySelector("#comps");

const choices=document.querySelectorAll(".choice");

const Gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const ranInd=Math.floor(Math.random() * 3); ///////
    return options[ranInd];
};

const draw=()=>{
    paramsg.innerText="The Game was Draw";
    paramsg.style.backgroundColor="orange";   
};

const showwinner=(userwin)=>{
    if(userwin){
        users++;
        usersP.innerText=users;
        paramsg.innerText="Congrats,You Win!";
        paramsg.style.backgroundColor="green";
    }
    else{
        opps++;
        oppsP.innerText=opps;
        paramsg.innerText="Oops! You lost";
        paramsg.style.backgroundColor="red";
    }
};

const playGame = (userchoice)=>{
    const compchoice=Gencompchoice();
    if(userchoice===compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
           userwin= compchoice==="paper"? false: true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"? false: true;
        }
        else{
            userwin=compchoice==="rock"? false: true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id"); ////////
        playGame(userchoice);
    });
});