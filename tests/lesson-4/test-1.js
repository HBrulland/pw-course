let departurePlanet = "trai dat";
let mission = "Khám phá Vũ trụ K15";
let crew = ["Huong", "Ly", "Trang", "Nhi", "Sun"];

function launchShip() {
    console.log("Chuẩn bị khởi động! Phi hành đoàn gồm:" + crew);
}
launchShip();


function calculateDistance() {
    const speed = 1000;
    const time = 24;
    let calculateDistance = 1000 * 24;

    console.log("Khoang cach voi diem den la:" + calculateDistance + "km");

}
calculateDistance();


function convertTimeToHex() {
    let decimalNumber = 120;
    let hexadecimalNumber = decimalNumber.toString(16);

    console.log("Thoi gian o diem den la: " + hexadecimalNumber);

}
convertTimeToHex();

function decryptCode() {
    let text = "K15 Challenge";
    let lowercaseCode = text.toLowerCase();
    let uppercaseCode = text.toUpperCase();

    console.log("Mat ma la: " + lowercaseCode + uppercaseCode);

}
decryptCode();


function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();