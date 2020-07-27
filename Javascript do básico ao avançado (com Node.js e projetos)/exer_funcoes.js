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

//criar array com 5 itens, acessar o indice 1,3 e 4
let arrayCriado1 = [0,1,2,3,4];
console.log(arrayCriado1[1]);
console.log(arrayCriado1[3]);
console.log(arrayCriado1[4]);

//criar dois arrays e imprimir o numero de elementos de cada um
arrayCriado1 = [0,1];
let arrayCriado2 = [0,1,2,3];
console.log(arrayCriado1.length);
console.log(arrayCriado2.length);

//crie um objeto onibus com 8 rodas, 40 passageiros, 2 portas e imprima as propriedades
let objOnibus ={
    rodas: 8,
    passageiros: 40,
    portas: 2
};
console.log(objOnibus.rodas);
console.log(objOnibus.passageiros);
console.log(objOnibus.portas);

//adicionar a propriedade janela e deletar a propriedade rodas
objOnibus.janelas = 20;
delete objOnibus.rodas;
console.log(objOnibus);

//criar um array com 5 nomes e verificar se existe determinado nome
let nomes = ["Bruna", "Marcelo", "Giovani", "Hero", "Roney"];
if(nomes.includes("Pedro")){
    console.log("Existe esse nome");
} else {
    console.log("Não existe o nome procurado");
}

//cria dois arrays, um com 5 elementos e outro com menos
//fazer função que verifica o numero de elementos
//se tiver menos de 5, imprima poucos elementos
//se tiver mais imprima muitos elementos
let num1 = [1,2,3,4,5];
let num2 = [1,2,3,4];
let num3 = [1,2,3,4,5,6]

function verificaElementos(arrays){
    if(arrays.length > 5){
        console.log("muitos elementos");
    } else if(arrays.length < 5){
        console.log("poucos elementos");
    } else {
        console.log("tem 5 elementos");
    }
}
verificaElementos(num1);
verificaElementos(num2);
verificaElementos(num3);

//criar array com 5 elementos e interar entre todos eles
for(let i = 0; i < num1.length; i++){
    console.log(num1[i]);
};

let jsonObj = {
    "nome": "Giovani",
    "idade": "29",
    "profissao": "Desenvolvedor"
};
console.log(jsonObj.nome);
console.log(jsonObj.idade);
console.log(jsonObj.profissao);

//criar um array a parti de uma frase
let frase = "Eu sou um desenvolvedor muito bom";
let vetorFrase = frase.split(" ");
for(let i = 0; i < vetorFrase.length; i++){
    console.log(vetorFrase[i]);
};

//criar um objeto calculadora com as 4 operações básicas
const calculadora = {    
    soma: function(n1, n2){
        return n1 + n2;
    },

    sub: function(n1, n2){
        return n1 - n2;
    },

    mult: function(n1, n2){
        return n1 * n2;
    },

    div: function(n1, n2){
        if(n2 === 0){
            console.log("Não pode dividir por zero");
        } else{
            return n1 / n2;
        }
    }
}
console.log(calculadora.soma(1,2));
console.log(calculadora.sub(1,2));
console.log(calculadora.mult(1,2));
console.log(calculadora.div(1,2));

//criar uma classe simulando um banco com propriedade saldo, metodo saque e depósito
class Conta{
    constructor(saldo){
        this.saldo = saldo
    }
    deposito(saldo){
        this.saldo = this.saldo + saldo;
    }
    saque(saldo){
        this.saldo = this.saldo - saldo;
    }
}

//criar uma classe que simula um carrinho de compras
//propriedade itens, quantidade e valor
//criar metodo para adicionar e remover itens
class Item{
    constructor(id,item, qtd, valor){
        this.id = id;
        this.item = item;
        this.qtd = qtd;
        this.valor = valor;
    }
}
class Carrinho{

    lista = [];

    add(item){
        this.lista.push(item);
    }

