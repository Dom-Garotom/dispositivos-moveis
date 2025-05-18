"use strict";
const alunos = [
    { nome: 'João Silva', matricula: 1001, ativo: true },
    { nome: 'Maria Oliveira', matricula: 1002, ativo: false },
    { nome: 'Pedro Santos', matricula: 1003, ativo: true },
    { nome: 'Ana Souza', matricula: 1004, ativo: false },
    { nome: 'Lucas Lima', matricula: 1005, ativo: true },
];
if (alunos.length > 0) {
    alunos.forEach(aluno => {
        aluno.ativo && console.log(aluno.nome);
    });
}
else {
    console.log('Não existe nenhum aluno ativo');
}
