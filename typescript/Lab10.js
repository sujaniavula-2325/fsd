//task1
// interface User {
//     readonly id: number;
//     name: string;
//     age?: number;
// }
var calc = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    }
};
console.log("Addition: " + calc.add(10, 20));
console.log("Multiplication: " + calc.multiply(5, 4));
