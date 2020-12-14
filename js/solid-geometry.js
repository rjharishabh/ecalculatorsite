//cube
function cube(){
  var el=parseFloat(document.getElementById('elcube').value);

  if(el<=0){
    document.getElementById('elcube').value="Only positive numbers";
     document.getElementById('elcube').style.backgroundColor="#97b17eeb";
  }
  else if (!isNaN(el)) {
    document.getElementById('volcube').value=volcube(el);
      document.getElementById('tsacube').value=tsacube(el);
        document.getElementById('lsacube').value=lsacube(el);
          document.getElementById('losdcube').value=losdcube(el);
          document.getElementById('lofdcube').value=lofdcube(el);
  }
else {
 document.getElementById('elcube').value="Only positive numbers";
  document.getElementById('elcube').style.backgroundColor="#97b17eeb";
}
}

function resetcube(){
    document.getElementById('elcube').style.backgroundColor="#fff";
  document.getElementById('elcube').value="";
    document.getElementById('elcube').placeholder="Please Enter Value";
  document.getElementById('volcube').value="";
  document.getElementById('tsacube').value="";
  document.getElementById('lsacube').value="";
  document.getElementById('lodcube').value="";
}

//cuboid
function cuboid(){
    var l=parseFloat(document.getElementById('lcuboid').value);
    var b=parseFloat(document.getElementById('bcuboid').value);
    var h=parseFloat(document.getElementById('hcuboid').value);

  if(l<=0){
          document.getElementById('lcuboid').value="Only positive numbers";
           document.getElementById('lcuboid').style.backgroundColor="#97b17eeb";
       }
  else if(b<=0){
          document.getElementById('bcuboid').value="Only positive numbers";
              document.getElementById('bcuboid').style.backgroundColor="#97b17eeb";
       }
   if(h<=0){
          document.getElementById('hcuboid').value="Only positive numbers";
              document.getElementById('hcuboid').style.backgroundColor="#97b17eeb";
       }


      if(isNaN(l)){
        document.getElementById('lcuboid').value="Only positive numbers";
         document.getElementById('lcuboid').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
        document.getElementById('bcuboid').value="Only positive numbers";
         document.getElementById('bcuboid').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(h)){
        document.getElementById('hcuboid').value="Only positive numbers";
         document.getElementById('hcuboid').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(l) && !isNaN(b) && !isNaN(h) && l>0 && b>0 && h>0) {
          document.getElementById('volcuboid').value=volcuboid(l,b,h);
            document.getElementById('tsacuboid').value=tsacuboid(l,b,h);
              document.getElementById('lsacuboid').value=lsacuboid(l,b,h);
                document.getElementById('losdcuboid').value=losdcuboid(l,b,h);
        }
}

function resetcuboid(){
  document.getElementById('lcuboid').style.backgroundColor="#fff";
  document.getElementById('bcuboid').style.backgroundColor="#fff";
    document.getElementById('hcuboid').style.backgroundColor="#fff";
document.getElementById('lcuboid').value="";
document.getElementById('bcuboid').value="";
document.getElementById('hcuboid').value="";
document.getElementById('lcuboid').placeholder="Please Enter Value";
document.getElementById('bcuboid').placeholder="Please Enter Value";
document.getElementById('hcuboid').placeholder="Please Enter Value";
  document.getElementById('volcuboid').value="";
    document.getElementById('tsacuboid').value="";
      document.getElementById('lsacuboid').value="";
        document.getElementById('losdcuboid').value="";
}

