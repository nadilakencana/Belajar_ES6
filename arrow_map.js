// methosd array map() untuk membuat array baru dari memanggil  
// sebuah fungsi pada setiap elment array

const buah =["anggur", "appel","Pisang"];
const items = buah.map( buahs => `<li>${buahs}</li>`)
console.log(items);