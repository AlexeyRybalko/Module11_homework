const Exp = (x, n) => {
    if (x > 0 && n > 0 && Number.isInteger(x) && Number.isInteger(n)) {
        console.log(Math.pow(x, n))
    } else {
        console.log('Одно из чисел не натуральное')
    }
}

Exp(2, 4);