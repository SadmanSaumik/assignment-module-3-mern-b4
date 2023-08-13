// 1. Write a JavaScript function named printObjectProperties that takes an object as an argument and uses the for...in loop to print all the properties and their values in the following format: "property: value". If the object is empty, print "Object is empty".

function printObjectProperties(obj) {
  if (
    typeof obj === "object" &&
    obj !== null &&
    !Array.isArray(obj) &&
    Object.keys(obj).length !== 0
  ) {
    for (key in obj) {
      console.log(`${key} : ${obj[key]}`);
    }
  } else {
    console.log("Object is empty");
  }
}

const student = {
  name: "Sadman",
  roll: 1234,
  class: "XII",
  group: "Science",
};

printObjectProperties(student);

// 2. Write a JavaScript function named findMaxNumber that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.

function findMaxNumber(numbers) {
  if (Array.isArray(numbers)) {
    if (numbers.length !== 0) {
      return Math.max(...numbers);
    } else {
      return null;
    }
  } else {
    return "This is not an array";
  }
}

const numbers1 = [10, 20, 5, 30, 25];
const numbers2 = [];
const numbers3 = { name: "sadman", roll: 123, phone: "+8801234789" };
console.log(findMaxNumber(numbers1));
console.log(findMaxNumber(numbers2));
console.log(findMaxNumber(numbers3));

//3. Write a JavaScript function named mergeArrays that takes two arrays as arguments and returns a new array that merges both arrays using the spread operator.

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

console.log(mergeArrays(arr1, arr2));

//4. Write a JavaScript arrow function named calculateSquare that takes a number as an argument and returns the square of that number.

const calculateSquare = (number) => number * number;

console.log(calculateSquare(5));
console.log(calculateSquare(8));

//5. Write a JavaScript function named doubleNumbers that takes an array of numbers as an argument and uses the ES6 map method to return a new array where each number is doubled.

function doubleNumbers(numbers) {
  return numbers.map((num) => num * 2);
}
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));

//6.Create a JavaScript class named MathUtility with an ES6 static method called multiply. The multiply method should take two parameters and return their product.

class MathUtility {
  static multiply(a, b) {
    return a * b;
  }
}
console.log(MathUtility.multiply(5, 3));
console.log(MathUtility.multiply(2, 8));

//7. Create a JavaScript class named Animal with a constructor that takes two parameters: name and sound. The class should have a method named makeSound that logs the sound of the animal. Next, create a subclass of Animal named Dog. The Dog class should have an additional method named fetch that logs "Fetching the ball!".

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} makes a sound : ${this.sound}`);
  }
}

const animal = new Animal("Lion", "Roar");
animal.makeSound();

class Dog extends Animal {
  fetch() {
    console.log("Fetching the ball!");
  }
}
const dog = new Dog("Buddy", "Woof");
dog.makeSound();
dog.fetch();

//8 Create a JavaScript class named Person with a constructor that takes two parameters: name and age. The class should have a method named introduce that logs a greeting message including the person's name and age. Next, create a subclass of Person named Student. The Student class should have an additional property named major and an overridden introduce method. The overridden introduce method should log a message that includes the person's name, age, and major.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}`
    );
  }
}
const person1 = new Person("John", 30);
person1.introduce(); // Output: "Hello, my name is John and I am 30 years old."

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce(); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."
