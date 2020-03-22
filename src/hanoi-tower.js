module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let N = Math.pow(2,disksNumber) - 1;
    let T = (Math.pow(2,disksNumber)-1)/(turnsSpeed/3600)
    let obj = {turns: N, seconds: T}
    return obj
}