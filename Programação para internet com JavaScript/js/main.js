var nome = "Giovani Lima";
var idade = 29;
alert(nome + " tem " + idade);

var frutas = ["a", "b", "c"];
console.log(frutas);

//adiciona elemento na lista
frutas.push("d");

//remove elemento na lista
frutas.push("a");

//transforma em string
frutas.toString();
//transforma em string mas pode inserir separadores ou não
frutas.join()

//dicionário
var dic_fruta = {mome:"maça", cor:"vermelha"};
console.log(dic_fruta.nome);

if(idade > 18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}

//recebe informação pelo prompt
//var vr_prompt = prompt("qual sua idade?");

var count = 0;
while(count <= 5){
    count++;
}

for(count = 0;count <=5; count++){
    alert(count);
}

var data = new Date();

function soma(n1, n2){
    return n1+ n2;
}

function set_replace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(set_replace("Vai Japão", "Japão", "Brasil"));