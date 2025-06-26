// in cac ki tu cua str
const str = "Playwright";
for (let letter of str) {
    console.log(letter);
}

// tao mang dao nguoc cua str
// str.sort((a, b) => b - a);
// console.log(str);


//Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr 
const arr = [1, 2, 3, 4, 3, 55, 23];
let indexOfArray = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        indexOfArray = i;
        break;
    }
}
console.log("ví trí của số 3 đầu tiền là: " + indexOfArray);


for (i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        indexOfArray = i;
        continue;
    }
}
console.log("ví trí của số 3 cuối là: " + indexOfArray);


// 4 Lọc các phần tử xuất hiện 1 lần trong dupArr 
const dupArr = [1, 2, 3, 1, 2, 4, 5];

let uniqNumArray = [];
for (let i = 0; i < dupArr.length; i++) {

    let uniqNumber = dupArr[i];
    if (uniqNumArray.indexOf(uniqNumber) < 0) {
        uniqNumArray.push(uniqNumber);
    }
}

console.log(uniqNumArray);


