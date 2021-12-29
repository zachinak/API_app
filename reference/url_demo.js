const url = require('url');

const myUrl = new URL('https://data.muni.org:80/resource/6sdz-r9ba.json?business_postal_code=99507');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host/root
console.log(myUrl.host);

// Host name (excludes port)
console.log(myUrl.hostname);

// path name 
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// query parameters
console.log(myUrl.searchParams);

// add parameters
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
