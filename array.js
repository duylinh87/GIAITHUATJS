// bai tap 1 ( tim tbc)
// function tbc (arr){
//     let tbc = 0 ;
//     let length = arr.length 
//     let sum =0;
//     for ( let i = 0; i < length ; i++){
//         sum += arr[i];
//     }
//     tbc =sum / (length -1)
//     return tbc;
// }
// let a = [300 , 4 , 5 , 6 , 9 , 17]
// console.log ( tbc (a))
// bai tap 2 : tich mang
// function tic (arr){
//     let tbc = 0 ;
//     let tic = 1;
//     let length = arr.length;
//     let sum = 0;
//     for ( let i = 0 ; i < length ; i ++){
//         tic *= arr [i];
//         sum += arr [i];
//     }
//     tbc = sum / ( length -1)
//     return `tbc: ${tbc}, tich: ${tic}`
// }
// let a = [4,6,8,7,5]
// console.log ( tic (a))

// bai tap 3 : chia tien 
// function money (n){
//     let arry  = [1,5,10,20,50];
//     let length = arry.lenghth;
//     for ( let i = 0; i < length; i--){
//         if ( n % arry [i] === 0) break
//     }
// // }
// // console.log ( money (470))
// // const arr = [1, 5, 10, 20, 50]

// // function changeMoney(price) {
// //     let dic = {
// //         1: 0, 5: 0, 10: 0, 20: 0, 50: 0
// //     };

// //     for (let i = arr.length - 1; i > 0; i--) {
// //         if (price / arr[i] !== 0) {
// //             dic[arr[i]] = parseInt(price / arr[i])  // gan cho doi tuong dic mot gia tri moi 
// //             price = price % arr[i]
// //         }
// //     }
// //     console.log(dic) // ( co the dung rerturn dic va ngoai cosole.log ra)
// // }
// // changeMoney(180)
// // changeMoney(290)
// // // kien thich ve doi tuong ( key va value)
// // function changeMoney (n){
// //     let dic = { 1 : 0, 5 :0, 10 :0, 20 :0, 50 :0};
// //     let arry = [ 1,5,10,20,50];  
// //    for ( let i = arry.length -1 ; i >0 ; i--){
// //        if ( n / arry [i] !== 0){
// //            dic [ arry [i]] = parseInt ( n /arry [i] )
// //             n = n % arry[i]
// //             console.log ( dic)
// //        }
// //    } 
// // }
// // changeMoney (180)
// // changeMoney (681)
// // tim so lon nha trong mang
// // let arr =[ 1,1,1,4,5,6,6,6,8,8,8,8,4,2];
// // function solanxuathien ( nu ,arr){
// //     let count =0;
// //     for ( let i =0 ; i < arr.length ; i++){
// //         if (arr [i]=== nu) count++ ;

// // }
// // return count 
// // }
// // function slve ( arr){
// //     let count = 0 ;
// //     let countmax =0 ;
// //     let nu =0 ;
// //     for ( let i =0 ; i < arr.length ; i++){
// //          count = solanxuathien ( arr[i], arr);
// //         if ( countmax < count) { countmax = count ;
// //         nu =arr[i]}
// //     if ( countmax == count && nu < arr[i]){
// //         nu = arr[i];
// //     }
// //     }
// //     console.log ( countmax);
// //     console.log ( nu);
// //     }

// // slve ( arr)
// // function t ( arry){
// //     let max = 0;
// //     for ( let i =0; i < arry.length ; i++){
// //         if ( max < arry [i]){ 
// //             max = arry [i]    
// //     } 
// // }return max}
// // let arry =[19,19,3,40,]
// // console.log ( t (arry))  
// // function find(arr) {
// //     let result = {};
// //     for (let i = 0; i < arr.length; i++) {
// //         let count = demLanXuatHien(arr[i], arr);
// //         result[arr[i]] = count;
// //     }
// //     console.log(result)
// // }

// // function demLanXuatHien(num, arr){
// //     let count = 0;
// //     for(let i = 0; i < arr.length; i ++){
// //         if(num === arr[i]) count++
// //     }
// //     return count;
// // }

// // let arr = [1, 1, 4, 5, 5, 6, 6, 6, 6]
// // find(arr)


// // function find ( arr){
// //     let B = {};
// //     let min = 11000;
// //     let num = 0;
// //     for ( let i = 0 ; i < arr.length ; i ++){
// //         let  count = demsolan(arr[i], arr)
// //         B[ arr[i]] =count ;
// //        if(count < min) {min = count
// //     num = arr [i]};
// //     if ( num > arr [i]) { num =arr [i]}
// //     } 
// //    console.log ( min, num)
// //    console.log ( B)
// // }
// // function demsolan ( num, arr){
// //     let count =0 ;
// //     for ( let i =0; i < arr.length ; i++){
// //         if ( arr [i] === num ) count ++
// //     } return count 
// // }
// // let arr = [ 5,5,4,4,5,5,5,7,7]
// // find (arr)



