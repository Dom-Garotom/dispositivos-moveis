"use strict";
const aluno2 = {
    nome: "Maria",
    idade: 21,
    curso: "Análise e Desenvolvimento de Sistemas"
};
for (const chave in aluno2) {
    console.log(`${chave}: ${aluno2[chave]}`);
}
