function converter() {
  var inputNome = document.getElementById("Nome").value;
  var inputDolar = document.getElementById("valorDolar").value;
  var cotacao = 5.32;
  var valorEmReal = inputDolar * cotacao;
  document.getElementById("resultado").textContent =
  "Ola " + inputNome + " o valor é: R$" + valorEmReal.toFixed(2);
}
