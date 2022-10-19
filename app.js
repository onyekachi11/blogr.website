const showMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const navBarLink = document.querySelector('.nav-links');
const links = document.querySelectorAll('.links')


window.addEventListener('load',function(){
    closeMenu.classList.add('hide');
})
window.addEventListener('load',function(){
    links.classList.add('hide')
})

showMenu.addEventListener('click',function(){
    navBarLink.classList.add('show');
    showMenu.classList.add('hide');
    closeMenu.classList.remove('hide');
    
})
closeMenu.addEventListener('click',function(){
    navBarLink.classList.remove('show');
    closeMenu.classList.add('hide');
    showMenu.classList.remove('hide')
})


const h3Link = document.querySelector('.h3-link-1');
const h3Link2 = document.querySelector('.h3-link-2');
const h3Link3 = document.querySelector('.h3-link-3');
const ulLink = document.querySelector('.ul-link');
const ulLink2 = document.querySelector('.ul-link2');
const ulLink3 = document.querySelector('.ul-link3');

h3Link.addEventListener('click',function(){
    console.log('hello');
    ulLink.classList.toggle('show')
});
h3Link2.addEventListener('click',function(){
    ulLink2.classList.toggle('show')
});
h3Link3.addEventListener('click',function(){
    ulLink3.classList.toggle('show')
});