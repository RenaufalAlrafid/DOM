// event handling

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });



const tutup = document.querySelectorAll('.close');

// for (let i = 0; i < tutup.length; i++) {
//     tutup[i].addEventListener('click', function(e){
//         // tutup[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
    
// }

// tutup.forEach( function(el) {
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         //preventDefault()
//         e.preventDefault();
//         e.stopPropagation();
//     });
    
// });


// DOM transversal Method

//* parentNode
//* parentElement
//* parentSibling
//* nextElementSibling
//* nextSibling
//* previousSibling
//* previousElementSibling

//preventDefault berguna untuk menghapus deafult  element

// event bubbling = jika pembungkus di panggil maka anaknya juga berjalan

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok');
//     });
// });


const contianer = document.querySelector('.container');

contianer.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    };

});

