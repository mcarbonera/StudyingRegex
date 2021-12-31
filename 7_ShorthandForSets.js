/**
 * \d [0-9]         digit
 * \w [a-zA-Z0-9_]  word
 * \s [\t\r\n]      space
 * \D [^0-9]        Not digit
 * \W [^a-zA-Z0-9_] Not word
 * \s [^\t\r\n]     Not space
 */

const text1 = "String with numbers (12345)\n" +
"Second line _ (12345)      3 Tabs.";

const regex1 = /\d/g;
const regex2 = /\w/g;
const regex3 = /\s/g;
const regex4 = /\D/g;
const regex5 = /\W/g;
const regex6 = /\S/g;

console.log(text1.match(regex1));
console.log(text1.match(regex2));
console.log(text1.match(regex3));

console.log(text1.match(regex4));
console.log(text1.match(regex5));
console.log(text1.match(regex6));


const regexTeste = /\w\w\w/g;
const textoTeste = "He is holding his hat in his hand.";
console.log(textoTeste.match(regexTeste));