const calcularTempo = (listaFilmes)=>{
    document.getElementById("minutosAssistidos").innerHTML = listaFilmes.reduce((total,filme)=>{
        if(filme.assistido){
            total += filme.duracao;
        }
        return total;
    },0); 

}
export {calcularTempo};