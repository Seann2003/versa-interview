const fs = require('fs');

function filterArray(): (number | string)[]{
    let array:(number | string)[] = [];
    for(let i = 0; i < 100; i++ ){
        if(i % 5 == 0 && i % 3 == 0){
            array.push('BIG BANG');
        } else if(i % 3 == 0){
            array.push('BIG');
        } else if (i % 5 == 0){
            array.push('BANG');
        } else {
            array.push(i);
        }
    }
    return array;
}

function saveToJsonFile(array: (number | string)[], filename: string): void{
    fs.writeFileSync(filename, JSON.stringify(array));
}   

const result = filterArray();
saveToJsonFile(result,'output.json');
