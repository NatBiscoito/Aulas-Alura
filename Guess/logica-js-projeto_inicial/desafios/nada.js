// Desafio 1
let nome = user
alert(`Hello ${nome}`)
// Desafio 2
let seunome = prompt(`What's your name?`)
alert(`Hello ${seunome} !`)
// Desafio 3 
let favLang = prompt("Which programming language you like more?")
alert(`Cool! ${favLang} It's my favorite too!`)
// Desafio 4
let valor1 = prompt('Insert a number')
let valor2 = prompt('Insert another number')
let resultado = valor1 + valor2
alert(`A soma de ${valor1} e ${valor2} é: ${resultado}`)
// Desafio 5
let idade = prompt('How old are you?')
if (idade >= 18){
    alert('You can join!')
}
else{
    alert('You need to be greater than 18 to join!')
}
// Desafio 6
prompt
let contador = 0
while(contador < 10){
    contador++
    console.log(contador)
}

// Desafio 6.5
let contadorSec = prompt('Digite um numerozinho para contagem')
while(contadorSec < 0){
    contadorSec--
    console.log(contadorSec)
}