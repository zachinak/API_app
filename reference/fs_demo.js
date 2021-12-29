const path = require('path');
const fs = require('fs');
var timestamp = new Date().getTime();

// Remove directory/folder
console.log(path.join(__dirname, 'test'))
fs.rmSync(path.join(__dirname, 'test'), {recursive: true, force: true}, err => {
	if(err) throw err;
	console.log('1. folder deleted');
});
console.log('1. folder deleted');

//create folder
fs.mkdirSync(path.join(__dirname, 'test'), {}, err => {
	if(err) throw err;
	console.log('2. folder created...');
});
console.log('2. folder created...');

// Create and write string to file
fs.writeFileSync(path.join(__dirname, 'test', 'hello.txt'), "Hello World", err => {
	if(err) throw err;
	console.log('3. file created...');
});
console.log('3. file created...');

// Append string to file
fs.appendFileSync(
	path.join(__dirname, 'test', 'hello.txt'), 
	"I love everything!", err => {
	if(err) throw err;
	console.log('4. file created...');
});
	console.log('4. file created...');
	
// READ File
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
	if(err) throw err;
	console.log('5. file contents...');
	console.log(`6. ${data}`);	
});

//rename file
fs.renameSync(
	path.join(__dirname, 'test', 'hello.txt'), 
	path.join(__dirname, 'test', `helloworld_${timestamp}.txt`), 
	err => {
		if(err) throw err;
		console.log('7. file renamed...');	
	}
);
		console.log('7. file renamed...');	