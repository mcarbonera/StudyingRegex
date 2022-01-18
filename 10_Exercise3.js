/**
 * Validate phone numbers entered into the text field. As
 * the number is entered, check to see if it matches these
 * formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn,
 * nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change
 * the text color from red to green.
 * 
 * Use several different phone numbers to test.
 * 
 * HINT: You can use the keyup event to respond to entered 
 * text.
 */ 

let phones = ["(123)-456-7890",
  "123.456.7890",
  "123-456-7890",
  "1234567890",
  "(123)456-7890",
  "(123-456-7890",
  "123)-456-7890",
  "123.456-1234",
  "123-456.1234"]

let regex = /(\(\d{3}\)|\d{3})[-.]?\d{3}[-.]?\d{4}/g

phones.map(phone => phone.match(regex) && phone)
.filter(Boolean)
.forEach(phone => console.log(phone));