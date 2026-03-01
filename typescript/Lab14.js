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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//task2
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Animal makes a sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var animal = new Animal("Generic Animal");
animal.makeSound();
var dog = new Dog("Tommy", "Labrador");
console.log("Dog Name:", dog.name);
console.log("Breed:", dog.breed);
dog.makeSound();
