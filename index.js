const fs = require('fs'); // node js default module
const readline = require('readline-sync'); // by "anseki" on GitHub + other contributors
const DEFAULT_EXPORT_FILENAME = `edited-save.json`;

const input_json = fs.readFileSync(`save.json`); //input
let input_obj = JSON.parse(input_json); //data in obj

searchThrough = (obj, searchFor, setEqualTo) => {
    for (let key in obj) {
        if (key === searchFor) {
            obj[key] = setEqualTo;
        }
        let val = obj[key];
        if (typeof(val) === "object") {
            searchThrough(val, searchFor, setEqualTo);
        }
    }
}

console.log(`Welcome to the JSON save data editor!\nThis allows you to mass edit numbers in a JSON save file, like for a game.`);

while (true) {
    const stat = readline.question("What value should be changed? ");
    let changeTo;
    while (true) {
        changeTo = Number(readline.question(`Change ALL of these to what number? `));
        if (changeTo == NaN) {
            console.log("Please input a number!");
        } else {
            break;
        }
    }
    searchThrough(input_obj, stat, changeTo);
    console.log(`Changed all instances of ${stat} to have the value ${changeTo}.`);
    const again = readline.question(`Would you like to change another value (y/n, default n)? `);
    if (again != "y") {
        const output_json = JSON.stringify(input_obj, null, 4);
        const name = readline.question(`Output file name (default: ${DEFAULT_EXPORT_FILENAME}): `);
        if (!name) {
            fs.writeFileSync(DEFAULT_EXPORT_FILENAME, output_json);
        } else {
            fs.writeFileSync(name, output_json);
        }
        break;
    }
}