// ! memanipulasi node

//cara append child

// *buat elemen baru

const pBaru = document.createElement('p');
const tpBaru = document.createTextNode('Paragraf Baru');

//* Simpan tulisan Ke dalam paragraf

pBaru.appendChild(tpBaru);

// * simpan pbaru di akhir section A


const sA = document.getElementById('a');

sA.appendChild(pBaru);


// cara insert before

const libaru = document.createElement('li');

const tli = document.createTextNode('item baru')

libaru.appendChild(tli);

const ul = document.querySelector('section#b ul');

const li2 = ul.querySelector('li:nth-child(2');

ul.insertBefore(libaru, li2);


// remove node

const link = document.getElementsByTagName('a')[0];

sA.removeChild(link);

//replace node

const sB = document.getElementById('b');

const p4 = sB.querySelector('p');

const h2baru = document.createElement('h2');

const th2baru = document.createTextNode('judul Baru');

h2baru.appendChild(th2baru);

sB.replaceChild(h2baru, p4);


