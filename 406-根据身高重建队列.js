/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  let ans = [];
  for (let i = 0; i < people.length; i++) {
    ans.splice(people[i][1], 0, people[i]);
  }
  return ans;
};
