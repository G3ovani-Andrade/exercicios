
function listarVeiculosCadastrados() {
    let foiVendido = "Vender";
    for (const veiculo of veiculos) {
        console.log(veiculo.foiVendido);
        if (veiculo.foiVendido === true) {
            foiVendido = "Vendido";
            
        }
        container.innerHTML += `
        <div class="${foiVendido}">
            <label id="${veiculo.id}"></label>
            <img class="imgCard" src="${veiculo.imagem}" onerror = "this.src = 'imgs/fiatPunto.jpeg'" alt="imagem veiculo" srcset="">
            <h1>${veiculo.marca} ${veiculo.modelo}</h1>
            <div>
            <p><b>R$ </b>${veiculo.valor}</p>
            </div>
            <div>
                <p><b>Km:</b> ${veiculo.kmVeiculo}</p>
                <p><b>Cor:</b> ${veiculo.cor}</p>
            </div>
             <button class="vender">${foiVendido}</button>
        </div>
        `
        foiVendido = "Vender";
    }
}
const body = document.getElementsByTagName('body')[0];
const container = document.createElement('section');
const scripts = document.getElementsByTagName('script')[0];
container.className = 'listaVeiculos';
body.append(container);
body.insertBefore(container, scripts);
listarVeiculosCadastrados();

var botoes = body.getElementsByClassName('vender');

let listaVeiculosJson = localStorage.getItem('VEICULOS');;
var listaVeiculos = listaVeiculosJson ? JSON.parse(listaVeiculosJson) : []
for (const botao of botoes) {
    //botao.disabled = true;
    botao.addEventListener('click', function (e) {
        e.preventDefault();
        listaVeiculosJson = localStorage.getItem('VEICULOS');
        listaVeiculos = listaVeiculosJson ? JSON.parse(listaVeiculosJson) : [];
                var container = this.parentElement;
                container.style.border = '1px solid red';
                var id = container.getElementsByTagName("label")[0].id;
                for (const veiculo of listaVeiculos) {
                    if (veiculo.id == id) {
                        veiculo.foiVendido = true;
                        botao.innerHTML = "Vendido"
                        botao.removeEventListener('click',arguments.callee);
                    }
                    
                   }
                localStorage.setItem('VEICULOS', JSON.stringify(listaVeiculos));
    });
    

    
}
