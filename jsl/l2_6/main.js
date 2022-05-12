'use strict';

document.getElementById("infp").innerHTML = "";

document.getElementById("equaler").addEventListener("click", function() {
    let x = parseFloat(document.getElementById("xxx").value);
    let y = parseFloat(document.getElementById("yyy").value);
    printNumbers(x, y);
    document.getElementById("ttt").value = "см. консоль (F12)";
});