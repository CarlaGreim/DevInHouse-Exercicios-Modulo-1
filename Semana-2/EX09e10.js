//exercicio 9
var resultado = document.getElementById('resultado')

function incrementar() {
  var valor = resultado.textContent
  resultado.innerText = parseInt(valor) + 1
}

function decrementar() {
  var valor = resultado.textContent
  resultado.innerText = parseInt(valor) + 1
}

//exercicio 10
function alterarTitulo() {
  var titulo = document.getElementById('titulo')

  var inputValue = document.getElementById('inputTitulo').value

  titulo.innerText = inputValue
}
