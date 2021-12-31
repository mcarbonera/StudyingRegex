/* Flags:
 * g - global, match more than one occurance.
 * i - case insensitive match.
 * m - Multi-line match.
 */

let txt = "Programming courses always starts with a hello world example.";
let regex1 = /s\s/;
let regex2 = /s\s/g;
let regex3 = /S\s/gi;

console.log(txt.match(regex1));
console.log(txt.match(regex2));
console.log(txt.match(regex3));

// Encontrando padrões na sequência.
console.log(regex3.exec(txt));
console.log(regex3.exec(txt));
console.log(regex3.exec(txt));
console.log(regex3.exec(txt));