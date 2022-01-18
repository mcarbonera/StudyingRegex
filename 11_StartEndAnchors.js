/**
 * ^ - match to start.
 * $ - match to end.
 */

let text1 = "Send these foul beasts into the" +
" abyss - Gandalf";

let regex1 = /^Send/ig;
let regex2 = /^foul/ig;
let regex3 = /Gandalf$/ig;

console.log(text1.match(regex1));
console.log(text1.match(regex2));
console.log(text1.match(regex3));

let text2 = "Send these foul beasts into the" +
" abyss - Gandalf\nWhat about the legs? They" +
" don't need those - Orc\nSend me nudes - Me";

let regex4 = /^Send/igm;

console.log(text2.match(regex4));