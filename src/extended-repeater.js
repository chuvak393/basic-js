module.exports = function repeater(string, options ) {
    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '+';
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 0;
    }
    let Ans = '';
    for (let i = 0; i < options.repeatTimes; i++) {
        let str = string;
        for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
            if ( options.addition === null|| options.addition != undefined ) {
                str += options.addition + options.additionSeparator;
            }
        }
        if ( options.addition === null || options.addition != undefined) {
            str += options.addition;
        }
        if (i == options.repeatTimes - 1) { 
            Ans += str;
        }
        else {
            Ans += str + options.separator
        }
    }

    return Ans;
};