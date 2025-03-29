// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.
//code below

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

//console.log(ages)

let firstAge = ages[0]
let lastAge = ages[ages.length - 1]
let difference = lastAge - firstAge;

//console.log(difference)

ages.push(35)

firstAge = ages[0]
lastAge = ages[ages.length - 1]
difference = lastAge - firstAge;

//console.log(difference)

let totalAge = 0;
for(let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}

let averageAge = totalAge / ages.length;
//console.log("average age:", averageAge)


//code above
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
//code below

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//console.log(names)

let totalLetters = 0;
for (let i = 0; i< names.length; i++) {
    totalLetters += names[i].length;
}

let averageLetters = totalLetters / names.length;
//console.log(averageLetters)

let conacatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    conacatenatedNames += names[i];
    if (i < names.length - 1){
        conacatenatedNames += ' ';
    }
}
//console.log(conacatenatedNames)

//code above
// How do you access the last element of any array?

        //console.log(arr[array - 1])

// How do you access the first element of any array?

        //console.log(arr[0])

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//console.log(nameLengths)

 //for (let i = 0; i < names.length; i++) {
    // names[i] = names[i].length;
 //}
//console.log(names, nameLengths)

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let totalLength = 0;
for (let i = 0; i < names.length; i++) {
    totalLength += names[i].length;
}
//console.log(totalLength)

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

 function repeatWord(word, n){
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
 }

 let repeated = repeatWord('pie', 7);
 //console.log(repeated)

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function fullName(first, last){
    return first + ' ' + last;
}
let full = fullName('Andy', 'Weir')
//console.log(full)

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function totalAmount(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum > 100;
}
let resultA = totalAmount([15, 8, 12, 39, 52])
//console.log(resultA)

let resultB = totalAmount([32, 16, 3, 1, 0])
//console.log(resultB)

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

let myArray = [23, 26, 61, 65, 69]

let arrayAverage = 0;
for(let i = 0; i < myArray.length; i++) {
    arrayAverage += myArray[i];
}

let endNumber = arrayAverage / myArray.length;
//console.log(endNumber)

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isArray1Bigger(array1, array2) {
    let average1 = array1.reduce((sum, num) => sum + num, 0) / array1.length;
    let average2 = array2.reduce((sum, num) => sum + num, 0) / array2.length;
    return average1 > average2;
}

let test1 = isArray1Bigger([60, 45, 27, 39], [30, 22, 62, 54])
//console.log(test1)

let test2 = isArray1Bigger([30, 22, 62, 54], [60, 45, 27, 39])
//console.log(test2)

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
let result1 = willBuyDrink(true, 15)
//console.log(result1)

let result2 = willBuyDrink(false, 12)
//console.log(result2)

let result3 = willBuyDrink(true, 9.60)
//console.log(result3)

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it

// Morse code to English dictionary
const morseCodeDict = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H',
    '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P',
    '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
    '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '/': ' ' // Space is represented by '/'
  };
  
  // Function to decode Morse code to English text
  function decodeMorse(morseCode) {
    // Split the morse code string by spaces to get each individual character
    const morseWords = morseCode.trim().split('   '); // Morse words are separated by 3 spaces
    let decodedMessage = '';
  
    // Iterate over each word
    for (let word of morseWords) {
      // Split each word into individual Morse characters (separated by single space)
      const morseChars = word.split(' ');
  
      // Decode each character and append to the result
      for (let char of morseChars) {
        decodedMessage += morseCodeDict[char] || ''; // If no match found, add an empty string
      }
  
      // Add space after each word (represented by 3 spaces in Morse code)
      decodedMessage += ' ';
    }
  
    return decodedMessage.trim(); // Remove the last extra space
  }
  
  // Test the function with an example
  const morseCode = ".... . .-.. .-.. ---   .-- --- .-. .-.. -..";
  const englishText = decodeMorse(morseCode);
  //console.log(englishText); // Output: "HELLO WORLD"
  

  class Animal {
    constructor(name, type, weight, height, location) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.height = height;
    this.location = location;
    }
    
    describe() {
    console.log("Animal Description");
    console.log("------------------");
    console.log("\tName: " + this.name);
    console.log("\tType: " + this.type);
    console.log("\tWeight: " + this.weight + " lb.");
    console.log("\tHeight: " + this.height + " in.");
    console.log("\tLocation: " + this.location);
    }
    }
    
    let elephant = new Animal("Dumbo", "elephant", 8000, 108, "Disneyland");
    //elephant.describe();


    class Person {
        constructor (newName) {
        this.name = newName;
        }
        introduce() {
        return `My name is ${this.name}.`;
        }
        }
        class Teacher extends Person {
        constructor (name, courseName) {
        super(name);
        this.courseName = courseName;
        }
        introduceSelf() {
        //console.log(`My name is ${this.name}, and I will be teaching your ${this.courseName} class.`);
        }
        }
        let teacher = new Teacher('Ms. Angle', 'Trigonometry');
        //console.log(teacher.introduce());
        //teacher.introduceSelf();
        