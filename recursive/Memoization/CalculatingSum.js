/**
 * given a number T and arra b[] write a method that 
 * returns true ir false if there is any possible combination
 * that adds up to exactly the target t
 * examples:
 * T=5, b[2,3,4] -> true (2 + 3 = 5)
 * T=7, b[2,4] -> false 
 * solving the problem
 *           5
 *  -2 /  -3 |   \-4
 *     |     |   |
 *     3     2   1
 * -2 / \-3         
 *   |   |
 *   1   0  --> here we hit or desaired result will return true through all the nodes up
 * constraints
 * if target === 0 return true
 * if target < 0 return false
 * lets implement in code.
 */
//Complexity = O(n^m)
 const calSum = (target, arr) =>{
     if(target === 0) return true;
     if(target < 0) return false;
     for(let num of arr){
         const remain = target - num;
         if(calSum(remain, arr) === true) return true
     }
     return false
 }

//Reducing the complexity by memoization
//First identifie common patters in the graph then
// see if they can be stored in a fast data structure lets say a HashMpa or HashTable
// then call when they are needed.
//Complexity O(n*m)
 const calSumMemo = (target, arr, memo={}) =>{
     if(target in memo) return memo[target];
    if(target === 0) return true;
    if(target < 0) return false;
    for(let num of arr){
        const remain = target - num;
        if(calSumMemo(remain, arr, memo) === true) {
            memo[target] = true;
            return true
        }
    }
    memo[target] = false;
    return false;
}

 console.log(calSumMemo(5, [2,3,4])) // true
 console.log(calSumMemo(7, [2,4])) // false
 console.log(calSumMemo(300, [7,14])) // false
 //Worse performance
 //console.log(calSum(300, [7,14])) // false

