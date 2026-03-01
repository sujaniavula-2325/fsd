var arrays = ["hi", "hello", "good"];
function hello() {
    var output = "";
    arrays.forEach(function (data) {
        output += data + "2 ";
    });
    return output;
}
console.log(hello());
