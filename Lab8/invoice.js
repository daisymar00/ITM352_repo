// Lab 8 part 2.1
let product_quantities = [2,1,1,1,1];

// Lab 8 part 2.3
product_quantities.push(3);
alert("The size of the products array is: " + product_quantities.length);
product_quantities.pop();

// Lab 8 part 2.2
alert("The size of the products array is: " + product_quantities.length);

// Product Data with exteneded prices
let item1 = 'iPhone 12';
let quantity1 = product_quantities[0];
let price1 = 247.95;
//let extended_price1 = quantity1 * price1;

let item2 = 'Apple Watch Ultra extra band';
let quantity2 = product_quantities[1];
let price2 = 22.64;
let extended_price2 = quantity2 * price2;

let item3 = 'iPhone 15 Pro case';
let quantity3 = product_quantities[2];
let price3 = 25.99;
let extended_price3 = quantity3 * price3;

let item4 = 'Apple Watch Charging Cable';
let quantity4 = product_quantities[3];
let price4 = 33.95;
let extended_price4 = quantity4 * price4;

let item5 = 'Apple USB-C cable';
let quantity5 = product_quantities[4];
let price5 = 35.00;
let extended_price5 = quantity5 * price5;

// Lab 8 part 1.1
let product1 = {
    itemName: 'iPhone 12',
    quantity: 3,
    price: 247.95
};
// Lab 8 part 1.4
product1["SKU#"] = 1234;
delete product1["#SKU"];
// Lab 8 part 1.3
//product1.quantity1 = 0;

// Added for lab 8 part 1.2, an object to represent the attributes of product 1
let extended_price1 = product1.quantity * product1.price;

// Compute subtotal by adding all of the extended prices
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

// Variable for tax rate
let tax_rate = 0.0575;
let taxAmount = subtotal * tax_rate;

// Calculate total
let total = subtotal + taxAmount;

// Populate the table rows using DOM manipulation
let table = document.getElementById('invoiceTable');

// item row 1 with code changes to match lab8 part 1.2
let row = table.insertRow();
row.insertCell(0).innerHTML = product1.itemName; 
row.insertCell(1).innerHTML = product1.quantity;
row.insertCell(2).innerHTML = '$' + product1.price;
row.insertCell(3).innerHTML = '$' + extended_price1.toFixed(2);
// item row 2
row = table.insertRow();
row.insertCell(0).innerHTML = item2; 
row.insertCell(1).innerHTML = quantity2;
row.insertCell(2).innerHTML = '$' + price2;
row.insertCell(3).innerHTML = '$' + extended_price2;
// item row 3
row = table.insertRow();
row.insertCell(0).innerHTML = item3; 
row.insertCell(1).innerHTML = quantity3;
row.insertCell(2).innerHTML = '$' + price3;
row.insertCell(3).innerHTML = '$' + extended_price3;
// item row 4
row = table.insertRow();
row.insertCell(0).innerHTML = item4; 
row.insertCell(1).innerHTML = quantity4;
row.insertCell(2).innerHTML = '$' + price4;
row.insertCell(3).innerHTML = '$' + extended_price4;
// item row 5
row = table.insertRow();
row.insertCell(0).innerHTML = item5; 
row.insertCell(1).innerHTML = quantity5;
row.insertCell(2).innerHTML = '$'+ price5;
row.insertCell(3).innerHTML = '$' + extended_price5;

// Set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);