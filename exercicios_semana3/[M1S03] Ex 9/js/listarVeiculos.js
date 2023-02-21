
function listarVeiculosCadastrados() {
    for (const veiculo of veiculos) {
        container.innerHTML += `
        <div>
            <img class="imgCard" src="${veiculo.imagem}" onerror = "this.src = 'imgs/erro.gif'" alt="imagem veiculo" srcset="">
            <h1>${veiculo.marca} ${veiculo.modelo}</h1>
            <div>
            <p><b>R$</b>${veiculo.valor}</p>
            </div>
            <div>
                <p><b>Km:</b> ${veiculo.kmVeiculo}</p>
                <p><b>Cor:</b> ${veiculo.cor}</p>
            </div>
        </div>
        `
}  
}
const body = document.getElementsByTagName('body')[0];
const container = document.createElement('section');
const scripts = document.getElementsByTagName('script')[0];
container.className = 'listaVeiculos';
body.append(container);
body.insertBefore(container,scripts);
listarVeiculosCadastrados();

