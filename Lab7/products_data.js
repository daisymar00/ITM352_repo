let name1 = "HTC";
let price1 = 40.00;
let image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

let name2 = "Apple";
let price2 = 75.00;
let image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

let name3 = "Nokia";
let price3 = 35.00;
let image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

let name4 = "Samsung";
let price4 = 45.00;
let image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

let  name5 = "Blackberry";
let  price5 = 10.00;
let image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";

console.log("Product variable loaded...");

console.log("Exercise 1.1");
let num_products = 5;
let productCount = 1;
while (productCount <= num_products) {
    console.log(productCount);
    productCount++;
}
// reset the variable count
productCount = 1;

// exercise 1.2
console.log();
console.log("Exercise 1.2")
while (productCount <= num_products) {
    console.log(productCount+'. '+eval('name'+productCount));
    productCount++;
}

// exercise 1.3
console.log();
console.log("exercise 1.3");
productCount = 1;
while (productCount <= num_products/2) {
    console.log(productCount+". "+eval('name'+productCount));
    productCount++;
}

// exercise 2.1
console.log();
console.log("exercise 2.1");
while (productCount <= num_products) {
    if (productCount > num_products/2) {
        console.log("Thats enough!");
        break;
    } 
    console.log(productCount);
    productCount++;
}

// exercise 2.2
console.log();
console.log("exercise 2.2");
productCount = 1;
let lowerBound = num_products * 0.25;
let upperBound = num_products * 0.75;
while (productCount <= num_products) {
    if (productCount >= lowerBound && productCount <= upperBound) {
        console.log(eval('name'+productCount) + "is sold out");
    } else {
        console.log(productCount+". "+eval('name'+productCount));
    }
    productCount++;
}

// exercise 2.3
console.log();
console.log("exercise 2.3");
productCount = 1;
while (productCount <= num_products) {
    if (productCount >= num_products/2) {
        console.log("Dont ask for anything else");
        //process.exit();
    } 
    if (productCount >= lowerBound && productCount <= upperBound) {
        console.log(eval('name'+productCount) + "is sold out!");
    } else {
        console.log(productCount + "")
    }
    productCount++;
}

// exercise 3.1a 
console.log();
console.log("exercise 3.1");
productCount = 1;
for (let i=1; i <= num_products; i++) {
    if (i >= lowerBound && i <= upperBound){
        console.log(eval('name'+i) + " is sold out!!")
    } else {
        console.log(i+". "+eval('name'+i));
    }
}

// exercise 3.1b
console.log();
console.log("exercise 3.1b");
for (let i=1; eval("typeof name"+i) != 'undefined'; i++) {
    if (i >= lowerBound && i<= upperBound) {
        console.log (eval('name'+i) + ' is sold out!!');
    } else {
        console.log(i+'. '+eval('name'+i));
    }
}

// exercise 4.2
document.write('<table border = "1">');
document.write('<tr><th>Number</th><th>Item</th></tr>');

// Loop to output rows
for  (let i = 1; ("typeof name"+i) != 'undefined'; i++){
    document.write('<tr><td>${i}</td><td>${eval("name"+1)}</td></tr>');
}

// close the table
document.write('</table>');