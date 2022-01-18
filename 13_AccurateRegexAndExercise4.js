let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", 
  "801-796-8010", "435-555-9801", "801-009-0909", 
  "435-222-8013", "801-777-6655", 
  "801-777-665-", "801-77A-6655", "801-778-665"];

let areaCode801 = /[0-9]{3}-[0-9]{3}-[0-9]{4}/g;

selectedPhones = phoneNums
  .map(phone => phone.match(areaCode801) && phone)
  .filter(Boolean);

console.log(selectedPhones);

/**
 * The content.js file contains a string of text stored in a variable 
 * text1. This string of text is a statement that contains a day of the 
 * week as a part of the statement. Write a regular expression that will 
 * match any day of the week and then replace that day of the week in 
 * the string with Monday. Display the results to the console. 
 */
let text1 = "Each and every Tuesday, at the beginning of the day, we" +
" hold a staff meeting. At the Tuesday staff meeting, you will need to" +
" make a report on the past weeks progress, and you will receive" +
" assignments for the following Tuesday. Just be aware that somedays" +
" this Tuesday meeting might not occur. When that happens, we will make" +
" an announcement. ";
let regexDays = [/[Mm]onday/g, /[Tt]uesday/g, /[Ww]ednesday/g, /[Tt]hursday/g, /[Ff]riday/g, /[Ss]aturday/g, /[Ss]unday/g];

let resultado = text1;
regexDays.forEach(day => {
  resultado = resultado.replace(day, "Monday");
});

console.log(resultado);