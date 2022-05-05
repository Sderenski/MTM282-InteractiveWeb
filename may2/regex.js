const regex = /\b[a-zA-Z]{4}\b/g;
const ourstring = "Make this some Our 32 1981really long normal human sentence.";

const matches = ourstring.match(regex);

const newstring = ourstring.replace(regex, 'x');
console.log(matches);
console.log(newstring)


const animals = [{
    name: 'tiger',
    type: 'carnivore',
}, {
    name: 'zebra',
    type: 'herbivore',
}, {
    name: 'bear',
    type: 'omnivore',
}, {
    name: 'cow',
    type: 'herbivore',
}, {
    name: 'giraffe',
    type: 'herbivore',
}, {
    name: 'shark',
    type: 'carnivore',
}];

 

const herbivores = animals.filter(d => d.type === 'herbivore');
console.log(herbivores)