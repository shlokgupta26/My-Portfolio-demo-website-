$(document).ready(function()
{
    $('.slider').slick({
arrows:false,
dots:true,
appendDots:'.slider-dots',
dotsClass:'dots'
    });
    let hamburger=document.querySelector('.hamburger');
    let times=document.querySelector('.times');
    let mobileNav=document.querySelector('.mobileNav');
    hamburger.addEventListener('click',function()
    {
mobileNav.classList.add('open');
    });
    listen.addEventListener('click',function()
    {
        mobileNav.classList.remove('open');
    });
});