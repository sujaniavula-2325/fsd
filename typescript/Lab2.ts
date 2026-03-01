// let value: number = 100; 

// value = "Hello";
// console.log(value);
let arrays: string[] = ["hi", "hello", "good"];

function hello(): string {
    let output = "";
    arrays.forEach((data) => {
        output += data + "2 ";
    });
    return output;
}

console.log(hello());
