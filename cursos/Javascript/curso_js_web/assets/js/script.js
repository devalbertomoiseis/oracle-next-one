/*
Utilizamos o método querySelector para percorrer a árvore do DOM e encontrar o
elemento que queremos utilizando JavaScript. Porém existem outros métodos que 
podem ser utilizados para o mesmo fim.

document.getElementById(‘id’) seleciona o elemento pelo id passado.
document.getElementsByClassName(‘classe’) retorna um array dos elementos pelo nome da classe passada.
document.getElementsByTagName(‘tag’) retorna um array dos elementos pelo nome da tag passada
document.querySelectorAll(seletor) devolve todos os seletores com o mesmo nome
*/

let p = document.querySelector("p");
console.log(p);

document.querySelector(".content").textContent = "comprar maça";
