let despesasEmGrupo = [];
class DespesasEmGrupo{
    #numberOfParticipants
    title
    partialvalue
    amount
    constructor(title,amount,numberOfParticipants){
        this.title=title;
        this.amount=amount;
        this.#numberOfParticipants = numberOfParticipants;
        this.partialvalue=amount/this.#numberOfParticipants;
        
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
    new DespesasEmGrupo("Energia Elétrica",120,3),
    new DespesasEmGrupo("Aluguel",120,3),
    new DespesasEmGrupo("Condomínio",120,3),
    new DespesasEmGrupo("Alimentação",120,3)

    ]
);