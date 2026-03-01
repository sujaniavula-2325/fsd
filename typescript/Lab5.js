function greetUser(name, title) {
    if (title === void 0) { title = "Mr./Ms."; }
    var greeting = "Hello, ".concat(title, " ").concat(name, "!");
    console.log(greeting);
    return greeting;
}
greetUser("Sujani");
greetUser("Kiran", "Dr.");
