// 1.1 kiem tra tat ca gia tri trong scores > 70 khong?
const scores = [85, 90, 78];

const verifyScore = scores.every(num => num > 70);
console.log(verifyScore);

// kiem tra gia tri trong ages co >15 khong? 

const ages = [18, 21, 16, 25]
const verifyAge = ages.every(num => num > 15);
console.log(verifyAge);

//Kiểm tra tất cả từ trong words có độ dài > 3 không.

const words = ["apple", "banana", "cherry", "date"];
const wordLength = words.every(num => num.length > 3);
console.log(wordLength);