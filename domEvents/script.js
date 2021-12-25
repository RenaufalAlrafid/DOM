// ! dom events

// * event Handler

// on


const p3 = document.querySelector('.p3');

function warna() {
    p3.style.backgroundColor= 'salmon';
}


// method

const p2 = document.querySelector('.p2');

function warna2() {
    p2.style.backgroundColor= 'salmon';
}

p2.onclick = warna2;


// * addeventlistener

const p4 = document.querySelector('.p4');

p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const libaru = document.createElement('li');
    const tli = document.createTextNode(' item baru');
    libaru.appendChild(tli);
    ul.appendChild(libaru);
});