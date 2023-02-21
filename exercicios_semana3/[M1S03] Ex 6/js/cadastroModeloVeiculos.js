let modelosVeiculos = [];
function cadastrarModelos(nomeModelo,nomeMarcas) {
    modelosVeiculos.push({modelo:nomeModelo,marca:nomeMarcas});
    return `Modelo ${nomeModelo} Cadatrado com Sucesso`;
}
console.log(cadastrarModelos("Corsa","Chevrolet"));
console.log(cadastrarModelos("Punto","Fiat"));
console.log(cadastrarModelos("Renault","Sandero"));

for (const modelo of modelosVeiculos) {
    console.log(`modelo: ${modelo.modelo}`);
}