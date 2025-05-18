const idadeAluno: number = 27

if (idadeAluno < 16) {
    console.log("Não vota")
} else if (idadeAluno === 16 || idadeAluno === 17 || idadeAluno > 70) {
    console.log("Voto facultativo")
} else if (idadeAluno > 18 && idadeAluno <= 70) {
    console.log("Voto obrigatório")
}
