// 1rst Daily Challenge

// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
// Test:

// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))



function makeAllCaps(arr){
    let newArr = []
    return new Promise((resolve, reject) => {
        arr.forEach(item =>{
            if(typeof item == 'string'){
                let newItem = item.toUpperCase()
                newArr.push(newItem)
            }
            else{
                reject('All the items are not strings')
            }
        })
        resolve(newArr)
}
)}

let arr = ['aaa', 'bbb', 'ccc', 0]

makeAllCaps(arr)
.then(result => console.log(result))
.catch(error => console.log(error))


function sortWords(arr){
    return new Promise((resolve, reject) => {
    if(arr.every(item => item == item.toUpperCase()) && arr.length >= 4){
        arr = arr.sort()
        resolve(arr)
    }
    else{
        reject('All items are not uppercased and / or the length is less than 4')
    }
}
)
}


// 2nd Daily Challenge

// let arr2 = ['IZH','ED', 'DES', 'DSS', 'CSD' ]
// sortWords(arr2)
// .then(result => console.log('All items are ' + result))
// .catch(error => console.log(error))


// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.


const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


const tojs = (element) => new Promise((resolve, reject) => {
        let jsObj = JSON.parse(element)
        
        if(Object.keys(jsObj).length != 0){
            resolve(jsObj)
        }
        else{
            reject('Empty object')
        }
    })


const toMorse = (morseJS) => new Promise((resolve, reject) => {
        let user = prompt('Write a word or a sentence')
        if(morseJS.hasOwnProperty(user)){
            let value = morseJS[user]
            let arr = [`${user} : ${value}`]
            resolve(arr)
        }
        else{
            reject('failed')
        }

})

tojs(morse)
.then(jsObj => toMorse(jsObj))
.then(result => console.log(result))
.catch(error => console.log(error))