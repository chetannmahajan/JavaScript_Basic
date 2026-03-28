const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

//let's take an example of shopping cart of courses

const courses = [
        {
            name: "Java course",
            price: 999
        },
        {
            name: "Java script course",
            price: 1999
        },
        {
            name: "Python course",
            price: 5999
        },
        {
            name: "Data science course",
            price: 12999
        }
]

const totalCartPrice = courses.reduce( (accumulator,course) => (accumulator+course.price),0)
console.log(totalCartPrice);


const totalCartPrice1 = courses.reduce(function (accumulator,course) {
    return accumulator+course.price
},0);

console.log(totalCartPrice1);