function cylinder(){
  var r=parseFloat(document.getElementById('rcyl').value);
  var h=parseFloat(document.getElementById('hcyl').value);

if(r<=0){
        document.getElementById('rcyl').value="Only positive numbers";
         document.getElementById('rcyl').style.backgroundColor="#97b17eeb";
     }
 if(h<=0){
        document.getElementById('hcyl').value="Only positive numbers";
            document.getElementById('hcyl').style.backgroundColor="#97b17eeb";
     }

    if(isNaN(r)){
      document.getElementById('rcyl').value="Only positive numbers";
       document.getElementById('rcyl').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
      document.getElementById('hcyl').value="Only positive numbers";
       document.getElementById('hcyl').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(h) && r>0 && h>0) {
        document.getElementById('volcyl').value=volcyl(r,h);
          document.getElementById('tsacyl').value=tsacyl(r,h);
            document.getElementById('csacyl').value=csacyl(r,h);
      }
}

function resetcylinder(){
  document.getElementById('rcyl').style.backgroundColor="#fff";
  document.getElementById('hcyl').style.backgroundColor="#fff";
  document.getElementById('rcyl').value="";
  document.getElementById('hcyl').value="";
  document.getElementById('rcyl').placeholder="Please Enter Value";
  document.getElementById('hcyl').placeholder="Please Enter Value";
  document.getElementById('volcyl').value="";
  document.getElementById('tsacyl').value="";
  document.getElementById('csacyl').value="";
}

function cone(){
  var r=parseFloat(document.getElementById('rcone').value);
  var h=parseFloat(document.getElementById('hcone').value);

if(r<=0){
        document.getElementById('rcone').value="Only positive numbers";
         document.getElementById('rcone').style.backgroundColor="#97b17eeb";
     }
 if(h<=0){
        document.getElementById('hcone').value="Only positive numbers";
            document.getElementById('hcone').style.backgroundColor="#97b17eeb";
     }

    if(isNaN(r)){
      document.getElementById('rcone').value="Only positive numbers";
       document.getElementById('rcone').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
      document.getElementById('hcone').value="Only positive numbers";
       document.getElementById('hcone').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(h) && r>0 && h>0) {
        document.getElementById('volcone').value=volcone(r,h);
          document.getElementById('tsacone').value=tsacone(r,h);
            document.getElementById('csacone').value=csacone(r,h);
              document.getElementById('shcone').value=shcone(r,h);
      }
}

function resetcone(){
  document.getElementById('rcone').style.backgroundColor="#fff";
  document.getElementById('hcone').style.backgroundColor="#fff";
  document.getElementById('rcone').value="";
  document.getElementById('hcone').value="";
  document.getElementById('rcone').placeholder="Please Enter Value";
  document.getElementById('hcone').placeholder="Please Enter Value";
  document.getElementById('volcone').value="";
  document.getElementById('tsacone').value="";
  document.getElementById('csacone').value="";
  document.getElementById('shcone').value="";
}

function sphere(){
  var r=parseFloat(document.getElementById('rsph').value);

  if(r<=0){
    document.getElementById('rsph').value="Only positive numbers are allowed";
     document.getElementById('rsph').style.backgroundColor="red";
  }
  else if (!isNaN(r)) {
    document.getElementById('volsph').value=volsphere(r);
      document.getElementById('sasph').value=sasphere(r);
    }
else {
 document.getElementById('rsph').value="Only positive numbers are allowed";
  document.getElementById('rsph').style.backgroundColor="red";
}
}

function resetsphere(){
  document.getElementById('rsph').style.backgroundColor="white";
  document.getElementById('rsph').value="";
  document.getElementById('rsph').placeholder="Please Enter Value";
  document.getElementById('volsph').value="";
  document.getElementById('sasph').value="";
}

function hemisphere(){
  var r=parseFloat(document.getElementById('rhemisph').value);

  if(r<=0){
    document.getElementById('rhemisph').value="Only positive numbers are allowed";
     document.getElementById('rhemisph').style.backgroundColor="red";
  }
  else if (!isNaN(r)) {
    document.getElementById('volhemisph').value=volhemisphere(r);
      document.getElementById('tsahemisph').value=tsahemisphere(r);
          document.getElementById('csahemisph').value=csahemisphere(r);
    }
else {
 document.getElementById('rhemisph').value="Only positive numbers are allowed";
  document.getElementById('rhemisph').style.backgroundColor="red";
}
}

