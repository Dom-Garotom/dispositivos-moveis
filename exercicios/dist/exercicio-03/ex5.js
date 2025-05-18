"use strict";
const alunos1 = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 5] },
    { nome: "Carlos", notas: [7, 7, 7] }
];
const analise2 = (aluno) => {
    let media = 0;
    for (let i = 0; i < aluno.notas.length; i++) {
        media += aluno.notas[i];
    }
    media /= aluno.notas.length;
    if (media >= 7) {
        return `Media : ${media} - situação : Aprovado`;
    }
    else if (media >= 5 || media < 7) {
        return `Media : ${media} - situação : Recuperação`;
    }
    else if (media < 5) {
        return `Media : ${media} - situação : Reprovado`;
    }
};
const verificarAprovacao = (alunos) => {
    alunos.forEach(aluno => {
        console.log(`${aluno.nome} - ${analise2(aluno)}`);
    });
};
