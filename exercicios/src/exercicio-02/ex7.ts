interface AlunoStatus {
    nome: string
    n1: number
    n2: number
    n3: number
    frequencia: number
}


const Marcos: AlunoStatus = {
    frequencia: 10,
    n1: 10,
    n2: 10,
    n3: 10,
    nome: 'Marcos'
}

const analise = (aluno: AlunoStatus) => {
    if (aluno.frequencia < 75) {
        console.log('Reprovado por faltas')
        return
    }

    const media = aluno.n1 + aluno.n2 + aluno.n3 / 3

    if (media >= 7) {
        console.log('Aprovado')
    } else if (media >= 5 || media < 7) {
        console.log('Recuperação')
    } else if (media < 5) {
        console.log('Reprovado')
    }
}

analise(Marcos)