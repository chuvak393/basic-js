module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error();
    else {
        let arr1 = [];
        for (let i=0; i<arr.length; i++) {
            if (arr[i] === '--discard-next' && i < arr.length-1) {
                i++
            }
            else if (arr[i] === '--discard-prev' && i > 1) {
                arr1.pop();
            }
            else if (arr[i] === '--double-next' && i < arr.length-1) {
                arr1.push(arr[i+1]);
            }
            else if (arr[i] === '--double-prev' && i > 1) {
                arr1.push(arr[i-1]);
            }
            else if(arr[i]!='--discard-next'&&arr[i]!='--discard-prev'&&arr[i]!='--double-next'&&arr[i]!='--double-prev') {
                arr1.push(arr[i])
            }
        }
        return arr1
    }
};
