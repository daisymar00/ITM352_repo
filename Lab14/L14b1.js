const fs = require('fs');

const filename = __dirname + '/user_data.json';

// Check if the file exists
if (fs.existsSync(filename)) {
    // Read the file synchronously and assign the content to the 'data' variable
    let data = fs.readFileSync(filename, 'utf-8');
  
    let user_reg_data = JSON.parse(data);
  
    // Output the object to the console
    console.log(user_reg_data);
  } else {
    console.log(`The file name ${filename} does not exist.`);
  }
  
