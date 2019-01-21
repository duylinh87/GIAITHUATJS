let x1, x2;

function inHello(){
    console.log('hello world')
}


function inHello2(){
    console.log('Hello\n Cong hoa xa hoi chu nghia Viet Nam\nDoc lap * Tu do * Hanh Phuc')
}

inHello();
inHello2()
function phuongTrinhBac2(a, b, c) {

    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        console.log("a, b, c phai la so");
        return false;
    }

    let delta = b * b - 4 * a * c;

    if(delta < 0){
        return 'Phuong trinh vo nghiem';
    }else if(delta === 0){
        return x1 = x2 = -b / 2 * a;
    }else{
        x1 = (-b + Math.sqrt(delta))/ 2 * a;
        x2 = (-b - Math.sqrt(delta))/ 2 * a;
      
        return "phuong trinh co 2 nghiem phan biet"
    }


}


console.log(phuongTrinhBac2(4, 9, 3))

console.log("x1 =",x1)
console.log("x2 =",x2)