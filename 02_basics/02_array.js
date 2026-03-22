const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) /* This treats dc_hearos as object so changes marvel_heros array inside a array */

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) /* Does the same as push but creates new arrays*/

// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] /* This ...variable is called as spill */

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) /* Instead of infinity we can give number which will tell how many layers it needs to flatten it.*/
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting
/* This can't conver to array so this Array.from({name: "hitesh"})
give empty string.*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));