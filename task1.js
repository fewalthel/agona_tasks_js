function numberLength(number) {
    let cnt = 0;
    number = Math.abs(number);

    while (number > 0) {
        cnt++;
        number = Math.floor(number / 10);
    }
    return cnt;
}

function isPalindrome(number) {
    if (number < 0 || (number % 10 === 0 && number !== 0)) {
        return false;
    }

    while (number > 0) {
        let lastDigit = number % 10;
        let firstDigit = Math.floor(number / 10 ** (Math.floor(Math.log10(number))));

        if (firstDigit !== lastDigit) {
            return false;
        }

        number = Math.floor((number % (10 ** Math.floor(Math.log10(number)))) / 10);
    }
    return true;
}