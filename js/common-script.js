$('.navbar-toggler').blur(function (event){
  var screenWidth=window.innerWidth;
  if(screenWidth<992){
      $('#navbar').collapse('hide');
}
});

  function backToTop(){
    var pyo=window.pageYOffset;
      var btt=document.getElementById('back-to-top');
if(pyo>200)
btt.style.display="block";
else
btt.style.display="none";
  }

window.addEventListener('scroll',backToTop);

//copy hyperlink
    function copyhlink(){
      var copyText=document.getElementById('code').textContent;
      navigator.clipboard.writeText(copyText);
    document.getElementById('copy').textContent="Copied";
    document.getElementById('code').style.backgroundColor="#ffc107";
  document.getElementById('link').innerHTML='<img src="../photos/insert-link.png" alt="insert-link icon">';


    }
// document.querySelector("#copy").addEventListener("click", copyhlink);

//copy window.location.href
function linkCopy(){
var copyText=window.location.href;
  navigator.clipboard.writeText(copyText);
  document.getElementById('link').innerHTML='<img src="../photos/done.png" alt="link-copied icon">';
  document.getElementById('copy').textContent="Copy";
  document.getElementById('code').style.backgroundColor="#fff";

}
// document.querySelector("#link").addEventListener("click", linkCopy);

//description hide or show
function description(){
  var htc=document.getElementById('htc-button');
    var des=document.getElementById('description');
  if((htc.textContent).localeCompare("Hide")===0){
    des.style.display="none";
    htc.textContent="Show";
  }
  else if((htc.textContent).localeCompare("Hide")!=0){
    des.style.display="block";
    htc.textContent="Hide";
  }
}
