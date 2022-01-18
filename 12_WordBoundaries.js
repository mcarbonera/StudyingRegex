/**
 * \b - Pattern bounded by a non-word character.
 * \B - Pattern bounded by a word character.
 */

let text = "Implant this idea: plan to plant"+
" multiple trees on this planet.";

let regex1 = /plan/g
let regex2 = /\bplan/g
let regex3 = /\bplan\b/g
let regex4 = /\Bplan\B/g

console.log(text.match(regex1));
console.log(text.match(regex2));
console.log(text.match(regex3));
console.log(text.match(regex4));

console.log(text.split(regex1));
console.log(text.split(regex2));
console.log(text.split(regex3));
console.log(text.split(regex4));