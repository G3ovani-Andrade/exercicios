var veiculosJson = localStorage.getItem("VEICULOS");
var veiculos = veiculosJson ? JSON.parse(veiculosJson) : [];
let id = veiculos.length;
function cadastrarVeiculo(marca, modelo, kmVeiculo, valor, cor, imagem,foiVendido,id) {
    veiculos.push({id, marca, modelo, kmVeiculo, valor, cor, imagem,foiVendido });
    localStorage.setItem('VEICULOS', JSON.stringify(veiculos));
    id++;
    return "Veículo Cadastrado com Sucesso!";
}

//console.log(cadastrarVeiculo("Fiat", "Siena", 60000, 35000, "Branco"));
// console.log(cadastrarVeiculo("Toyota", "Corolla", 70000, 80000, "Azul"));
// console.log(cadastrarVeiculo("Honda", "Fit", 110000, 42000, "Preto"));
//console.log(cadastrarVeiculo("Honda", "Fit", 110000, 42000, "Preto"));



var btnCadastrarVeiculo = document.getElementById("btn-cadastrarVeiculo");
const coresVeiculo = [
    "Amarelo",
    "Verde",
    "Marrom/Bege",
    "Vermelho",
    "Azul",
    "Prata",
    " Preto",
    "Cinza",
    "Branco",
];
const selectCores = document.getElementById("select-cores");
const selectMarcas2 = document.getElementById("marcas");
const selectModelos2 = document.getElementsByTagName("select")[1];

if (selectMarcas2) {
    selectMarcas2.addEventListener("change", function () {
        var options = selectModelos2.getElementsByTagName("option");
        let optionMarca = document.createElement("option");
        optionMarca.textContent = "Selecione um Modelo";
        selectModelos2.innerHTML = "";
        selectModelos2.appendChild(optionMarca);

        for (const modelo of modelosVeiculos) {
            if (modelo.marca === this.value) {
                let optionMarca = document.createElement("option");
                optionMarca.textContent = modelo.modelo;
                optionMarca.value = modelo.modelo;
                selectModelos2.appendChild(optionMarca);
            }
        }
        if (options.length == 0) {
            let optionMarca = document.createElement("option");
            optionMarca.textContent = "Nenhum Modelo Cadastrado!";
            optionMarca.value = "";
            selectModelos2.appendChild(optionMarca);
        }
    });
}
if (selectCores) {
    for (const cor of coresVeiculo) {
        let option = document.createElement("option");
        option.textContent = cor;
        option.value = cor;
        selectCores.appendChild(option);
    }
}
if (selectMarcas2) {
    for (const marca of marcasVeiculos) {
        //console.log(marca);
        let optionMarca = document.createElement("option");
        optionMarca.textContent = marca;
        optionMarca.value = marca;
        selectMarcas2.appendChild(optionMarca);
    }
}
if (btnCadastrarVeiculo) {
    btnCadastrarVeiculo.addEventListener("click", function (e) {
        e.preventDefault();
        
        const marcaVeiculo = document.getElementById("marcas").value;
        const modeloVeiculo = document.getElementById("modelos").value;
        const corVeiculo = document.getElementById("select-cores").value;
        const kmVeiculo = Number(document.getElementById("kmVeiculo").value);
        //pegar valor do file
        var imagemVeiculo = document.getElementById("imagemVeiculo").files[0];
        const valorVeiculo = Number(document.getElementById("valorVeiculo").value);

        if (marcaVeiculo === "") {
            document.querySelector(".erro").innerHTML = "Selecione uma Marca!";
        } else if (modeloVeiculo === "") {
            document.querySelector(".erro").innerHTML = "Selecione um Modelo!";
        } else if (corVeiculo === "") {
            document.querySelector(".erro").innerHTML = "Selecione uma Cor!";
        } else if (kmVeiculo == 0) {
            document.querySelector(".erro").innerHTML = "Informe a Km do veículo!";
        } else if (valorVeiculo == 0) {
            document.querySelector(".erro").innerHTML = "Informe o valor do Veículo!";
        } else {
            
            document.querySelector(".erro").innerHTML = cadastrarVeiculo(
                marcaVeiculo,
                modeloVeiculo,
                kmVeiculo,
                valorVeiculo,
                corVeiculo,
                `imgs/${imagemVeiculo.name}`,
                false,
                id
            );
            setTimeout(() => {
                document.querySelector(".erro").innerHTML = "";
            }, "4000");
            document.getElementById("marcas").value = "";
            document.getElementById("modelos").value = "";
            document.getElementById("select-cores").value = "";
            Number(document.getElementById("kmVeiculo").value = "");
            document.getElementById("imagemVeiculo").value = "";
            document.getElementById("valorVeiculo").value = "";

        }


    });
}
