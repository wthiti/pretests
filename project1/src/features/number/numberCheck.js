const cacheIsPrime = [false, false, true] //0,1,2
const cacheIsFibonacci = [true, true, true] //0,1,2

export function isPrimeCheck(i) {
    if (cacheIsPrime[i] === true) return true;
    else if (cacheIsPrime[i] === false) return false;
    else {
        cacheIsPrime[i] = true;
        for(let x = 2;x<i;x++) {
            if(i % x === 0) {
                cacheIsPrime[i] = false;
                break;
            }
        }
    }
    return cacheIsPrime[i];
}

export function isFibonacciCheck(i) {
    if (cacheIsFibonacci[i] === true) return true;
    else if (cacheIsFibonacci[i] === false) return false;
    else {
        // https://www.geeksforgeeks.org/python-program-for-how-to-check-if-a-given-number-is-fibonacci-number/
        // A number is Fibonacci if and only if one or both of (5*n^2 + 4) or (5*n^2 – 4) is a perfect square
        function isPerfectSquare(i) {
            const x = Math.floor(Math.sqrt(i))
            return x*x === i;
        }
        cacheIsFibonacci[i] = isPerfectSquare(5*i*i + 4) || isPerfectSquare(5*i*i - 4);
    }
    return cacheIsFibonacci[i];
}

export function convert(b) {
    if (b === true) return 'true';
    else return 'false';
}