let despesasEmGrupo = [];
let inputTitle = document.getElementById('tituloDespesa');
let inputNumOfParticiapants = document.getElementById('numeroparticipantes');
let inputValue = document.getElementById('valorTotal');

class DespesasEmGrupo{
    #numberOfParticipants
    title
    partialvalue
    amount
    constructor(title,amount,numberOfParticipants){
        this.title=title;
        this.amount=amount.toFixed(2);
        this.#numberOfParticipants =numberOfParticipants;
        this.partialvalue=(amount/this.#numberOfParticipants).toFixed(2);
        
    }
    get getNumberOfParticipants(){
        return this.#numberOfParticipants;
    }
    
}

class FinancialTransactionGroupManager{
    expenseList;
    constructor (expensesArray){
        this.expenseList = expensesArray;
        this.gerarListaDespesasEmGrupo(this.expenseList,"despesasEmGrupo");
    }
    gerarListaDespesasEmGrupo(lista,idHtml){
        lista.forEach(despesa => {
            let div = document.createElement('div');
            div.className = 'gridTabelaLinha';
            let titulo = document.createElement('p');
            titulo.innerHTML = despesa.title;
            let partialvalue = document.createElement('p');
            partialvalue.innerHTML = `R$: ${despesa.partialvalue}`
            let amount = document.createElement('p');
            amount.innerHTML = `${despesa.amount}`;
            div.appendChild(titulo)
            div.appendChild(partialvalue)
            div.appendChild(amount)
           document.getElementsByClassName(`${idHtml}`)[0].appendChild(div);
        });
    }
}
const financialTransactionGroupManage = new FinancialTransactionGroupManager(
   [
    new DespesasEmGrupo("Energia Elétrica",150,3),
    new DespesasEmGrupo("Aluguel",180,3),
    new DespesasEmGrupo("Condomínio",200,3),
    new DespesasEmGrupo("Alimentação",110,3)

    ]
);

function addDespesaEmGrupo(){
    let novaDespesaEmGrupo = new FinancialTransactionGroupManager([
        new DespesasEmGrupo(
            inputTitle.value,
            Number(inputValue.value),
            Number(inputNumOfParticiapants.value)
        )
    ]);
    console.log(novaDespesaEmGrupo)
    despesasEmGrupo.push(novaDespesaEmGrupo);
}

//funcao responsavel por aparecer o feedback no cadastro de despesa em grupo
const btnCadastroEmGrupo = document.getElementById('addDespesaEmGrupo');
const alertaModal = document.getElementById('alertaModal');
btnCadastroEmGrupo.onclick = function(){
    alertaModal.style.display = "block";
    setTimeout(function(){
        alertaModal.style.display = "none";
    },5000);
    inputTitle.value = "";
    inputValue.value = "";
    inputNumOfParticiapants.value = "";
    console.log(inputTitle);
    console.log(inputValue);
    console.log(inputNumOfParticiapants);
}
