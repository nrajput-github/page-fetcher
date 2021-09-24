
 const fs = require('fs')

 //console.log(process.argv[2], process.argv[3]);


const request = require('request');

 request(`${process.argv[2]}${process.argv[3]}`, (error, response, body) => {  
//request('http://www.example.edu/index.html', (error, response, body) => {
  
   console.log('error:', error); // Print the error if one occurred
 //  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
 //  stdin.on("response", (key) => {
   // console.log("calling cb");
    //callback(key);
    //content=body;
    const data = fs.writeFileSync('/Users/navyarajput/test.txt', body);

  //});

 });
 

/*
> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html
*/




