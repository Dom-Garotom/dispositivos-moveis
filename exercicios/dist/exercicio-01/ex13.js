"use strict";
const estoque = [
    { nome: 'Teclado Mecânico', emEstoque: true },
    { nome: 'Mouse Gamer', emEstoque: false },
    { nome: 'Monitor 24"', emEstoque: true },
    { nome: 'Notebook Dell', emEstoque: false },
    { nome: 'Cabo HDMI', emEstoque: true },
];
const filtrarProdutosDisponiveis = (listaProdutos) => {
    const filtredProducts = listaProdutos.filter(prod => prod.emEstoque === true);
    if (filtrarProdutosDisponiveis.length > 0) {
        console.log('Produtos em estoque :');
        filtredProducts.forEach(item => {
            console.log(item.nome);
        });
        return;
    }
    console.log('Não há nenhum produto em estoque');
    return;
};
filtrarProdutosDisponiveis(estoque);
