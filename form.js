let botaoAdicionar = document.querySelector('#adicionar-cliente')
botaoAdicionar .addEventListener('click', function (evento) {

    evento.preventDefault()
    

    let form = document.querySelector('#form-adiciona')

    let cliente = obterValoresDoForm(form)

    let erros = validaCliente(cliente)

    if (erros.length > 0){
        exibeMensagemDeErro(erros)
        return
    }

    adicionaClienteNaTabela(cliente)
    
    let mensagemErro = document.querySelector('#mensagem-erro')
    mensagemErro = ''
})

function validaCliente(cliente) {
    let erros = []

    if (cliente.nome.length == 0) {
        erros.push('O nome não pode estar em branco')
    }

    if (cliente.data.length == 0) {
        erros.push('Selecione uma data por gentileza')
    }
    if (cliente.horario.length == 0) {
        erros.push('Selecione um horário por gentileza')
    }

    
    if (cliente.quantidade.length == 0){
        erros.push('Digite a quantidade de pessoas')
    }
      return erros
}


function exibeMensagemDeErro(erros){
    let ul = document.querySelector('#mensagem-erro')
    ul.innerHTML = ''


    erros.forEach (function (erro){
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function adicionaClienteNaTabela(cliente){
    let clienteTr = montarTr(cliente)
    let tabela = document.querySelector('#tabela-clientes')
    tabela.appendChild(clienteTr)
}

function montarTr(cliente){
    let clienteTr = document.createElement('tr')
    clienteTr.classList.add('cliente')

    clienteTr.appendChild(montarTd(cliente.nome, 'info-nome'))
    clienteTr.appendChild(montarTd(cliente.data, 'info-data'))
    clienteTr.appendChild(montarTd(cliente.horario, 'info-horario'))
    clienteTr.appendChild(montarTd(cliente.quantidade, 'info-quantidade'))

    return clienteTr
}

function montarTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado


    td.classList.add(classe)

    return td
}

function obterValoresDoForm(form) {
    let cliente = {
        nome: form.nome.value,
        data: form.data.value,
        horario: form.horario.value,
        quantidade: form.quantidade.value,
    }
    return cliente
}