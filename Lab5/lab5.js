// declare variables 
let age = 23;
let fav_num = 4;
let day_of_birth = 18;
let month_of_birth = 1;

// define calculation
let calc1 = age + fav_num / day_of_birth * month_of_birth;
let calc2 = (age + fav_num) / day_of_birth * month_of_birth;

// output calc 1 & 2 to the dom
document.getElementById("result1").innerHTML = calc1;
document.getElementById("result2").innerHTML = calc2;