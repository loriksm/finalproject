$(document).ready(function(){
 

$("#circle1").mouseenter(function() {
  
 $("#circle1").animate({
    width:250,
    height:250,
    borderRadius:250,   
  },500);

 });
 
 $("#circle1").mouseleave(function() {
  $("#circle1").animate({
    width: 200,
    height:200,
    borderRadius: 200,
  }, 500);
 });


 $("#circle2").mouseenter(function() {
  
  $("#circle2").animate({
    width:250,
    height:250,
    borderRadius:250,
  }, 500);

  });

 $("#circle2").mouseleave(function() {
  $("#circle2").animate({
    width: 200,
    height:200,
    borderRadius: 200,
  }, 500);

  });



 $("#circle3").mouseenter(function() {
  
  $("#circle3").animate({
    width:250,
    height:250,
    borderRadius:250,
    
  }, 500);

  });

  $("#circle3").mouseleave(function() {
  $("#circle3").animate({
    width: 200,
    height:200,
    borderRadius: 200,
  }, 500);

  });
  });

