// class adalah tamplate untuk membuat objek 
// suatu class memiliki lebih atau fungsi
// suatu class mempunya properti dan fungsi yang sama setiap objek
// mempunyai nilai properti yang berbeda

class Person {
    // fungsi yang di jalankan di awal
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log("Walk")
    }
}

const person = new Person("nadila")
console.log(person)