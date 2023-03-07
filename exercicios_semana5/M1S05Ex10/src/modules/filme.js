import { alertaForm } from "./utils.js";
import { Filme,filmes} from "./classes/Filmes.js";
import { validarCampos,ciarEventoClic} from "./utils.js";

const listarFilmes = (listaFilmes) => {
    if (listaFilmes.length == 0) {
        alertaForm("<p>Não foi encontrado nenhum filmes com esse título</p>","erro");
    }
    document.getElementById("listaFilmes").innerHTML = listaFilmes.map((filme) =>
        `<div class="cardFilme">
            <div class="icones">
            <div class="favoritos">
                <img id="${filme.titulo}" src="${filme.favorito? "src/imagens/favorito/favorito.png": "src/imagens/favorito/noFavorito.png"}" alt="">
            </div>
            <div class="assistido">
                <img id="${filme.titulo}" src="${filme.assistido ? "src/imagens/assistido/visto.png": "src/imagens/assistido/naoVisto.png"}" alt="">
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
};
const filtrarFilmes= (listaFilmes, nomeFilme) =>{
    let filmeEscolhido = [];
    return filmeEscolhido = listaFilmes.filter((filme) =>filme.titulo.toLowerCase().includes(nomeFilme.toLowerCase()));
}

const buscarFilme = (listaFilmes, nomeFilme) =>{
    let filmeEscolhido;
    listaFilmes.filter((filme) =>{
        if(filme.titulo.toLowerCase() === nomeFilme.toLowerCase()){
            filmeEscolhido = filme;
        }
    })
    return filmeEscolhido;
}


const  adicionarFavorito = (listaFilmes,e)=>{
    let totalFavoritos = listaFilmes.reduce((total,filme)=>{
        if(filme.favorito == true){
            total++
        }
        return total;
    },0)
    let novoFilme = buscarFilme(listaFilmes,document.getElementById(e.target.id).id);
    if(totalFavoritos<3){
        novoFilme.favorito ? (novoFilme.favorito = false) : (novoFilme.favorito = true);
    }else{
        if(novoFilme.favorito == true){
            novoFilme.favorito = false;
        }else{
            alertaForm("<p>Já existem três filmes favoritos</p>","erro");
        } 
    }
}

const cadastrarFilme = () => {
    let filme = new Filme(titulo.value,Number(duracao.value),Number(nota.value));
    filme.favorito = false;
    filme.assistido = false;
    filme.imagem = "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";
    if (validarCampos()) {
        if (buscarFilme(filmes,titulo.value)) {
            alertaForm("<p>Já existe um filme com esse título</p>","erro");
        } else {
            alertaForm("<p>Filme adicionado com sucesso</p>","sucesso");
            titulo.value = "";
            duracao.value = "";
            nota.value = "";
            filmes.push(filme);
        }
    }
};
function adicionarAssistido(e){
    const novoFilme = buscarFilme(filmes,document.getElementById(e.target.id).id);
    novoFilme.assistido ? (novoFilme.assistido = false) : (novoFilme.assistido = true);
    listarFilmes(filmes);
}


export {listarFilmes,buscarFilme,adicionarFavorito,filtrarFilmes,cadastrarFilme,adicionarAssistido};