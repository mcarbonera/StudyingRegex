// Matching e-mail address
const text1 = "name@domain.com";
const regex1a1 = /\w*@\w*.com/g;
const regex1a2 = /.+@.+\..+/g;
const regex1a3= /^[^\s@]+@[^\s@.]+\.[^\s@]+$/g;
console.log(text1.match(regex1a1));
console.log(text1.match(regex1a2));
console.log(text1.match(regex1a3));

// Matching a Twitter Name
const text2 = "@name";
const regex2a1 = /^@\w+$/g;
const regex2a2 = /^@(\w+)$/;
console.log(text2.match(regex2a1));
console.log(text2.match(regex2a2));

// Testing Password
const text3 = "N2RN3/>zvd";
const regex3a1 = /^.{8,32}$/;
const regex3a2 = /[A-Z]/;
const regex3a3 = /[a-z]/;
const regex3a4 = /[0-9]/;
const regex3a5 = /[#!$%@&*+/<=>]/;

let checkPassword = function(password) {
  return password.match(regex3a1) && password.match(regex3a2) &&
  password.match(regex3a3) && password.match(regex3a4) &&
  password.match(regex3a5) ? true : false;
}

console.log(checkPassword(text3));

// Using replace
const text4 = "<b>This is bold</b>";
const regex4 = /b>/g;
console.log(text4.replace(regex4, "strong>"))

let data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", 
  "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];
let regex4a1 = /^(\w+), (\w+)$/;
data.map(name => name.replace(regex4a1, "$2 $1"))
  .filter(Boolean)
  .map(resultado => console.log(resultado));

// Matching words inside text.
const text5 = "Lets put several different words together and see what" +
  " we can match. Now the words are placed with more of then in" +
  " between together. Now together is before words.";
const regex5a1 = /\b(?:words\W+together)\b/g;
const regex5a2 = /\b(?:words\W+(?:\w+\W+){0,8}together)\b/g;
const regex5a3 = /\b(?:words\W+(?:\w+\W+){0,8}together)|(?:together\W+(?:\w+\W+){0,8}words)\b/g;
console.log(text5.match(regex5a1));
console.log(text5.match(regex5a2));
console.log(text5.match(regex5a3));

// Validating dates
const text6 = "24/06/1966 25/12/2000 19/04/1887 1/1/22 1/2/3 "+
  "1/12/123 1/12/12 12/1/12 1/2/1234 1/11/4312 12/1/4312";
const regex6a1 = /\b(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})\b/g;
const regex6a2 = /\b(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/([0-9]{2}){1,2}\b/g;
console.log(text6.match(regex6a1)); 
console.log(text6.match(regex6a2)); 

// Capturing Matched Text
/* Extract all numbers from text and capture them. Then sum. */
const text7 = "First number: 12, and a second number 100. Here is" +
  " the last number 15.";
const regex7 =/\b(\d+)\b/g;
let total = text7.match(regex7)
  .map(num => parseInt(num))
  .reduce((sum, value) => sum + parseInt(value, 10), 0);
console.log(total);

// Discovering Information about a Match
  /* Retrieve the starting index for the match, the length 
of the match and the actual match */
const text8 = "First number: 32, and a second number 100. Here is "+
  "the last number 15.";
const regex8 =/\b(\d+)\b/;

let resultado = {
  index: Number,
  length: Number,
  word: String,
  gotMatch: Boolean,
  iterate(regex, string) {
    let matchResult = regex.exec(string);
    this.gotMatch = matchResult && true;
    if(!matchResult) return false;
    this.index = matchResult.index;
    this.length = matchResult.length;
    this.word = matchResult[0];
    return true;
  },
  imprimir() {
    if(this.gotMatch) {
      console.log(`index: ${this.index} - length: ${this.length} `+
        `- word: ${this.word}`);    
    } else {
      console.log(`sem match`);
    }
  }
}

resultado.iterate(regex8, text8);
resultado.imprimir();

// Iterate over matches
console.log('------------------------------------');
let weGotStringToIterate = true;
const text9 = "First number: 32, and a second number 100. Here is "+
  "the last number 15.";
const regex9 =/\b(\d+)\b/g;

while(weGotStringToIterate) {
  weGotStringToIterate = resultado.iterate(regex9, text9);
  resultado.imprimir();
}