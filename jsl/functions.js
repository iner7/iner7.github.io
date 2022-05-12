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
    if (n==1) return 0;
    let a = 1n;
    let b = 1n;
    let ni = n-1n;
    for (let i = 3n; i <= ni; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

/**
 *  принимает целочисленное значение x и возвращает анонимную функцию.
 *  Анонимная функция должна принимать целочисленное значение y и
 *  возвращать результат сравнения значений y и x как:
 * 
 *  Если y больше, чем x, то возвращается true
 *  Если y меньше, чем x, то возвращается false
 *  Если значения равны, то возвращается null
 *
 * @param {BigInt} x целочисленное число.
 * @return {BigInt}   Анонимная функция.
 */
 function compare(x) {
    return (y) => {
        if (y > x) return true;
        else if (y < x) return false;
        else return null;
    };
}

/**
 *  и выводит числа от 0 до num в красивом японском виде в консоль
 *
 * @param {BigInt} num конечное число 
 * @param {BigInt} cols количество колонок
 */
 function printNumbers(num, cols) {
    let r = Math.ceil(num / cols);

    for (let i = 0; i < r; i++) {
        let s = "";
        for (let j = 0; j < cols; j++) {
            let nm = j*r + i;
            if (nm < num) s += nm + "\t";
        }

        console.log(s);
    }
}