function isIsomorphic(s: string, t: string): boolean {
    let charsMapped = {}
    for(let i = 0; i < s.length; i++){
        if (charsMapped[s[i]] == undefined){
            charsMapped[s[i]] = t[i]
        }
        if (charsMapped[s[i]] != t[i]){
            return false
        }
        if (Object.keys(charsMapped).find(key => charsMapped[key] === t[i]) != s[i]) {
            return false
        }
    }
    
    return true
};