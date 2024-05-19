const fibonacci = function(sequencePosition) {
        if (sequencePosition <= 0 ) {
        return "OOPS";
    };
        if (sequencePosition = 0){
            return 0;
        }
    const n = parseInt(sequencePosition, 10);
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

const result = fibonacci(6);
console.log(result);

// Do not edit below this line
module.exports = fibonacci;
