
// yeu cau 1  In lần lượt từng phần tử của numbers.
const numbers = [1, 2, 3];
for (const i in numbers)
    console.log(numbers[i]);

//yeu cau 2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers 
sumOfNumber = numbers.reduce((sum, num) => num + sum, 0)

console.log(sumOfNumber);

// yeu cau 3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi 

let newNumbers = numbers.map(num => num * 2);
console.log(newNumbers);

