// // Dong goi
// // Ke thua
// // Truu tuong
// // Da hinh
// // tu khoa this
// // es6
// Object ... keys() tra ve array thuoc tinh cua object
//prototype..., entries, freeze
 
// var myObject = {};

class Person {
    constructor(n){
        // thuoc tinh
        this.name = n;
    }
    // Phuong thuc
    say (){
        console.log(this.name)
    }


}

class Student extends Person{
    constructor(n){
        // Tu khoa super cho phep su dung cac phuong thuc thuoc tinh cua object cha
        super();
        this.name = n;
    }
    sayHello(){
        console.log('hello')
    }

}

let person = new Person('linh')
person.say()
person.name;

let student = new Student('test');
student.say();

Student.prototype.age = 30;
Student.prototype.sayGoodbye =  () => {
    console.log('say good bye')
}






var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); 