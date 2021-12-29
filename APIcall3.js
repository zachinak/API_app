const http = require('http');
const fs = require('fs');
let body = [];

const postData = JSON.stringify({
  'msg': 'Hello World!'
});

const options = {
  hostname: 'data.muni.org',
  port: 80,
  path: '/resource/6sdz-r9ba.json',
  method: 'GET',
  headers: {
	  'business_postal_code': '99508',
	  'X-App-Token': '4hwzJRP8ccvP0UhllVcNFA1Iq'
	  }
  /*,
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  } */
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
	body.push(chunk);
	console.log('Running the script');
  //console.log(`BODY: ${chunk}`);
  
  });
  res.on('end', () => {
	//body = Buffer.concat(body).toString();
	fs.writeFile('helloworld.txt', body.toString(), function (err) {
	if (err) return console.log(err);
	
  });
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();


