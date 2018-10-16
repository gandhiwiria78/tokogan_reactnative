//style: 'currency', currency: 'IDR' tambahkan jika ingin simbol tampil
function rupiah(uang){
   return Intl.NumberFormat('id-ID',{ maximumSignificantDigits: 3  }).format(uang);
}
export default rupiah;