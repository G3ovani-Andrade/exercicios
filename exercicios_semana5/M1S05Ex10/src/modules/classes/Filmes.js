class Filme {
    constructor(titulo, duracao, nota, favorito, assistido) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.nota = nota;
        // this.assistido = assistido;
        // this.favorito = favorito;
    }
}
let filmes =[
    new Filme("Mib", 150, 10, false, false),
    new Filme("Meu malvado Favorito", 150, 9, false, false),
    new Filme("Chuck", 150, 8, false, false),
    new Filme("monstros SA", 150, 7, false, true),
];
export {Filme,filmes}