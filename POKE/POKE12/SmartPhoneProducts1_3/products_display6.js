// creates a top and bottom store title
const store_name = "Daisy Martinez";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
bottom_title.innerHTML=(store_name +"'s Used Smart Phone Store");

let hits = 0;
let spins = 0;
let over_half = false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

const product1 = {
name: "HTC",
price: 40.00,
image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg",
};

const product2 = {
name: "Apple",
price: 75.00,
image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg",
};
 
const product3 = {
name: "Nokia",
price: 35.00,
image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg",
};

const product4 = {
name: "Samsung",
price: 45.00,
image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg",
};

const product5 = {
name: "Blackberry",
price: 10.00,
image:"http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg",
};
const products = [product1, product2, product3, product4, product5];

for (let i = 1; i < products.length; i++){
    const product = products[i];
    document.querySelector('.main').innerHTML +=
    <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <img src="${product.image}"/>
        <label id="quantity${i}_label" for="quantity${i}">Quantity Desired</label>
    </section>
}


// Create variables to push to the DOM for current year and time in the footer
const currentYear = new Date().getFullYear();
const currentTime = new Date().toLocaleDateString([], { hour: `2-digit`, minute: `2-digit`});

const footerTable = `
        <tr>
            <td>1.</td>
            <td>Copyright @ ${first_name} ${last_name}</td>
        </tr>
        <tr>
            <td>2.</td>
            <td>${currentYear}</td>
        </tr>
        <tr>
            <td>3.</td>
            <td>${currentTime}</td>
        </tr>
    </table>
`;
bottom_title.innerHTML = footerTable;

function changeClassName(element) {
    // if conditional to only add spins if it was not spinning before
    if(element.className == 'item'){
        element.className = 'item rotate';
        spins=spins+1;
    } 

    if(spins<2*hits&&hits<spins){
        over_half=true;
    } 

    win_span.innerHTML = over_half;
    spins_span.innerHTML = spins;
    hits_spin_span.innerHTML = Number(hits/spins).toFixed(2);


}

function resetClassName(element) {
    if(element.className == 'item rotate'){
        element.className = 'item';
        hits=hits+=2;
    } else {
        changeClassName(element);
    }

    if(spins<2*hits&&hits<spins){
        over_half=true;  
    } 

    win_span.innerHTML = over_half;
    hits_span.innerHTML = hits;
    hits_spin_span.innerHTML = Number(hits/spins).toFixed(2);
}