function resethemisphere(){
  document.getElementById('rhemisph').style.backgroundColor="white";
  document.getElementById('rhemisph').value="";
  document.getElementById('rhemisph').placeholder="Please Enter Value";
  document.getElementById('volhemisph').value="";
  document.getElementById('tsahemisph').value="";
  document.getElementById('csahemisph').value="";
}

function frustum(){
  var r=parseFloat(document.getElementById('srfrustum').value);
  var R=parseFloat(document.getElementById('lrfrustum').value);
  var h=parseFloat(document.getElementById('hfrustum').value);

if(r<=0){
        document.getElementById('srfrustum').value="Only positive numbers are allowed";
         document.getElementById('srfrustum').style.backgroundColor="red";
     }
if(R<=0){
             document.getElementById('lrfrustum').value="Only positive numbers are allowed";
              document.getElementById('lrfrustum').style.backgroundColor="red";
          }
 if(h<=0){
        document.getElementById('hfrustum').value="Only positive numbers are allowed";
            document.getElementById('hfrustum').style.backgroundColor="red";
     }

    if(isNaN(r)){
      document.getElementById('srfrustum').value="Only positive numbers are allowed";
       document.getElementById('srfrustum').style.backgroundColor="red";
    }
    if(isNaN(R)){
      document.getElementById('lrfrustum').value="Only positive numbers are allowed";
       document.getElementById('lrfrustum').style.backgroundColor="red";
    }
    if(isNaN(h)){
      document.getElementById('hfrustum').value="Only positive numbers are allowed";
       document.getElementById('hfrustum').style.backgroundColor="red";
    }

   if (!isNaN(r) && !isNaN(R) && !isNaN(h) && r>0 && R>0 && h>0) {
        document.getElementById('volfrustum').value=volfrustum(r,R,h);
          document.getElementById('tsafrustum').value=tsafrustum(r,R,h);
            document.getElementById('csafrustum').value=csafrustum(r,R,h);
              document.getElementById('shfrustum').value=shfrustum(r,R,h);
      }
}

function resetfrustum(){
  document.getElementById('srfrustum').style.backgroundColor="white";
    document.getElementById('lrfrustum').style.backgroundColor="white";
  document.getElementById('hfrustum').style.backgroundColor="white";
  document.getElementById('srfrustum').value="";
    document.getElementById('lrfrustum').value="";
  document.getElementById('hfrustum').value="";
  document.getElementById('srfrustum').placeholder="Please Enter Value";
  document.getElementById('lrfrustum').placeholder="Please Enter Value";
  document.getElementById('hfrustum').placeholder="Please Enter Value";
  document.getElementById('volfrustum').value="";
  document.getElementById('tsafrustum').value="";
  document.getElementById('lsafrustum').value="";
  document.getElementById('shfrustum').value="";
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

function losdcube(el){
  return Math.sqrt(3)*el;
}

function lofdcube(el){
  return Math.sqrt(2)*el;
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

function losdcuboid(l,b,h){
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

function csacone(r,h){
var l=shcone(r,h);
return Math.PI*r*l;
}

function volcyl(r,h){
  return Math.PI*Math.pow(r,2)*h;
}

function tsacyl(r,h){
  return 2*Math.PI*r*(r+h);
}

function csacyl(r,h){
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

function csahemisphere(r){
    return 2*Math.PI*Math.pow(r,2);
}

function volfrustum(r,R,h){
  return (Math.PI*h*(Math.pow(r,2)+Math.pow(R,2)+r*R))/3;
}

function shfrustum(r,R,h){
  return Math.sqrt(Math.pow(h,2)+Math.pow((R-r),2))
}

function csafrustum(r,R,h){
  var l=shfrustum(r,R,h);
  return Math.PI*l*(r+R);
}

function tsafrustum(r,R,h){
  var l=shfrustum(r,R,h);
  return Math.PI*((l*(r+R))+Math.pow(r,2)+Math.pow(R,2));
}
