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

// yeu cau 4

const emailDomain = "example.com"
const numberOfUsers = 5;
console.log(`Generate emails for user1 to user${numberOfUsers}:`);
for (let i = 1; i <= numberOfUsers; i++) {
    const email = `user${i}@${emailDomain}`;
    console.log(email);
}

// yeu cau 5
const yearRevenue = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 120 },
    { "month": 3, "total": 130 },
    { "month": 4, "total": 140 },
    { "month": 5, "total": 150 },
    { "month": 6, "total": 160 },
    { "month": 7, "total": 170 },
    { "month": 8, "total": 180 },
    { "month": 9, "total": 190 },
    { "month": 10, "total": 210 },
    { "month": 11, "total": 211 },
    { "month": 12, "total": 212 }
];

let totalRevenue = 0;

yearRevenue.forEach(month => {
    totalRevenue += month.total;
});

console.log("Total Revenue:", totalRevenue);