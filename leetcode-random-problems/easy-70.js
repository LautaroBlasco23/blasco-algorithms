/**
 * @param {number} n
 * @return {number}
 */

 // Time limit exceeded using this algo (in n=44):

// var climbStairs = function(n) {
//     if(n == 1 || n == 0) return 1;
//     return climbStairs(n-1) + climbStairs(n-2); 
// };



// Using a hash table to store values, and get a better speed time:

var climbStairs = function(n) {
    let ListOfValues = {
        0: 1,
        1: 1
    };

    if( n == 1 || n == 0) return 1

    for (let i=2; i<=n; i++) {
        ListOfValues[i] = ListOfValues[i-1] +ListOfValues[i-2];
    };
    return ListOfValues[n]
}