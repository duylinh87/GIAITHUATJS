// // let arr = [1, 2, 3, 4, 56, 33, 4, 4, 5, 66, 77];
// // function total(arr) {
// //   let sum = 0;
// //   let k = arr.length;
// //   for (let i = 0; i < k; i++) {
// //     sum += arr[i];
// //   }
// //   return sum;
// // }
// // console.log(total(arr))

// // // sap xep chan truoc le sau, chan tang dan .le giam dan
// // function ss(arr) {
// //   let k = arr.length;
// //   let tg = 0;
// //   for (let i = 0; i < k - 1; i++) {
// //     for (let j = i + 1; j < k; j++) {
// //       if (arr[j] % 2 === 0) {
// //         tg = arr[i];
// //         arr[i] = arr[j];
// //         arr[j] = tg;
// //       }
// //       if (arr[i] % 2 === 0 && arr[j] % 2 === 0 && arr[j] < arr[i]) {
// //         tg = arr[i];
// //         arr[i] = arr[j];
// //         arr[j] = tg;
// //       }
// //       if (arr[i] % 2 !== 0 && arr[j] % 2 !== 0 && arr[j] > arr[i]) {
// //         tg = arr[i];
// //         arr[i] = arr[j];
// //         arr[j] = tg;
// //       }
// //     }
// //   } return arr
// // }
// // console.log(ss(arr))

// // // sap xep chon selectionsort 

// // function selectionsort(arr) {
// //   let k = arr.length;
// //   let tg = 0;
// //   for (let i = 0; i < k - 1; i++) {
// //     let idmin = i;
// //     for (let j = i + 1; j < k; j++) {
// //       if (arr[j] < arr[idmin]) idmin = j
// //     }
// //     tg = arr[i];
// //     arr[i] = arr[idmin];
// //     arr[idmin] = tg;
// //   } return arr
// // }
// // console.log(selectionsort(arr))


//  let k = [1, 2, 3, 4, 56, 33, 4, 4, 5, 66, 77];

// function merge(array, left, m, right){
//   let l = left, r = m + 1;
//   let tmp = [];

//   while(l <= m && r <= right){
//       if(array[l] < array[r]) tmp.push(array[l++]);
//       else tmp.push(array[r++]);
//   }

//   while(l <= m) tmp.push(array[l++]);
//   while(r <= right) tmp.push(array[r++]);

//   for(let i = 0; i < tmp.length; i++)
//       array[i + left] = tmp[i];
// }
// function mergeSort(array, left, right){
//   if(left < right){
//       let m = Math.floor((left + right) / 2);
//       mergeSort(array, left, m);
//       mergeSort(array, m + 1, right);
//       merge(array, left, m, right);
//   } 
// }
//  console.log ( mergeSort(k, left, right))


 
// /**
//  * An implementation for Mergesort. Less efficient
//  * than Quicksort. Again, you'd just use Array.sort
//  * but if you found yourself unable to use that
//  * there's always this option.
//  *
//  * Tests with:
//  *
//  * var array = [];
//  * for(var i = 0; i < 20; i++) {
//  *   array.push(Math.round(Math.random() * 100));
//  * }
//  *
//  * Mergesort.sort(array);
//  *
//  * @author Paul Lewis
//  */
// var Mergesort = (function() {

//   /**
//    * Sorts the array by breaking it down
//    * into smaller chunks.
//    *
//    * @param {Array} array The array to sort
//    */
//   function sort(array) {

//     var length = array.length,
//         mid    = Math.floor(length * 0.5),
//         left   = array.slice(0, mid),
//         right  = array.slice(mid, length);

//     if(length === 1) {
//       return array;
//     }

//     return merge(sort(left), sort(right));

//   }

//   /**
//    * Merges two sublists back together.
//    * Shift either left or right onto
//    * the result depending on which is
//    * lower (assuming both exist), and simply
//    * pushes on a list if the other doesn't
//    * exist.
//    *
//    * @param {Array} left The left hand sublist
//    * @param {Array} right The right hand sublist
//    */
//   function merge(left, right) {

//     var result = [];

//     while(left.length || right.length) {

//       if(left.length && right.length) {

//         if(left[0] < right[0]) {
//           result.push(left.shift());
//         } else {
//           result.push(right.shift());
//         }

//       } else if (left.length) {
//         result.push(left.shift());
//       } else {
//         result.push(right.shift());
//       }

//     }

//     return result;

//   }

//   return {
//     sort: sort
//   };

// })();

// let arr = [ 1,2,3,4]
// console.log (arr)
// let k = arr.push(4)
// console.log (k)
// console.log (arr)
// arr.push ( 100)
// console.log ( arr)

// var a = 3
//  var a = 4
//  console.log (a)
//  let b = 3
// //  let b = 4
// //  console.log (b)
//  function mergeSort (arr) {
//     if (arr.length === 1) {
//         return arr
//     }
//      const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
//      const left = arr.slice(0, middle) // items on the left side
//      const right = arr.slice(middle) // items on the right side
//       return merge(
//       mergeSort(left),
//       mergeSort(right)
//     )
//   }
//     // compare the arrays item by item and return the concatenated result
//   function merge (left, right) {
//     let result = []
//     let indexLeft = 0
//     let indexRight = 0
//     while (indexLeft < left.length && indexRight < right.length) {
//       if (left[indexLeft] < right[indexRight]) {
//         result.push(left[indexLeft])
//         indexLeft++
//       } else {
//         result.push(right[indexRight])
//         indexRight++
//       }
//     }
//     // console.log('===============>', result);
//     // console.log('===============>left', left.slice(indexLeft));
//     // console.log('===============>right', right.slice(indexRight));
//       return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
//   }
//     const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
//   console.log('433---',mergeSort(list)) 

//   // vong lap while
//   let arr = [ 2,3,4,5,7,8];
//   let b = arr.slice(3)
//   let c= arr.slice(0,3)
//   console.log (b)
//   console.log (c)

// let arr2 = [...list, 777]
// let arr3 = [555, ...list, 743857]

// console.log('===============>', arr2);
// console.log('===============>', arr3);





function mergesort ( arr){
     if ( arr.length === 1){
        return arr
     }
  let middle = Math.floor ( arr.length /2);
  let left = arr.slice ( 0, middle) ;
  let right = arr.slice (middle);
   return merge ( mergesort (left), mergesort ( right))   
   
}
function merge ( left , right){
     let indexleft = 0 ;
     let result = [];
     let indexright = 0;
        while ( indexleft < left.length && indexright < right.length){
          if ( left[indexleft] < right[indexright]){
            result.push (left[indexleft]);
            indexleft++;
          }
          else { result.push (right[indexright])
          indexright ++}
        }
        return result.concat (left.slice (indexleft)).concat ( right.slice (indexright))
} 
let m= [3,4,55,6,11,2,5,6,78,8,999,33,444]
console.log ( mergesort(m))
