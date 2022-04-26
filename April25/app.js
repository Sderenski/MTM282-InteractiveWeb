const express = require('express');
const fs = require('fs');

const app = express();

const port = 3000;

const myCharacter = {
    name: 'Slip',
    class: 'Rogue',
    race: 'Frog',
    attributes: {
        str: 3,
        dex: 3,
        con: 3,
        int: 3,
        wis: 4,
        cha: 3,
    },
    aligment: 'Chaotic Evil',
    savings: {
        str: 1,
        dex: 2,
    },
    inventory: [],
}

// const employee = {
//     name: 'Brian',
//     department: 'Engineer',
// };

// const department = {
//     name: 'Engineering',
//     manager: 'Susan',
// };

// // how to combine two objects into one

// const newObject = Object.assign(employee, department);
// console.log(newObject);

// console.log({...employee, ...department});

const saveCharacter = (req, res, next) => {
    const stringify = JSON.stringify(myCharacter);
    console.log(stringify);
    fs.writeFile(`${myCharacter.name}.json`, stringify, (err) => {
        if(err) throw err;
    });

    res.end('ok');
};

app.get('/save', saveCharacter);

app.get('/character', (req, res, next) =>{
    const character = JSON.parse(fs.readFileSync(`${myCharacter.name}.json`, {
        encoding: 'utf8',
        flag: 'r',
    }));
    console.log('Character: ', character);
    res.json(character);
});

// app.get('/races', (req, res, next) => {
//     const {races} = JSON.parse(fs.readFileSync('settings.json', {
//         encoding: 'utf8',
//         flag: 'r'
//     }));
//     let data = '';
//     races.forEach((race) => {
//         data += race;
//     });
//     res.end(data);
// });


// Menu Drop down by using JSON???
const settings = JSON.parse(fs.readFileSync('settings.json', {
    encoding: 'utf8',
}));

const keys = Object.keys(settings);
console.log(keys);

keys.forEach((key) => {
    app.get(`/${key}`, (req, res, next)=> {
        res.json(settings[key]);
    });
});

app.listen(port, (err) => {
    if (err) throw err;

    console.log(`App listening on port ${port} ...`);
});