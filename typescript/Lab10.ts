//task1
// interface User {
//     readonly id: number;
//     name: string;
//     age?: number;
// }

// let user1: User = {
//     id: 101,
//     name: "Sujani",
//     age: 20
// };
// console.log(user1.id);
// console.log(user1.name);
// console.log(user1.age);
// user1.name = "Avula";
// console.log(user1);

//task2

interface Calculator {
    add(a: number, b: number): number;
    multiply(a: number, b: number): number;
}
let calc: Calculator = {
    add(a: number, b: number): number {
        return a + b;
    },

    multiply(a: number, b: number): number {
        return a * b;
    }
};
console.log("Addition: " + calc.add(10, 20));
console.log("Multiplication: " + calc.multiply(5, 4));

