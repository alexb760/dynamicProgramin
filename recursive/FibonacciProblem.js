//Normal way, but not efficient
//O(2^n) complexity
const fib = n => {
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2);
}

//making more efficient by implementing memoization
//O(2n) == O(n) complexity time
// We wil get better performance in java implementation.
//this algorithm can be easely convert to any programing lenguage
const fibMomoization = (n, memo={}) => {
    if(n in memo) return memo[n];
    if (n <= 2) return 1
    memo[n] =  fibMomoization(n - 1, memo) + fibMomoization(n - 2, memo);
    return memo[n];
}


console.log(fibMomoization(70))
//console.log(fib(40))