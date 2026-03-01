// task-1
// function move(direction: "up" | "down" | "left" | "right"): void {
//     console.log(`Moving ${direction}`);
// }

// move("up");
// move("left");

//task-2
function formatValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());  // String -> uppercase
    } else {
        console.log(Math.round(value));    // Number -> rounded
    }
}

// Example usage
formatValue("hello");  // Output: HELLO
formatValue(3.7);      // Output: 4