    rmv(item){
        for(let itemCarrinho in this.lista){
            if(this.lista[itemCarrinho].id == item.id){
                this.lista.splice(this.lista.indexOf(this.lista[itemCarrinho]), 1);
                console.log("Removido");
            }
        }
    }
}
let carrinho = new Carrinho();
let item1 = new Item(1,"Calça", 1, 50);
let item2 = new Item(2,"Cueca", 3, 90);
carrinho.add(item1);
carrinho.add(item2);
carrinho.rmv(item1);
carrinho.rmv(item2);
for(let itemCarrinho in carrinho.lista){
    console.log(carrinho.lista[itemCarrinho]);
}

//crie um objeto que simula um endereço de um cliente
//propriedades: rua, bairro, cidade e estado
//no construtor, o endereço ja deve ser definido por completo
//criar metodos para atualizar todas as propriedades
class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado
    }
    set setRua(rua){
        this.rua = rua;
    }
    set setBairro(bairro){
        this.bairro = bairro;
    }
    set setCidade(cidade){
        this.cidade = cidade;
    }
    set setEstado(estado){
        this.estado = estado;
    }
}
let endereco = new Endereco("Rua são nicolau 850", "Estancia velha", "Canoas", "RS");
endereco.setEstado = "Rio Grande do Sul";
console.log(endereco);

//criar uma classe carro
//propriedades marca, cor, gasolina restante
class Carro{
    constructor(marca, modelo, tanque){
        this.marca = marca;
        this.modelo = modelo;
        this.tanque = tanque;
    }
    dirigir(){

        if(this.tanque == 0){
            console.log("Carro está sem gasolina, abasteça.");
        } else {
            while(this.tanque > 0){
                console.log("Combustivel restante = " + this.tanque);
                this.tanque --;
            }
        }
    }
    abastecer(gasolina){
        this.tanque = this.tanque + gasolina;
    }
}
let carro = new Carro("Ford", "Focus", 50);
console.log(carro);
carro.abastecer(50);
console.log(carro);
carro.dirigir();
carro.dirigir();

//criar uma classe conta bancaria
//pripriedades saldo na conta corrente, saldo na polpança e juros da polpança
//metodos depósito e saque e transferir dinheiro da poupança pra conta corrente e vice versa
//criar conta especial herdando da conta normal que dobra os juros da polpança
class ContaNormal{
    constructor(saldoConta, saldoPolp, jurosPolp){
        this.saldoConta = saldoConta;
        this.saldoPolp = saldoPolp;
        this.jurosPolp = jurosPolp;
    }
    depositoCC(valor){
        this.saldoConta = this.saldoConta + valor;
    }
    depositoP(valor){
        this.saldoPolp = this.saldoPolp + valor;
    }
    transfCc(valor){
        this.saldoPolp = this.saldoPolp - valor;
        this.saldoConta = this.saldoConta + valor;
    }
    transfP(valor){
        this.saldoConta = this.saldoConta - valor;
        this.saldoPolp = this.saldoPolp + valor;
    }
    saqueCc(valor){
        this.saldoConta = this.saldoConta - valor;
    }
    saqueP(valor){
        this.saldoPolp = this.saldoPolp - valor;
    }
    jurosBonus(){
        this.saldoPolp = this.saldoPolp * 0.2 + this.saldoPolp
    }
}
let conta = new ContaNormal(1000,100,1);
class ContaEspecial extends ContaNormal{
    constructor(saldoConta, saldoPolp, jurosPolp){
        super(saldoConta,saldoPolp,jurosPolp*2)
    }
}
let contaEspecial = new ContaEspecial(100,200,1);
conta.saqueCc(800);
conta.saqueP(500);
conta.depositoCC(800);
conta.depositoP(300);
conta.transfCc(100);
conta.transfP(800);
conta.jurosBonus();
contaEspecial.saqueCc(100);
contaEspecial.saqueP(200);
contaEspecial.depositoCC(800);
contaEspecial.depositoP(300);
contaEspecial.transfCc(100);
contaEspecial.transfP(800);
contaEspecial.jurosBonus();
console.log(contaEspecial);