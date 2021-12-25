const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const tumb = document.querySelectorAll('.tumb');

container.addEventListener('click', function(e){
    // cek apakah yang diklikk tumb
    if (e.target.className == 'tumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);
        tumb.forEach(function(thumb){
            thumb.className = 'tumb';
        })

        e.target.classList.add('active');
    }
});