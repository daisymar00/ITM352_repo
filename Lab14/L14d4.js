const fs = require('fs');
const express = require('express');
const app = express();

const filename = __dirname + '/user_data.json';
let users_reg_data = {}; // Initialize users_reg_data as an empty object

// Check if the file exists
if (fs.existsSync(filename)) {
    // Read the file synchronously and assign the content to the 'data' variable
    let data = fs.readFileSync(filename, 'utf-8');
  
    // Parse the JSON string into an object and assign it to the 'users_reg_data' variable
    users_reg_data = JSON.parse(data);

    // Get file statistics, including size
    let user_stats = fs.statSync(filename);

    // Extract the file size from the statistics
    let stats_size = user_stats.size;

    // Output information about the file and its size to the console
    console.log(`The file name ${filename} has ${stats_size} characters`);
} else {
    // Output a message if the file does not exist
    console.log(`The file name ${filename} does not exist.`);
}

// Part 4 of lab 12
let username = 'newuser';
users_reg_data[username] = {};
users_reg_data[username].password = 'newpass';
users_reg_data[username].email = 'newuser@user.com';

fs.writeFileSync(filename, JSON.stringify(users_reg_data), 'utf-8')

app.use(express.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Retrieve query parameters from the URL
    const error = request.query.error || '';
    const username = request.query.username || '';

    // Give a simple login form with pre-filled data and error message if available
    const loginForm = `
        <body>
            <form action="/login" method="POST">
                <input type="text" name="username" size="40" placeholder="enter username" value="${username}" ><br />
                <input type="password" name="password" size="40" placeholder="enter password"><br />
                <p style="color: red;">${error}</p>
                <input type="submit" value="Submit" id="submit">
            </form>
        </body>
    `;
    response.send(loginForm);
});

app.post("/login", function (request, response) {
    // Retrieve the user's entered information
    let username_entered = request.body['username'];
    let password_entered = request.body['password'];

    let response_msg = "";

    // Check if the username and password are valid
    if (users_reg_data && users_reg_data[username_entered] && password_entered === users_reg_data[username_entered].password) {
        response_msg = `${username_entered} is logged in.`;
        response.send(response_msg);
    } else {
        response_msg = `Incorrect username or password.`;
        // Redirect to the login page with an error parameter
        response.redirect(`/login?error=${encodeURIComponent(response_msg)}&username=${encodeURIComponent(username_entered)}`);
    }
});


app.listen(8080, () => console.log(`Listening on port 8080`));
