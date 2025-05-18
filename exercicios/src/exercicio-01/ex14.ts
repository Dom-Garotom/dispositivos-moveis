interface Pessoa {
    nome: string
    idade: number
    profissao: string
}

const james: Pessoa = {
    idade: 30,
    nome: 'James Clear',
    profissao: 'Escritor'
}

const descreverPessoa = (person: Pessoa) => {
    console.log(`Esse é o ${person.nome}, ele tem ${person.idade} anos e trabalha como ${person.profissao}`)
}

descreverPessoa(james)