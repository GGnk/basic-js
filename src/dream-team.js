module.exports = function createDreamTeam(arr) {
  if(arr == null || !Array.isArray(arr))  return false;

  let team = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
      let bigStr = arr[i].trim().toUpperCase();
      team.push(bigStr[0]);
    }
  }
  return team.sort().join('');
};