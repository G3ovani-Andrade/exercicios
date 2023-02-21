var veiculos = [];
function cadastrarVeiculo(marca,modelo,kmVeiculo,valor,cor){
    veiculos.push({marca,modelo,kmVeiculo,valor,cor});
    return "Veículo Cadastrado com Sucesso!";
}

console.log(cadastrarVeiculo("Fiat","Siena",60000,35000,"Branco"));
console.log(cadastrarVeiculo("Toyota","Corolla",70000,80000,"Azul"));
console.log(cadastrarVeiculo("Honda","Fit",110000,42000,"Preto"));
for (const veiculo of veiculos) {
    console.log(`
    Marca: ${veiculo.marca}
    modelo: ${veiculo.modelo}
    km: ${veiculo.kmVeiculo}
    valor: ${veiculo.valor}
    cor: ${veiculo.cor}
    ----------`
);}

