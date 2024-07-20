function generateRandom(quantityNum, min, max){
    let sorteados = []
    for(let i = 0; i < quantityNum; i++){ // Executa a função random n de quantidade
        let numRandom = parseInt(Math.random() * (max - min + 1) + min) // Cria numero aleatorio
        while(sorteados.includes(numRandom)){ // Garante que o numero sorteado não vai se repetir
            numRandom = parseInt(Math.random() * (max - min + 1) + min)
        }
        sorteados.push(numRandom) // Manda os numeros para a array de sorteados
    }
    let texto = quantityNum > 1 ? 'Numbers' : 'Number' // Muda o texto do plural
    inner(`${texto} generated: ${sorteados.join(', ')}`, 'resultado') // Manda as informações pro HTML
    document.getElementById('btn-reiniciar').removeAttribute('disabled');
}

function inner(texto, tag){ // Função pra mudar coisas no HTML com o texto e tag
    let campo = document.getElementById(tag)
    campo.innerText = texto
}

function reset(){
    document.getElementById('quantidade').value = '' 
    document.getElementById('de').value = ''
    document.getElementById('ate').value = '' // Limpa a caixa de input
    document.getElementById('resultado').innerText = 'Numbers Drawed: No one by now';
    document.getElementById('btn-reiniciar').setAttribute('disabled', true); // Desativa o botão reiniciar
}