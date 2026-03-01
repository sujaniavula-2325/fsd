// task-1
// function move(direction: "up" | "down" | "left" | "right"): void {
//     console.log(`Moving ${direction}`);
// }
// move("up");
// move("left");
//task-2
function formatValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(Math.round(value));
    }
}
formatValue("hello");
formatValue(3.7);
