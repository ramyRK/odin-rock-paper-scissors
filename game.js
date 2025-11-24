function getComputerChoice(){
    let choice =Math.floor((Math.random()*3)+1)
    switch(choice){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';        
    }
}

function getHumanChoice(){
    choice=prompt('enter your choice:');
    return choice;
}



let humanScore = 0;
let computerScore = 0;


    function playRound(humanChoice,computerChoice){
        const human = humanChoice.toLowerCase();

        if (human === computerChoice){
            console.log('its a tie');
            
        }else{

        if (
            (human==='rock'&&computerChoice==='scissors')||
            (human==='scissors'&&computerChoice==='paper')||
            (human==='paper'&&computerChoice==='rock')
        ){
            humanScore++;
            console.log(`You win!! ${human} beats ${computerChoice}`);
        }else{
            computerScore++;
            console.log(`You lose!! ${computerChoice} beats ${human}`);
        }
    }
    }

    playRound(getHumanChoice(),getComputerChoice());    