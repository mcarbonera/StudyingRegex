/* Meta Characters
 * ^ $ . * + ? = ! : | \ / ( ) [ ] { }
 */

/* Control Characters
 * \t - tab
 * \v - vertical tab
 * \n - newline
 * \r - carriage return
 */

/* Exercise 1:
 * Using the provided array, create a second array that only
 * includes the numbers with the 801 area code. 
 * (The area code is the first 3 numbers.)
 * Make sure that the phone numbers are valid
 * (nnn-nnn-nnnn).
 */

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", 
  "801-796-8010", "435-555-9801", "801-009-0909", 
  "435-222-8013", "801-777-6655", 
  "801-777-665-", "801-77A-6655", "801-778-665"];

let areaCode801 = /801-\d\d\d-\d\d\d\d/;

selectedPhones = phoneNums.map(phone => phone.match(areaCode801) && phone)
  .filter(Boolean);

console.log(selectedPhones);