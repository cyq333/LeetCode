/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//拓扑排序
const canFinish = (numCourses, prerequisites) => {
  let inDegree = new Array(numCourses).fill(0);
  let map = {};
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }
  let quene = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] == 0) {
      quene.push(i);
    }
  }
  let count = 0;
  while (quene.length) {
    const selected = quene.shift();
    count++;
    const toEnQueue = map[selected];
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;
        if (inDegree[toEnQueue[i]] == 0) {
          quene.push(toEnQueue[i]);
        }
      }
    }
  }
  return count === numCourses;
};
