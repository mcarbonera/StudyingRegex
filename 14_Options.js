let text1 = "Each and every Tuesday, at the beginning of the day, we" +
" hold a staff meeting. At the Tuesday staff meeting, you will need to" +
" make a report on the past weeks progress, and you will receive" +
" assignments for the following Tuesday. Just be aware that somedays" +
" this Tuesday meeting might not occur. When that happens, we will make" +
" an announcement. ";
let regexDays = /\bmonday|tuesday|wednesday|thursday|friday|saturday|sunday\b/ig;

console.log(text1.match(regexDays));