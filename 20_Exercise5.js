/**
 * Iterate through the data provided. Use a regular expression
 * to store the names in a new array but change the order of
 * the name so first name is listed first and last name is last.
 */

let data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", 
  "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];
let regex = /^(\w+), (\w+)$/;
data.map(name => name.match(regex))
  .filter(Boolean)
  .map(match => `${match[2]} ${match[1]}`)
  .map(resultado => console.log(resultado));