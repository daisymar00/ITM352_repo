// invoice3b.js

const params = new URL(document.location).searchParams;

let quantity=[];

for (let i = 0; i < itemData.length; i++) {
    let quantityValue = params.get(`quantity${i}`);
    if (quantityValue !== null) {
        quantity[itemData[i].quantityIndex] = Number(quantityValue);
    }
}

import { itemData } from "./products.js";

let subtotal=0;
let taxRate = 0.0575;
let taxAmount = 0;
let total = 0;
let shippingCharge = 0;

let table = document.getElementById('invoiceTable');

// Calculate shipping based on sub total
if (subtotal <= 50) {
    shippingCharge = 2;
} else if (subtotal <= 100) {
    shippingCharge = 5;
} else {
    shippingCharge = subtotal * 0.05;
}


// Calculate total including shipping
total = subtotal +taxAmount + shippingCharge;

for (let i = 0; i < itemData.length; i++) {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = itemData[i].brand;
    row.insertCell(1).innerHTML = quantity[itemData[i].quantityIndex];
    row.insertCell(2).innerHTML = '$' + itemData[i].price.toFixed(2);
    row.insertCell(3).innerHTML = '$' + extendedPrices[i].toFixed(2);
}

// set the total cell in bold
document.getElementById('total_cell').innerHTML = `$${total.toFixed(2)}`;

// Set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' + shippingCharge.toFixed(2);

function validateQuantity(quantity) {
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
}

function generateItemRows() {
    let table = document.getElementById('invoiceTable');

    table.innerHTML = '';

    let hasErrors = False;

    for (let i=0; i <itemData.length; i++) {
        let item = itemData[i];
        let itemQuantity = quantity[item.quantityIndex];

        let validMessage = validateQuantity(itemQuantity);
    
        if (validMessage !== "") {
            hasErrors = true;
            let row = table.insertRow();
            row.insertCell(0).innerHTML = item.brand;
            row.insertCell(1).innerHTML = validMessage;
        } else if (itemQuantity > 0) {
            let extendedPrice = item.price * itemQuantity;
            subtotal += extendedPrice;

            let row = table.insertRow();
            row.insertCell(0).innerHTML = item.brand;
            row.insertCell(1).innerHTML = itemQuantity;
            row.insertCell(2).innerHTML = '$' + item.price.toFixed(2);
            row.insertCell(3).innerHTML = '$' + extendedPrice.toFixed(2);
        }
    }

    // If there are no errors, display the total
    if (!hasErrors) {
        document.getElementById('total_cell').innerHTML = '$' + total.toFioxed(2);
    }
}