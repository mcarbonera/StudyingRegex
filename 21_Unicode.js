let data = "Smith, Andrea";
let regex = /\u0061/g;

console.log(data.match(regex));

let texto2 = "𝄞 𝄞 𝄞";
let regex2 = /\u{1D11E}/gu; // u para incluir unicode
                            // Isso é coisa do ES6.

console.log(texto2.match(regex2));
