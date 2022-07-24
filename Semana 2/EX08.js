let anoDigitado = prompt('Digite um ano: ')

let anoAtual = new Date().getFullYear()

let diferencaAnos = anoDigitado - anoAtual

if (diferencaAnos < 0) {
  diferencaAnos = diferencaAnos * -1
}

alert(
  `A diferença de anos entres ${anoDigitado} e o ano atual ${anoAtual} é de ${diferencaAnos}`
)
