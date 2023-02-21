let modelosVeiculosJSON = localStorage.getItem('MODELOS.VEICULOS');
var modelosVeiculos = modelosVeiculosJSON ? JSON.parse(modelosVeiculosJSON) : [];

function cadastrarModelos(nomeModelo, nomeMarcas) {
    modelosVeiculos.push({ modelo: nomeModelo, marca: nomeMarcas });
    localStorage.setItem('MODELOS.VEICULOS', JSON.stringify(modelosVeiculos));
    return `Modelo ${nomeMarcas} ${nomeModelo} Cadastrado com Sucesso`;
}

const selectMarcas = document.getElementById("select-marcas");
if (selectMarcas) {
    for (const marca of marcasVeiculos) {
        // outra maneira de fazer
        // option = new Option(marca,marca.toLowerCase()); 
        // selectMarcas.options[selectMarcas.options.length] = option;
        let option1 = document.createElement('option');
        option1.value = marca;
        option1.textContent = marca;
        selectMarcas.appendChild(option1)
    }
}


var btnModelo = document.querySelector("#btn-cadastrarModelo");
var inputModelo;
var inputMarcas;
if (btnModelo) {
    btnModelo.addEventListener("click", function (e) {
        e.preventDefault();
        inputModelo = document.querySelector("#nomeModelo").value;
        inputMarcas = document.querySelector("#select-marcas").value;
        if (inputMarcas === "") {
            document.querySelector(".erro").innerHTML = "Selecione uma Marca";
        } else if (inputModelo === "") {
            document.querySelector(".erro").innerHTML = "O Campo Modelo Não Pode ser Vazio";
        } else {
            document.querySelector(".erro").innerHTML = cadastrarModelos(inputModelo, inputMarcas);
            document.querySelector("#nomeModelo").value = "";
            document.querySelector("#select-marcas").value = "Selecione a Marca";
        }
        setTimeout(() => {
            document.querySelector(".erro").innerHTML = "";
        }, "4000");

    });
}