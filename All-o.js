$('.slider').slick({infinite: true, slideToShow: 1, slideToScroll: 1});
$(document).ready(function(){
$('.as-121').click(function(){
$('.as-121').hide(1)
})
$('.as-122').click(function(){
$('.as-ch').text ('Asit amet, consectetur adipisicing elit. Qui cumque numquam corporis nam quidem quae sequi laboriosam ab provident harumLorem ipsum dolor sit amet, consectetur adipisicing elit. Qui cumque numquam corporis nam quidem quae sequi laboriosam ab provident harum. consectetur adipisicing elit.')
})
$('.as-120').click(function(){
$('.as-120').text ('Red-less')
})
});

$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
mybutton.style.display = "block";
  } else {
mybutton.style.display = "none";}}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;}

/*---back to top with smooth scroll---*/

var btn = $('#button');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {btn.addClass('show');} else {
btn.removeClass('show');}});
btn.on('click', function(e) {e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');});

/*---back to top with smooth scroll---*/


/*---nav-bar---*/

$(document).ready(function() {

$(window).resize(function(){
if ($(window).width() >= 980){

$(".navbar .dropdown-toggle").hover(function () {
$(this).parent().toggleClass("show");
$(this).parent().find(".dropdown-menu").toggleClass("show");
});

$( ".navbar .dropdown-menu" ).mouseleave(function() {
$(this).removeClass("show");
});
}
});



});