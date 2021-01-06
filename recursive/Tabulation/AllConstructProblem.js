const allConstruct = (target, arr) =>{
    const table =Array(target.length + 1).fill().map(() => []);
    table[0] = [[]]

    for (let i = 0; i <= target.length; i++){
        for(let word of arr){
            if(target.slice(i, i + word.length) === word){
                const conbination = table[i].map(data => [ ...data, word])
                table[i + word.length] .push(...conbination)
            }
        }
    }

    return table[target.length]
}

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
console.log(allConstruct("purple", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))