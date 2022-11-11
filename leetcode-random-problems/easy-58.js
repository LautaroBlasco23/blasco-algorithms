/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    let newList = s.split(' ').filter(element => {
        return element.length >= 1;
    })
    return newList.pop().length
};