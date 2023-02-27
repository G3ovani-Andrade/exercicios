const valueInput = document.getElementById('value-input');
const descriptionInput = document.getElementById('description-input');
var mesAtual = 'janeiro';

var entradas = 0;
var saidas = 0;
var saldo = 0;

var earningsList = [];

var expensesList = [];

class FinancialTransactionManager{
  earningsList;
  expensesList;
  constructor(earningsArray = [],expensesArray = []){
    this.earningsList = earningsArray;
    this.expensesList = expensesArray;
    this.gerarLista(this.earningsList,'earnings-list');
    this.gerarLista(this.expensesList,'expenses-list');
  }
  gerarLista(lista,idHtml){
    for (const iterator of lista) {
      let li = document.createElement('li');
      li.innerText = `${iterator.description}: R$ ${iterator.value}`;
      document.getElementById(`${idHtml}`).appendChild(li);
    }
  }
}

class FinancialTransaction{
  description;
  value;
  constructor(description,value){
    this.description= description;
    this.value = value;
  }
}

earningsList= [new FinancialTransaction('salario', 4000),
new FinancialTransaction('Freela',400)];
expensesList = [new FinancialTransaction('Alimentação',650),
new FinancialTransaction('PSN',40),
new FinancialTransaction('Energia',500)];
console.log(earningsList);

const financialTransactionManager = new FinancialTransactionManager(
 earningsList,
  expensesList
);

function calcularValoresTela(){
  entradas = earningsList.reduce(function (total,numero){
    return total + numero.value;
  },0);

  saidas = expensesList.reduce(function(acumulador,valorAtual){
    return acumulador + valorAtual.value;
  },0);
  console.log(saidas);
  console.log(entradas);
  // Entradas
  document.getElementById('total-earnings').innerHTML = entradas;
  // Saídas
  document.getElementById('total-expenses').innerHTML = saidas
  // Saldo
  document.getElementById('final-balance').innerHTML = entradas-saidas
}

// Mês
document.getElementById('month').innerHTML = mesAtual

calcularValoresTela();

function addExpense() {
  const newExpense = {
    description: descriptionInput.value,
    value: Number(valueInput.value),
  };
  expensesList.push(newExpense);

  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

  document.getElementById('expenses-list').appendChild(li);
  
}

function addEarning() {
  const newExpense = {
    description: descriptionInput.value,
    value: Number(valueInput.value),
  };
  earningsList.push(newExpense);
  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;
  document.getElementById('earnings-list').appendChild(li);
  
}

function addFinancialMovement() {
  const earningRadioValueIsChecked =
    document.getElementById('earning-radio').checked;
  if (earningRadioValueIsChecked) {
    addEarning();
  } else {
    addExpense();
  }
  calcularValoresTela();
}

