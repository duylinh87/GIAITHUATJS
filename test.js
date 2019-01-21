// so sanh var, let , const khac nhau 
// so sanh ==, ===


console.log(1242)

// camel case
let hocSinh;
let sinhVien;
let layDiemSinhVien;


// snack case
let hoc_sinh;
let sinh_vien;
let lay_diem_sinh_vien;



const a = 5;
let b = 6
b = 7;

console.log(typeof b)
function ten_ham(){
	let a = 1;
	let b = 2;
	return 1 + 2
}
console.log(ten_ham())
function a(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log("A, b phai la so")
        return false;
    }
    return a + b;
}

console.log(add('1', 3));
