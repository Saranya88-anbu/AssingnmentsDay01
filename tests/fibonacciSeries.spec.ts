function fibonacci(n: number): number {
  let first: number = 0;
  let second: number = 1;

  for (let i = 0; i < n; i++) {
    const next: number = first + second;
    first = second;
    second = next;
  }

  return first;
}

// Example calls
console.log(fibonacci(0)); 
console.log(fibonacci(1)); 
console.log(fibonacci(2)); 
console.log(fibonacci(5)); 
console.log(fibonacci(10)); 