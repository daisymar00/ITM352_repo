const fs = require('fs');

const filename = __dirname + '/user_data.json';

// Check if the file exists
if (fs.existsSync(filename)) {
    // Read the file synchronously and assign the content to the 'data' variable
    let data = fs.readFileSync(filename, 'utf-8');
  
    // Parse the JSON string into an object and assign it to the 'users_reg_data' variable
    let users_reg_data = JSON.parse(data);

    // Get file statistics, including size
    let user_stats = fs.statSync(filename);

    // Extract the file size from the statistics
    let stats_size = user_stats.size;

    // Output information about the file and its size to the console
    console.log(`The file name is ${filename} has ${stats_size} characters`);
} else {
    // Output a message if the file does not exist
    console.log(`The file name ${filename} does not exist.`);
}
