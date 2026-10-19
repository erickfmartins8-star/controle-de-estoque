// Cria um array com 10 produtos da loja
let produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Café",
    "Açúcar",
    "Chocolate",
    "Biscoito",
    "Detergente",
    "Sabonete"
];


console.log("Lista original de produtos:");
console.log(produtos);


produtos.push("Refrigerante");
produtos.push("Manteiga");


console.log("Lista atualizada de produtos:");
console.log(produtos);

if (produtos.includes("Café")) {
    console.log("O produto Café está cadastrado na loja!");
} else {
    console.log("O produto Café não está cadastrado na loja.");
}

if (produtos.includes("Suco")) {
    console.log("O produto Suco está cadastrado na loja!");
} else {
    console.log("O produto Suco não está cadastrado na loja.");
}

let produtosFiltrados = produtos.filter(
    produto => produto.length > 5
);

console.log("Array original:");
console.log(produtos);

console.log("Array filtrado (nomes com mais de 5 letras):");
console.log(produtosFiltrados);