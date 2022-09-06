Array.prototype.print = function() { console.log(this) }

const a = [2,3]
a.print()

Array.prototype.print = () => console.log(this)

const b = [2,3]
b.print()
