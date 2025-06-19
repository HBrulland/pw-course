//yêu cầu số 1
let car = {
    "mark": "toyota",
    "model": "Corolla",
    "year": 2011
}

console.log("manufacturing year=", car.year);

//yêu cầu số 2
let person = {
    "name": "Huong",
    "address": {
        "street": "Street ABC",
        "city": "Cannes",
        "country": "France"
    }
}

console.log("street name=", person.address.street);

//yêu cầu số 3
let student = {
    "name": "Huong",
    "grades": {
        "math": 9,
        "english": "good"
    }
}
console.log("grade of english :", student['grades']['english']);

// yêu cầu số 4
let settings = {
    "volume": 50,
    "brightness": "medium"
};

settings.volume = 80;

console.log("new volume =", settings['volume']);

//Yêu cầu số 5
let bike = {
    "color": "red"
}

// yêu cầu 6
let employee = {
    "name": "Huong",
    "age": 42
};
delete employee.age;

console.log(employee);


// yêu cầu 7
const school = {
    ClassA: ["An", "Bình", "Châu"],
    ClassB: ["Đào", "Hương", "Giang"],
}