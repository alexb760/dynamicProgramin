/**
 * Tabulation consist in create a table with all the values needed 
 * then return the values requested.
 * First init a table with the initial valid value 
  _______________________
 *|0 | 0 | 0 | 0 | 0 | 0 |
 * 
 * Then add a certaint valid value tha we can operate later on
 * _______________________
 *|0 | 1 | 0 | 0 | 0 | 0 |
 *
 * add the values to the table
 * 
 *  table[i + 1] += table[i]
 *  table[i + 2] += table[i]
 * 
 * _______________________
 *|0 | 1 | 1 | 2 | 3 | 5 |
 * 
 * return table[n] = 5
 * 
 * Complexyti = O(n) is a lineal complexity
 * 
 * @param {n} n => Nth fibonacci number to obtaint
 */
const fib = n =>{
    const table = Array(n + 1).fill(0)
    table[1] = 1
    for(let i = 0; i <= n; i++){
        table[i+1] += table[i]
        table[i+2] += table[i]
    }
    return table[n]
}

console.log(fib(50))