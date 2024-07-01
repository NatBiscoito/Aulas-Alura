let nSorteados = []; // Array que guarda os numeros anteriores
let number = 10; //Define o maximo de numeros que pode ter
let nSecret = nRandom(); // Chama a função pra gerar um numero aleatorio
let nTentativas = 0; // Aumenta o numero de tentativas
// Função para gerar o numero escolhido
function nRandom() {
    let nEscolhido = parseInt(Math.random() * number + 1);
    // Se o array de números sorteados estiver com a quantidade máxima de números, esvazia a array
    if (nSorteados.length == number) {
        nSorteados = [];
    }
    // Se o número escolhido já foi sorteado anteriormente
    if (nSorteados.includes(nEscolhido)) {
        // Chama a função novamente para escolher outro número
        return nRandom();
    } else {
        // Caso contrário, adiciona o número escolhido ao array de números sorteados
        nSorteados.push(nEscolhido);
        // Exibe o array atualizado de números sorteados no console
        console.log(nSorteados);
        // Retorna o número escolhido
        return nEscolhido;
    }
}
// Função para verificar o numero do Input
function verificarChute() {
    // Obtém o valor do campo de entrada (input) e armazena na variável 'chute'
    let chute = document.querySelector('input').value;
    console.log(nSecret);
    console.log(chute == nSecret);
    // Verifica se o chute é igual ao número secreto
    if (chute == nSecret) {
        eText('h1', 'Acertou!');
        eText('p', `Você descobriu o número secreto ${nSecret} com ${nTentativas} tentativa(s)`);
        // Habilita o botão de reiniciar removendo o atributo 'disabled'
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > nSecret) {
            eText('h1', 'Errou!');
            eText('p', 'O número secreto é menor');
        }
        else if (chute < nSecret) {
            eText('h1', 'Errou!');
            eText('p', 'O número secreto é maior');
        }
    }
    nTentativas++;
    limparCampo();
}
// Função para limpar o campo de Input
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
// Função para mudar o texto na tela
function eText(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}
// Função para voltar ao texto inicial
function textoIncial(){
eText('h1','O Jogo');
eText('p','Digite um numero de 1 a 10');
}
// Função para começar um novo jogo
function reiniciarJogo(){
    nSecret = nRandom();
    limparCampo();
    textoIncial();
    nTentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}