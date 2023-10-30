function updateQuantityMessage(textbook) {
    let quantityMessage = document.getElementById('qty_textbook_message');

    // Validate the quantity entered
    let validMessage = validateQuantity(Number(textbook.value));

    // If there are validation erros, display an error message
    if (validMessage !== "") {
        quantityMessage.innerHTML = validMessage;
    } else {
        quantityMessage.innerHTML = textbook.value;
    }
}

function validateQuantity(quantity) {
    let errorMessage = "";

    switch (true) {
        case isNaN(quantity):
            errorMessage = "Not a number. Please enter a non negatibe quantity to order.";
            break;
        case quantity < 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an integer. Please enter a non negative quantity to order.";
            break;
        case quantity <= 0:
            errorMessage = "Negative inventory. Please enter a non negative quantity to order.";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Not an integer. Please enter a non-negative quantity to order.";
            break;
        default:
            errorMessage = ""; // No errors
            break;
    }
    return errorMessage;
}

function displayPurchase() {
    let quantity = Number(document.getElementById(`qty_textbox`).value);

    let validMessage = validateQuantity(quantity);

    if (validMessage == "") {
        let message = `Thank you for ordering ${quantity} things!`;
        document.body.innerHTML = message;
    } else {
        alert(validMessage + "Please enter a positive integer for quantity.");
        document.getElementById(`qty_textbook`).value = "";
    }
}