//tipos de função

//função vanilla
function soma_f(n1, n2){
    return n1 + n2;
}
console.log(soma_f(5,5));

//função anonima
const soma_c = function(n1, n2){
    return n1+n2
}
console.log(soma_c(5,5));

//arrow function sem argumentos
let consoleTeste = () =>{
    console.log("Arrow function");
}
consoleTeste();

//arrow function com argumentos
let soma_af = (a,b) =>{
    return a + b;
}
console.log(soma_af(10,30));

//arrow function com um argumento normal
const multiplicaPorDois = (x) =>{

    return x * 2;
}
console.log(multiplicaPorDois(5));

//arrow function com um argumento enxuta em uma linha
const multiplicaPorDois2 = x => x * 2;
console.log(multiplicaPorDois2(4));

//argumentos opcionais
function soma(a, b){

    if(a === undefined || b === undefined){
        console.log("essa função precisa ter dois argumentos");
    } else {
        return a + b;
    }
}
console.log(soma(100))

function saudacao(nome, idade){
    
    if(idade === undefined){
        console.log("Olá "+nome);
    } else {
        console.log("Olá " + nome + " você tem " + idade + " anos.");
    }
}
console.log(saudacao("giovani"));

//argumentos com valor default
function potencia(base, exp=2){
    return Math.pow(base, exp);
}
console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(2,3));

//função closure relembra resultado anterior
function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}
let soma1 = lembrarSoma(2);
console.log(soma1(5));
let soma2 = lembrarSoma(2);
console.log(soma2(5));

//adicionar ou deletar propriedades de um objeto
let pessoa = {
    nome: "Giovani",
    idade: 29,
    profissao: "Desenvolvedor"
}
console.log(pessoa);
delete pessoa.profissao;
pessoa.hobby = "Tocar teclado"
console.log(pessoa);

//copiar propriedades de um objeto para outro
let carro = {
    portas: 2,
    rodas: 4
}
let adicionais = {
    tetosolar: true,
    arcondicionado: true
}
console.log(carro);
Object.assign(carro, adicionais);
console.log(carro);

//ver as chaves de um objeto
let cadilac = {
    portas: 2,
    rodas: 4
}
console.log(Object.keys(cadilac));

//mutability criar um objeto novo com referencia ao antigo
//que pode ser editado, entre outros
let mutA = {
    nome:"Giovani"
}
console.log(mutA);
let mutB = mutA;
console.log(mutA == mutB);
mutB.nome = "Bruna"
console.log(mutA);

//Push adiciona um elemento no fim do aray e pop remove um elemento no fim do array
let letras = ["a", "b", "c"];
let letrasRemovidas = letras.pop();
console.log(letras);
console.log(letrasRemovidas);

//shift remove o primeiro elemento do array e unshift adiciona um elemento no inicio do array
letras = ["a", "b", "c"];
letrasRemovidas = letras.shift();
console.log(letras);
console.log(letrasRemovidas);

//indexof encontra o primeiro indice de um determinado elemento
//lastIndexOf encontra o ultimo indice de um elemento
let numeros = [1,2,3,4,5,6,7,8,9];
console.log(numeros.indexOf(66));
console.log(numeros.lastIndexOf(3));

//slice retorna um array a partir de outro
console.log(numeros.slice(4,5));
console.log(numeros.slice(4,6));
console.log(numeros.slice(-2));
console.log(numeros.slice(4,-1));

//foreach
numeros.forEach(num =>{
    console.log(num);
});

//includes para verificar se existe um elemento no array
console.log(numeros.includes(9));
console.log(numeros.includes(99));

//reverse para criar um novo array invertido
console.log(numeros.reverse());
console.log(numeros.reverse());

//trim remove tudo o que não é string
let teste = "  \n  teste  \n  "
console.log(teste);
console.log(teste.trim());

//padStart insere caracteres antes da string para parametrizar
let sku = "34";
console.log(sku.padStart(6, "0"));

//split
letras = "testando o método split"
console.log(letras.split(" "));

//join
letras = "testando o comando join";
letras = letras.split(" ");
console.log(letras.join("@"));

//repeat repete quantas vezes quiser uma string
letras = "teste"
console.log(letras.repeat(20));

//operador rest é uma forma da função receber indefinidos parâmetros, virando um array
function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
imprimirNumeros(8,5,3,7,12,2,87,4,3);

//destructuring de objetos cria variaveis a partir de um objeto
let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: "2.0"
}
const {rodas: vRodas, portas: vPortas, tetosolar: vTetosolar, motor:Vmotor} = obj;
console.log(vRodas, vPortas, vTetosolar, Vmotor);

//destructuring de arrays
letras = ["Giovani", "Bruna", "Hero"]
let [nomeA, nomeB, nomeC] = letras;
console.log(nomeA, nomeB, nomeC);


//json é diferente de objetos javascript
let json = {
    "nome": "Giovani",
    "idade": 29
}
console.log(json);

//converter json para string e vice versa
let jsonToString = JSON.stringify(json);
console.log(jsonToString);
let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson)