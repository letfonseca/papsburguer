let titulo = document.querySelector('.titulo')
titulo.textContent = 'Restaurante Papa’s Burguer'
let clientes = document.querySelectorAll('.cliente')
let soma = 0
console.log(clientes)
let camposoma = document.querySelector('.soma')
for (let i = 0; i <= clientes.length; i++) {
    let cliente = clientes[i]


    let quantidadeTd = cliente.querySelector('.info-quantidade')

    let quantidade = Number(quantidadeTd.textContent)


    soma = soma + quantidade
    
    camposoma.textContent=soma
}