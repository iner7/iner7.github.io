'use strict';

document.getElementById("infp").innerHTML = "";

document.getElementById("equaler").addEventListener("click", function() {
    let x = parseFloat(document.getElementById("xxx").value);
    let y = parseFloat(document.getElementById("yyy").value);
    document.getElementById("ttt").value = pow(x, y);
});