// creates a top and bottom store title
const store_name = "Daisy Martinez";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
bottom_title.innerHTML=(store_name +"'s Used Smart Phone Store");

let hits = 0;
let spins = 0;
//let wins;
let over_half = false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

function changeClassName(element) {
    // if conditional to only add spins if it was not spinning before
    if(element.className == 'item'){
        element.className = 'item rotate';
        spins++;
    }

    if(spins<2*hits&&hits<spins){
    //    wins = true; 
        over_half=true;
    }
    /* else {
        wins = false;
    }*/

    win_span.innerHTML = over_half;
    spins_span.innerHTML = spins;
    spins_span.innerHTML = Number(hits/spins).toFixed(2);
    //win_span.innerHTML=wins;
}

function resetClassName(element) {
    if(element.className == 'item rotate'){
        element.className = 'item';
        hits++;
    }

    if(spins<2*hits&&hits<spins){
        //    wins = true; 
            over_half=true;  
        }
        /* else {
            wins = false;
        }*/

    element.className = 'item';
    win_span.innerHTML=over_half;
    hits_span.innerHTML = hits;
    hits_span.innerHTML = Number(hits/spins).toFixed(2);
}

function updateHits(element) {
    hits++;
    document.getElementById("hits_span").innerHTML = hits;
}

function updateSpins(element) {
    spins++;
    document.getElementById("spins_span").innerHTML = spins;
}