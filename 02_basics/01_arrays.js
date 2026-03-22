// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //add the elements at the start of the array
// myArr.shift() //removes the elements which is at start

// console.log(myArr.includes(9)); //returns boolean response
// console.log(myArr.indexOf(3)); //gives the index of that element

// const newArr = myArr.join() /* join two array but convert the result into string */

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) /* slice returns the starting given index element and skips the second given element so give -1 of second element*/

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) /* splice returns the starting given index element and gives till the second given index element and cuts the elements from existing array and whatever is got cut returns that */
console.log("C ", myArr);
console.log(myn2);