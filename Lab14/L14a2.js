const fs = require('fs');

const filename = __dirname + '/user_data.json';

// Read the file synchronously and assign the content to the 'data' variable
let data = fs.readFileSync(filename, 'utf-8');

// Parse the JSON string into an object and assign it to the 'users_reg_data' variable
let users_reg_data = JSON.parse(data);

// Output the object to the console
console.log(users_reg_data);
