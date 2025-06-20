//3.1 Tìm giá trị đầu tiên trong scores > 80. 
const scores = [85, 90, 78];
const findScore = scores.find(num => num > 80);
console.log(findScore);
//Tìm giá trị đầu tiên trong ages > 20.

const ages = [18, 21, 16, 25];
const findAge = ages.find(num => num > 20);
console.log(findAge);

//3.3 Tìm từ đầu tiên trong words có độ dài > 5. 

const words = ["apple", "banana", "cherry", "date"];

const findWord = words.find(num => num.length > 5);
console.log(findWord);