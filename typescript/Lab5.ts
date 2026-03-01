function greetUser(name: string, title: string = "Mr./Ms."): string {
    let greeting = `Hello, ${title} ${name}!`;
    console.log(greeting);
    return greeting;
}
greetUser("Sujani");
greetUser("Kiran", "Dr.");
