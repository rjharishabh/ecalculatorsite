//cube
function cube(){
  var el=parseFloat(document.getElementById('elcube').value);

  if(el<=0){
     document.getElementById('elcube').style.backgroundColor="#97b17eeb";
  }
  else if (!isNaN(el)) {
    document.getElementById('volcube').value=volcube(el).toFixed(4);
      document.getElementById('tsacube').value=tsacube(el).toFixed(4);
        document.getElementById('lsacube').value=lsacube(el).toFixed(4);
          document.getElementById('losdcube').value=losdcube(el).toFixed(4);
          document.getElementById('lofdcube').value=lofdcube(el).toFixed(4);
  }
else {
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
  document.getElementById('losdcube').value="";
    document.getElementById('lofdcube').value="";
}

//cuboid
function cuboid(){
    var l=parseFloat(document.getElementById('lcuboid').value);
    var b=parseFloat(document.getElementById('bcuboid').value);
    var h=parseFloat(document.getElementById('hcuboid').value);

  if(l<=0){
           document.getElementById('lcuboid').style.backgroundColor="#97b17eeb";
       }
   if(b<=0){
              document.getElementById('bcuboid').style.backgroundColor="#97b17eeb";
       }
   if(h<=0){
              document.getElementById('hcuboid').style.backgroundColor="#97b17eeb";
       }


      if(isNaN(l)){
         document.getElementById('lcuboid').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('bcuboid').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(h)){
         document.getElementById('hcuboid').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(l) && !isNaN(b) && !isNaN(h) && l>0 && b>0 && h>0) {
          document.getElementById('volcuboid').value=volcuboid(l,b,h).toFixed(4);
            document.getElementById('tsacuboid').value=tsacuboid(l,b,h).toFixed(4);
              document.getElementById('lsacuboid').value=lsacuboid(l,b,h).toFixed(4);
                document.getElementById('losdcuboid').value=losdcuboid(l,b,h).toFixed(4);
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
         document.getElementById('rcyl').style.backgroundColor="#97b17eeb";
     }
 if(h<=0){
            document.getElementById('hcyl').style.backgroundColor="#97b17eeb";
     }

    if(isNaN(r)){
       document.getElementById('rcyl').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
       document.getElementById('hcyl').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(h) && r>0 && h>0) {
        document.getElementById('volcyl').value=volcyl(r,h).toFixed(4);
          document.getElementById('tsacyl').value=tsacyl(r,h).toFixed(4);
            document.getElementById('csacyl').value=csacyl(r,h).toFixed(4);
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
         document.getElementById('rcone').style.backgroundColor="#97b17eeb";
     }
 if(h<=0){
            document.getElementById('hcone').style.backgroundColor="#97b17eeb";
     }

    if(isNaN(r)){
       document.getElementById('rcone').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
       document.getElementById('hcone').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(h) && r>0 && h>0) {
        document.getElementById('volcone').value=volcone(r,h).toFixed(4);
          document.getElementById('tsacone').value=tsacone(r,h).toFixed(4);
            document.getElementById('csacone').value=csacone(r,h).toFixed(4);
              document.getElementById('shcone').value=shcone(r,h).toFixed(4);
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
     document.getElementById('rsph').style.backgroundColor="#97b17eeb";
  }
  else if (!isNaN(r)) {
    document.getElementById('volsph').value=volsphere(r).toFixed(4);
      document.getElementById('sasph').value=sasphere(r).toFixed(4);
    }
else {
  document.getElementById('rsph').style.backgroundColor="#97b17eeb";
}
}

function resetsphere(){
  document.getElementById('rsph').style.backgroundColor="#fff";
  document.getElementById('rsph').value="";
  document.getElementById('rsph').placeholder="Please Enter Value";
  document.getElementById('volsph').value="";
  document.getElementById('sasph').value="";
}

function hemisphere(){
  var r=parseFloat(document.getElementById('rhsph').value);

  if(r<=0){
     document.getElementById('rhsph').style.backgroundColor="#97b17eeb";
  }
  else if (!isNaN(r)) {
    document.getElementById('volhsph').value=volhemisphere(r).toFixed(4);
      document.getElementById('tsahsph').value=tsahemisphere(r).toFixed(4);
          document.getElementById('csahsph').value=csahemisphere(r).toFixed(4);
    }
else {
  document.getElementById('rhsph').style.backgroundColor="#97b17eeb";
}
}

function resethemisphere(){
  document.getElementById('rhsph').style.backgroundColor="#fff";
  document.getElementById('rhsph').value="";
  document.getElementById('rhsph').placeholder="Please Enter Value";
  document.getElementById('volhsph').value="";
  document.getElementById('tsahsph').value="";
  document.getElementById('csahsph').value="";
}

function frustum(){
  var r=parseFloat(document.getElementById('srfrustum').value);
  var R=parseFloat(document.getElementById('lrfrustum').value);
  var h=parseFloat(document.getElementById('hfrustum').value);

if(r<=0){
         document.getElementById('srfrustum').style.backgroundColor="#97b17eeb";
     }
if(R<=0){
              document.getElementById('lrfrustum').style.backgroundColor="#97b17eeb";
          }
 if(h<=0){
            document.getElementById('hfrustum').style.backgroundColor="#97b17eeb";
     }

    if(isNaN(r)){
       document.getElementById('srfrustum').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(R)){
       document.getElementById('lrfrustum').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
       document.getElementById('hfrustum').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(R) && !isNaN(h) && r>0 && R>0 && h>0) {
        document.getElementById('volfrustum').value=volfrustum(r,R,h).toFixed(4);
          document.getElementById('tsafrustum').value=tsafrustum(r,R,h).toFixed(4);
            document.getElementById('csafrustum').value=csafrustum(r,R,h).toFixed(4);
              document.getElementById('shfrustum').value=shfrustum(r,R,h).toFixed(4);
      }
}

function resetfrustum(){
  document.getElementById('srfrustum').style.backgroundColor="#fff";
    document.getElementById('lrfrustum').style.backgroundColor="#fff";
  document.getElementById('hfrustum').style.backgroundColor="#fff";
  document.getElementById('srfrustum').value="";
    document.getElementById('lrfrustum').value="";
  document.getElementById('hfrustum').value="";
  document.getElementById('srfrustum').placeholder="Please Enter Value";
  document.getElementById('lrfrustum').placeholder="Please Enter Value";
  document.getElementById('hfrustum').placeholder="Please Enter Value";
  document.getElementById('volfrustum').value="";
  document.getElementById('tsafrustum').value="";
  document.getElementById('csafrustum').value="";
  document.getElementById('shfrustum').value="";
}

function vcube(){
  var el=parseFloat(document.getElementById('elcube').value);

  if(el<=0){
     document.getElementById('elcube').style.backgroundColor="#97b17eeb";
  }
  else if (!isNaN(el)) {
    document.getElementById('volcube').value=volcube(el).toFixed(4);
  }
else {
  document.getElementById('elcube').style.backgroundColor="#97b17eeb";
}
}
function resetvcube(){
    document.getElementById('elcube').style.backgroundColor="#fff";
  document.getElementById('elcube').value="";
    document.getElementById('elcube').placeholder="Please Enter Value";
  document.getElementById('volcube').value="";
}
function vcuboid(){
    var l=parseFloat(document.getElementById('lcuboid').value);
    var b=parseFloat(document.getElementById('bcuboid').value);
    var h=parseFloat(document.getElementById('hcuboid').value);

  if(l<=0){
           document.getElementById('lcuboid').style.backgroundColor="#97b17eeb";
       }
  else if(b<=0){
              document.getElementById('bcuboid').style.backgroundColor="#97b17eeb";
       }
   if(h<=0){
              document.getElementById('hcuboid').style.backgroundColor="#97b17eeb";
       }
      if(isNaN(l)){
         document.getElementById('lcuboid').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('bcuboid').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(h)){
         document.getElementById('hcuboid').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(l) && !isNaN(b) && !isNaN(h) && l>0 && b>0 && h>0) {
          document.getElementById('volcuboid').value=volcuboid(l,b,h).toFixed(4);
        }
}

function resetvcuboid(){
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
}

function vcone(){
  var r=parseFloat(document.getElementById('rcone').value);
  var h=parseFloat(document.getElementById('hcone').value);

if(r<=0){
         document.getElementById('rcone').style.backgroundColor="#97b17eeb";
     }
 if(h<=0){
            document.getElementById('hcone').style.backgroundColor="#97b17eeb";
     }
    if(isNaN(r)){
       document.getElementById('rcone').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
       document.getElementById('hcone').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(h) && r>0 && h>0) {
        document.getElementById('volcone').value=volcone(r,h).toFixed(4);
      }
}

function resetvcone(){
  document.getElementById('rcone').style.backgroundColor="#fff";
  document.getElementById('hcone').style.backgroundColor="#fff";
  document.getElementById('rcone').value="";
  document.getElementById('hcone').value="";
  document.getElementById('rcone').placeholder="Please Enter Value";
  document.getElementById('hcone').placeholder="Please Enter Value";
  document.getElementById('volcone').value="";
}
function vcyl(){
  var r=parseFloat(document.getElementById('rcyl').value);
  var h=parseFloat(document.getElementById('hcyl').value);

if(r<=0){
         document.getElementById('rcyl').style.backgroundColor="#97b17eeb";
     }
 if(h<=0){
            document.getElementById('hcyl').style.backgroundColor="#97b17eeb";
     }

    if(isNaN(r)){
       document.getElementById('rcyl').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
       document.getElementById('hcyl').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(h) && r>0 && h>0) {
        document.getElementById('volcyl').value=volcyl(r,h).toFixed(4);
      }
}

function resetvcyl(){
  document.getElementById('rcyl').style.backgroundColor="#fff";
  document.getElementById('hcyl').style.backgroundColor="#fff";
  document.getElementById('rcyl').value="";
  document.getElementById('hcyl').value="";
  document.getElementById('rcyl').placeholder="Please Enter Value";
  document.getElementById('hcyl').placeholder="Please Enter Value";
  document.getElementById('volcyl').value="";
}
function vsph(){
  var r=parseFloat(document.getElementById('rsph').value);

  if(r<=0){
     document.getElementById('rsph').style.backgroundColor="#97b17eeb";
  }
  else if (!isNaN(r)) {
    document.getElementById('volsph').value=volsphere(r).toFixed(4);
    }
else {
  document.getElementById('rsph').style.backgroundColor="#97b17eeb";
}
}

function resetvsph(){
  document.getElementById('rsph').style.backgroundColor="#fff";
  document.getElementById('rsph').value="";
  document.getElementById('rsph').placeholder="Please Enter Value";
  document.getElementById('volsph').value="";
}
function vhsph(){
  var r=parseFloat(document.getElementById('rhsph').value);

  if(r<=0){
     document.getElementById('rhsph').style.backgroundColor="#97b17eeb";
  }
  else if (!isNaN(r)) {
    document.getElementById('volhsph').value=volhemisphere(r).toFixed(4);
    }
else {
  document.getElementById('rhsph').style.backgroundColor="#97b17eeb";
}
}

function resetvhsph(){
  document.getElementById('rhsph').style.backgroundColor="#fff";
  document.getElementById('rhsph').value="";
  document.getElementById('rhsph').placeholder="Please Enter Value";
  document.getElementById('volhsph').value="";
}
function vfrustum(){
  var r=parseFloat(document.getElementById('srfrustum').value);
  var R=parseFloat(document.getElementById('lrfrustum').value);
  var h=parseFloat(document.getElementById('hfrustum').value);

if(r<=0){
         document.getElementById('srfrustum').style.backgroundColor="#97b17eeb";
     }
if(R<=0){
              document.getElementById('lrfrustum').style.backgroundColor="#97b17eeb";
          }
 if(h<=0){
            document.getElementById('hfrustum').style.backgroundColor="#97b17eeb";
     }

    if(isNaN(r)){
       document.getElementById('srfrustum').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(R)){
       document.getElementById('lrfrustum').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
       document.getElementById('hfrustum').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(R) && !isNaN(h) && r>0 && R>0 && h>0) {
        document.getElementById('volfrustum').value=volfrustum(r,R,h).toFixed(4);
      }
}

function resetvfrustum(){
  document.getElementById('srfrustum').style.backgroundColor="#fff";
    document.getElementById('lrfrustum').style.backgroundColor="#fff";
  document.getElementById('hfrustum').style.backgroundColor="#fff";
  document.getElementById('srfrustum').value="";
    document.getElementById('lrfrustum').value="";
  document.getElementById('hfrustum').value="";
  document.getElementById('srfrustum').placeholder="Please Enter Value";
  document.getElementById('lrfrustum').placeholder="Please Enter Value";
  document.getElementById('hfrustum').placeholder="Please Enter Value";
  document.getElementById('volfrustum').value="";
}

function sacube(){
  var el=parseFloat(document.getElementById('elcube').value);

  if(el<=0){
     document.getElementById('elcube').style.backgroundColor="#97b17eeb";
  }
  else if (!isNaN(el)) {
      document.getElementById('tsacube').value=tsacube(el).toFixed(4);
        document.getElementById('lsacube').value=lsacube(el).toFixed(4);
  }
else {
  document.getElementById('elcube').style.backgroundColor="#97b17eeb";
}
}

function resetsacube(){
    document.getElementById('elcube').style.backgroundColor="#fff";
  document.getElementById('elcube').value="";
    document.getElementById('elcube').placeholder="Please Enter Value";
  document.getElementById('tsacube').value="";
  document.getElementById('lsacube').value="";

}


function sacuboid(){
    var l=parseFloat(document.getElementById('lcuboid').value);
    var b=parseFloat(document.getElementById('bcuboid').value);
    var h=parseFloat(document.getElementById('hcuboid').value);

  if(l<=0){
           document.getElementById('lcuboid').style.backgroundColor="#97b17eeb";
       }
  else if(b<=0){
              document.getElementById('bcuboid').style.backgroundColor="#97b17eeb";
       }
   if(h<=0){
              document.getElementById('hcuboid').style.backgroundColor="#97b17eeb";
       }


      if(isNaN(l)){
         document.getElementById('lcuboid').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('bcuboid').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(h)){
         document.getElementById('hcuboid').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(l) && !isNaN(b) && !isNaN(h) && l>0 && b>0 && h>0) {
            document.getElementById('tsacuboid').value=tsacuboid(l,b,h).toFixed(4);
              document.getElementById('lsacuboid').value=lsacuboid(l,b,h).toFixed(4);
        }
}

function resetsacuboid(){
  document.getElementById('lcuboid').style.backgroundColor="#fff";
  document.getElementById('bcuboid').style.backgroundColor="#fff";
  document.getElementById('hcuboid').style.backgroundColor="#fff";
document.getElementById('lcuboid').value="";
document.getElementById('bcuboid').value="";
document.getElementById('hcuboid').value="";
document.getElementById('lcuboid').placeholder="Please Enter Value";
document.getElementById('bcuboid').placeholder="Please Enter Value";
document.getElementById('hcuboid').placeholder="Please Enter Value";
    document.getElementById('tsacuboid').value="";
      document.getElementById('lsacuboid').value="";
}

function sacyl(){
  var r=parseFloat(document.getElementById('rcyl').value);
  var h=parseFloat(document.getElementById('hcyl').value);

if(r<=0){
         document.getElementById('rcyl').style.backgroundColor="#97b17eeb";
     }
 if(h<=0){
            document.getElementById('hcyl').style.backgroundColor="#97b17eeb";
     }

    if(isNaN(r)){
       document.getElementById('rcyl').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
       document.getElementById('hcyl').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(h) && r>0 && h>0) {
          document.getElementById('tsacyl').value=tsacyl(r,h).toFixed(4);
            document.getElementById('csacyl').value=csacyl(r,h).toFixed(4);
      }
}

function resetsacyl(){
  document.getElementById('rcyl').style.backgroundColor="#fff";
  document.getElementById('hcyl').style.backgroundColor="#fff";
  document.getElementById('rcyl').value="";
  document.getElementById('hcyl').value="";
  document.getElementById('rcyl').placeholder="Please Enter Value";
  document.getElementById('hcyl').placeholder="Please Enter Value";
  document.getElementById('tsacyl').value="";
  document.getElementById('csacyl').value="";
}

function sacone(){
  var r=parseFloat(document.getElementById('rcone').value);
  var h=parseFloat(document.getElementById('hcone').value);

if(r<=0){
         document.getElementById('rcone').style.backgroundColor="#97b17eeb";
     }
 if(h<=0){
            document.getElementById('hcone').style.backgroundColor="#97b17eeb";
     }

    if(isNaN(r)){
       document.getElementById('rcone').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
       document.getElementById('hcone').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(h) && r>0 && h>0) {
          document.getElementById('tsacone').value=tsacone(r,h).toFixed(4);
            document.getElementById('csacone').value=csacone(r,h).toFixed(4);
      }
}

function resetsacone(){
  document.getElementById('rcone').style.backgroundColor="#fff";
  document.getElementById('hcone').style.backgroundColor="#fff";
  document.getElementById('rcone').value="";
  document.getElementById('hcone').value="";
  document.getElementById('rcone').placeholder="Please Enter Value";
  document.getElementById('hcone').placeholder="Please Enter Value";
  document.getElementById('tsacone').value="";
  document.getElementById('csacone').value="";
}

function sasphr(){
  var r=parseFloat(document.getElementById('rsph').value);

  if(r<=0){
     document.getElementById('rsph').style.backgroundColor="#97b17eeb";
  }
  else if (!isNaN(r)) {
      document.getElementById('sasph').value=sasphere(r).toFixed(4);
    }
else {
  document.getElementById('rsph').style.backgroundColor="#97b17eeb";
}
}

function resetsasphr(){
  document.getElementById('rsph').style.backgroundColor="#fff";
  document.getElementById('rsph').value="";
  document.getElementById('rsph').placeholder="Please Enter Value";
  document.getElementById('sasph').value="";
}

function sahemisph(){
  var r=parseFloat(document.getElementById('rhsph').value);

  if(r<=0){
     document.getElementById('rhsph').style.backgroundColor="#97b17eeb";
  }
  else if (!isNaN(r)) {
      document.getElementById('tsahsph').value=tsahemisphere(r).toFixed(4);
          document.getElementById('csahsph').value=csahemisphere(r).toFixed(4);
    }
else {
  document.getElementById('rhsph').style.backgroundColor="#97b17eeb";
}
}

function resetsahemisph(){
  document.getElementById('rhsph').style.backgroundColor="#fff";
  document.getElementById('rhsph').value="";
  document.getElementById('rhsph').placeholder="Please Enter Value";
  document.getElementById('tsahsph').value="";
  document.getElementById('csahsph').value="";
}

function safrustum(){
  var r=parseFloat(document.getElementById('srfrustum').value);
  var R=parseFloat(document.getElementById('lrfrustum').value);
  var h=parseFloat(document.getElementById('hfrustum').value);

if(r<=0){
         document.getElementById('srfrustum').style.backgroundColor="#97b17eeb";
     }
if(R<=0){
              document.getElementById('lrfrustum').style.backgroundColor="#97b17eeb";
          }
 if(h<=0){
            document.getElementById('hfrustum').style.backgroundColor="#97b17eeb";
     }

    if(isNaN(r)){
       document.getElementById('srfrustum').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(R)){
       document.getElementById('lrfrustum').style.backgroundColor="#97b17eeb";
    }
    if(isNaN(h)){
       document.getElementById('hfrustum').style.backgroundColor="#97b17eeb";
    }

   if (!isNaN(r) && !isNaN(R) && !isNaN(h) && r>0 && R>0 && h>0) {
          document.getElementById('tsafrustum').value=tsafrustum(r,R,h).toFixed(4);
            document.getElementById('csafrustum').value=csafrustum(r,R,h).toFixed(4);
      }
}

function resetsafrustum(){
  document.getElementById('srfrustum').style.backgroundColor="#fff";
    document.getElementById('lrfrustum').style.backgroundColor="#fff";
  document.getElementById('hfrustum').style.backgroundColor="#fff";
  document.getElementById('srfrustum').value="";
    document.getElementById('lrfrustum').value="";
  document.getElementById('hfrustum').value="";
  document.getElementById('srfrustum').placeholder="Please Enter Value";
  document.getElementById('lrfrustum').placeholder="Please Enter Value";
  document.getElementById('hfrustum').placeholder="Please Enter Value";
  document.getElementById('tsafrustum').value="";
  document.getElementById('csafrustum').value="";
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
