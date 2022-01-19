/**
 * Lookeahead groups can verify a match without consuming characters
 * For example, for password you may want to check if there are
 * at least 8 characters, at least 1 uppercase character and 1
 * lowercase character. 
 * 
 * Lookahead groups can check each requirement individually.
 */

let text = "www.google.com www.outlook.com www.youtube.com";
let regex = /\w+(?=\.com)/g;
console.log(text.match(regex));

let text2 = "Ab123456";
let regex2 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
console.log(text2.match(regex2));

/**
 * Negative lookeahead group
 * with ?! we can check if a pattern is not present.
 */
let text3 = "zb123456";
let regex3 = /^(?=.{8,})(?!.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
console.log(text3.match(regex3));

/**
 * Lookbehind groups
 * It verify
 */
let text4 = "Brazil are negotiating with China and Russia to ressurect " +
"Getulio Vargas. In exchange, an agreement was offered that consisted " +
"Bolsonaro giving the ass to the leaders of these countries. They " +
"refused 30 attempts, but they will do it for $999 trillion dollars.";
let regex4 = /(?<=\$|€)\d+/g;
console.log(text4.match(regex4));

let regex5 = /(?<!\$|€)\d+/g;
console.log(text4.match(regex5));