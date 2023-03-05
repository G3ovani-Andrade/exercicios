"use estrict";
import { Filme} from "./src/modules/classes/Filmes.js";
import {listarFilmes,buscarFilme,adicionarFavorito} from "./src/modules/filme.js";
import {calcularTempo} from "./src/modules/calculo.js"
import {alertaForm} from "./src/modules/utils.js";

let filmes =[
    new Filme("Mib", 150, 10, false, false),
    new Filme("Meu malvado Favorito", 150, 9, false, false),
    new Filme("Chuck", 150, 8, false, false),
    new Filme("monstros SA", 150, 7, false, true),
];

let titulo = document.getElementById("titulo");
let duracao = document.getElementById("duracao");
let nota = document.getElementById("nota");
let containerFilmes = document.getElementById("listaFilmes");




const ciarEventoClic = () => {
    let btnFavoritos = document.querySelectorAll(".favoritos");
    btnFavoritos.forEach((botao) => {
        botao.addEventListener("click",(e)=>{
            adicionarFavorito(filmes,e)
            listarFilmes(filmes);
            ciarEventoClic();
        });
        // botao.addEventListener("click",()=>listarFilmes(filmes));
    });
    let btnAssistidos = document.querySelectorAll(".assistido");
    btnAssistidos.forEach((botao) => {
        botao.addEventListener("click",(e)=>adicionarAssistido(e));
        botao.addEventListener("click", ()=>calcularTempo(filmes));
    });
};
listarFilmes(filmes);

// ciarEventoClic();
document.getElementById("minutosAssistidos").innerHTML = calcularTempo(filmes);


document.getElementById("pesquisaFilmes").addEventListener("input", (e) =>listarFilmes(buscarFilme(filmes, e.target.value)));

const cadastrarFilme = () => {
    let filme = new Filme(titulo.value,Number(duracao.value),Number(nota.value));
    filme.favorito = false;
    filme.assistido = false;
    filme.imagem = "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";
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



const validarCampos = () => {
    if (titulo.value === "") {
        alertaForm("<p>Preencha o campo Título</p>","erro");
        console.log(titulo.value);
        return false;
    } else if (duracao.value === "") {
        alertaForm("<p>Preencha o campo duração</p>","erro");
        console.log(titulo.value);
        return false;
    } else if (nota.value === "") {
        alertaForm("<p>Preencha o campo nota</p>","erro");
        console.log(titulo.value);
        return false;
    }
    return true;
};



function adicionarAssistido(){
    const novoFilme = buscarFilme(filmes,this.parentNode.parentNode.querySelector("#idFilme").innerHTML);
    novoFilme[0].assistido ? (novoFilme[0].assistido = false) : (novoFilme[0].assistido = true);
    listarFilmes(filmes);
}


ciarEventoClic();
