// product.js 
let quantity = [2, 8, 5, 1, 10];

// 
let itemData = [
{
    brand: 'HTC',
    price: 40,
    quantityIndex: 0,
},
{
    brand: 'Apple',
    price: 75.64,
    quantityIndex: 1,
},
{
    brand: 'Nokia',
    price: 35.99,
    quantityIndex: 2,
},
{
    brand: 'Samsung',
    price: 33.95,
    quantityIndex: 3,
},
{
    brand: 'Blackberry',
    price: 35.00,
    quantityIndex: 4,
}
]

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