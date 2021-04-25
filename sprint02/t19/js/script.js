function checkBrackets(str) {
    let regex = new RegExp(/\(|\)/);

    if (regex.test(str)) {
        let bracketsToAdd = 0;
        const stack = [];

        for (let i = 0; i < str.length; i++) {
            let char = str[i];

            if (char === '(') {
                stack.push(char);
            } else if (char === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
            } else if (char === ')') {
                stack.push(char);
            }
        }

        bracketsToAdd = stack.length;

        return bracketsToAdd;
    }

    return -1;
};