// Ex 1  Function that compare  two numbers and returns max

// const maxOfTwo = (x, y) => {
//     if(x > y){
//         return x
//     }
//     else {
//         return y
//     }
// }
// console.log(maxOfTwo(2,5))


// Ex 2 Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

// const maxOfThree = (x, y, z) => {
//     if(x > y && x > z) {
//         return x
//     }
//     else if (y > z) {
//         return y
//     } 
//     else {
//         return z
//     }
// }
// console.log(maxOfThree(2, 8, 7))

// Ex 3  Define a function, as a function declaration, isCharAVowel that takes a character as an     argument and returns true if it is a vowel, false otherwise.

// const isCharAVowel = (x) => {
//     let vowel = [ 'a', 'e', 'i', 'o' ,'u']
//     for(let j = 0; j <= 4; j++) {
//         if(vowel[j] === x) {
//             return true
//         }
//     }
// }
// console.log(isCharAVowel('u'))

// Ex 4 Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11

// const sumArray = (x, y, z) => {
//     const arr = [x, y, z]
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
// }

// console.log(sumArray(1, 2, 3))


// Ex 5 Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

const multiplyArray = (x, y, z) => {
    //     const arr = [x, y, z]
    //     let sum = 0
    //     for(let i = 0; i < arr.length; i++) {
    //         sum *= arr[i]
    //     }
    // }
    // console.log(multiplyArray(1, 2, 3))

// Ex 6 Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

// const numArgs = (..arg) => {
//     return arg.length
// }
// console.log(numArgs(1, 2, 3, 4, 5))

// Ex 7 Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

const reverseString = (str) => {
    return str.split("").reverse().join("");
}

// Ex 9 Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"]

// let filter = 3
// const wordArray = ["PerScholas", "Software", "Engineering", "Bootcamp"]
// const stringLongerThan = (arr, filter) => {
//     console.log(arr)
//     const result = []
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].length > filter) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
