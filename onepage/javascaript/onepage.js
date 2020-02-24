

$("#button1").click(function(){


  $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 1000);



});
$("#button2").click(function(){


  $('html, body').animate({
        scrollTop: $("main").offset().top
    }, 1000);



});
$("#button3").click(function(){


  $('html, body').animate({
        scrollTop: $("footer").offset().top
    }, 1000);



});
