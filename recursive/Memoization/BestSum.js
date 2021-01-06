/**
 * write a function bestSum(target, arr) that takes in a target sum an array as arguments
 * the function should return an array containing the shortest combination that sum the target
 * 
 * if there are many you can return any.
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
 const bestSum = (target, arr) => {
     if(target === 0) return [];
     if(target < 0) return null;
     let bestCombination = null;
     for(let num of arr){
         const sumTarget = target - num;
         const startCombination = bestSum(sumTarget, arr);
         if(startCombination !== null){
             const combination = [ ...startCombination, num]
             if(bestCombination === null || combination.length < bestCombination.length){
                 bestCombination = combination;
             }
         }
     } 

     return bestCombination;
 }


 //Complexity
 // O(m^2 * n)
 const bestSumMemoization = (target, arr, memo={}) => {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;
    let bestCombination = null;
    for(let num of arr){
        const sumTarget = target - num;
        const startCombination = bestSumMemoization(sumTarget, arr, memo);
        if(startCombination !== null){
            const combination = [ ...startCombination, num]
            //memo[target] = startCombination;
            if(bestCombination === null || combination.length < bestCombination.length){
                bestCombination = combination;
            }
        }
    } 
    memo[target] = bestCombination;
    return bestCombination
}

//Retrives the total of combinations that meets the target.
const howManySumMemoization = (target, arr, memo={}) => {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;
    let totalCombination = [];
    for(let num of arr){
        const sumTarget = target - num;
        const startCombination = bestSumMemoization(sumTarget, arr, memo);
        if(startCombination !== null){
            totalCombination.push([ ...startCombination, num]);
        }
    } 
    memo[target] = totalCombination;
    return totalCombination
}

 //console.log(bestSum(7, [5,3,4,7]))
 //console.log(bestSum(8, [2,3,5]))
 //console.log(bestSum(100, [2,3,5,8,9,6]))

 console.log(howManySumMemoization(100, [1,2,5,25]))
 //console.log(bestSumMemoization(100, [1,2,5,25]))