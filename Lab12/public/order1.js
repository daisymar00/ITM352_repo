// order1.js lab 12 part 6


window.onload = function () {

    // Check the url for any error parameters and quantity and display them 
    let params = (new URL(document.location)).searchParams;
    let q = Number(params.get('quantity'));
    let error = params.get('error');

    // If there is an error, alert the user
    if (error) {
        alert(error);
    }
    // Define a variable that points to the form on the DOM in order to dynaically populate thr form
    const form = document.getElementById('productForm');
    let formHTML = '';

    // A for loop to print the product information adn then add a quantity text input box for every element
    for (let i in products) {
        formHTML += `<h3>${products[i]["brand"]} at \$${products[i]["price"]} (${products[i]["total_sold"]} sold)</h3>`;
        formHTML += `
        <label for="quantity_textbox">quantity desired:</label>
        <input type="text" name="quantity_textbox[${i}]" onkeyup="checkQuantityTextbox(this);">
        <span id="quantity_textbox[${i}]_message">Enter a quantity</span><br>
        `;
    }
    // Ensure the submit button is part of the form
    formHTML+= `<br> <input type="submit" value="Purchase">`;
    // Push the form content to the dom
    form.innerHTML=formHTML;
}

function checkQuantityTextbox(theTextbox) {
    let errs = validateQuantity(theTextbox.value, true);
    document.getElementById(theTextbox.name + '_message').innerHTML = errs;
}


function validateQuantity(quantity) {
    let errorMessage = "";

    if (isNaN(quantity)) {
        return "Not a number";
    } else if (quantity < 0 && !Number.isInteger(quantity)) {
        return "Negative inventory and not an interger";
    } else if (quantity <0) {
        return "Negative inventory";
    } else if (!Number.isInteger(quantity)) {
        return "Not an integer";
    } else {
        return "";
    }
return errorMessage;
}