function isSubsequence(s: string, t: string): boolean {
    let arr = [];
    let i = 0;
    let j = 0;
    while(i < s.length && j < t.length){
        if(s[i] == t[j]){
            arr.push(s[i])
            i++;
        }
        j++;
    }
    return arr.length == s.length
};