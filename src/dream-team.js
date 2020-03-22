module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let ans = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      let a = members[i].replace(/\s/g, '');
      ans.push(a[0][0])
    }
  }
  return ans.join('').toUpperCase().split('').sort().join('')
};