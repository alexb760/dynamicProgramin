/**
 * given a a word and an array of letters see if we can construct the given
 * word with the given array
 * 
 * (abcdef, [ab, abc, cd, def, abcd]) = true
 * positions [0,2,3] constructs the word abcdef
 */

 //Complexity O(n^m * m)
 const canConstruct =(word, arr) => {
     if(word === '') return true
     for(let subFixTarget of arr){
         if(word.indexOf(subFixTarget) == 0){
             const subfix = word.slice(subFixTarget.length)
             if(canConstruct(subfix, arr)){
                 return true
             }
         }
     }
     return false
 }

//Optimazed by Memoization
 const canConstructMemoization =(word, arr, memo={}) => {
    if(word in memo) return memo[word]
    if(word === '') return true
    for(let subFixTarget of arr){
        if(word.indexOf(subFixTarget) == 0){
            const subfix = word.slice(subFixTarget.length)
            if(canConstructMemoization(subfix, arr, memo)){
                //store our target in the memoization object
                memo[word] = true
                return true
            }
        }
    }
    memo[word] = false
    return false
}


/**
 * given a a word and an array of letters see how many way we can construct the given
 * word with the given array
 * 
 * (abcdef, [ab, abc, cd, def, abcd]) = true
 * positions [0,2,3] constructs the word abcdef
 */

 //Complexity O(n^m * m)
 const countConstruct =(word, arr) => {
    if(word === '') return 1
    let count = 0
    for(let subFixTarget of arr){
        if(word.indexOf(subFixTarget) == 0){
            const subfix = word.slice(subFixTarget.length)
            count += countConstruct(subfix, arr)
        }
    }
    return count
}



 //Complexity O(n * m^2)
 const countConstructMemo =(word, arr, memo={}) => {
     if(word in memo) return memo[word]
    if(word === '') return 1
    let count = 0
    for(let subFixTarget of arr){
        if(word.indexOf(subFixTarget) == 0){
            const subfix = word.slice(subFixTarget.length)
            const partialCount = countConstructMemo(subfix, arr, memo)
            memo[word] = partialCount
            count += partialCount
        }
    }
    return count
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(countConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee', 
    'eeee', 
    'eeeeee',
    'eeeeeee', 
    'eeeeeeeee']))


 console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
 console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
 console.log(canConstructMemoization('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
     'e',
     'ee', 
     'eeee', 
     'eeeeee',
     'eeeeeee', 
     'eeeeeeeee']))
