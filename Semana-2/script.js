let nome = document.getElementById('inputNome')
let email = document.getElementById('inputEmail')
let descricao = document.getElementById('inputDescricao')

document.getElementById('botao').addEventListener('click', function (event) {
  event.preventDefault()

  console.log(
    'Formulário de contatos:',
    '\nNome: ' + nome.ariaValueMax,
    '\nE-mail: ' + email.valeu,
    '\nDescrição: ' + descricao.valeu
  )
  alert('Formulário enviado!')
})
