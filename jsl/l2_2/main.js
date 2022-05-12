'use strict';

document.getElementById("infp").innerHTML = "";

document.getElementById("equaler").addEventListener("click", function() {
    let n = parseFloat(document.getElementById("xxx").value);
    document.getElementById("ttt").value = sumTo(n);
});