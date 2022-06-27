function cetakAngka(n) {
    // base case
    if (n === 0) {
        return;
    }
    // end base case
    console.log(n);
    cetakAngka(n-1);
}

function faktorial(i) {
    if (i===0) return 1;
    return i * faktorial(i-1);

}

cetakAngka(10);

console.log('hasil dari faktorial : '+faktorial(5));