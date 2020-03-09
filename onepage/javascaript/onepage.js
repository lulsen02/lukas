

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

var x=0;


$("#knapp2").show();
$("#knapp1").show();


 $("#window").css("overflow", "hidden");

$("#knapp1").click(function(){ //höger
console.log(x);
      if (x>=2) {

          $("#news1").animate({right:"0"});
          x=0;
              console.log(x);
      } else {

          $("#news1").animate({right:"+=202"});
          x=x+1;
      }
      console.log(x);
});

$("#knapp2").click(function(){ // Vänster

console.log(x);
  if (x>=1) {
      $("#news1").animate({right:"-=202"});
      x=x-1;
console.log(x);
  }else if (x <= 0){
      $("#news1").animate({right:"+=404"});
      x = 2;
    }
    console.log(x);

});
