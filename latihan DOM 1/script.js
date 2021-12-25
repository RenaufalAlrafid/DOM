// mengganti warna
const warna = document.getElementById('ubahWarna');

warna.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

// tambah tombol + ngacak warna
const tRandom = document.createElement('button');

const teksTombol = document.createTextNode('Acak Warna');

tRandom.appendChild(teksTombol);

tRandom.setAttribute('type', 'button');

warna.after(tRandom);

tRandom.addEventListener('click', function () {
    const R = Math.round(Math.random() * 255 + 1);
    const G = Math.round(Math.random() * 255 + 1);
    const B = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ R + ',' + G + ',' + B + ')';
})


//slider warna

const sliderMerah = document.querySelector('input[name=sMerah]');
const sliderHijau = document.querySelector('input[name=sHijau]');
const sliderBiru = document.querySelector('input[name=sBiru]');

sliderMerah.addEventListener('input', function() {
    const R = sliderMerah.value;
    const G = sliderHijau.value;
    const B = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ R + ',' + G + ',' + B + ')';
})
sliderHijau.addEventListener('input', function() {
    const R = sliderMerah.value;
    const G = sliderHijau.value;
    const B = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ R + ',' + G + ',' + B + ')';
})
sliderBiru.addEventListener('input', function() {
    const R = sliderMerah.value;
    const G = sliderHijau.value;
    const B = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ R + ',' + G + ',' + B + ')';
})

document.body.addEventListener('mousemove', function(event) {
    //posisi mouse
    // event.clientX
    const xPos =Math.round((event.clientX/window.innerWidth) * 255);
    const yPos =Math.round((event.clientY/window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos + ',' + yPos + ',' + '100' + ')';
})

