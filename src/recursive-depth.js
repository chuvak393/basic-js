module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let ans = 1
        for (i = 0; i < arr.length; i++ ) {
            if (Array.isArray(arr[i])) {
               ans += this.calculateDepth(arr[i]); 
               
            }
        }
        return ans
    }
};