//create an arr which holds 3 elements rock paper and sissors
let gameArry = ["Rock", "paper", "sissors"]
let inputData = 0;  
let i=0, j=0, x=0
do {
let userInput = prompt("choose : 1- rock  2- paper  3-sissors",inputData ,1)
//console.log(gameArry[userInput-1])
//using math.random to generate the random choice made by the computer
function getRandomNumber(min , max){
    Math.ceil(min);
    Math.floor(max)
   return Math.floor(Math.random()*(max-min+1)+min); 
}
console.log(gameArry[getRandomNumber(0,2)]);
let userChoice =userInput-1;
let compChoice = getRandomNumber(0,2);
if(userChoice!=compChoice){
    if(userChoice >compChoice){
        i++
        console.log(`computer: ${gameArry[compChoice]} vs player: ${gameArry[userChoice]}`)
        console.log(`player won ${i} rounds`)
    
    }else{
        j++
        console.log(`computer: ${gameArry[compChoice]} vs player: ${gameArry[userChoice]}`)
        console.log(`Computer won ${j} rounds`)

    }
    if(i===3||j===3)break;
    ++x;
}
} while(x<5)

if(i>j){
    console.log('player wins')
}else{
    console.log('Sorry you lost')
}



