const fs = require('fs');

// Creating a readStream
const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf-8' });

// Creating a writeStream
const writeStream = fs.createWriteStream('./docs/blog3.txt')

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);


//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

// The same thing as the snippet commented above
readStream.pipe(writeStream);

