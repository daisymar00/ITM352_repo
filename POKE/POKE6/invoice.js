// Product Data
// Product 1
let item1 = 'Gillette Sensor 3 Razor';
let quantity1 = 2;
let price1 = 1.23;
let extended_price1 = quantity1 * price1;

// Product 2
let item2 = 'Barbasol Shaving Cream';
let quantity2 = 1;
let price2 = 2.64;
let extended_price2 = quantity2 * price2;

// Product 3
let item3 = 'Nautica Cologne';
let quantity3 = 1;
let price3 = 6.17;
let extended_price3 = quantity3 * price3;

// Product 4
let item4 = 'Rubbing Alcohol';
let quantity4 = 3;
let price4 = 0.98;
let extended_price4 = quantity4 * price4;

// Product 5
let item5 = 'Colgate Classic Toothbrush';
let quantity5 = 12;
let price5 = 1.89;
let extended_price5 = quantity5 * price5;

// Variable for tax rate
let tax_rate = 0.0575;

// Compute subtotal by adding all of the extended prices
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

// Calculate actual total 
let total = subtotal * tax_rate;

let table = document.getElementById('invoiceTable');

// item row 1
var row = invoiceTable.insertRow();
row.insertCell().innerHTML = item1; 
row.insertCell().innerHTML = quantity1;
row.insertCell().innerHTML = price1.toFixed(2);
row.insertCell().innerHTML = extended_price1;
// item row 2
var row = invoiceTable.insertRow();
row.insertCell().innerHTML = item2; 
row.insertCell().innerHTML = quantity2;
row.insertCell().innerHTML = price2.toFixed(2);
row.insertCell().innerHTML = extended_price2;
// item row 3
var row = invoiceTable.insertRow();
row.insertCell().innerHTML = item3; 
row.insertCell().innerHTML = quantity3;
row.insertCell().innerHTML = price3.toFixed(2);
row.insertCell().innerHTML = extended_price3;
// item row 4
var row = invoiceTable.insertRow();
row.insertCell().innerHTML = item4; 
row.insertCell().innerHTML = quantity4;
row.insertCell().innerHTML = price4.toFixed(2);
row.insertCell().innerHTML = extended_price4;
// item row 5
var row = invoiceTable.insertRow();
row.insertCell().innerHTML = item5; 
row.insertCell().innerHTML = quantity5;
row.insertCell().innerHTML = price5.toFixed(2);
row.insertCell().innerHTML = extended_price5;
