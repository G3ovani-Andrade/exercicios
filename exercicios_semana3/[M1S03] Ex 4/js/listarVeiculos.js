
function listarVeiculosCadastrados() {
    return veiculos;    
}
for (const veiculo of listarVeiculosCadastrados()) {
    console.log(`
    Marca: ${veiculo.marca}
    modelo: ${veiculo.modelo}
    km: ${veiculo.kmVeiculo}
    valor: ${veiculo.valor}
    cor: ${veiculo.cor}
    ----------`
);}