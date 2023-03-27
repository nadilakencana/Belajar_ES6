// sebuah tamplate untuk membuat objek, satu class memiliki
//  satu atau lebih fungsi, satu class dapat menghasilkan banyak objek . 
// semua objek mempunyai properti dan fungsi yang sama 
// setiap objek bisa mempunya nilai properti yang berbeda

class Person {
    // fungsi yang di jalankan di awal
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log("Walk")
    }
}

//  new adalah inisialisasi
const person = new Person('Nadila');
console.log(person);