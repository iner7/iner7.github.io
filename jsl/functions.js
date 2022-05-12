'use strict'; 

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x, n) {
    return Math.pow(x, n);
}

/**
 * для данного натурального n вычисляет сумму чисел от 1 до n. 
 *
 * @param {number} n натурального число.
 * @return {number}  сумму чисел от 1 до n. 
 */
function sumTo(n) {
    let s = 1;
    for (let i = 2; i <= n; i++) {
        s += i;
    }
    return s;
}

/**
 *  возвращает факториал числа n!, используя рекурсивный вызов. 
 *
 * @param {number} n натурального число.
 * @return {number}  факториал n. 
 */
function factorial(n) {
    if (n == 0 || n == 1) return 1;
    return n * factorial(n - 1);
}

/**
 *  возвращает n-е число Фибоначчи.
 *
 * @param {BigInt} n натурального число.
 * @return {BigInt}   n-е число Фибоначчи.
 */
function fib(n) {
    let x = 1n;
    let y = 1n;

    for (let i = 2n; i < n; i++) {
        y = x + y;
        x = y - x;
    }

    return y;
}