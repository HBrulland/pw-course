const { table } = require("console");

//yêu cầu 1
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;

}

console.log(sum);

//yêu cầu 2
const tableNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

tableNumbers.forEach(tableNum => {
    console.log(`\n--- Bảng cửu chương của ${tableNum} ---`);
    multipliers.forEach(multiplier => {
        const result = tableNum * multiplier;
        console.log(`${tableNum} x ${multiplier} = ${result}`);
    });
});


// yêu cầu 3
const oddNumbs = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 != 0) {
        oddNumbs.push(i);

    }
}
console.log(oddNumbs);
