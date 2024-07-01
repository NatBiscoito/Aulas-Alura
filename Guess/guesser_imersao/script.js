function adivinhacao(){
  var numeroSecreto = parseInt(Math.random() * 1001);
  var tentativas = 0;
  var maxTentativas = 5;
  //Gera um numero aleatorio e determina o numero de tentativas
  while(chute != numeroSecreto && tentativas < maxTentativas){
  //Enquanto o Chute for diferente do numero e as tentativas forem menores que o maximo de tentativas:

      var chute = prompt('Digite um número entre 0 e 1000');
    //Faz a mensagem na tela
if (chute === null) {
  alert('Jogo cancelado!');
  break; 
  //Para o jogo se apertar o botão de cancel no prompt
}
      if(chute == numeroSecreto){
        alert("Acertou! O Número Secreto era " +numeroSecreto);
      }else if(chute > numeroSecreto){
        alert("Você chutou: "+chute+ " e Errou... O Número Secreto é Menor Tentativas restante:" + (maxTentativas - tentativas));
      }
      else if(chute < numeroSecreto){
        alert("Você chutou: "+ chute + ". e Errou... O Número Secreto é Maior Tentativas restante: "+ (maxTentativas - tentativas));
      }
      //Se o Chute for igual (==) ao numeroSecreto acertou, se o chute for maior que o numero secreto errou, menor, etc.. 
      tentativas++;
      //Adiciona mais uma tentativa até o maximo (5)
    } 
if (tentativas == maxTentativas) {alert("Suas tentativas acabaram! O Numero era" + numeroSecreto);
}
}
