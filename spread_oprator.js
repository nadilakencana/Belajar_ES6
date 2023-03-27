// berfungsi untuk memasukan beberapa argument yang berbentuk data
// array kedalam fungsi atau, kita juga dapat memasukan nilai 
// array kedalam array lainnya

  const first = {nama: "nadila"}
  const job = {jobs: "web developer"}

  const combined = {...first, ...job, location:"indonesia"}
  console.log(combined)