const listarFilmes = (listaFilmes) => {
    console.log(listaFilmes);
    if (listaFilmes.length == 0) {
        alerta.innerHTML =
            "<p>Não foi encontrado nenhum filmes com esse título</p>";
        alertaForm();
    }
    document.getElementById("listaFilmes").innerHTML = listaFilmes.map((filme) =>
        `<div class="cardFilme">
            <div class="icones">
            <div class="favoritos">
                <img id="${filme.titulo}" src="${filme.favorito? "src/imagens/favorito/favorito.png": "src/imagens/favorito/noFavorito.png"}" alt="">
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
};
const buscarFilme = (listaFilmes, nomeFilme) =>{
    let filmeEscolhido = [];
    return filmeEscolhido = listaFilmes.filter((filme) =>filme.titulo.toLowerCase().includes(nomeFilme.toLowerCase()));
}


const  adicionarFavorito = (listaFilmes,e)=>{
    let totalFavoritos = listaFilmes.reduce((total,filme)=>{
        if(filme.favorito == true){
            total++
        }
        return total;
    },0)
    console.log(totalFavoritos);
    console.log(e.target.id);
    let novoFilme = buscarFilme(listaFilmes,document.getElementById(e.target.id).id);
    console.log(novoFilme);
   
    if(totalFavoritos<3){
        // novoFilme[0].favorito ? (novoFilme[0].favorito = false) : (novoFilme[0].favorito = true);
        novoFilme[0].favorito ? (novoFilme[0].favorito = false) : (novoFilme[0].favorito = true);
    }else{
        if(novoFilme[0].favorito == true){
            novoFilme[0].favorito = false;
        }else{
            return false;
            alertaForm("<p>Já existem três filmes favoritos</p>","erro");
        }
        
    }
}
export {listarFilmes,buscarFilme,adicionarFavorito};