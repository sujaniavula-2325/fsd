//task1
// type Point = {
//     x: number;
//     y: number;
// };
// function printPoint(point: Point): void {
//     console.log(`Point coordinates: x = ${point.x}, y = ${point.y}`);
// }
// const p1: Point = { x: 10, y: 20 };
// printPoint(p1);
function printStudent(s) {
    console.log("Name: ".concat(s.name, ", Age: ").concat(s.age, ", Course: ").concat(s.course));
}
var student1 = {
    name: "Sujani",
    age: 20,
    course: "CSE"
};
printStudent(student1);
