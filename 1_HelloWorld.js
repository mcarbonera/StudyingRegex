// Site: Regex Pal
let txt = "Programming courses always starts with a hello world example.";

let regex1 = new RegExp("hello");
let regex2 = /worlds/;

// Retorno true/false
console.log(regex1.test(txt));
console.log(regex2.test(txt));

// Retorna detalhe.
console.log(regex1.exec(txt));
console.log(regex2.exec(txt));

// Retorno igual ao anterior
console.log(txt.match(regex1));
console.log(txt.match(regex2));

// Retorna índice (-1 se não encontrar)
console.log(txt.search(regex1));
console.log(txt.search(regex2));

// Sobrescreve.
console.log(txt.replace(regex1, "Teste"));

// Quebra em lista.
console.log(txt.split(regex1));
