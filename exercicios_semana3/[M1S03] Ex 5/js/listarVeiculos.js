
function listarVeiculosCadastrados() {
   return veiculos;
        
}
listarVeiculosCadastrados();
for (const veiculo of veiculos) {
    console.log(veiculo.marca);
}