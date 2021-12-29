const http = require('http');
const fs = require('fs');

const postData = JSON.stringify({
  'msg': 'Hello World!'
});

const options = {
  hostname: 'data.muni.org',
  port: 80,
  path: '/resource/6sdz-r9ba.json?business_postal_code=99507',
  method: 'GET'/*,
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  } */
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
  console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();


fs.writeFile('helloworld.txt', postData, function (err) {
  if (err) return console.log(err);
  console.log('Running the script');
});