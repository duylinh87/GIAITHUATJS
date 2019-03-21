function phuongTrinhBac2(a, b, c) {

    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
       
        return false;
    }

    let delta = b * b - 4 * a * c;

    if(delta < 0){
        return 'Phuong trinh vo nghiem';
    }else if(delta === 0) {
        return x1 = x2 = -b / 2 * a;
    }else{
        x1 = (-b + Math.sqrt(delta))/ 2 * a;
        x2 = (-b - Math.sqrt(delta))/ 2 * a;
      
        return "phuong trinh co 2 nghiem phan biet";
    }


}

console.log(phuongTrinhBac2(4, 9, 3))
console.log(phuongTrinhBac2(6, 9, 3))
console.log(phuongTrinhBac2(0, 9, 3))
console.log("nghiem 1",x1)
console.log("linh cu te0",x2)

function nMax(a, b, c) {
    if (a >= b && a >= c) {
        return a
    }
    else if (b >= a && b >= c) {
        return b
    }
    return c
}
// console.log ( nMax ( 5,6,7))
// console.log ( nMax ( 7,6,7))
// console.log ( nMax ( 6,6,7))
function mMax(a, b, c, d) {
    let kMax = nMax(a, b, c)
    if (kMax > d) {
        return kMax
    }
    return d
}
// console.log ( mMax ( 5,6,7,9))
// console.log ( mMax ( 7,6,7,2))
// console.log ( mMax ( 46,6,7,30))




function twomax(a, b, c) {
    if (b <= a && a <= c || c <= a && a <= b) {
        return a
    }
    if (a <= b && b <= c || c <= b && b <= a) {
        return b
    }
    if (b <= c && c <= a || a <= c && c <= b) {
        return c
    }
}


function so2max(a, b, c, d) {
    let up = nMax(a, b, c);
    let up2 = twomax(a, b, c);
    if (d >= up2 && d <= up) { return d }
    if (d >= up) {
        return up
    }
    else { return up2 }
}
// console.log(so2max(4, 7, 7, 30))
// console.log(so2max(6, 46, 30, 7))
// console.log(so2max(30, 6, 7, 46))
// console.log(so2max(30, 6, 7, 46))
// console.log(so2max(30, 6, 7, 46))
// console.log(so2max(30, 6, 7, 46))

function tich(a, b) {
    let k = a * b / 10
    if (k === 1 || k === 2 || k === 3 || k === 4 || k === 5 || k === 6) { console.log(' chia het cho 10') }
    else { console.log(' khong') }
}
// console.log ( tich (11,2))
// console.log ( tich (10,2))
// console.log ( tich (30,2))
// vong lap for
let sum = 0;
function tong ( a,b) {
    if ( a >100 || a < 0 || b >100 || b < 0) { return false}
    for ( i =a ; i <b; i++){ 
        sum +=i
   }
}
console.log (tong ( 3,10))
console.log ( sum)
// let dff = [1,2,3]

// console.log ( dff)






