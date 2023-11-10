let params = (new URL(document.location)).searchParams;
let q = Number(params.get('quantity'));

let brand = products[0][`brand`];
let brand_price = products[0]['price'];


let validMessage = validateQuantity(q);

if (validMessage === "") {
    document.getElementById(`receiptContent`).innerHTML=`<h2>Thank you for purchasing ${q} ${brand}! Your total is \$${q * brand_price}!</h2>`;
} else {
    alert(validMessage + `<br>` + `Error: ${q} is not a quantity. Hit the back button to fix.`);
    document.getElementById(`receiptContent`).innerHTML=(validMessage + `<br>` + `Error: ${q} is not a quantity. Hit the back button to fix.`);
}

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