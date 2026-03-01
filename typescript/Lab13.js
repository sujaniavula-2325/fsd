// task 1
// class Student {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let student1 = new Student("Sujani", 20);
// console.log("Name:", student1.name);
// console.log("Age:", student1.age);
//task2
var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.showRollNo = function () {
        console.log("Roll No:", this.rollNo);
    };
    return Student;
}());
var student2 = new Student("Rahul", 101);
console.log(student2.name);
student2.showRollNo();
