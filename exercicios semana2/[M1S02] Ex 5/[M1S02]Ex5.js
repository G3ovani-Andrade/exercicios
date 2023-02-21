let listaAlunos = [
    { nome: "Geovani", idade: 31 },
    { nome: "Ricardo", idade: 40 },
    { nome: "Andre", idade: 28 },
    { nome: "Rodrgio", idade: 25 },
    { nome: "Aline", idade: 20 },
    { nome: "Gabriela", idade: 38 },
];

for (let i = 0; i < listaAlunos.length; i++) {
    console.log(
        `Nome do Aluno: ${listaAlunos[i].nome} \nidade: ${listaAlunos[i].idade}`
    );
}
//Para guardar uma sequência de informações de alunos cadastrados em um curso como no caso acima, onde temos uma lista de alunos com seus respectivos nomes e idades.
