
function listarVeiculosCadastrados() {
    var contador = 0;
    for (const veiculo of veiculos) {
        container.innerHTML += `
        <div class="banner">
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
        </div>
        `
        var divModelo = document.getElementsByClassName('banner')[contador];
        console.log(divModelo);
        console.log(contador);
        if (veiculo.foiVendido === true) {
            var botao = document.createElement('button');
            botao.className = '';
            botao.innerText = "Vendido";
            divModelo.appendChild(botao);
            divModelo.className += " Vendido"
        }else{
            var botao = document.createElement('button');
            botao.className = 'vender';
            botao.innerText = "Vender";
            divModelo.appendChild(botao);
        }
        contador++;
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