// // function find ( arr){
// //     let B ={};
// //     for ( let i = 0; i < arr.length ; i++){
// //         count = solanxuathien ( arr [i], arr);
// //         B [arr[i]] = count;
// //     } 
// //     console.log ( B);
// // }
// // function solanxuathien ( num , arr){
// //     let count = 0
// //     for ( let i =0; i < arr.length ; i ++){
// //         if ( arr [i] === num ) count++ ;
// //     } return count
// // }
// // let arr = [ 11,11,11,11,11,4,4,5,5,5,4,6,6,6]
// // find ( arr)



// // tim cap  so cong
// // function csc(arr) {
// //     let d = arr[1] - arr[0];
// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] - arr[i - 1] !== d) {
// //             return `khong la so cong `
// //         }
// //     }
// //     return ` la cap so cong ${d}`
// // }
// // let arr = [1, 2, 3, 4, 5, 6]
// // console.log(csc(arr))
// // let brr = [3, 6, 9, 12, 15, 18]
// // console.log(csc(brr))
// // let crr = [10, 20, 30, 40, 50, 60]
// // console.log(csc(crr))



// // let arr = [2,3,4,5,6];
// //  console.log (arr [ arr.length -3])
// //  console.log (arr [ arr.length -4])
// //  console.log (arr [ arr.length -5])


// // function chen(arr, so, vitri) {
// //   let k = arr.length;
// //   if (vitri > 0 && vitri < k) {
// //     for (let i = k; i > vitri; i--) {
// //       arr[i] = arr[i - 1]
// //     }
// //     arr[vitri] = so;
// //     return arr
// //   }
// //   return ` ban nhap sai`
// // }
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// // console.log(chen(arr, 200, 6))
// // console.log(chen(arr, 244, 4))
// // console.log(chen(arr, 2030, 9))
// // console.log(chen(arr, 2003, 19))

// // function xoa (arr, vitri) {
// //   let k = arr.length;
// //   if (vitri > 0 && vitri < k) {
// //     for (let i = vitri; i < k; i++) {
// //       arr[i] = arr[i + 1];
// //     } 
// //     return arr
// //   }
// //   return ` ban nhap sai`
// // }
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// // console.log(xoa(arr, 8))

// // function changeMoney (n){
// //   let arr = [ 1,5,20,50,7,8];
// //   let dic = {};
// //   let k = arr.length ;
// //   for ( let i = k-1 ; i >=0 ; i--){
// //     if ( n / arr [i] !==0){
// //       dic [arr[i]] = parseInt ( n/arr[i]);
// //        n= n % arr[i];
// //     }
// //   }
// //   console.log ( dic);
// // }
// // changeMoney ( 231)

// // function tong ( a,b){
// //   let sum = 0;
// //   let tic =1;
// //   for ( i = a ; i <= b ;i++){
// //    sum += i ;
// //    tic *= i;
// // }
// // console.log ( sum,tic)
// // }
// //  tong (1,116)


// // sap xep mang 

// // function sort ( arr){
// //   let k = arr.length ;
// //   for ( let i = 0 ; i < k -1 ; i++){
// //     let m = 2;
// //     for ( let j = i+1 ; j < k ; j++){
// //       if ( arr[j] > arr [i]) {
// //         m = arr [i];
// //         arr [i] = arr [j];
// //         arr [j] =  m;}   
// //   }
// // }
// // // return arr ;
// // // }
// // // let arr = [ 8,5,6,3,6,7,4,45,6,0,444]
// // // console.log ( sort (arr))



// // function ss ( arr){
// //   let k = arr.length ;
// //   let tg = 20000 ;
// //    for ( i = 0; i < k -1 ; i++){
// //      for ( j = i +1 ; j < k ; j++){
// //        if ( arr[j] < arr[i]){
// //            tg = arr[i] ;
// //            arr [i] = arr [j];
// //            arr [j] = tg ;
// //        }
// //      }
// //    } return arr;
// // }
// // let arr = [3,4,5,2,4,17,9,10]
// // console.log ( ss( arr))
// // // de quy goi ham
// // function giaithua(aaa){
// //   if ( aaa === 0 ){
// //     return 1 ;
// //   } else 
// //     return aaa * giaithua( aaa-1);

// // }
// // console.log ( giaithua (12))
// //    // theo vong for
// // function gt2( b) {
// //   let giaithua2 = 1;
// //   for ( i =1 ; i <=b ; i++ ){
// // giaithua2*= i
// //   }
// //   return giaithua2
// // }
// // console.log (gt2 (12) )
// // for ( let i = 0 ; i < 9; i++){
// //   if ( i % 10  == 0) break}
// //   console.log (i)



// //  function pheptinh ( no1 , no2){
// //    this.A = no1;
// //    this.B = no2;
// //    this.tong = function (){ return this.A + this.B }
// //    this.hieu = function (){ return this.A - this.B}
// //  }
// //   let ob = new pheptinh ( 16,20);
// //   let ketqua = ob.tong()
// //   let h = ob.hieu()
// //   console.log ( ketqua);
// //   console.log (h);


