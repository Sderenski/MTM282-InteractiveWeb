// Standard version of creating and defining a function
const name = "Stephen";
function myfunction() {
    console.log(name)
    return 3;
}

myfunction();

// Ways to assign the calling of the function
// So if you call/use these variables you will be calling the myfuncion
// method without assigning the return value.
let newfunction = myfunction;

const other = myfunction;

// Assigns the result of the function to the variable
const result = myfunction();

console.log('result: ', result);

// After es6 or arrow functions
// Allow for implicit returns
// Provide more intuitive scoping and 'this' binding
// They are anonymous functions that accept a fixed number of aruments
const es6 = () => {
    console.log('my new function')
    return;
}

// creating a function with a local scope
function scopedFunction(name){
    console.log(name);
}

scopedFunction("Stephen");

const addnumbers = (num1, num2) => {
    return num1 + num2;
}

console.log(addnumbers(5, 7));

// Using arrow function with parameters
const sumarray = (numbers) => {
    let sum = 0;
    // for(let i = 0; i < numbers.length; i++){
    //     sum +=numbers[i];
    // }

    // The same thing as above, though I don't know
    // why you'd want to do it this way
    numbers.forEach((element) => {
        sum += element;
    });
    return sum;
}


const testArry = [1, 2, 3, 7, 4, 9];
console.log('test: ', sumarray(testArry));

const reverse = (string1) => {
    if (typeof string1 !== 'string'){
        try {
            // Parse the object into a string
            string1 = JSON.stringify(string1);
        } catch (error) {
            console.log("Could not parse");
        }
        string1 = String(string1);
    }
    if(typeof string1 !== 'string'){
        throw "You need to give a string";
    }
    let result = '';
    try {
        for(let i = string1.length -1; i >= 0; i--){
            result += string1[i];
        }
        return result;
    } catch (error){
        console.log('error: ', error);
    }
    
}

console.log("Reverse: ", reverse({
    a: 1,
    b: 2,
    c: () => 3,
    d: [],
}));