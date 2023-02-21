var idade = 15;
var sexo = "masculino";
var estudanteLab365 = true;
var estudanteProgramacao = false;

if(idade>=60 || estudanteLab365 == true){
    console.log("Entrada gratuita")
}else if(idade<18 && !estudanteProgramacao){
    console.log("Menores de idade que não estudam programação nao podem entrar")
}else{
    if(sexo === "feminino"){
        console.log("Valor do ingresso R$ 50");
    }else if(sexo === "masculino"){
        console.log("Valor do ingresso R$ 80");
    }
}