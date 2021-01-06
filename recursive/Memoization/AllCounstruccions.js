/**
 * given a a word and an array of letters see all the possibles ways we can construct the given
 * word with the given array
 * 
 * (abcdef, [ab, abc, cd, def, abcd]) = [ab, def]
 * positions [0,3] constructs the word abcdef
 */

 const allConstruct = (target, arr, memo = {}) =>{
     if(target in memo) return memo[target]
     if(target === '') return [[]]

     let allWays = []
     for(let word of arr){
         if(target.indexOf(word) == 0){
             const temp = allConstruct(target.slice(word.length), arr, memo)
            allWays.push(...temp.map(way => [word, ...way]))
         }
     }
     memo[target] = allWays
     return allWays;
 }


 console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
 console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
 console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee', 
    'eeee', 
    'eeeeee',
    'eeeeeee', 
    'eeeeeeeee']))
