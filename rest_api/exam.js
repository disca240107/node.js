const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors

const app = express()//implementasi express

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.post("/gaya", (req,res) => {

let response = {
    message: "Ini end-point pertama ku", // menampilkan data 
    method: req.method, // menampilkan method 
    code: res.statusCode // menampilkan response code 
}
res.json(response)
})

// endpoint "/profil/nama/umur" dengan method GET
app.post ("/gaya", (req,res) => {
    // :name dan :age 🡪 diberikan titik dua didepan menunjukkan "name" dan "age" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let gaya = req.params.gaya // mengambil nilai pada parameter name
 
     // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        gaya: gaya
        
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bujur_sangkar" dengan method POST
app.post("/f", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let newton = Number(req.f) // mengambil nilai panjang dari body
   

    let f = 15;
    let m = 100;
    let a = 100;
  

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        f: f,
        m: m,
        a: a
       

    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// TUGAS
app.post("/a", (req,res) => {
    let percepatan  = Number(req.gaya.a)
   

    let a = 15; 
    let f = 100;
    let m= 100;
   

    let response = {
        a: a,
        f: f,
        m: m
       
    }

    res.json(response)
})

app.post("/m", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let massa = Number(req.body.m) // mengambil nilai panjang dari body
   

    let m = 15;
    let a=100;
    let f=100;
  

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        m: massa,
        a: a,
        f: f
       

    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
console.log("=====================")
console.log("dicari ")
console.log(gaya)
console.log(""+gaya.length)




// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
