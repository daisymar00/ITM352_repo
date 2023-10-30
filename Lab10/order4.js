

function formSubmission() {
    // Get the value from the form textbox, convert it to a number and assing it to something easy to type
    let quantity = Number(document.querySelector('input[name="qty_textbook"]').value);

    let validMessage = validateQuantity(quantity);

    if (validMessage !== "") {
        document.getElementById("invalidQuantity").innerHTML = validMessage;
    } else {
        // Redirect to the display_purchase.html page
        window.location.href = `display_purchase.html?qty_textbox=${quantity}`;
    }
    return false;// Prevents form submission, since we are redirecting
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
            errorMessage = " "; // No errors
            break;
    }

    return errorMessage;
}
