/** Capturing html tags
 * (?<tag>...) gives a name to the group.
 * \k<tag> references that group.
 **/  
let text2 = "<h1>teste</h1><p>teste2</p><div>teste3</div>";
let regex2 = /<(?<tag>\w+)>[\w\s]+<\/\k<tag>>/g;
console.log(text2.match(regex2));