let example = "I am making a really really long string for the example.";




console.log(example.charAt());
console.log(example[0]);
console.log(example.at(0));

console.log(example.indexOf('making'));

function charCount(string, char){
    return string.split('').filter(function(c){ return c === char}).length;

}

console.log(charCount(example, 'r'));
console.log(example.split(" "));

const months = ['Feb', 'Nov','Jan','July'];
const correctOrder = ['Jan','Feb','March','April','May'];
const monthLibrary ={
    "Jan": 1,
    "Feb": 2,
    "July": 7,
    "Nov": 11,
}

function monthSort(months){
    return months.sort(function(a, b){
        if(monthLibrary[a] > monthLibrary[b]){
            return -1;
        } else{
            return 1;
        }
    })
}

console.log(monthSort(months));

let myArray = [1,2,3];
console.log(myArray);
myArray.push('a');
console.log(myArray);
myArray[15] = 'dumb';
console.log(myArray);
myArray = [...myArray, 'last'];
console.log(myArray);

// the ... in front of an aray copies the array to another one. It is like concating the array.
// Spread operator (...)

const array1 = [1,2,3];
const array2 = ['a','b','c'];
console.log([...array1, ...array2]);
console.log(array1.concat(array2));

const pikachu = {
    type: "electric",
    weight: 23,
};

console.log({...pikachu, name: 'pikachu'});

// Deconstructing an object
// Extract properties from an object if it has that property in it
// Can have many in the brackets
const {type, weight} = pikachu;
console.log(type);
console.log(weight);

const [firstEl, charcterb] = array2;
console.log(charcterb);
console.log(firstEl);


function unique(str) {
    const holder = [];
    for (let i = 0; i < str.length; i++){
        if(holder.indexOf(str[i]) === -1){
            holder.push(str[i]);
        }
    }
    return holder
}

console.log(unique(example));

function uniqueObject(str){
    const holder = {};
    for(let i = 0; i < str.length; i++ ){
        if(holder[str[i]]){
            holder[str[i]]++;
        } else{
            holder[str[i]] = 1;
        }
    }
    return holder;
}

console.log(uniqueObject(example));
console.log(Object.keys(uniqueObject(example)));


// Sets don't allow for duplicates
function uniqueSet(str){
    const holder = new Set();
    for(let i = 0; i < str.length; i++){
        holder.add(str[i]);
    }
    return holder;
}

console.log(uniqueSet(example));

