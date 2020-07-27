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

//orientação a objetos - metodos
const cachorro1 = {
    uivar: function()  {
        console.log("Auuuuuuuuuu");
    },
    rosnar: function()  {
        console.log("Grrrrrrrr");
    }
}
cachorro1.uivar();
cachorro1.rosnar();

//getter e setter manualmente
const cachorro2 = {
    raca: "SRD",
    uivar: function()  {
        console.log("Auuuuuuuuuu");
    },
    rosnar: function()  {
        console.log("Grrrrrrrr");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function(){
        return this.raca;
    }
}
console.log(cachorro2.raca);
cachorro2.uivar();
cachorro2.rosnar();
cachorro2.setRaca("Pitbull");
console.log(cachorro2.getRaca());

//prototypes
const cachorro3 = {
    patas: 2
}
const cachorro4 = Object.create(cachorro3);
console.log(cachorro4.patas);

//classes
const cachorro5 = {
    patas:4,
    raca: "SRD",
    latir: function(){
        console.log("Au au");
    }
}
let labrador = Object.create(cachorro5);

//construtores de classe
function criaCachorro(raca, patas, cor){
    let cachorro6 = Object.create({});
    cachorro6.raca = raca;
    cachorro6.patas = patas;
    cachorro6.cor = cor;
    return cachorro6;
}
let doberman = criaCachorro("Doberman", 4, "preto");
console.log(doberman);

//instanciando classes por new
function Cachorro1(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function(){
        console.log("Au au")
    }
}
let cachorro7 = new Cachorro1("husky", 4, "branco");
console.log(cachorro7);

//metodos e prototypes
function Cachorro2(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}
Cachorro2.prototype.latir = function() {
        console.log("Au au");
}

//construtor de classes no ES6
class Cachorro3 {
    constructor(raca, patas, cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}
let cachorro8 = new Cachorro3("Labrador", 4, "Preto");
console.log(cachorro8);

//override no prototype
Cachorro3.prototype.raca = "SRD";
console.log(Cachorro3.prototype.raca);
console.log(cachorro8.raca);

//metodos e propriedades de uma class ES6
class Cachorro4 {
    constructor(raca, patas, cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
    latir(){
        console.log("Au au");
    }
}
let cachorro9 = new Cachorro4("Jaguara", 4, "Preto");
cachorro9.latir();

//synbols, propriedades unicas que não podem ser alteradas nem criadas duas vezes
class Cachorro5 {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au au");
    }
}
let patas = Symbol();
Cachorro5.prototype[patas] = 4;
console.log(Cachorro5.prototype[patas]);

//getters e setters ES6
class Cachorro6 {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au au");
    }

    get getCor(){
        return this.cor;
    }

    set setCor(cor){
        this.cor = cor;
    }
}
let cachorro10 = new Cachorro6("SRD", "preto");
cachorro10.setCor = "Branco";
console.log(cachorro10.getCor);

//herança
class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}
class Coiote extends Mamifero{
    constructor(patas, cor){
        super(patas, patas);
        this.cor = cor;
    }
    rosnar(){
        console.log("Grrrrrrrrrrrr");
    }
}
let coiote = new Coiote(4, "Marrom");
console.log(coiote.patas);
coiote.rosnar();

//instance of para verificar quem é o pai do objeto
console.log(new Coiote instanceof Mamifero);

//strict impede do javascript ser php, "use strict"

//debugger serve para colocar um breakpoint para debugar o código

//assertion é uma verificação no programa para assegurar que tudo ocorra
//da forma esperada

//Expressões regulares são uma forma de encontrar padrões em strings
//são um tipo de objeto que podem ser instanciados:
let reg1 = new RegExp("teste");
let reg2 = /test/;
console.log(reg1.test("tem a palavra teste aqui?"));
console.log(reg2.test("Cachorro"));

//Definir um conjunto de caracteres para ser verificado
console.log(/[0-9]/.test("Existe o numero 7 aqui?"));
console.log(/[123]/.test("Existe o numero 123 aqui?"));

//caracteres especiais
// \d qualquer digito de caractere
// \w um caractere alfanumerico
// \s qualquer caractere com espaço em branco
// \D caracteres que não sejam numeros
// \W caractere não alfanumerico
// \S caractere que não seja espaço em branco
// .  qualquer caractere menos nova linha
const pontoRegex = /./;
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asd"));

const dRegex = /\d/;
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

const dRegex2 = /\D/;
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123asd"));

const sRegex = /\s/;
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));

const wRegex = /\w/;
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));

//regex com caracteres especiais
const dia = /\d\d/
console.log(dia.test("2019"));
console.log(dia.test("asd"));
console.log(dia.test("05"));

//operador not aceitam tudo menos alguns caracteres
const notab = /[^ab]/;
console.log(notab.test("abb"));
console.log(notab.test("aqui tem a"));

//operador plus mostra um elemento se repetindo indefinidamente
const umOuMais = /\d+/;
console.log(umOuMais.test("1518"));
console.log(umOuMais.test(""));

//operador question faz com o que o digito anterior seja opcional
const padrao = /Abaca?i/;
console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));

//operador de precisão insere o numero de ocorencias entre {}
const cep = /\d{5}-\d{3}/
console.log(cep.test("90250-761"));
console.log(cep.test("90240370"));

//metodo exec retorna um objeto com algumas informações a mais
const digitos = /\d+/;
console.log(digitos.exec("12365"));
console.log(digitos.exec("teste"));

//metodo match funciona semelhante ao exec
const frase = "o número 100 está aqui".match(/\d+/);
console.log(frase);

//choice pattern pode colocar uma instrução na regex como se fosse o "or-||"
const reg = /\w+: (Giovani|Bruna|Hero)/;
console.log(reg.test("Nome: Giovani"));
console.log(reg.test("Nome: Gustavo"))

//Validando um domínio
const validaDominio = /www?.\w+\.com.br|.com/;
console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.google.com.br"));
console.log(validaDominio.test("google.com"));

//validar email
const email = /\w+@\w+\.\w+/;
console.log(email.test("giovani.lima@everthefullstack.com.br"));

//validar data de nascimento
const dataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
console.log(dataNasc.test("07/07/1991"));
console.log(dataNasc.test("07/07/91"));