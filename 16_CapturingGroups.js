let text1 = "yoyo";

let regex1 = /(yo)/g;
// refers to the first group. the expression with parenthesis ()
let regex2 = /(yo)\1/g;

console.log(text1.match(regex1));
console.log(text1.match(regex2));

let text2 = "1993-11-04";

/**
 * \1 refers to de first capturing group.
 * ?: specifies that the capturing group is not to be captured. 
 */
let regex3 = /^(?:\d{4})([-./])(\d{1,2})\1(\d{1,2})$/g;

console.log(text2.match(regex3));