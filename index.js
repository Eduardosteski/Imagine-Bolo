// Nome da Loja: Imagine Bolo
let mensagem = "Seja bem-vindo(a)!, A Imagine Bolo"
console .log (mensagem)

// Dados do Cliente
let nomeDoCliente = "Vanessa a Doceira"
let endereço = "Rua das Flores, 389"
let telefone = "(11) 99999-9999"
let email = "eu@comvoce.com"
let senhaDeEntrega = "9999"

// Bolos
let produto = "Bolo de Chocolate"
let estoque = 10
let preco = 15.00
let desconto = 2.00
let precoComDesconto = preco - desconto
console.log (produto)
// Controle de Estoque
if (estoque > 0) {
    console.log ("Produto em estoque")
} else {
    console.log ("Produto sem estoque")
}


let produto2 = "Bolo de Morango"
let estoque2 = 8
let preco2 = 20.00
let desconto2 = 3.00
let precoComDesconto2 = preco2 - desconto2  
console.log (produto2)
// Controle de Estoque
if (estoque2 > 0) {
    console.log ("Produto em estoque")
} else {
    console.log ("Produto sem estoque")
}

let produto3 = "Bolo de Limão"
let estoque3 = 5
let preco3 = 25.00  
let desconto3 = 4.00
let precoComDesconto3 = preco3 - desconto3
console.log (produto3)
// Controle de Estoque
if (estoque3 > 0) {
    console.log ("Produto em estoque")
} else {
    console.log ("Produto sem estoque")
}

// Bebidas
let produto4 = "Água sem Gás 500 ml"
let estoque4 = 20
let preco4 = 3.00
let total4 = estoque4 * preco4
console.log (produto4)
// Controle de Estoque
if (estoque4 > 0) {
    console.log ("Produto em estoque")
} else {
    console.log ("Produto sem estoque")
}

let produto5 = "Coca-Cola Original 350 ml"
let estoque5 = 0
let preco5 = 4.00
let total5 = estoque5 * preco5
console.log (produto5)
// Controle de Estoque
if (estoque5 > 0) {
    console.log ("Produto em estoque")
} else {
    console.log ("Produto sem estoque")
}
let produto6 = "Coca-Cola Zero Açucar 350 ml"
let estoque6 = 10
let preco6 = 4.00
let total6 = estoque6 * preco6
console.log (produto6)
// Controle de Estoque
if (estoque6 > 0) {
    console.log ("Produto em estoque")
} else {
    console.log ("Produto sem estoque")
}


// Pedido
let quantidade = 2
let quantidade2 = 1
let quantidade3 = 3
let subtotal = quantidade * precoComDesconto + quantidade2 * precoComDesconto2 + quantidade3 * precoComDesconto3
let taxaEntrega = 5.00
let total = subtotal + taxaEntrega
console.log (total)

// Formas de Pagamento
let pagamento = "Dinheiro"  
let pagamento2 = "Cartão de Crédito"
let pagamento3 = "Pix"
console.log (pagamento)
console.log (pagamento2)
console.log (pagamento3)        

// Status do Pagamento
let pagamentoRealizado = true
let pagamentoPendente = false
console.log (pagamentoRealizado)

// Status do Pedido
let pedidoRealizado = true
let pedidoEntregue = false
console.log (pedidoRealizado)
console.log (pedidoEntregue)

// Entrega
nomeDoCliente = "Vanessa a Doceira"
endereço = "Rua das Flores, 389"
telefone = "(11) 99999-9999"
let valorDoPedido = total
let senha = 9999
let entregaRealizada = senha == senhaDeEntrega  
console.log (entregaRealizada)







