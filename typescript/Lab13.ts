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
class Student {
    public name: string;
    private rollNo: number;
    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }
    showRollNo() {
        console.log("Roll No:", this.rollNo);
    }
}
let student2 = new Student("Rahul", 101);
console.log(student2.name);
student2.showRollNo();
