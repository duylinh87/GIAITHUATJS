function phuongtrinh ( a,b,c){
    if ( typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){ console.log( 'a,b,c phai la so')
     return false;}

     let denta = b*b- 4*a*c;
         if ( denta < 0){ 
             return ' phuong trinh vo nghiem';}
         else if ( denta === 0){
              return x1 = x2 = -b/2*a;}
         else { x1 = -b/3*a;
                x2 = b/5*a;
                return ' phuong trinh co 2 nghiem'; }
}
console.log(phuongtrinh (4,9,5));
console.log ('nghiem 1 =', x1);
console.log ('ngiem 2=', x2);
///bai tao
    function hinhcau (r){
        if ( typeof r !== 'number'){
             console.log ('r phai la so')
            return false;}
        else { s=4*r*r;
                v= (4/3)*r*r*r;}
        }
console.log (hinhcau (20));
console.log (' dien tich =', s);
console.log (' the tich  =', v);
// bài 2 vong lap for
for ( let i=10; i < 200 ; i++)
{  console.log( 'so', i+1); 
}
function timso (e,f,g,h){
if ( e<f<g<h) { return f;}
else if (e<g<f<h) { return g;}
}

console.log ( timso (8,6,7,9));






