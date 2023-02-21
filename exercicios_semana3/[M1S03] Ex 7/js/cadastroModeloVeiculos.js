let modelosVeiculos = [];
function cadastrarModelos(nomeModelo,nomeMarcas) {
    modelosVeiculos.push({modelo:nomeModelo,marca:nomeMarcas});
    return `Modelo ${nomeModelo} ${nomeMarcas} Cadatrado com Sucesso`;
}
console.log(cadastrarModelos("Corsa","Chevrolet"));
console.log(cadastrarModelos("Punto","Fiat"));
console.log(cadastrarModelos("Renault","Sandero"));

for (const modelo of modelosVeiculos) {
    console.log(`modelo: ${modelo.modelo}`);
}


const selectMarcas = document.getElementById("select-marcas");


for (const marca of marcasVeiculos) {
    // option = new Option(marca,marca.toLowerCase());
    // selectMarcas.options[selectMarcas.options.length] = option;
    var option1 = document.createElement('option');
    option1.value = marca;
    option1.textContent = marca;
    selectMarcas.appendChild(option1)
}


var btnModelo;
if(btnModelo = document.querySelector("#btn-cadastrarModelo"));
var inputModelo;
var inputMarcas;

btnModelo.addEventListener("click", function(e){
    e.preventDefault();
    inputModelo = document.querySelector("#nomeModelo").value;
    inputMarcas = document.querySelector("#select-marcas").value;
    if(inputMarcas === ""){
        document.querySelector(".erro").innerHTML = "Selecione uma Marca";
    }else if(inputModelo===""){
        document.querySelector(".erro").innerHTML = "O Campo Modelo Não Pode ser Vazio";
    }else{
        console.log(cadastrarModelos(inputModelo,inputMarcas));
        document.querySelector("#nomeModelo").value = "";
        document.querySelector("#select-marcas").value = "Selecione a Marca";
    }
    setTimeout(()=>{
        document.querySelector(".erro").innerHTML = "";
    },"4000");

});