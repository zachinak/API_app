const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello World')
logger.log('CPU error')
logger.log('MEMORY ERROR')
logger.log('THINGS ARE EXPLODING')