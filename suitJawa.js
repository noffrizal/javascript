var tanya = true;
while (tanya) {
    // menangkap pilihan user 
    var p = prompt('pilih: gajah, semut, atau orang');

    // menangkap pilihan komputer
    var comp = Math.random();
    // membangkitkan bilangan random
    if (comp < 0.34 ) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67 ){
        comp = 'orang';
    }else {
        comp = 'semut';
    }

    // console.log(comp);

    // menentukan rules
    var hasil = '';
    if (p==comp) {
        hasil = 'SERI!';
    } else if(p == 'gajah'){
        // if (comp == 'orang'){
        //     hasil = 'MENANG!';
        // }else{
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    }else if(p == 'orang'){
    hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    }else if(p == 'semut'){
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG';
    }else{
        hasil = 'Inputan anda SALAH!';
    }
    // tampilkan hasil
    alert('Kamu Memilih : '+ p + ' dan Komputer memilih :  '+ comp +'\nMaka Hasilnya : Kamu '+ hasil);

    tanya = confirm('lagi?');
}
alert('Terimakasih sudah bermain');
