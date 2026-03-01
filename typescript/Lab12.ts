//Lab12
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// enum Status {
//     PENDING = "PENDING",
//     SUCCESS = "SUCCESS",
//     FAILED = "FAILED"
// }
// function printStatusOrDirection(value: Direction | Status): void {
//     console.log("Value is: " + value);
// }
// let dir: Direction = Direction.Up;
// let stat: Status = Status.SUCCESS;
// printStatusOrDirection(dir);
// printStatusOrDirection(stat);
// let d = Direction.Left;
// let s = Status.FAILED;
// console.log("Direction:", d);
// console.log("Status:", s);

//task2
function printInputValue(): void {
    let inputElement = document.getElementById("username") as HTMLInputElement;

    let value: string = inputElement.value;

    console.log("Input Value: " + value);
}
