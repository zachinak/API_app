const os = require('os');

// platform
console.log(os.platform())

// CPU Arch
console.log(os.arch())

// CPU Core info
console.log(os.cpus())

// free memory
console.log(os.freemem())

//total memory
console.log(os.totalmem())

// homedir
console.log(os.homedir())

// uptime in minutes
console.log(os.uptime()/60)