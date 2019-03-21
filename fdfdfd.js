// let arr =[1,1,1,4,5,6,8,8]
// function slove ( arr){
//     let count = 0 ;
//     let countmax =0;
//     let num = 0 ;
//     for (let i =0; i < arr.lenght ; i++){
//         count = solanxuahien (arr[i, arr])
//         if ( countmax < count){ 
//             countmax = count;
//             num = arr [i];
//         }
//         if ( countmax = count && num < arr [i]) { 
//             num = arr [i];
//         }
//     } console.log ( num)
//     console.log ( countmax)
// }
// function solanxuahien ( num , arr){
//     let count = 0;
//     for ( let i =0 ; i < arr.length ; i++){
//         if ( arr [i] === num) count ++
//     } return count ;
// }
// slove (arr)
let arr = [ 1,1,3,4,5,5,5,5]
function a ( arr){
    let cout = 0;
    for ( let i =0 ; i < arr.length ; i++){
        for ( i=0 ;i < arr.length ; i++){
            if ( arr[i]===arr[i])cout ++
        }
    }
    return cout}


console.log ( a (arr))
