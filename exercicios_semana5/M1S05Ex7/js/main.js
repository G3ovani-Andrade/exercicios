"use estrict";
let filmes = [];
let titulo = document.getElementById("titulo");
let duracao = document.getElementById("duracao");
let nota = document.getElementById("nota");
let containerFilmes = document.getElementById("listaFilmes");
let alerta = document.getElementsByClassName("erro")[0];
class Filme {
    constructor(titulo, duracao, nota, favorito, assistido) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.nota = nota;
        this.assistido = assistido;
        this.favorito = favorito;
    }
}
filmes = [
    new Filme("Mib", 150, 10, false, false),
    new Filme("Meu malvado Favorito", 150, 9, false, false),
    new Filme("Chuck", 150, 8, false, false),
    new Filme("monstros SA", 150, 7, false, true),
];

const ciarEventoClic = () => {
    let botoes = document.querySelectorAll(".favoritos");
    botoes.forEach((botao) => {
        botao.addEventListener("click", adicionarFavorito);
    });
};

const listarFilmes = (listaFilmes) => {
    console.log(listaFilmes);
    if (listaFilmes.length == 0) {
        alerta.innerHTML =
            "<p>Não foi encontrado nenhum filmes com esse título</p>";
        alertaForm();
    }
    document.getElementById("listaFilmes").innerHTML = listaFilmes
        .map(
            (filme) =>
        `<div class="cardFilme">
            <div class="icones">
            <div class="favoritos">
                <img src="${filme.favorito? "src/imagens/favorito/favorito.png": "src/imagens/favorito/noFavorito.png"}" alt="">
            </div>
            <div class="assistido">
                <img src="${filme.assistido ? "src/imagens/assistido/visto.png": "src/imagens/assistido/naoVisto.png"}" alt="">
            </div>
            </div>
            <img src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="">
            <div class="informacoesCard">
                <div class="notaCard">
                    <p>Nota: ${filme.nota}</p>
                    <p>duração: ${filme.duracao}</p>
                </div>
                <div class="tituloCard">
                    <h3 id="idFilme">${filme.titulo}</h3>
                </div>
            </div>
        </div>`
    ).join("");

    ciarEventoClic();
};

listarFilmes(filmes);
document
    .getElementById("pesquisaFilmes")
    .addEventListener("input", (e) =>
        listarFilmes(buscarFilme(filmes, e.target.value))
    );

const cadastrarFilme = () => {
    let filme = new Filme(titulo.value, duracao.value, nota.value);
    filme.favorito = false;
    filme.assistido = false;
    imagem =
        "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";
    if (validarCampos()) {
        if (buscarFilme(filmes, titulo.value).length == 1) {
            alerta.style.display = "block";
            alertaForm("<p>Já existe um filme com esse título</p>","erro");
        } else {
            alertaForm("<p>Filme adicionado com sucesso</p>","sucesso");
            titulo.value = "";
            duracao.value = "";
            nota.value = "";
            filmes.push(filme);
            listarFilmes(filmes);
            ciarEventoClic();
            console.log(filme.favorito);
        }
    }
};

let botaoCadastrarFilme = document.getElementById("btnCadastrarFilme");
botaoCadastrarFilme.addEventListener("click", () => cadastrarFilme());

const buscarFilme = (listaFilmes, nomeFilme) =>
    listaFilmes.filter((filme) =>
        filme.titulo.toLowerCase().includes(nomeFilme.toLowerCase())
    );

const validarCampos = () => {
    if (titulo.value === "") {
        alertaForm("<p>Preencha o campo Título</p>");
        console.log(titulo.value);
        return false;
    } else if (duracao.value === "") {
        alertaForm("<p>Preencha o campo duração</p>");
        console.log(titulo.value);
        return false;
    } else if (nota.value === "") {
        alertaForm("<p>Preencha o campo nota</p>");
        console.log(titulo.value);
        return false;
    }
    return true;
};
const alertaForm = (mensagem,tipo) => {
    alerta.innerHTML = mensagem;
    alerta.style.display = "block";
    alerta.className = tipo;
    setTimeout(() => {
        alerta.style.display = "none";
        alerta.className = tipo;
    }, 1500);
    clearTimeout();
};

function adicionarFavorito() {
    let totalFavoritos = filmes.reduce((total,filme)=>{
        if(filme.favorito == true){
            total++
        }
        return total;
    },0)
    console.log(totalFavoritos);
    console.log(this.parentNode.parentNode.querySelector("#idFilme").innerHTML);
    const novoFilme = buscarFilme(filmes,this.parentNode.parentNode.querySelector("#idFilme").innerHTML);
    console.log(novoFilme);
   
    if(totalFavoritos<3){
        // novoFilme[0].favorito ? (novoFilme[0].favorito = false) : (novoFilme[0].favorito = true);
        novoFilme[0].favorito ? (novoFilme[0].favorito = false) : (novoFilme[0].favorito = true);
    }else{
        if(novoFilme[0].favorito == true){
            novoFilme[0].favorito = false;
        }else{
            alertaForm("<p>Já existem três filmes favoritos</p>","erro")
        }
        
    }
    listarFilmes(filmes);
}

ciarEventoClic();
