var marcasVeiculos = [];
function cadastrarMarca(nomeMarca) {
    marcasVeiculos.push(nomeMarca);
    // return `Marca ${nomeMarca} Cadastrada com Sucesso!`;
    console.log(`Marca ${nomeMarca} Cadastrada com Sucesso!`);
}
console.log(cadastrarMarca("Fiat"));
console.log(cadastrarMarca("Renault"));
console.log(cadastrarMarca("Peugeout"));
console.log(cadastrarMarca("Jeep"));
console.log(cadastrarMarca("Hyundai"));



for (const marca of marcasVeiculos) {
    console.log(`marca: ${marca}`);
}