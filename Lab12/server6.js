let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test', function (req, res) {
    res.send('app.get for test was executed');
    console.log('app.get for test was executed');
});



let products = require(__dirname + '/products.json');
products.forEach( (prod,i) => {prod.total_sold = 0});


app.get("/products.js", function (request, response, next) {
    response.type('.js');
    let products_str = `let products = ${JSON.stringify(products)};`;
    response.send(products_str);
 });

app.use(express.urlencoded({ extended: true}));

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

app.all('*', function (request, response, next) {
    //response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path);
});


app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback

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