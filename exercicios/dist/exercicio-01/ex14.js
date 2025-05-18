"use strict";
const james = {
    idade: 30,
    nome: 'James Clear',
    profissao: 'Escritor'
};
const descreverPessoa = (person) => {
    console.log(`Esse é o ${person.nome}, ele tem ${person.idade} anos e trabalha como ${person.profissao}`);
};
descreverPessoa(james);
