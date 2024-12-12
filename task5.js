function isOpenedParenth(char) {
    return ['(', '{', '['].includes(char);
}
function isClosedParenth(char) {
    return [')', '}', ']'].includes(char);
}
function isValid(str) {
    const parentheses = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);
    let stack = [];
    for (const char of str) {
        if (isOpenedParenth(char)) {
            stack.push(char);
        } else {
            if (isClosedParenth(char)) {
                const last = stack.pop();
                if (parentheses.get(last) !== char) {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
}