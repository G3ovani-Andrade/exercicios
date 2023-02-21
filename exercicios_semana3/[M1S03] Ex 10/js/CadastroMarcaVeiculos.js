var marcasVeiculosJson = localStorage.getItem('MARCAS.VEICULOS');
var marcasVeiculos = [];
marcasVeiculos = marcasVeiculosJson ? JSON.parse(marcasVeiculosJson) : [];

function cadastrarMarca(nomeMarca) {
    marcasVeiculos.push(nomeMarca);
    localStorage.setItem('MARCAS.VEICULOS', JSON.stringify(marcasVeiculos));
    return `Marca ${nomeMarca} Cadastrada com Sucesso!`;
}

var btn = document.querySelector("#btn-cadastrarMarca");
var inputMarca;
if (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        inputMarca = document.querySelector("#nomeMarca").value;
        if (inputMarca === "") {
            document.querySelector(".erro").innerHTML = "O campo não pode ser Vazio";
        } else {
            document.querySelector("#nomeMarca").value = "";
            document.querySelector(".erro").innerHTML = cadastrarMarca(inputMarca);
            setTimeout(() => {
                document.querySelector(".erro").innerHTML = "";
            }, "4000");
        }
    });
}
