// q1
let marks = [70, 80, 65, 90, 85];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}

console.log(sum);

// q2
let arr = [12, 45, 2, 99, 34, 5];

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > max) {
        max = arr[i];
    }

    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(max);
console.log(min);
//q3
let names = ["Ali", "Ahmed", "Sara", "Fatima"];
let reversed = [];

for (let i = names.length - 1; i >= 0; i--) {
    reversed.push(names[i]);
}

console.log(reversed);

// q4
let students = ["Zaid", "Hania", "Umar", "Hania", "Aiman"];
let count = 0;

for (let i = 0; i < students.length; i++) {

    if (students[i] === "Hania") {
        count++;
    }
}

console.log(count);
//q5

let fruits = ["Apple", "Banana", "Guava"];

fruits.push("Mango");
fruits.pop();

console.log(fruits);

//q6

let cities = ["Karachi", "Lahore", "Islamabad"];

cities.unshift("Quetta");
cities.shift();

console.log(cities);

// q7

let colors = ["Red", "Blue", "Yellow", "Green", "Black"];

colors.splice(2, 1, "White", "Purple");

console.log(colors);

// q8
let items = ["Pen", "Book", "Copy", "Pencil", "Eraser", "Sharpener"];

let newArray = items.slice(1, 4);

items.splice(3, 2, "Marker");

console.log(newArray);
console.log(items);

