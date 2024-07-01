let number = 100
let maxAtt = number / 2
let nAtt = 0
let nSecreto = parseInt(Math.random() * number) + 1
let msgAttempt = nAtt > 0 ? 'attempts' : 'attempt'
while(maxAtt > 0){
    let nChute = prompt(`Choose a number between 1 and ${number}`);
    console.log(nSecreto)
    if(nChute === null || nChute > number || nChute == 0){
        alert(`Insert a number between 1 and ${number}`);
        break;
    }
    if(nChute < nSecreto){
    alert(`Missed! the secret number is Greater. You have ${maxAtt - 1} attempts left`);
    }
    else if(nChute > nSecreto){
    alert(`Missed! the secret number is Lesser. You have ${maxAtt - 1} attempts left`);
    }
    else{
        alert(`You found it! the secret number is ${nSecreto} you did ${nAtt + 1} ${msgAttempt}.`);
        break;
    }
    maxAtt --
    nAtt ++
}
if(maxAtt == 0){
alert('Your attempts is over, the secret number is: ' + nSecreto);
}