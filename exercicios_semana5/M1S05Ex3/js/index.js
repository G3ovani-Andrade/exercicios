let filmes = [];
let titulo = document.getElementById("titulo");
let duracao = document.getElementById("duracao");
let nota = document.getElementById("nota");

class Filme {
    constructor(titulo, duracao, nota) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.nota = nota;
    }
}

function cadastrarFilme() {
    let filme = new Filme(titulo.value, duracao.value, nota.value);
    filme.favorito = false;
    filme.assistido = false;
    imagem = "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";
    if (buscarFilme(titulo.value)) {
        console.log(buscarFilme(titulo.value));
        alert("Título já existe");
    } else {
        console.log(buscarFilme(titulo.value));
        filmes.push(filme);
        alert("Filme Adicionado com sucesso");
        titulo.value ="";
        duracao.value = "";
        nota.value = "";
    }
}

let botaoCadastrarFilme = document.getElementById("btnCadastrarFilme");
botaoCadastrarFilme.addEventListener("click", function () {
    cadastrarFilme();
});

function buscarFilme(nomeFilme) {
    const filmeEncontrado = filmes.find((filme) => filme.titulo === nomeFilme);
    return filmeEncontrado;
}
