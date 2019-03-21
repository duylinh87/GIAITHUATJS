
function phuongtrinh1(a, b) {
    if (a !== 0) { console.log(' phuong trinh nghiem duy nhat', x = -b / a) }
    else if (a == 0 && b == 0) { console.log('phuong trinh vo so nghiem') }
    else { console.log('phuong trinh vo nghiem') };

}
// console.log(phuongtrinh1(5, 3)
// tim max trong 3 so 
// function timso(a, b, c, d) {
//     let Q = Math.max(a, b, c, d);
//     console.log('so lon', Q)
// }

// console.log(timso(9, 5, 6, 12));
// tim max trong 3 so
function timso(a, b) {
    return a >= b ? a : b;
}
// console.log(timso(4, 5))
// tim 3 so
function timso2(a, b, c) {

    if (a >= b && a >= c) {
        return a
    }
    else if (b >= a && b >= c) {
        return b
    }
    else { return c }
}
// console.log (timso (17,17,17))
// console.log (timso (17,16,17))
// console.log (timso (15,19,17))
// console.log (timso (21,16,17))

function findMax(a, b, c) {
    let mMax = timso(a, b);
    if (mMax < c) {
        return c
    }
    return mMax;
}

function findMax(a, b, c) {
    let mMax = timso(a, b);
    if (mMax < c) {
        return c
    }
    return mMax;
}

// console.log ( findMax (7,8,9))
// console.log ( findMax (9,8,7))
// console.log ( findMax (7,9,8))
function twomax(a, b, c) {
 if ( a >= b && a < c ) {
     return a }
 else if ( b >= a && b < c ) {
        return a }
 eles  ( c >= b && c < a ) {
            return c }
 
} 
console.log ( twomax ( 7, 8, 9))

