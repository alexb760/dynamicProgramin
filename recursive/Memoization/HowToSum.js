/**
 * Write a function howSum(Target, arr) that takes an number T and a A[] array
 * the function should return an array containing any combination of elements that 
 * adds up to the target otherwise null-
 * if there are many combination just return any single one.
 * 
 * T=5, b[2,3,4] -> [2,3] (2 + 3 = 5)
 * T=7, b[2,4] -> false 
 * solving the problem
 *           5
 *  -2 /  -3 |   \-4
 *     |     |   |
 *     3     2   1
 * -2 / \-3         
 *   |   |
 *   1   0  --> here we hit or desaired result [] and add ne numbers through the nodes up
 */

 //Complexity = O(n^m) from brute force method
 // m = target sum
 // n = arr length
 //
 // time: O(n^m)
 // However we need to consider the copy array which equal to the size of the target sum
 // supose T= 50 and arr[1] = [1+1+1+1..n50]
 // then the cost of the copy will be equal to the size of the target
 // again:
 // time: =(n^m * m)
 const howSum = (target, arr) =>{
    if(target === 0) return [];
    if(target < 0) return null;
    for(let num of arr){
        const remain = target - num;
        const result = howSum(remain, arr);
        if(result !== null) return [ ...result, num]
    }
    return null;
}

//Complexity 
//Time: O(n * m * m)
// then: O( n * m^2) 
// Still a quadratic complexity but better than previus method indeed
// Space: O(m^2)
const howSumMemoized = (target, arr, memo={}) =>{
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;
    for(let num of arr){
        const remain = target - num;
        const result = howSumMemoized(remain, arr, memo);
        if(result !== null){
            memo[target] = [ ...result, num]
            return memo[target]
        } 
    }
    memo[target] = null
    return null;
}


console.log(howSum(5, [2,3,4]))
console.log(howSum(7, [2,4]))
//Performance issues here.
console.log(howSum(300, [7,14,5,8]))
//With the optimized method we solve this issue 
console.log(howSumMemoized(300, [7,14,5,8]))