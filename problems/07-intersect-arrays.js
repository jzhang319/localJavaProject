/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

function intersect(arr1, arr2) {
  // your code here...
  let answer = []

  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]){
          answer.push(arr1[i])
        }
    }
  }
  return answer
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = intersect;
