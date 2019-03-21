// function sinhvien ( name , age , born ){
//     this.name = name ;
//     this.age = age ; 
//     this.born = born ;
//     this.thongtin = function (){ return this.name + this.age + this.born}
// }
// let sinhvien1 = new sinhvien('linh' , ' 16t', 'namdinh')
// let h = sinhvien1.thongtin ();
// console.log (h)
// console.log (typeof sinhvien1)

// let b = [1,2,2];
// let c= {};
// let a = 6;
// let d = true ;
// let e = ' dit con me' +6+{}
// console.log ( typeof a);
// console.log ( typeof b);
// console.log ( typeof c);
// console.log ( typeof d);
// console.log ( typeof e);


// function changemoney(price) {
//     let arr = [1, 5, 20, 50,7,8,9,10]
//     let k = arr.length;
//     let dic = {};
//     let brr = sapxep (arr);
//     for (let i = k - 1; i >= 0; i--) {
//         if (price / brr[i] !== 0) {
//             dic[brr[i]] = parseInt (price / brr[i]);
//             price = price % brr[i]
//         }
//     }
//     console.log(dic)
// }
// function sapxep (arr){
//     let trunggian = 9 ;
//     let k = arr.length;
//     for ( let i = 0 ; i <k-1 ;i ++){
//         for ( j = i+1 ; j < k; j ++){
//             if ( arr [j] < arr [i]){
//                 trunggian = arr [i];
//                 arr[i] = arr [j];
//                 arr[j] = trunggian;
//             }
//         } 
//     }return arr;
// }
// changemoney (198)
// changemoney (197)
// changemoney (196)

// let student = {
//     firstname :' anh',
//     lastname : 'tu',
//     fullname : function () {
//         return this.firstname + this.lastname
//     }
// }
// console.log ( student.firstname)
// console.log ( student.fullname())

// let student = {
//     firstname :' anh',
//     lastname : 'tu',
//     get fullname () {
//         return `${this.firstname} ${this.lastname}`
//     }
// }
// console.log ( student.firstname)
// console.log ( student.fullname)

// let a= [1, 11]
// let b = [1, 232]
// let arr = [a, b]



// for(let i = 0; i< arr.length; i ++){
//     for(let j = 0; j < arr[i].length; j ++){
//         console.log(arr[i][j]);
//     }

//     console.log('\n')
// }