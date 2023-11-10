// Importing the Express.js framework 
let express = require('express');
// Create an instance of the Express application called "app"
// app will be used to define routes, handle requests, etc
let app = express();

// Monitor all requests regardless of their method (GET, POST, PUT, etc) and their path (URL)
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

/* Import data from a JSON file containing information about products
__dirname represents the directory of the current module (where server.js is located)
__dirname + "./products.json" specifies the location of products.json
*/
let products = require(__dirname + "/products.json");
products.forEach( (prod,i) => {prod.total_sold = 0});


// Define a route for handling a GET request to a path that matches "./products.js"
app.get('./products.js', function(request, response, next) {
	// Send the response as JS
	response.type('.js');
	
	// Convert the JS string into a JSON string and embed it within variable products
	let products_str = `let products = ${JSON.stringify(products)};`;
	
	// Send the string in response to the GET request
	response.send(products_str);
});

// Route all other GET requests to serve static files from a directory named "public"
app.use(express.static(__dirname + '/public'));

app.post("/process_form", function (request, response) {
    let receipt = '';
    let qtys = request.body[`quantity_textbox`];
    console.log(qtys);
    for (let i in qtys) {
        let q = Number(qtys[i]);
        console.log("the quantity value is "+q);
        let validMessage = validateQuantity(q);
        let brand = products[i]['brand'];
        let brand_price = products[i]['price'];   
        if (validateQuantity(q)==="") {
            products[i]['total_sold'] += Number(q);
            receipt += `<h3>THank you for purchasing: ${q} $${brand}`
        } else {
            receipt += `<h3><font color="red">${q} is not a valid quantity for ${brand}!<br>${validMessage}</font></h3>`;
        }
    }
    response.send(receipt);
    response.end();
 });

// Start the server; listen on port 8080 for incoming HTTP requests
app.listen(8080, () => console.log(`listening on port 8080`));

function validateQuantity(quantity) {
    let errorMessage = "";

    if (isNaN(quantity)) {
        return "Not a number";
    } else if (quantity < 0 && !Number.isInteger(quantity)) {
        return "Negatibe inventory and not an interger";
    } else if (quantity <0) {
        return "Negative inventory";
    } else if (!Number.isInteger(quantity)) {
        return "Not an integer";
    } else {
        return "";
    }
    return errorMessage;
}