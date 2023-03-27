//arrow function memungkinkan kita menulis sintaks fungsi dengan cara yang lebih pendek.
// jika fungsi memiliki satu statement, dan statement tersebut mengembalikan nilai,
// maka kita dapat menghapus tanda kurang dan kata kunci return.


const biodata = [
    {
        id: 1, isActive: true
    },
    {
        id: 2, isActive:true
    },
    {
        id: 3, isActive:true
    },
]

// versi js lama
// const activeBiodata = biodata.filter(function(bio){
//     return bio.isActive
// })

// versi ES6
const activeBiodata = biodata.filter(bio => bio.isActive);

console.log(activeBiodata);