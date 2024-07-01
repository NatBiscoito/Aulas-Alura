function converter() {
    var valorEmLuz = document.getElementById("valorDolar").value;
    var anosLuz = 9.461e15;
    var valorEmMetros = valorEmLuz * anosLuz;
    var resultadoCientifico = valorEmMetros.toExponential(2); 
    document.getElementById("resultado").textContent =
      resultadoCientifico + " metros";
  }
  