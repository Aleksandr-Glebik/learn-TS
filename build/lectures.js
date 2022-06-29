"use strict";
// interface IceCream {
//    flavor: string;
//    scoops: number;
//    instructions?: string;
// }
// interface Sundae extends IceCream {
//     sauce?: 'chocolate' | 'caramel' | 'strawberry';
//     nuts?: boolean;
//     whippedCream?: boolean;
//     instructions?: string;
// }
// let iceCream: IceCream = {
//     flavor: 'vanilla',
//     scoops: 2
// }
// let myIceCream: Sundae = {
//     flavor: 'vanilla',
//     scoops: 2,
//     sauce: 'caramel',
//     nuts: true
// }
// // console.log(iceCream.flavor)
// // console.log(iceCream.scoops)
// /* function tooManyScoops(dessert: IceCream) {
//     if (dessert.scoops >= 4) {
//         return dessert.scoops + ' is too many scoops!'
//     } else {
//         return 'You order will be ready soon!'
//     }
// } */
// function tooManyScoops(dessert: Sundae) {
//     if (dessert.scoops >= 4) {
//         return dessert.scoops + ' is too many scoops!'
//     } else {
//         return 'You order will be ready soon!'
//     }
// }
// console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}))
// interface IceCreamArray {
//     [index: number]: string;
// }
// let myIceCream: IceCreamArray;
// myIceCream = ['chocolate', 'vanilla', 'strawberry'];
// let myStr: string = myIceCream[0];
// console.log(myStr);
// const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// // Interface describing the shape of our json data
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }
// async function fetchPosts(url: string) {
//     let response = await fetch(url);
//     let body = await response.json();
//     return body as Post[];
// }
// async function showPost() {
//     let posts = await fetchPosts(fetchURL);
//     // Display the contents of the first item in the response
//     let post = posts[0];
//     console.log('Post #' + post.id)
//     // If the userId is 1, then display a note that it's an administrator
//     console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
//     console.log('Title: ' + post.title)
//     console.log('Body: ' + post.body)
// }
// showPost();
// function displayAlert(message: string) {
//     alert('The message is ' + message);
// }
// displayAlert('sasha')
// displayAlert(10)
/* function sum(input) {
    let total =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

sum(5) */
// function sum(input: number[]): number {
//     let total: number =  0;
//     for(let count = 0; count < input.length; count++) {
//         if(isNaN(input[count])){
//             continue;
//         }
//         total += Number(input[count]);
//     }
//     console.log(total)
//     return total;
// }
// sum([1, 'two', 3]
// sum([1, 2, 3]
// interface Message {
//     text: string;
//     sender: string;
// }
// function displayMessage({text, sender}: Message) {
//     console.log(`Message from ${sender}: ${text}`)
// }
// displayMessage({sender: 'Christopher', text: 'hello, world'});
// let addThreeNumbers = (x: number, y: number, z?: number): number => {
//     if((z === undefined)) {
//         return x + y;
//     } else {
//         return x + y + z;
//     }
// }
// console.log(addThreeNumbers(10, 20))
// type calculator = (x: number, y: number) => number;
// interface Calculator {
//     (x: number, y: number): number;
// }
// let addNumbers: Calculator = (x: number, y: number): number => x + y;
// let subtractNumbers: Calculator = (x: number, y: number): number => x - y;
// // console.log(addNumbers(1, 2));
// // console.log(subtractNumbers(1, 2));
// let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
//     if (operation === 'add') {
//         return addNumbers;
//     } else {
//         return subtractNumbers;
//     }
// }
// console.log(doCalculation('add')(1, 2))
// console.log(doCalculation('subtract')(3, 2))
// let test: string = "hello world"; test = 23;
// function func(a: number, b: number){ console.log(a + b) }
// func('1','2')
// class Car {
//     //Properties
//     private static numberOfCars: number = 0;
//     private _make: string;
//     private _color: string;
//     private _doors: number;
//     // Constructor
//     constructor(make: string, color: string, doors = 4) {
//         this._make = make;
//         this._color = color;
//         if ((doors % 2) === 0) {
//             this._doors = doors;
//         } else {
//             throw new Error('Doors must be an even number');
//         }
//         Car.numberOfCars++;
//     }
//     // Accessors
//     get make() {
//         return this._make;
//     }
//     set make(make) {
//         this._make = make;
//     }
//     get color() {
//         return 'The color of the car is ' + this._color;
//     }
//     set color(color) {
//         this._color = color;
//     }
//     get doors() {
//         return this._doors;
//     }
//     set doors(doors) {
//         if ((doors % 2) === 0) {
//             this._doors = doors;
//         } else {
//             throw new Error('Doors must be an even number');
//         }
//     }
//     // Methods
//     accelerate(speed: number): string {
//         return `${this.worker()} is accelerating to ${speed} MPH.`
//     }
//     brake(): string {
//         return `${this.worker()} is braking with the standard braking system.`
//     }
//     turn(direction: 'left' | 'right'): string {
//         return `${this.worker()} is turning ${direction}`;
//     }
//     // This function performs work for the other method functions
//     protected worker(): string {
//         return this._make;
//     }
//     public static getNumberOfCars(): number {
//         return Car.numberOfCars;
//     }
// }
// let myCar1 = new Car('Cool Car Company', 'blue', 2);
// console.log(myCar1.color);
// console.log(myCar1._color);
// let myCar2 = new Car('Galaxy Motors', 'red', 4);
// let myCar3 = new Car('Galaxy Motors', 'gray');
// console.log(myCar3.doors);  // returns 4, the default value
// console.log(myCar1.accelerate(35));
// console.log(myCar1.brake());
// console.log(myCar1.turn('right'));
// myCar1.
// let myCar1 = new Car('Cool Car Company', 'blue', 2);
// let myCar2 = new Car('Galaxy Motors', 'blue', 2);
// console.log(Car.getNumberOfCars());
// interface Vehicle {
//     make: string;
//     color: string;
//     doors: number;
//     accelerate(speed: number): string;
//     brake(): string;
//     turn(direction: 'left' | 'right'): string;
// }
// class ElectricCar extends Car {
//     // Properties unique to ElectricCar
//     private _range: number;
//     // Constructor
//     constructor(make: string, color: string, range: number, doors = 2) {
//         super(make, color, doors);
//         this._range = range;
//     }
//     // Accessors
//     get range() {
//         return this._range;
//     }
//     set range(range) {
//         this._range = range;
//     }
//     // Methods
//     charge() {
//         console.log(this.worker() + " is charging.")
//     }
//     brake(): string {
//         return `${this.worker()} is braking with the regenerative braking system.`
//     }
// }
// let spark = new ElectricCar('Spark Motors','silver', 124, 2);
// let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
// console.log(eCar.doors);         // returns the default, 2
// spark.charge();
// console.log(spark.brake())
// interface Dog {
//     id?: number;
//     name: string;
//     age: number;
//     description: string;
// }
// async loadDog(id: number): Dog {
//     return await (await fetch('demoUrl')).json() as Dog;
// }
// class DogRecord implements Dog {
//     id: number;
//     name: string;
//     age: number;
//     description: string;
//     constructor({name, age, description, id = 0}: Dog) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//         this.description = description;
//     }
//     static load(id: number): DogRecord {
//         // code to load dog from database
//         return dog;
//     }
//     save() {
//         // code to save dog to database
//     }
// }
