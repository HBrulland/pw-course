function printHelloMember() {

}

const helloName = ["A", "B", "C", "D"];
for (let i = 0; i <= helloName.length; i++) {
    printHelloMember(helloName[i]);
}

function getMax(a, b) {
    if (a > b) {
        return a;

    }
    console.log("run code");
    return b;
}
const maxVal = getMax(2, 20);
console.log(maxVal);
