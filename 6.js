function simples(inicial, juros, tempo) {

    return (inicial + (inicial * juros * tempo))

}
function compostos(inicial, juros, tempo) {

        return inicial *(1 + juros) **tempo

}


console.log("simples -> " + simples(100, 10/100, 2))
console.log("composto -> " + compostos(100, 10/100, 2).toFixed(2))