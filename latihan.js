// x = 18;
// alert('nilai dari x : adalah ' + x);
// var nama = prompt('masukkan nama : ');
// alert('Nama Saya adalah '+ nama);
// var konfirmasi = confirm('kamu yakin?');
// if (konfirmasi === true) {
//     alert('user menekan tombol OK');
// } else {
//     alert('user menekan tombol Cancel');
// }

alert('selamat datang');
var lagi = true;
while( lagi){
    var nama = prompt('masukkan nama');
    alert('halo '+ nama);

    lagi= confirm('coba lagi?');
}

alert('terima kasih');