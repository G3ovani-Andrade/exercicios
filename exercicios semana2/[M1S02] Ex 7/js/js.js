var salarioInicial = 1000;
var metaSalarial = 2000;
var meses = 0;
while (salarioInicial < metaSalarial) {
    meses += 6;
    salarioInicial += salarioInicial * 0.1;
    console.log(`salarioInicial: ${salarioInicial.toFixed(2)}`);
    console.log(`total de meses: ${meses}`);
}