// // function hocsinh ( name, tuoi, lop ){
// //   this.name  = name ;
// //   this.tuoi = tuoi;
// //   this.lop = lop ;
// //   this.thongtin = function ( ){ return this.name + this.tuoi + this.lop}
// // }
// // let hocsinh1 = new hocsinh ( 'lan moi co  ' , 16, '3_a')
// // let h = hocsinh1.thongtin()
// // console.log (h)
// // let hocsinh2 = new hocsinh ( 'linh moi co  ' , 20)
// // let b = hocsinh2.thongtin()
// // console.log (b)


// // function sinhvien ( name , age , class1){
// //   this.name = name ;
// //   this.age = age ;
// //   this.class1 = class1;
// //   this.thongtin  = function () { return this.name + this.age + this.class1}

// // }
// // let hocsinh1 = new sinhvien ( 'buoi' , 15 , ' 13a')
// // let h= hocsinh1.thongtin()
// // console.log (h)
// // let hocsinh2 = new sinhvien ( asfdsf , 14 ,fdfdf)




// // let a = [1, 3, 4, 5, 6, 7, 28, 12, 40,13,15];
// // function sorting2(arr) {
// //   let k = arr.length;
// //   let intermediate = 450;
// //   for (let i = 0; i < k - 1; i++) {
// //     for (let j = i + 1; j < k; j++) {
// //       if (arr[j] % 2 === 0) {
// //          intermediate = arr [i];
// //          arr[i] = arr[j];
// //          arr[j] = intermediate
// //       }
// //     }
// //   } return arr
// // }
// // // console.log(sorting2(a))
// // // // phan 2
// // // let brr = sorting(arr);
// // // let m = brr.length ;
// // // function sorting3 (brr){

// // // }

// var array1 = [1, 30, 4, 21, 100, 6, 7, 8, 31, 120, 34, 35, 37, 299];
// array1.sort(function (a, b) {
//     // if (a % 2 != 0 && b % 2 == 0)
//     //     return true;
//     // if (a % 2 != 0 && b % 2 == 0)
//     //     return false;
//     // if (a % 2 == 0 && b % 2 == 0 && a > b)
//     //     return true;
//     // if (a % 2 == 0 && b % 2 == 0 && a > b)
//     //     return false;
//     // if (a % 2 != 0 && b % 2 != 0 && a < b)
//     //     return true;
//     // if (a % 2 == 1 && b % 2 == 1 && a < b)
//     //     return false;
  





// })
// console.log(array1)

// // Thuật toán Shaker Sort
// // // let a = ['f','c','d','m','e'];
// // // a.sort ()
// // // console.log (a)
// // var numbers = [4, 2, 5, 1, 3];
// // numbers.sort(function(a, b) {
// //   return b - a;
// // });
// // console.log(numbers);

// // let array1 = [1, 30, 4, 21, 100, 6, 7, 8, 20, 35, 37, 38];
// // array1.sort(function (a, b) {
// //     if (a % 2 !== 0 && b % 2 == 0)
// //         return true;
// //     if (a % 2 == 0 && b % 2 == 0 && a > b)
// //         return true;
// //     if (a % 2 !== 0 && b % 2 !== 0 && a < b)
// //         return true;
// // })
// // console.log(array1)

// // function compare ( arr, so)
// //         {
// //           let k = arr.length;
// //           for ( let i =0 ; i < k ; i++)
// //           {
// //             if ( arr[i] === so ) 
// //             { 
// //               return ` vitri ${i} , va ${so}`
// //             }

// //           } return -1
// //         } 
// //         let a = [ 6,4,6,7]
// //         console.log ( compare ( a, 6))
// //         console.log ( compare ( a, 8))
// //         console.log ( compare ( a, 7))
// let m = [3, 4, 50, 20, 31]
// m.sort(function (a, b) {
//     return a - b
// }
// )
// console.log(m)




// let arr = { 'a': 9, 'b': 10, 'c': 12 }
// let b = Object.values(arr)

// console.log(b)
// console.log(Object.keys(arr))
let array1 = [1, 30, 4, 21, 100, 6, 7, 8, 31, 120, 10, 32, 11, 12, 10,20,25,40,50,70,90];
function sapxep ( array1){
  let k = array1.length; 
  let trunggian = 0;
  for (let i = 0 ; i < k -1 ; i++){
        for ( let j = i+1 ; j < k ; j++ ){
          if ( array1[j] %2 ===0 ){
            trunggian = array1 [i];
            array1 [i] = array1 [j];
            array1 [j] = trunggian;
           }
          if ( array1 [j] %2 === 0 && array1 [i] %2 === 0 && array1 [j] < array1 [i] ){
            trunggian = array1 [i];
            array1 [i] = array1 [j];
            array1 [j] = trunggian;
          }
          if ( array1 [j] %2 !== 0 && array1 [i] %2 !== 0 && array1 [j] > array1 [i]  ){
            trunggian = array1 [i];
            array1 [i] = array1 [j];
            array1 [j] = trunggian;
          }
        } 
  } console.log ( array1)