const fs = require('fs/promises');

async function readFile() {
    let fileData;
    //callbacks
    // fs.readFile('data.txt', function(error, fileData){
    //     console.log('File parsing done');
    //     console.log(fileData.toString());
    // });
    
    //promise
    // fs.readFile('data.txt')
    // .then(function(fileData) {
    //     console.log('File parsing done!');
    //     console.log(fileData.toString());
    //     //return anotherAsyncOperaton;
    // })
    // .then(function () {})
    // .catch(function(error) {
    //     console.log(error);
    // })

    try {
        fileData = await fs.readFile('data.txt');
    } catch (error) {
        console.log(error);
    }

    console.log('File parsing done!');
    console.log(fileData.toString());
    //return anotherAsyncOperaton;
    console.log('Hi there!');
}

readFile();