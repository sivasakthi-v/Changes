$(document).ready(function(){

    // Sticky Navigation
     $('.js--wwd').waypoint(function(direction) {
    direction == "down" ? $('nav').addClass('sticky') : $('nav').removeClass('sticky');
    }, {
         offset: '60px;'
     });
    
    
    // Scroll on Button
    $('.js--scroll-to-role').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-role').offset().top}, 1000);
    });
    
    
    //Animation on Scroll
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__fadeIn');   
    }, {
        offset: '60%'
    });
    
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__fadeInUp');   
    }, {
        offset: '120%'
    });
    
    
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__fadeIn');   
    }, {
        offset: '80%'
    });
    
    
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__pulse');   
    }, {
        offset: '50%'
    });
    
    

    /*Mobile Nav*/
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i')
        
        nav.slideToggle(200);
        
        if(icon.hasClass('fas fa-bars'))
        {
            icon.addClass('far fa-times-circle');
            icon.removeClass('fas fa-bars');
        }
        
        else 
            {
                icon.addClass('fas fa-bars');
                icon.removeClass('far fa-times-circle');  
            }
        
        
        
    });

});



