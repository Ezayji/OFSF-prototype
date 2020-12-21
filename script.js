// Navigation items

let mission = document.getElementById("mis");
let artists = document.getElementById("art");
let portfolio = document.getElementById("port");
let contact = document.getElementById("con");

// Function for border / shadow

function addBorder(event){
/*    event.target.style.border = "2px solid #e7e7e7";
    event.target.style.borderRadius = "10px";
*/
    event.target.style.textShadow = "0 0 40px #982dfd";
}

function removeBorder(event){
//    event.target.style.border = "none";
    event.target.style.textShadow = "0 6px 13px black";
}

// Targets for Shadows on mouseover

mission.onmouseover = addBorder;
mission.onmouseout = removeBorder;

artists.onmouseover = addBorder;
artists.onmouseout = removeBorder;

portfolio.onmouseover = addBorder;
portfolio.onmouseout = removeBorder;

contact.onmouseover = addBorder;
contact.onmouseout = removeBorder;