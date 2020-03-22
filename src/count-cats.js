module.exports = function countCats(backyard) {
  let result = 0;
  for (i=0;i<backyard.length;i++) {
    for (j=0;j<backyard[i].length;j++) {
      if (/^\^\^$/.test(backyard[i][j]) === true) {
        result += 1
      }
    }
  }
  return result
};
