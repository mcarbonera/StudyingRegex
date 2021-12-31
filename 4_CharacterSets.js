const text = "grey gray. gray;";

const regex1 = /[1234]/g;
const regex2 = /gr[ae]y[ .]/g;

//text.match(regex2)
console.log(text.match(regex2));