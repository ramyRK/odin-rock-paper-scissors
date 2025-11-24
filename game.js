function getComputerChoice(){
    let choice =Math.floor((Math.random()*3)+1)
    switch(choice){
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'        
    }
}

function getHumanChoice(){
    choice=prompt('enter your choice:')
    return choice
}
console.log(getHumanChoice())
console.log(getComputerChoice())
