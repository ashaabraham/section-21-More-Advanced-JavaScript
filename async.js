const fs = require('fs/promises');

function readFile() {
    let fileData;
    //callbacks
    // fs.readFile('data.txt', function(error, fileData){
    //     console.log('File parsing done');
    //     console.log(fileData.toString());
    // });
    
    //promise
    fs.readFile('data.txt')
    .then(function(fileData) {
        console.log('File parsing done');
        console.log(fileData.toString());
        //return anotherAsyncOperaton;
    })
    .then(function () {})
    .catch(function(error) {
        console.log(error);
    })

    console.log('Hi there!');
}

readFile();