import { adicionarFavorito,adicionarAssistido,listarFilmes} from "./filme.js";
import { calcularTempo } from "./calculo.js";
import { filmes } from "./classes/Filmes.js";
const alertaForm = (mensagem,tipo) => {
    let alerta = document.getElementsByClassName("erro")[0];
    alerta.innerHTML = mensagem;
    alerta.style.display = "block";
    alerta.className = tipo;
    setTimeout(() => {
        alerta.style.display = "none";
        alerta.className = "erro";
    }, 1500);
    clearTimeout();
};
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
        botao.addEventListener("click", ()=>ciarEventoClic());
    });
};

const validarCampos = () => {
    if (titulo.value === "") {
        alertaForm("<p>Preencha o campo Título</p>","erro");
        return false;
    } else if (duracao.value === "") {
        alertaForm("<p>Preencha o campo duração</p>","erro");
        return false;
    } else if (nota.value === "") {
        alertaForm("<p>Preencha o campo nota</p>","erro");
        return false;
    }
    return true;
};

export {validarCampos,alertaForm,ciarEventoClic}