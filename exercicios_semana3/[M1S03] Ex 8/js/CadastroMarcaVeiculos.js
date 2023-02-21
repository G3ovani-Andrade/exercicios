var marcasVeiculos = [];
function cadastrarMarca(nomeMarca) {
    marcasVeiculos.push(nomeMarca);
    return `Marca ${nomeMarca} Cadastrada com Sucesso!`;
}
console.log(cadastrarMarca("Fiat"));
console.log(cadastrarMarca("Renault"));
console.log(cadastrarMarca("Peugeout"));
console.log(cadastrarMarca("Chevrolet"));
console.log(cadastrarMarca("Jeep"));
console.log(cadastrarMarca("Hyundai"));

for (const marca of marcasVeiculos) {
    console.log(`marca: ${marca}`);
}

var btn = document.querySelector("#btn-cadastrarMarca");
var inputMarca ;
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
