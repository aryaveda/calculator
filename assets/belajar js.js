console.log("Selamat anda berhasil menggunakan javascript di website!");
alert("Selamat datang di Kalkulator Arya!");
//belajar menggunakan javascript


//ujicoba function
function greeting(name, language) {
    if (language === "French")
    console.log("Bonjour " + name + "!")
}
greeting("Arya", "French");

function multiply(a,b) {
    return a*b;
}
let result = multiply(23,3);
console.log(result);

function menyapa(name, language) {
    if (language === "Jepang")
    return "Ohayou " + name + "!"
}
let sapaan = menyapa("Arya", "Jepang");
console.log(sapaan);



//ujicoba prompt
const namaPacar = prompt("siapa Pacarmu?");


if (namaPacar === "Anya"){
    alert("Benar")
} else if (namaPacar ==="Tika"){
    alert("Aamiin")
} else if (namaPacar != "Anya"){
alert("Salah");
} 

const namaDepan = prompt("Siapa nama depanmu?")
const namaBelakang = prompt("Siapa nama belakangmu?")
const bahasa = prompt("kamu bisa bahasa apa?")

const pengguna = {
    nama:
    {
        depan: namaDepan,
        belakang: namaBelakang,
    },
    bahasa:bahasa
}
if (bahasa==="Indonesia"){
    alert("Selamat pagi " + pengguna.nama.depan +" "+ pengguna.nama.belakang + " !")
} else if (bahasa==="Jawa"){
    alert("Sugeng enjang " + pengguna.nama.depan + pengguna.nama.belakang + " !");
}

//ujicoba element baru langsung dari javascript ke html
let samaDengan = document.querySelector('.equals');

let elemenBaru = document.createElement('p');
elemenBaru.innerHTML = '<span id="count">0</span>';
document.h1.appendChild(elemenBaru);

samaDengan.addEventListener('click',function(event){
    document.querySelector('#count').innerText++;
});


var firstName = "Arya";
console.log(firstName);
firstName = "Anya";
console.log(firstName);
let a = 34;
let b = 35;

if (a>b){
console.log(a);
}
else{
    console.log("anda tolol");
} 


let language = "Jawa";
let greetings = "Selamat pagi!!";

if (language === "jepang" ) {
    console.log("Ohayou onii chan UwU")
} else if (language === "inggris"){
    console.log("Good morning gentlemen")

} else if (language === "Jawa"){
    console.log("nderek langkung nggih")
};




console.log(a+b);
let greet = 68;
console.log(++greet);
let halo = "hai";
let haloBgt = "anjing";
console.log(halo+haloBgt);
const x = 34;
const y = 35;

let lebihDari = x>y;
let kurangDari = x<y;

console.log(lebihDari);
console.log(kurangDari);
let dataBelakangan = null;
console.log(dataBelakangan);

const myArray = ["Ilham","Deddy","corbuzier","gisel","19 detik","konto",'lodon',"ngnetod"];
for (let diurutinAnjing of myArray){
    console.log(diurutinAnjing);
}



let user = {
    nama:{
        awal:"arya",
        akhir:"veda"
    },
    muggle:false,
    umur:18,
    barang:["hape","laptop"]

};
console.log("Halo semuanya, nama saya "+user.nama.awal+" "+user.nama.akhir);
console.log("Umur saya "+user.umur+" "+"tahun");

a*=b;
console.log(a);

