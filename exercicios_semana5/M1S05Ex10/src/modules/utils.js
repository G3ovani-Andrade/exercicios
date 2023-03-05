export const alertaForm = (mensagem,tipo) => {
    let alerta = document.getElementsByClassName("erro")[0];
    alerta.innerHTML = mensagem;
    alerta.style.display = "block";
    alerta.className = tipo;
    setTimeout(() => {
        alerta.style.display = "none";
        alerta.className = tipo;
    }, 1500);
    clearTimeout();
};
const ciarEventoClic = () => {
    let btnFavoritos = document.querySelectorAll(".favoritos");
    btnFavoritos.forEach((botao) => {
        botao.addEventListener("click", adicionarFavorito);
    });
    let btnAssistidos = document.querySelectorAll(".assistido");
    btnAssistidos.forEach((botao) => {
        botao.addEventListener("click", adicionarAssistido );
        botao.addEventListener("click", ()=>calcularTempo(filmes) );
    });
};

