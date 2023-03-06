// Cau 1
// function giaiPhuongTrinhBac2(a, b, c) {
//     let delta = b * b - 4 * a * c
//     if (a != 0) {
//         if (delta == 0) {
//             return console.log("Phuong trinh vo nghiem");
//         } else if (delta > 0) {
//             x1 = (-b + Math.sqrt(delta)) / 2 * a
//             x2 = (-b - Math.sqrt(delta)) / 2 * a
//             return console.log(`Phuong trinh co 2 nghiem la ${x1} va ${x2}`);
//         } else {
//             x = -b / (2 * a)
//             return console.log(`Phuong trinh co nghiem kep la ${x}`);
//         }
//     } else {
//         return console.log('Phuong trinh vo nghiem');
//     }
// }

// giaiPhuongTrinhBac2(8, 12, -20)




// Cau 2
// let arr = [1, 2, 3, 4, 5, 6]
// function returnElement(number, arr) {
//     let result = arr.indexOf(number)
//     return console.log(`Vi tri cua ${number} la ${result}`);
// }
// function checkExist(number, arr) {
//     let check = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == number) {
//             check += 1;
//         }
//     }
//     if (check == 1) {
//         return console.log(`So nguyen vua nhap nam trong mang`);
//     } else {
//         return console.log(`So nguyen vua nhap khong nam trong mang`);
//     }
// }
// checkExist(2,arr)



// Cau 3
// let str = "day la mot chuoi ky tu"
// let arr = ["a","o","e","u","i"]
// let count = 0
// function demKyTuNguyenAm(string,arr){
//     for (let i = 0; i < str.length; i++){
//         for (let j = 0; j < arr.length; j++){
//             if(string[i] == arr[j]){
//                 count += 1;
//             }
//         }
//     }
//     if ( count != 0){
//         return console.log(`So ky tu nguyen am la ${count}`);
//     } else {
//         return console.log(`false`);
//     }
// }

// demKyTuNguyenAm(str,arr)


// Cau 4

// class Staff {
//     constructor(fullname, email) {
//         this.email = email;
//         this.fullname = fullname;
//     }
//     setFullname = function (fullname) {
//         this.fullname = fullname;
//     }
//     getFullname = function () {
//         return this.fullname;
//     }
//     setEmail = function (email) {
//         this.email = email;
//     }
//     getEmail = function () {
//         return this.email;
//     }
//     toString = function () {
//         return console.log(`Ten day du: ${this.getFullname()}, Email: ${this.getEmail()}`);
//     }
// }
// let a = new Staff("david", "david@gmail.com");
// a.setFullname("David Do");
// a.setEmail("david.do@gmail.com");
// a.toString();
// let Staffs = [
//     new Staff("Hung", "hung@gmail.com"),
//     new Staff("david", "david@gmail.com"),
//     new Staff("Le", "Le@gmail.com")
// ]
// for (i = 0; i < Staffs.length; i++){
//     Staffs[i].toString()
// }