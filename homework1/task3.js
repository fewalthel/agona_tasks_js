function fromRimToNumber(s) {
    const romanValues = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let result = 0;
    let prev = 0;

    for (const char of s.split('').reverse()) {
        let current= romanValues.get(char);
        if (current < prev) {
            result -= current;
        } else {
            result += current;
        }
        prev = current;
    }
    return result;
}