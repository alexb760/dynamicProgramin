//Complecity of O(target * length of array)
//Complecity of O(m * n) = O(n) lineal
const canSum = (target, arr) =>{
    const table = Array(target + 1).fill(false)
    table[0] = true
    for(let i = 0; i <= target; i++){
        if(table[i] === true){
            for(let j of arr){
                table[i + j] = true
            }
        }
    }
    return table[target]
}

const howCanSum = (target, arr) =>{
    const table = Array(target + 1).fill(false)
    table[0] = true
    const howSum = []
    for(let i = 0; i <= target; i++){
        if(table[i] === true){
            for(let j of arr){
                if(i + j === target) howSum.push([i, j])
                table[i + j] = true
            }
        }
    }
    return howSum
}

const howSum = (target, arr) =>{
    const table = Array(target + 1).fill(null)
    table[0] = []
    const howSum = []
    for(let i = 0; i <= target; i++){
        if(table[i] !== null){
            for(let j of arr){
                table[i + j] = [ ...table[i], j]
            }
        }
    }
    return table
}

console.log(howSum(7, [5,3,4,7]))
console.log(howCanSum(300, [7,14,5,8]))
console.log(canSum(30701, [7,14,3,7]))