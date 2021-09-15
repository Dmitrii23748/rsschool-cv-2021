const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const link = document.querySelectorAll('.menu__item-link')
const lockBody = document.querySelector('body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    lockBody.classList.toggle('lock');
})



if(link.length > 0) {
    link.forEach((item) => {
        item.addEventListener('click', function() {
            menuBtn.classList.remove('active');
	        menu.classList.remove('active');
            lockBody.classList.remove('lock');
        })
    })
}