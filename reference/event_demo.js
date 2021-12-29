const EventEmitter = require('events');

// Create an emitter class
class MyEmitter extends EventEmitter {}

// Init Object
const myEmitter = new MyEmitter();

function myFunction() {
console.log('this is an extra function');
console.log('we are calling an emitter')
}

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'))
myEmitter.on('even', () => console.log('Even Fired!'))
myEmitter.on('eve', () => console.log('Eve Fired!'))
myEmitter.on('ev', () => myFunction())

//Init Event
myEmitter.emit('event');
myEmitter.emit('even');
myEmitter.emit('eve');
myEmitter.emit('ev');
