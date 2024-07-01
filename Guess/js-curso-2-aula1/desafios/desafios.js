let escolha = prompt("Qual desafio você quer fazer?") 
switch(Number(escolha)){
    case 1:
        imc(prompt('Diga seu peso'), prompt('Diga sua altura'))
        break;
    case 2:
        calcularFatorial(prompt('Diga um numero pra fatorar'))
        break;
    case 3:
        cotaçãoDolar(prompt('Digite um numero em dolar para converter'))
        break;
    case 4:
        geometria(prompt('Digite uma altura'), prompt('Digite uma Largura'))
        break;
    case 5:
        circulo(prompt('Digite um Raio'))
        break;
    case 6:
        tabuada(prompt('Digite um numero para tabuada'))
        break;
    default:
        alert('Desafio não valido')
        break;
}

// Desafio 1
function imc(peso, altura){
    imc = peso / (altura * altura)
    if(imc < 18.8){
        alert('Ta magrelooo')
    }
    else if(imc >= 18.5 && imc <= 24.9){
        alert('Ta na media ein')
    }
    else if(imc >= 25.0 && imc <= 29.9){
        alert('Barriguinha UwU')
    }
    else if(imc >= 30.0 && imc <= 34.9){
        alert('Barrigão :o')
    }
    else{
        alert('ALERTA DE BALEIA \n ALERTA DE BALEIA \n ALERTA DE BALEIA')
    }
    console.log(imc)
}

//Desafio 2

function calcularFatorial(numero) {
    valor = 1
    for(i = 2; i <= numero; i++){
    valor = valor * i
    console.log(valor)
    }
    alert(`Valores no Console!`)
  }


  //Desafio 3

  function cotaçãoDolar(dolar){
    let real = dolar * 4.80
    alert(`Dolar: $${dolar} \nConversão: R$${real}`)
  }

  //Desafio 4
  function geometria(alt, largura){
    let area = alt * largura;
    let perimetro = (alt + largura) * 2;
    alert(`Area: ${area} \nPerimetro: ${perimetro}`)
  }

  //Desafio 5
  function circulo(raio){
    aria = 3.14 * (raio * raio)
    peri = 2 * (3.14) * (raio)
    alert(`Area = ${aria} \nPerimetro = ${peri}`)
  }

  //Desafio 6
  function tabuada(num){
    for (let i = 1; i <= 10; i++) {
    let calculo = num * i
    console.log(`${num} . ${i} = ${calculo}`)
  }
  alert('Valores dados no console!')
}