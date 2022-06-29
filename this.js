// membuat Objek

// // cara 1 - function declaration
// function halo() {
//     console.log('halo');
// }

// // cara 2 - object literal
// var obj = {};
// obj.halo = function(){
//     console.log('halo');
// }

// constructor
function Halo() {
    console.log(this);
    console.log('Halo3');
}
 new Halo();
 