"use strict";
function fibonacci(n) {
    let first = 0;
    let second = 1;
    for (let i = 0; i < n; i++) {
        const next = first + second;
        first = second;
        second = next;
    }
    return first;
}
// Example calls
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
