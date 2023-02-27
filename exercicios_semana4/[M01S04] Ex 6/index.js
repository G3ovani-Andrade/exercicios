const valueInput = document.getElementById('value-input');
const descriptionInput = document.getElementById('description-input');



class FinancialTransaction{
  description;
  value;
  constructor(description,value){
    this.description= description;
    this.value = value;
  }
}


var mesAtual = 'janeiro';
var entradas = 8000;
var saidas = 400;
var saldo = 1000;

var earningsList = [];

var expensesList = [];

// Mês
document.getElementById('month').innerHTML = mesAtual

// Entradas
document.getElementById('total-earnings').innerHTML = entradas;

// Saídas
document.getElementById('total-expenses').innerHTML = saidas;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

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

const financialTransactionManager = new FinancialTransactionManager(
  [new FinancialTransaction('salario', 4000),
  new FinancialTransaction('Freela',400),],
  [new FinancialTransaction('Alimentação',650),
  new FinancialTransaction('PSN',40),
  new FinancialTransaction('Energia',500)]
);



function addExpense() {
  const newExpense = {
    description: descriptionInput.value,
    value: valueInput.value,
  };
  expensesList.push(newExpense);

  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

  document.getElementById('expenses-list').appendChild(li);
}

function addEarning() {
  const newExpense = {
    description: descriptionInput.value,
    value: valueInput.value,
  };
  expensesList.push(newExpense);
  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;
  document.getElementById('earnings-list').appendChild(li);
  
}

// for (var i = 0; i < earningsList.length; i++) {
//   var li = document.createElement('li');
//   li.innerText = `${earningsList[i].description}: R$ ${earningsList[i].value}`;

//   document.getElementById('earnings-list').appendChild(li);
// }
// gerarLista(earningsList,"earnings-list");


// for (var i = 0; i < expensesList.length; i++) {
//   var li = document.createElement('li');
//   li.innerText = `${expensesList[i].description}: R$ ${expensesList[i].value}`;
//   document.getElementById('expenses-list').appendChild(li);
// }
// gerarLista(expensesList,"expenses-list");

// function gerarLista(lista,idHtml){
//   for (const iterator of lista) {
//     var li = document.createElement('li');
//     li.innerText = `${iterator.description}: R$ ${iterator.value}`;
//     document.getElementById(`${idHtml}`).appendChild(li);
//     console.log(li);
//   }
// }
function addFinancialMovement() {
  const earningRadioValueIsChecked =
    document.getElementById('earning-radio').checked;

  if (earningRadioValueIsChecked) {
    addEarning();
  } else {
    addExpense();
  }
}