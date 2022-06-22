var noAngkot = 1;
var jmlAngkot = 10;

for (noAngkot; noAngkot <=  jmlAngkot; noAngkot++) {
    if (noAngkot <=6 ) {
        console.log('Angkot no. '+ noAngkot + ' Beroperasi dengan baik');
    } else if(noAngkot === 8){
        console.log('Angkot no. '+ noAngkot + ' Sedang Lembur');
    } else {
        console.log('Angkot no. '+ noAngkot + ' Tidak beroperasi');    
    }  
}