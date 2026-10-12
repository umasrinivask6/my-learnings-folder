// const fs = require('fs');
// const { Transform } = require('stream');

// const upperCaseTransform = new Transform({
//     transform(chunk, encoding, callback) {
//         this.push(chunk.toString().toUpperCase());
//         callback();
//     }
// });

// const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });
// const writableStream = fs.createWriteStream('output.txt');

// // process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
// readableStream.pipe(upperCaseTransform).pipe(writableStream);


// function  k() {
// setTimeout(()=>{
//     console.log(i)
// },1000)
// var i=1

// }

// k()





  const flatten = (arr) => {
    const newArr = []
    arr.forEach(val => {
        if(Array.isArray(val)){
            newArr.push(...flatten(val))
        }
        else{
            newArr.push(val);
        }
        
    });
    return newArr
  }
  flatten()


