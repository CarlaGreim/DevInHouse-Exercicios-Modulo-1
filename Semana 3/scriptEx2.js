var listaConvidados = [
  { nome: 'José', sobrenome: 'Carlos' },
  { nome: 'Alessandro', sobrenome: 'Viana' },
  { nome: 'Paula', sobrenome: 'Souza' },
  { nome: 'Cristian', sobrenome: 'Schimit' },
  { nome: 'Beatriz', sobrenome: 'Viana' },
  { nome: 'Fernanda', sobrenome: 'Silveira' },
  { nome: 'Cláudia', sobrenome: 'Torres' },
  { nome: 'Augusto', sobrenome: 'Cesar' },
  { nome: 'Noemi', sobrenome: 'Nakamura' },
  { nome: 'Pedro', sobrenome: 'Lobo' }
]

var listaEl = document.getElementById('lista-Convidados')

const listaCompleta = listaConvidados.map(convidado => {
  console.log(convidado.nome + ' ' + convidado.sobrenome)
  var nome = convidado.nome + ' ' + convidado.sobrenome
  listaEl.innerHTML += `<li> ${nome} </li>`
})
