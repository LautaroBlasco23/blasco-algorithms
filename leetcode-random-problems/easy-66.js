var plusOne = function(digits) {
    let lastIndex = digits.length - 1;
    while (true) {
        if (digits[lastIndex] !== 9) {
            digits[lastIndex] += 1;
            break
        } 
        digits[lastIndex] = 0;
        lastIndex -= 1;
        if(lastIndex == -1) digits.unshift(1);
    }
    return digits
};