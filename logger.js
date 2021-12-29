const EventEmitter = require('events');
const uuid = require('uuid');
var stamp = new Date().getTime();

class Logger extends EventEmitter {
	log(msg) {
	// Call event
	this.emit('message',{ id: uuid.v4(),timestamp: stamp, msg });
	}
}
module.exports = Logger;