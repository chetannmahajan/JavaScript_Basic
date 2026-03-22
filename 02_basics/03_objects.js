//Objects can be created by literal and constructors

//Whenver created from contructor then only singleton object is created.

// singleton
// Object.create

// object literals

const mySym = Symbol("key1") //This is how we declare the symbol.


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  /* This is how we use symbol in a variable as key using [] */
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) /* Once you use Object.freeze(ObjectName) this you can't change the values of this object. */
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

//example how we can assign function to a variable.
JsUser.greeting = function(){ 
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); /* This referrence to current object.*/
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());