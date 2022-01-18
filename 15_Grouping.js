let text1 = "a5c3a2b1d1";

let regex1 = /([a-d][1-5]){5}/g

console.log(text1.match(regex1));

let text2 = "All mondays are followed by tuesdays that are followed by"+
  " wednesdays. Today is monday, so tomorrow will be tuesday and then"+
  " we will have wednesday";
let regex2 = /\bmonday|tuesday|wednesday|thursday|friday|saturday|sunday\b/ig;
let regex3 = /\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/ig;

console.log(text2.match(regex2));
console.log(text2.match(regex3));

let text3 = '1993-11-04';
let regex4 = /^(\d{4})[-./](\d{1,2})[-./](\d{1,2})$/g, 
  arr = regex4.exec(text3), 
  year, 
  month, 
  day;

// RESET REGEX INDEX (BECAUSE THIS PARTICULAR REGEX IS GLOBAL)
regex4.lastIndex = 0;
if(regex4.test(text3)) {
  year = arr[1];
  month = arr[2];
  day = arr[3];
  console.log("deu certo: ", year, month, day);
} else {
  console.log("Wrong format");
}

let text4 = "1993/11/04 1993 11 04 1993.11.04 1993-11-04";
text4.split(' ').forEach(date => {
  console.log(date.match(regex4));
})