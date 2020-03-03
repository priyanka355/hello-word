buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}
/*
console.log( buf.toString('ascii'));   
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);  
*/
var buffer1 = new Buffer('576');

//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
console.log( __dirname );
console.log( __filename );
function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 setTimeout(printHello, 5000);