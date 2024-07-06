"use strict";
const fs = require('fs');
function filterArray() {
    let array = [];
    for (let i = 0; i < 100; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            array.push('BIG BANG');
        }
        else if (i % 3 == 0) {
            array.push('BIG');
        }
        else if (i % 5 == 0) {
            array.push('BANG');
        }
        else {
            array.push(i);
        }
    }
    return array;
}
function saveToJsonFile(array, filename) {
    fs.writeFileSync(filename, JSON.stringify(array));
}
const result = filterArray();
saveToJsonFile(result, 'output.json');
