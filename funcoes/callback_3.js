Array.prototype.myForEach = function (fn) {
    for (let i = 0; i < this.length; i++) {
        fn(this[i], i, this)
    }
}

Array.prototype.myMap = function (fn) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i, this))
    }
    return result
}

Array.prototype.myFilter = function (fn) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this))
            result.push(this[i])
    }
    return result
}

Array.prototype.myReduce = function (fn, initial) {
    let acc
    if(initial) {
        acc = initial
        for (let i = 0; i < this.length; i++) {
            acc = fn(acc, this[i], i, this)
        }
    } else {
        acc = this[0]
        for (let i = 1; i < this.length; i++) {
            acc = fn(acc, this[i], i, this)
        }
    }
    return acc
}

Array.prototype.proffReduce = function (fn, inicial) {
    let acc = inicial
    for (let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i]
            continue
        }
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

const array1 = [1, 9]
array1.myForEach((v, i) => console.log(`[${i}] ${v}`))
console.log(array1.myMap((v, i) => v + i))
console.log(array1.myFilter((v, i) => v > i))

const array2 = ["q", "a", "c", "a"]
console.log(array2.myReduce((prev, v) => prev + v))
console.log(array2.proffReduce((prev, v) => prev + v))
