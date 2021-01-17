const fs = require('fs');

// ********** reading files **********
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }

//     console.log(data.toString());
// })



// ******* writing files **********
// fs.writeFile('./docs/blog1.txt', 'Hello World and Commanders! Lmfaoo', () => {
//     console.log('File was written');
// })


// fs.writeFile('./docs/blog2.txt', 'Hello Xyber', () => {
//     console.log('File was written');
// })



// ******** directories ********
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
    
//         console.log('folder created');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
        
//         console.log('folder removed');
//     })
// }



// ******** deleting files ********
// if(fs.existsSync('./docs/blog2.txt')) {
//     fs.unlink('./docs/blog2.txt', (err) => {
//         if(err) {
//             console.log(err);
//         }

//         console.log('file deleted');
//     })
// } else {
//     fs.writeFile('./docs/blog2.txt', 'Hello Xyber!!', () => {
//         console.log('file was written');
//     })
// }

fs.writeFile('./server.js', '', () => {
    console.log('file created');
})