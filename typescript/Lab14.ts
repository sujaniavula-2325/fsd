//task1
// class Student {
//     public name: string;
//     readonly id: number;
//     constructor(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//     }
// }
// let s1 = new Student("Sujani", 1);
// console.log("Name:", s1.name);
// console.log("ID:", s1.id);

//task2
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        console.log("Woof! Woof!");
    }
}
let animal = new Animal("Generic Animal");
animal.makeSound();
let dog = new Dog("Tommy", "Labrador");
console.log("Dog Name:", dog.name);
console.log("Breed:", dog.breed);
dog.makeSound();
