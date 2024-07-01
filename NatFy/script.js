//Fazer a caixa de adicionar
var inputUrl = document.getElementById("input-url");
var inputNome = document.getElementById("input-nome");
var inputLink = document.getElementById("input-link");

const inputs = document.getElementById("inputs")
const minhaDiv = document.getElementById("algumacoisa")

function display() {
	const displayNone = document.getElementById("container");
	displayNone.classList.toggle('displayNone');
}


let listaMusica = [];
var nomeMusica = [];
var linkMusica = [];
//Arrays da Musica
console.log(listaMusica)
function adicionarMusica() {
//Só permite a função começar se tiver os valores
  if (inputLink.value !== "" && inputNome.value !== "" && inputUrl.value !== "") {
    
      if (!listaMusica.includes(inputUrl.value)) {
          listaMusica.push(inputUrl.value);
          nomeMusica.push(inputNome.value);
          linkMusica.push(inputLink.value);
          exibirMusica();
      } else {
          alert("Essa música já foi adicionada anteriormente!");
      }
  }
display()
}

function exibirMusica() {

    const listaMusicaConteiner = document.getElementById('lista-musica')
    console.log(listaMusicaConteiner)
    const CardMusica = document.createElement("div")
    const ImgMusica = document.createElement("img")
    const TextMusica = document.createElement("p")
    const LinkMusica = document.createElement("a")
    LinkMusica.href = inputLink.value
    TextMusica.innerHTML = inputNome.value
    ImgMusica.src = inputUrl.value
    LinkMusica.appendChild(ImgMusica)
    LinkMusica.appendChild(TextMusica)
    CardMusica.appendChild(LinkMusica)

    listaMusicaConteiner.appendChild(CardMusica)
console.log(listaMusica)
console.log(CardMusica)

    //Função remover musica
    const botaoRemover = document.createElement("button");
    botaoRemover.innerHTML = "Remover";
    botaoRemover.addEventListener("click",removerMusica);
    CardMusica.appendChild(botaoRemover);

    listaMusicaConteiner.appendChild(CardMusica)
    
    function removerMusica(event) {
        const cardMusica = event.target.parentNode;
        const listaMusicaConteiner = document.getElementById("lista-musica");
        
        // Remove o card de música do elemento HTML
        listaMusicaConteiner.removeChild(cardMusica);
        
        // Remove o elemento da array listaMusica
        const index = Array.from(listaMusicaConteiner.children).indexOf(cardMusica);
        listaMusica.splice(index, 1);
      }
}

