"use estrict";
import { filmes} from "./src/modules/classes/Filmes.js";
import {listarFilmes,filtrarFilmes,cadastrarFilme} from "./src/modules/filme.js";
import {calcularTempo} from "./src/modules/calculo.js"
import {ciarEventoClic} from "./src/modules/utils.js";


let titulo = document.getElementById("titulo");
let duracao = document.getElementById("duracao");
let nota = document.getElementById("nota");
let containerFilmes = document.getElementById("listaFilmes");


listarFilmes(filmes);

document.getElementById("minutosAssistidos").innerHTML = calcularTempo(filmes);

document.getElementById("pesquisaFilmes").addEventListener("input", (e) =>{
    listarFilmes(filtrarFilmes(filmes, e.target.value))
    ciarEventoClic();
});

let botaoCadastrarFilme = document.getElementById("btnCadastrarFilme");
botaoCadastrarFilme.addEventListener("click", () =>{
    cadastrarFilme()
    listarFilmes(filmes);
    ciarEventoClic();
});
ciarEventoClic();
calcularTempo(filmes);
