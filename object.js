// membuat object
// var mhs = {
//     nama : 'noffrizal',
//     pekerjaan : 'tukang install',
//     ips: [3.00,2.50,3.20],
//     alamat : {
//         jalan : 'nurdin arraniry',
//         kota: 'bandung',
//         provinsi: 'Aceh'
//     }
// }

// object literal
var mhs1 = {
    nama : 'Noffrizal Zaim',
    nim : 'TI102154',
    email : 'zaimjr@gmail.com',
    jurusan: 'Teknik Informatika'
}

var mhs2 = {
    nama : 'Agung Febrian',
    nim : 'TI101154',
    email : 'agungjr@gmail.com',
    jurusan: 'Teknik Informatika'
}

// function declaration
function buatObjectMhs(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMhs('zaim','102154','zaimjr@gmail.com','informatika');

// constructor
function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Muharima', '101132', 'muharima@gmail.com','Informatika');