// methode bind() membuat fungsi baru, ketika dipanggil, memiliki set this ke nilai yang di berikan.
// methode bind() memungkinkan suatu objek untuk meminjam methode dari objek lain tanpa membuat salinan

const nama ={
    nama: 'Nadila',
    test(){
        console.log(this);
    }
}

nama.test();

const thisBind = nama.test.bind(nama);
thisBind();