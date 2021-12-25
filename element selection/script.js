// DOM Selection

// document.getElementByID()

const judul = document.getElementById('judul');

judul.style.color = 'red';

judul.style.backgroundColor = 'grey';

judul.innerHTML = 'yolo boy';


// document.getsElementByTagName()

const p = document.getElementsByTagName('p');

// p[0].style.backgroundColor = 'red';

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'white';
}


const h1 = document.getElementsByTagName('h1')[0];

h1.style.fontSize = '50px';


// document.getElementsByClassName()

const p1 = document.getElementsByClassName('p1');

p1[0].innerHTML = 'yolo bro';


// document.querySelector()

const p4 = document.querySelector('#b p');

p4.style.color = 'green' ;

p4.style.fontSize = '50px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');

li2.style.backgroundColor = 'orange';

const p6 = document.querySelector('p');

p6.innerHTML = 'ubah yolo';

// document.querrySelectorAll()

const p7 = document.querySelectorAll('p');

p7[2].style.backgroundColor = 'lightblue';












