//Give 2 arrays, create a function that let's a user know (true/ false) whether these arrays contain any common items
//For Example: 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
//should return false.
//-------------------------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

function commonItem(array1, array2 ) {
  for(let i = 0; i < array1.length; i++) {
    for(let j = 0; j < array2.length; j++) {
      if(array1[i] === array2[j]) {
        return true
      }
    }
  }
  return false
}

console.log(commonItem(array1, array2))