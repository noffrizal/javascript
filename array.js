// manipulasi array

// 1. menambah isi array
// var arr = [];
// arr[0] = "Noffrizal";
// arr[1] = "Zaim";
// arr[2] = "Oke";
// console.log(arr);

// 2. menghapus isi Array
// var arr = ["Noffrizal", "Zaim", "Oke"];
// arr[1] = undefined;
// console.log(arr);

// 3. menampilkan isi Array
// var arr = ["Noffrizal", "Zaim", "Oke", "Mantap"];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// Method pada Array
// a. Join
 var arr = ["Noffrizal", "Zaim", "Oke", "Mantap","Djiwa"];
// console.log(arr.join('|'));

// b. Push n Pop//
// arr.push('Gokil','Sekali');
// arr.pop();
// console.log(arr.join('|'));

// c. Unshift n Shift
// arr.shift();
// arr.unshift('Doddy');
// console.log(arr.join('|'));

// d. splice
// arr.splice(2, 0, 'Doddy','Waow');
// console.log(arr.join('|'));

// e.slice
// var arr2 = arr.slice(1,3);
// console.log(arr.join("|"));
// console.log(arr2.join('|'));

// f. Foreach 
var angka = [1,2,3,4,7,6,5,8];
// angka.forEach(function(e){
//     console.log(e); 
// });


// arr.forEach(function(e, i) {
//     console.log('Mahasiswa ke '+ i +' adalah  : '+ e)
// })

//  g. Map
// var angka2 = angka.map(function(e) {
//     return e * 2;
// })

// console.log(angka2.join('|'));

//  h. Sort
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join('|'));

//  i. Filter n find
var angka = [1,10,200,40,5,6,7,8];
var angka2 = angka.filter(function(x) {
    return x>5;
})

var angka3 = angka.find(function(x) {
    return x>5;
})

console.log(angka2.join());
console.log(angka3);




