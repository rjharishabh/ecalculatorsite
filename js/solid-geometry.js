function cube(){
  var el=parseFloat(document.getElementById('elcube').value);
  if(el===""){
     document.getElementById('elcube').placeholder="Please Enter Value";
  }
  else if(el<=0){
    document.getElementById('elcube').value="Only positive numbers are allowed";
     document.getElementById('elcube').style.backgroundColor="red";
  }
  else if (!isNaN(el)) {
    document.getElementById('volcube').value=volcube(el);
      document.getElementById('tsacube').value=tsacube(el);
        document.getElementById('lsacube').value=lsacube(el);
          document.getElementById('lodcube').value=lodcube(el);
  }
else {
 document.getElementById('elcube').value="Only positive numbers are allowed";
  document.getElementById('elcube').style.backgroundColor="red";
}
}

function resetcube(){
    document.getElementById('elcube').style.backgroundColor="white";
  document.getElementById('elcube').value="";
    document.getElementById('elcube').placeholder="Please Enter Value";
  document.getElementById('volcube').value="";
  document.getElementById('tsacube').value="";
  document.getElementById('lsacube').value="";
  document.getElementById('lodcube').value="";
}

function cuboid(){
    var l=parseFloat(document.getElementById('lcuboid').value);
    var b=parseFloat(document.getElementById('bcuboid').value);
    var h=parseFloat(document.getElementById('hcuboid').value);

    if(l===""){
       document.getElementById('lcuboid').placeholder="Please Enter Value";
    }
    if(b===""){
       document.getElementById('bcuboid').placeholder="Please Enter Value";
    }
    if(h===""){
       document.getElementById('hcuboid').placeholder="Please Enter Value";
    }

else{
  if(l<=0){
          document.getElementById('lcuboid').value="Only positive numbers are allowed";
           document.getElementById('lcuboid').style.backgroundColor="red";
       }
   if(b<=0){
          document.getElementById('bcuboid').value="Only positive numbers are allowed";
              document.getElementById('bcuboid').style.backgroundColor="red";
       }
   if(h<=0){
          document.getElementById('hcuboid').value="Only positive numbers are allowed";
              document.getElementById('hcuboid').style.backgroundColor="red";
       }
}

      if(isNaN(l)){
        document.getElementById('lcuboid').value="Only positive numbers are allowed";
         document.getElementById('lcuboid').style.backgroundColor="red";
      }
      if(isNaN(b)){
        document.getElementById('bcuboid').value="Only positive numbers are allowed";
         document.getElementById('bcuboid').style.backgroundColor="red";
      }
      if(isNaN(h)){
        document.getElementById('hcuboid').value="Only positive numbers are allowed";
         document.getElementById('hcuboid').style.backgroundColor="red";
      }

     if (!isNaN(l) && !isNaN(b) && !isNaN(h) && l>0 && b>0 && h>0) {
          document.getElementById('volcuboid').value=volcuboid(l,b,h);
            document.getElementById('tsacuboid').value=tsacuboid(l,b,h);
              document.getElementById('lsacuboid').value=lsacuboid(l,b,h);
                document.getElementById('lodcuboid').value=lodcuboid(l,b,h);
        }
}

function resetcuboid(){
  document.getElementById('lcuboid').style.backgroundColor="white";
  document.getElementById('bcuboid').style.backgroundColor="white";
    document.getElementById('hcuboid').style.backgroundColor="white";
document.getElementById('lcuboid').value="";
document.getElementById('bcuboid').value="";
document.getElementById('hcuboid').value="";
document.getElementById('lcuboid').placeholder="Please Enter Value";
document.getElementById('bcuboid').placeholder="Please Enter Value";
document.getElementById('hcuboid').placeholder="Please Enter Value";
  document.getElementById('volcuboid').value="";
    document.getElementById('tsacuboid').value="";
      document.getElementById('lsacuboid').value="";
        document.getElementById('lodcuboid').value="";
}















function volcube(el){
return Math.pow(el,3);
}

function tsacube(el){
  return 6*Math.pow(el,2);
}

function lsacube(el){
  return 4*Math.pow(el,2);
}

function lodcube(el){
  return Math.sqrt(3)*el;
}

function volcuboid(l,b,h){
  return l*b*h;
}

function tsacuboid(l,b,h){
  return 2*(l*b+b*h+h*l);
}

function lsacuboid(l,b,h){
  return 2*h*(l+b);
}

function lodcuboid(l,b,h){
  return Math.sqrt(Math.pow(l,2)+Math.pow(b,2)+Math.pow(h,2));
}

function volcone(r,h){
  return (Math.PI*Math.pow(r,2)*h)/3;
}
function shcone(r,h){
  return Math.sqrt(Math.pow(r,2)+Math.pow(h,2));
}

function tsacone(r,h){
var l=shcone(r,h);
return Math.PI*r*(l+r);
}

function lsacone(r,h){
var l=shcone(r,h);
return Math.PI*r*l;
}

function volcyl(r,h){
  return Math.PI*Math.pow(r,2)*h;
}

function tsacyl(r,h){
  return 2*Math.PI*r*(r+h);
}

function lsacyl(r,h){
  return 2*Math.PI*r*h;
}

function volsphere(r){
  return (4*Math.PI*Math.pow(r,3))/3;
}

function sasphere(r){
  return 4*Math.PI*Math.pow(r,2);
}

function volhemisphere(r){
    return (2*Math.PI*Math.pow(r,3))/3;
}

function tsahemisphere(r){
    return 3*Math.PI*Math.pow(r,2);
}

function lsahemisphere(r){
    return 2*Math.PI*Math.pow(r,2);
}
