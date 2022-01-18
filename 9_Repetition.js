let text1 = "<p>Paragrafo1</p>" +
  "<p>Paragrafo2</p>";

  // greedy
let regex1 = /<p>.*<\/p>/g;
  // lazy
let regex2 = /<p>.*?<\/p>/g;

console.log(text1.match(regex1));
console.log(text1.match(regex2));

/* repetition {min, max} times */
let text2 = "My telephone number is as follows:" +
  " 801-555-6789.";
let regex3 = /\w{3,5}/g;

console.log(text2.match(regex3));

/* Hexadecimal */
let text3 = "#FFf123 #abc123 #e1f2a3";
let regex4 = /#[0-9A-Fa-f]{6}/g;
console.log(text3.match(regex4));

/* Phone */
let text4 = "801-555-6789";
let regex5 = /\d{3}-\d{3}-\d{4}/g;
console.log(text4.match(regex5));

/* ? - 0 or 1 */
let text5 = "I got apples from apple tree.";
let regex6 = /apples?/g;
console.log(text5.match(regex6));

/* lazyness with min, max */
let text6 = "32-4444-1, 45-555552-1, 65-454";
let regex7 = /\d{2}-\d{4,6}?-/g;
console.log(text6.match(regex7));

/* + - 1 or many */
let text7 = "Warning warning! Warning!! warning!!!";
let regex8 = /[Ww]arning!+/g;
console.log(text7.match(regex8));