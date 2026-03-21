// Primitive data types
// primitive are called call by value, when ever you call them you get actually data copy not the reference to memory

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

// 1. Stack prmitive type example

let myYoutubeName = "ChetanMahajan"

let anotherName = myYoutubeName
anotherName = "NoMoreCoffe"
console.log(anotherName);

//2. Non-Primitive, Reference type example (heap)

let personeOne = {
    name: "Chetan",
    email: "chetan@gmail.com"
}

let personeTwo = personeOne

personeTwo.name = "Vaishnavi"

console.log(personeOne);
