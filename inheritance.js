// proses pewarisan dari suatu objek yang memiliki atribut
// class person adalah induk nya 
class Person {
    // fungsi yang di jalankan di awal
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log("Walk")
    }
}

// teacher adalah class cild dari person
class Teacher extends Person{
    constructor(name, degree){
        super(name) // super untuk memanggil atribut yang global di miliki dari kedua class yang berhubungan
        this.degree = degree
    }

    teach(){
        console.log("Teach");
    }
}

const teacher = new Teacher("Nadila", "S.kom")
console.log(teacher);