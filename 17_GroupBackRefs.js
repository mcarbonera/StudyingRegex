let text1 = "a1c1d5c1d5b2b3d4";
let regex1 = /([a-d][1-5]){3}/g;
console.log(text1.match(regex1));

// Capturing html tags
let text2 = "<h1>teste</h1><p>teste2</p><div>teste3</div>";
let regex2 = /<(\w+)>[\w\s]+<\/\1>/g;
console.log(text2.match(regex2));