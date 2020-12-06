$(function (){

  $(".navbar-toggler").blur(function (event){
    var sw=window.innerWidth;
    if(sw<768)
    $('.navbar-collapse').collapse('hide');
  });
});
