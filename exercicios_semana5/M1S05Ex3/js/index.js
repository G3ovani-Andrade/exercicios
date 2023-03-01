let filmes = [];
let titulo = document.getElementById("titulo");
let duracao = document.getElementById("duracao");
let nota = document.getElementById("nota");
let containerFilmes = document.getElementById("listaFilmes");
let alerta = document.getElementsByClassName("erro")[0];
console.log(containerFilmes)
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
       if(validarCampos()){
            if (buscarFilme(titulo.value)) {
                alerta.innerHTML = "<p>Já existe um filme com esse título</p>"
                alerta.style.display = "block";
                alertaForm();
            } else {
                alerta.innerHTML = "<p>Filme adicionado com sucesso</p>"
                alerta.className = "sucesso"
                alerta.style.display = "block";
                alertaForm();
                titulo.value ="";
                duracao.value = "";
                nota.value = "";
                filmes.push(filme);
                listarFilmes();
            }
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


function listarFilmes() {
    console.log(filmes)
    document.getElementById("listaFilmes").innerHTML = filmes.map((filme) =>
    `<div class="cardFilme">
        <img src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="">
        <div class="informacoesCard">
            <div class="notaCard">
                <p>Nota: ${filme.nota}</p>
                <p>duração: ${filme.duracao}</p>
            </div>
            <div class="tituloCard">
                <h3>${filme.titulo}</h3>
            </div>
            <div class="botoesCard">
                <button class="button" >Assistido</button>
                <button class="button" >favorito</button>
            </div>
        </div>
    </div>`
    ).join("");
}


function validarCampos(){
    
    if(titulo.value === ""){
        alerta.innerHTML = "<p>Preencha o campo Título</p>"
        alertaForm();
        console.log(titulo.value);
        return false;
    }else if(duracao.value === ""){
        alerta.innerHTML = "<p>Preencha o campo duração</p>"
        alertaForm();
        console.log(titulo.value);
        return false;
    }else if(nota.value === ""){
        alerta.innerHTML = "<p>Preencha o campo nota</p>"
        alertaForm();
        console.log(titulo.value);
        return false;
    }
   return true
}
function alertaForm(){
    alerta.style.display = "block";
    setTimeout(() => {
        alerta.style.display = "none";
        alerta.className = "erro"
    }, 4000);
    clearTimeout();
}