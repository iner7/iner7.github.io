'use strict';

document.getElementById("infp").innerHTML = "";

document.getElementById("equaler").addEventListener("click", function() {
    let x = parseFloat(document.getElementById("xxx").innerHTML);
    let y = parseFloat(document.getElementById("yyy").innerHTML);
    document.getElementById("ttt").innerHTML = pow(x, y);
});