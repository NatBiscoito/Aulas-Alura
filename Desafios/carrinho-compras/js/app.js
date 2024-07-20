let total = 0;

function adicionar(){
    let produto = document.getElementById('produto').value
    let nomeProduto = produto.split('-')[0]
    let quantidade = document.getElementById('quantidade').value
    let valor = parseFloat(produto.split('R$')[1])
    let valorQnt = quantidade > 1 ? valor * quantidade : valor
    total = total + valorQnt
    mudarTexto(`${total}`, 'valor-total')
    let textoQnt = quantidade > 1 ? quantidade : '1'
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${textoQnt}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span></section>`
}

function mudarTexto(texto,tag){
    const campo = document.getElementById(tag)
    campo.innerHTML = texto
}

function limpar(){
    total = 0
    document.getElementById('quantidade').value = 0
    document.getElementById('valor-total').innerHTML = ''
    document.getElementById('lista-produtos').innerHTML = ''
}
