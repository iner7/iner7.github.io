'use strict';

document.getElementById("infp").innerHTML = "";

document.getElementById("equaler").addEventListener("click", function() {
    let n = BigInt(document.getElementById("xxx").value);
    document.getElementById("ttt").value = fib(n);
});