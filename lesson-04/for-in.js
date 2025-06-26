//yeu cau 1 In tên và giá trị mỗi thuộc tính của student 
const student = {
    "name": "Alex",
    "age": 10,
    "salary": 20
};
for (let stuInfo in student) {

    console.log(stuInfo, student[stuInfo]);

}

//yeu cau 2 Tính tổng các giá trị số trong student
let numberOnlyArr = [];
let totalOfNumber = 0;
for (let stuValue in student) {
    const numOnly = student[stuValue];
    if (typeof numOnly === 'number') {
        numberOnlyArr.push(numOnly);

    }
    //console.log(numberOnlyArr);
    totalOfNumber = numberOnlyArr.reduce((total, num) => total + num, 0)
}


console.log(totalOfNumber);

// Tạo mảng chứa tên các thuộc tính của student 

let proNameOfStudentArr = [];
for (let proName in student) {
    if (proName = proName) {
        proNameOfStudentArr.push(proName);
    }
}
console.log(proNameOfStudentArr);