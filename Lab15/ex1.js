const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const session = require('express-session');
app.use(session({secret: "MySecretKey", resave: true, saveUninitialized: true}));
const filename = 'user_data.json';

let user_reg_data = {};
if (fs.existsSync(filename)) {
    const rawdata = fs.readFileSync(filename);
    user_reg_data = JSON.parse(rawdata);
}

app.get('/set_cookie', (req, res) => {
    res.cookie('username', 'Daisy', {maxAge: 10000});
    res.send('A Cookie with your name has been set');
});

app.get('/use_cookie', (req, res) => {
    let username = req.cookies.username;
    res.send(`Welcome to the Use Cookie page, ${username}`);
});

app.get('/use_sesion', (req, res) => {
    res.send(`Welcome, your session iD is ${req.session.id}.`);
});

app.get("/login", function (request, response) {

    // Give a simple login form
    const str = `
        <script>
            let params = (new URL(document.location)).searchParams;
            window.onload = function() {
                if (params.has('error')) {
                    login_form['username'].value = params.get('username');
                    document.getElementById("errMsg").innerHTML = params.get("error");
                }
            }
        </script>

        <body>
        <div id="errMsg"></div>
        <p id="welcome"> </p>
        <form action="" method="POST" name="login_form">
        <input type="text" name="username" size="40" placeholder="enter username" ><br />
        <input type="password" name="password" size="40" placeholder="enter password"><br />
        <input type="submit" value="Submit" id="submit">
        </form>
        </body>
    `;
    let username = request.cookies.username ||'';
    if (username.length != 0) {
        response.send(`<p>Welcome ${username}</p>`);
    }
    response.send(str);
});

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    // Retrieve the user's entered information
    let username_entered = request.body['username'];
    let password_entered = request.body['password'];

    let response_msg = "";
    let errors = false;

    let params = new URLSearchParams(request.body);

    // Check if the username exists in user_reg_data
    if (typeof user_reg_data[username_entered] != 'undefined') {
        // Check if the password matches with the username
        if (password_entered == user_reg_data[username_entered].password) {
            
            //response_msg = `${username_entered} is logged in.`;
            response.cookie('username', `${username_entered}`);
            const userSession = request.session;

            console.log('Login cookie has been sent.');

            // If there is no last login information
            if (!userSession.lastLogin) {
                userSession.lastLogin = "First session";  
            } else {
                userSession.lastLogin = new Date().toLocaleString();
            }
            response_msg = `${username_entered} is logged in . Last login: ${userSession.lastLogin}`;
            errors = true;
        } else {
            response_msg = `Incorrect password.`;
            errors = true;
        }
    } else {
        response_msg = `${username_entered} does not exist.`;
        errors = true;
    }

    if (!errors) {
        response.send(response_msg);
    } else {
        response.redirect(`./login?error=${response_msg}&${params.toString()}`)
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));

//extra credit 1 first option to send userid in URL back with username if there is an error on registration
app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
        <script>
            let params = (new URL(document.location)).searchParams;
            window.onload = function() {
                if (params.has('error') {
 {
                    reg_form['username'].value = params.get('username');
                    reg_form['email'].value = params.get('email');
                    reg_form['name'].value = params.get('name');
                }
            }
        </script>

        <body>

        <form action="" method="POST" name="reg_form">
        <input type="text" name="username" size="40" placeholder="enter username" ><br />
        <input type="password" name="password" size="40" placeholder="enter password"><br />
        <input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
        <input type="email" name="email" size="40" placeholder="enter email"><br />
        <input type="submit" value="Submit" id="submit">
        <
        </form>
        </body>
    `;
    response.send(str);
});

 app.post("/register", function (request, response) {
    // process a simple register form
    let new_user = request.body.username;
    let errors = false;
    let resp_msg = "";

    let params = new URLSearchParams(request.body);

    // If the username already exists
    if (typeof user_reg_data[new_user] != 'undefined') {
        resp_msg = 'Username unavailable. Please enter a different username.';
        errors = true;
    } 
    // If the username does not exist and the password and repeat password matches
    else if (request.body.password == request.body.repeat_password) {
        user_reg_data[new_user] = {};
        user_reg_data[new_user].name = request.body.name;
        user_reg_data[new_user].password = request.body.password;
        user_reg_data[new_user].email = request.body.email;

        fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');
        response.redirect(`./login`);
    } else {
        resp_msg = 'Repeat password does not match with password.'
        errors = true;
    }

    if (errors) {
        response.redirect(`./register?error=${resp_msg}&${params.toString()}`);
        //response.send(resp_msg);
        // Alternatively, you can redirect to the register page with an error query parameter:
        // response.redirect(`./register?error=${resp_msg}&${params.toString()}`);
    }
    
 });