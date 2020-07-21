//imprime hello world no console
function imprime(){
    console.log("Hello world!");
}
imprime();

/*recebe o parametro idade e imprime no console interpolando 
com template literals(similar ao format o python)*/
function idade(idade){
    console.log(`Voce tem ${idade} anos.`);
}
idade(29);

//somar dois números, retornar a soma e imprimir o retorno no console
function soma(a, b){
    return a + b;
}
console.log(soma(5,10));

//função que retorna um numero randomico com límite. Ex: entre 0 e 50
function retornaRandom(num){
    return Math.floor(Math.random() * num) + 1;
}
console.log(retornaRandom(5));

//função que receba a idade de uma pessoa e verifica se ela pode
//entrar na auto escola ou não
function validaIdade(idade){

    if(idade >= 18){
        console.log("Pode entrar na auto escola");
    } else {
        console.log("Não pode entrar na auto escola");
    }
}
validaIdade(18);
validaIdade(17);

//detectar o tipo de dado passado, number, string, ou boolean
function tipoDeDado(dado){

    if(typeof dado === "number"){
        console.log("number");

    } else if(typeof dado ==="string") {
        console.log("string");

    } else {
        console.log("boolean")
    }
}
tipoDeDado(18);
tipoDeDado("teste");
tipoDeDado(true);

//recebe um numero negativo e transformar para positivo
function recebeNegativo(num){
    num = num * -1;
    console.log(num);
}
recebeNegativo(-3);

//recebe uma string e verifica se tem mais de 10 caracteres
function contaString(a){

    if(typeof a === "string"){

        if (a.length > 10){
            console.log("texto muito longo");
        } else {
            console.log("Texto dentro do limite permitido");
        }
    } else {
        console.log("Nõ foi passada uma string por parâmetro.")
    }
}
contaString("teste");
contaString("testetesteteste");
contaString(1);

//passar por parâmero a base e a o exppoente e fazer a operação
function basePotencia(base, exp){

    console.log(Math.pow(base, exp));
}
basePotencia(3,2);

//recebe um numero e decremente de um em um até zero e imprima os numeros pares.
function decrementaImprimePar(num){

    while(num > 0){
        if(num % 2 == 0){
            console.log(num);
        }
        num--;
    }
}
decrementaImprimePar(10);