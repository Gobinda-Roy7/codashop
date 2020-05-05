$(document).ready(function(){
    $('.slider').slider();
    
});
$(function(){
    var mixer = mixitup('.price');
    //for menu active class
    $('.portfolio-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
   
});