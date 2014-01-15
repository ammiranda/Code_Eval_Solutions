var primeArray = [];
function getPrimes(max, primeArray) {                  //Function to find a set of prime numbers with the max number of the set as the parameter
        var sieve = [], i, j, primeArray = [];     
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                primeArray.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primeArray;
    };

for (var i = 0; primeArray.length <= 1000; i++) {
    getPrimes(i);
}