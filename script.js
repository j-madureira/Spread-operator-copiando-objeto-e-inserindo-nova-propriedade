//Copiando o objeto, e inserindo uma propriedade no objeto
//Array
let pessoas = [];

//Função para  inserir pessoas;
function inseirPessoas(nome,idade){
    return {
        nome,
        idade
    }
}

pessoas.push(inseirPessoas("João",33));

console.log(pessoas);

//Cópia objeto e inserindo mais uma propriedade

let maisN = {...pessoas[0],cidade:"São Roque"};

console.log(maisN);

//Função console.log(), para mostrar os dados do objeto

function mapa(){
    return console.log(`Nome: ${maisN.nome} idade: ${maisN.idade} cidade: ${maisN.cidade}`);

}

mapa();

console.log(pessoas[0]);