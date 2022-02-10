const { Writable } = require("stream");
const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});
process.stdin.pipe(outStream);
//等价于
// process.stdin.on('data',(chunk)=>{
//     outStream.write(chunk)
// })