// var fullName = 'Phương Nguyễn'; 
// var age=21

// alert(fullName);
// alert(age);
// console.log('đây là 1 dòng log')
//console.error(fullName);
// confirm('xác nhận đủ tuổi!')
// prompt('Bạn đã đủ tuổi chưa!')
//  var a =1;
//  var b =2;
//  if(a>b){
//      alert('A lớn hơn b')
//  }else{
//      alert('B là số lớn nhất')
//  }

//  var myObject = {
//      name:'phuongnguyen',
//      age: 21,
//      'adress': 'Hung Yên'

//  };
//  //console.log('myObject',myObject)
//  var myArray = ['phuongnguyen','aray']
//  console.log(myArray )
// console.log(typeof myString.charAt(20))
// console.log(myString.length)
// console.log(myString.replace(/Phuong/g,'Nguyen')) tìm và thay thế chuỗi

    
//     var description = '   Học Javascript cơ bản tại F8   ';
//     var myName = description.slice(4,14)//slice ()lấy gtri chuỗi trong khoảng.
//     console.log(typeof description.trim())// trim() xóa khoảng trắng đầu và cuối của chuỗi

// var PI= 3.1456
// console.log(PI.toFixed())
// ARRAY
var languages = [
    'Javascript',
    'PHP',
    'Python'
];

//console.log(languages[2])// lấy phần tử tại vị trí bn
//console.log(languages.pop())// xóa phần tử cuối mảng và trả về phần tử đã xóa
//console.log(languages.push('Phuong'))//phần tử vào cuối mảng
//console.log(languages.shift())// xóa phần tử đầu mảng và trả về phần tử xóa
//console.log(languages.unshift('Nguyen',"Lo"))// thêm vào đầu mảng 
//languages.splice(1,1,"Dart")// vtri là con trỏ bắt đầu xóa,vị trí thứ 2 là xóa đi bn ptu,vtri t3 là thêm vào 
// var language2 = [
//     'PHP',
//     'c++'
// ]
// //console.log(languages.concat(language2))// nỏi 2 mạng lại thành 1
// console.log(languages.slice(0,1))
// Function
// 

// tham số function
// function writeLog() {
//     var myString = "";
//     for (var param of arguments){
//         myString += `${param} - `
//     }
//     console.log(myString)
// }
// writeLog("test message",1);

// Object
// var car = {
//     name: "Audi",
//     color: "Black",
//     madeIn: "English",
//     myName: function(){
//         return this.madeIn;
//     }
// };
//  car.myCar = 'Phuong';
//  delete car.color;
// console.log(car)

//Object contructor
// function User(firstName,lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.getName = function() {
//         return `${this.firstName} ${this.lastName} `;
//     }
// }
// var myName = new User('Phuong','Nguyen',18);
// var author = new User('Hiếu', 'Nguyễn', 21);

// author.email='phuongnguyen10x';
// myName.email='phuongnguyen10x';


// console.log(myName.getName())
// console.log(author.getName())
// const month =('Jun','Sep','Nov') 
// var date = new Date();

// console.log(date.setFullYear(2021,11,13))
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
    
//   }
// console.log(getRandomArbitrary(2,3))
// function getRandom() {
//     return Math.random();
//   }
for (var i =1 ; i<10 ; i++){
    var sum ='';
    sum= i + i++;
    console.log(sum)
}
  