// task1
// interface Student {
//     name: string;
//     marks: number;
// }

// interface StudentList {
//     students: Student[];
// }

// let data: StudentList = {
//     students: [
//         { name: "Nandini", marks: 85 },
//         { name: "Chandu", marks: 78 },
//         { name: "suji", marks: 92 }
//     ]
// };
// data.students.forEach(s => {
//     console.log("Name: " + s.name + ", Marks: " + s.marks);
// });

//task2

type PointType = {
    x: number;
    y: number;
};
interface PointInterface {
    x: number;
    y: number;
}
function printPoint(p: PointType | PointInterface): void {
    console.log(`x = ${p.x}, y = ${p.y}`);
}
let p1: PointType = { x: 10, y: 20 };
let p2: PointInterface = { x: 30, y: 40 };
printPoint(p1);
printPoint(p2);
