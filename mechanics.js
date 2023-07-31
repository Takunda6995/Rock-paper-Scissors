//create an arr which holds 3 elements rock paper and sissors
let gameArry = ["Rock", "paper", "scissors"]
let inputData = 0;  
let i=0, j=0, x=0
do {
let userInput = prompt("choose : 1- rock  2- paper  3-scissors",inputData ,1)
//console.log(gameArry[userInput-1])
//using math.random to generate the random choice made by the computer
function getRandomNumber(min , max){
    Math.ceil(min);
    Math.floor(max)
   return Math.floor(Math.random()*(max-min+1)+min); 
}
//storing the user input and random generated number between 0 and 2 (inclusive)
let userChoice =userInput-1;
let compChoice = getRandomNumber(0,2);
if(userChoice!=compChoice){
    if(userChoice >compChoice){//if the player wins
        i++
        console.log(`computer: ${gameArry[compChoice]} vs player: ${gameArry[userChoice]}`);
        console.log(`player won ${i} rounds`);
    
    }else if( userChoice ===0 && compChoice===3){
        i++
        console.log(`computer: ${gameArry[compChoice]} vs player: ${gameArry[userChoice]}`);
        console.log(`player won ${i} rounds`);

    }else if(userChoice===3 && compChoice ===0){
        j++;//if the computer wins
        console.log(`computer: ${gameArry[compChoice]} vs player: ${gameArry[userChoice]}`);
        console.log(`Computer won ${j} rounds`);

        }
    else{
        j++//if the computer wins
        console.log(`computer: ${gameArry[compChoice]} vs player: ${gameArry[userChoice]}`)
        console.log(`Computer won ${j} rounds`)

    }
    if(i===3||j===3)break; //exit the loop when someone wins
    ++x;
}
} while(x<5)

if(i>j){
    console.log('player wins')
}else{
    console.log('Sorry you lost')
}



