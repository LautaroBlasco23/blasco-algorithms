function isValid(s: string): boolean {
    let stack = []

    if(s.length == 0 || s.length % 2 != 0){
        return false
    }

    for(let parenthesis in s.split('')){

        console.log(s[parenthesis])
        console.log(stack)
        if(s[parenthesis] == ')' && stack[stack.length-1] == '('){
            stack.pop()
        }
        else if(s[parenthesis] == ']' && stack[stack.length-1] == '['){
            stack.pop()
        }
        else if(s[parenthesis] == '}' && stack[stack.length-1] == '{'){
            stack.pop()
        }
        else{
            stack.push(s[parenthesis])
        }
    }
    return stack.length == 0;
};