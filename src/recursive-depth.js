module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let ans=1;
            for(let i=0;i<arr.length;i++){
                if(Array.isArray(arr[i])){
                    let a=1;
                    a+=this.calculateDepth(arr[i]);
                    if (a > ans) {
                        ans = a;
                    }
                }
            }
            return ans;
    }
};