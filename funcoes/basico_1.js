// Function declaration
function fn1 () {
    console.log("Fn1 exec")
}

// Function expression
const fn2 = function () {
    console.log("Fn2 exec")
}

fn1()
fn2()

function somar(...numbers) {
    let result = 0
    for(let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] != "number") {
            throw new Error(`O ${i + 1}° parametro nao e um numero!`)
        }
        result += numbers[i]
    }
    return result 
}

console.log(somar(5, 8, 8, 465))
