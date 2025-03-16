function arrayIntersection(arr1, arr2) {
  // const intersection = [];
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
  //     intersection.push(arr1[i]);
  //   }
  // }
  // return intersection;

  return arr1.filter(value => arr2.includes(value))
}

module.exports = arrayIntersection;
