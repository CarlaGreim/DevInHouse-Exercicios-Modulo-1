let contasClientes = [
  {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500
  },
  {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000
  },
  {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000
  }
]

const selectConta = document.getElementById('conta')

const populaSelect = () => {
  selectConta.innerHTML = ''

  const option = document.createElement('option')
  option.value = '0'
  option.textContent = '(Selecione)'

  selectConta.appendChild(option)

  contasClientes.forEach(conta => {
    const option = document.createElement('option')
    option.value = conta.id
    option.textContent = conta.nome
  })
}
