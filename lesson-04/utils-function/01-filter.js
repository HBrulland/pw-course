// 2.1 Lọc các giá trị trong scores > 80. 
const scores = [85, 90, 78];

const filterScore = scores.filter(num => num > 80);
console.log(filterScore);

//2.2 Lọc các giá trị trong ages ≥ 18.
const ages = [18, 21, 16, 25];
const filterAge = ages.filter(num => num > 18);
console.log(filterAge);

//Lọc các từ trong words có độ dài > 5.
const words = ["apple", "banana", "cherry", "date"];

const filterWord = words.filter(num => num.length > 5);
console.log(filterWord);
