// Product Data with exteneded prices
let item1 = 'Gillette Sensor 3 Razor';
let quantity1 = 2;
let price1 = 1.23;
let extended_price1 = quantity1 * price1;

let item2 = 'Barbasol Shaving Cream';
let quantity2 = 1;
let price2 = 2.64;
let extended_price2 = quantity2 * price2;

let item3 = 'Nautica Cologne';
let quantity3 = 1;
let price3 = 6.17;
let extended_price3 = quantity3 * price3;

let item4 = 'Rubbing Alcohol';
let quantity4 = 3;
let price4 = 0.98;
let extended_price4 = quantity4 * price4;

let item5 = 'Colgate Classic Toothbrush';
let quantity5 = 12;
let price5 = 1.89;
let extended_price5 = quantity5 * price5;

// Compute subtotal by adding all of the extended prices
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

// Variable for tax rate
let tax_rate = 0.0575;
let taxAmount = subtotal * tax_rate;

// Calculate total
let total = subtotal + taxAmount;

// Populate the table rows using DOM manipulation
let table = document.getElementById('invoiceTable');

// item row 1
let row = table.insertRow();
row.insertCell(0).innerHTML = item1; 
row.insertCell(1).innerHTML = quantity1;
row.insertCell(2).innerHTML = '$' + price1;
row.insertCell(3).innerHTML = '$' + extended_price1;
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