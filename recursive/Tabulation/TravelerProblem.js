/**
 * To solve this problem by appling Tabulation we need to think in terms of a Datagrid
 * m * n datagrid where m = 3 and n = 2
 * [ 0, 0, 0 ] 
 * [ 0, 0, 0 ]
 * [ 0, 0, 0 ] 
 * [ 0, 0, 0 ]
 * 
 * Now we need to initilize some best scenario we nknow thar a 
 * 2D Array of 1*1 dimension will have just one way to travel throug all its nodes.
 * the same way
 * 2D Array of 0*0 dimension will have just 0 way to travel throug all its nodes.
 * then we can set to the position table[1][1] = 1
 * [ 0, 0, 0 ] 
 * [ 0, 1, 0 ]
 * [ 0, 0, 0 ] 
 * [ 0, 0, 0 ]
 * then we can iterate over the 2D array with a nested for loop and add the current position to its next node and 
 * to the below node
 * const current = table[i][j]
 * if(j + 1 <= n) table[i][j + 1] += current
 * if(i + 1 <= m) table[i + 1][j] += current
 * 
 * [ 0, 0, 0 ] 
 * [ 0, 1, 1 ] 
 * [ 0, 1, 2 ]
 * [ 0, 1, 3 ]
 * 
 * now we can return table[m][n] = 3
 * @param {*size matrix m} m 
 * @param {*size matrix n} n 
 */
const gridtraveler = (m,n) =>{
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0))
    table[1][1] = 1

    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            const current = table[i][j]
            if(j + 1 <= n) table[i][j + 1] += current
            if(i + 1 <= m) table[i + 1][j] += current
        }

    }
    
    return table[m][n]
}

console.log(gridtraveler(10,15))