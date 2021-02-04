function circle(){
  var r=parseFloat(document.getElementById('rcircle').value);

  if(r<=0){
     document.getElementById('rcircle').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(r)) {
    document.getElementById('dcircle').value=diacircle(r).toFixed(6);
      document.getElementById('cfcircle').value=cfcircle(r).toFixed(6);
        document.getElementById('acircle').value=areacircle(r).toFixed(6);
  }
else {
  document.getElementById('rcircle').style.backgroundColor="#97b17eeb";
}
}

function resetcircle(){
    document.getElementById('rcircle').style.backgroundColor="#fff";
  document.getElementById('rcircle').value="";
    document.getElementById('rcircle').placeholder="Please Enter Value";
  document.getElementById('dcircle').value="";
  document.getElementById('cfcircle').value="";
  document.getElementById('acircle').value="";
}


function square(){
  var side=parseFloat(document.getElementById('lsquare').value);

  if(side<=0){
     document.getElementById('lsquare').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(side)) {
    document.getElementById('dsquare').value=(diasquare(side)).toFixed(6);
      document.getElementById('psquare').value=psquare(side);
        document.getElementById('asquare').value=areasquare(side);
  }
else {
  document.getElementById('lsquare').style.backgroundColor="#97b17eeb";
}
}

function resetsquare(){
    document.getElementById('lsquare').style.backgroundColor="#fff";
  document.getElementById('lsquare').value="";
    document.getElementById('lsquare').placeholder="Please Enter Value";
  document.getElementById('dsquare').value="";
  document.getElementById('psquare').value="";
  document.getElementById('asquare').value="";
}

function atri(){
    var h=parseFloat(document.getElementById('heightt').value);
    var b=parseFloat(document.getElementById('baset').value);
  if(h<=0){
           document.getElementById('heightt').style.backgroundColor="#97b17eeb";
       }
 if(b<=0){
              document.getElementById('baset').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(h)){
         document.getElementById('heightt').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('baset').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(h) && !isNaN(b) && h>0 && b>0) {
              document.getElementById('aatri').value=0.5*b*h;
        }
}

function resetatri(){
  document.getElementById('heightt').style.backgroundColor="#fff";
  document.getElementById('baset').style.backgroundColor="#fff";
document.getElementById('heightt').value="";
document.getElementById('baset').value="";
document.getElementById('heightt').placeholder="Please Enter Value";
document.getElementById('baset').placeholder="Please Enter Value";
      document.getElementById('aatri').value="";
}

function ctri(){
    var a=parseFloat(document.getElementById('csideat').value);
    var b=parseFloat(document.getElementById('csidebt').value);
    var c=parseFloat(document.getElementById('csidect').value);
  if(a<=0){
          document.getElementById('csideat').style.backgroundColor="#97b17eeb";
       }
 if(b<=0){
          document.getElementById('csidebt').style.backgroundColor="#97b17eeb";
       }
  if(c<=0){
                document.getElementById('csidect').style.backgroundColor="#97b17eeb";
        }
      if(isNaN(a)){
         document.getElementById('csideat').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('csidebt').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(c)){
         document.getElementById('csidect').style.backgroundColor="#97b17eeb";
      }
     if (!isNaN(a) && !isNaN(b) && a>0 && b>0 && !isNaN(c) && c>0) {
              document.getElementById('ptriangle').value=a+b+c;
        }
}

function resetctri(){
  document.getElementById('csideat').style.backgroundColor="#fff";
  document.getElementById('csidebt').style.backgroundColor="#fff";
  document.getElementById('csidect').style.backgroundColor="#fff";
document.getElementById('csideat').value="";
document.getElementById('csidebt').value="";
document.getElementById('csidect').value="";
document.getElementById('csideat').placeholder="Please Enter Value";
document.getElementById('csidebt').placeholder="Please Enter Value";
document.getElementById('csidect').placeholder="Please Enter Value";
      document.getElementById('ptriangle').value="";
}

function rect(){
    var l=parseFloat(document.getElementById('lrect').value);
    var b=parseFloat(document.getElementById('brect').value);
  if(l<=0){
           document.getElementById('lrect').style.backgroundColor="#97b17eeb";
       }
 if(b<=0){
              document.getElementById('brect').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(l)){
         document.getElementById('lrect').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('brect').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(l) && !isNaN(b) && l>0 && b>0) {
          document.getElementById('drect').value=(diarect(l,b)).toFixed(6);
            document.getElementById('prect').value=prect(l,b);
              document.getElementById('arect').value=arearect(l,b);
        }
}

function resetrect(){
  document.getElementById('lrect').style.backgroundColor="#fff";
  document.getElementById('brect').style.backgroundColor="#fff";
document.getElementById('lrect').value="";
document.getElementById('brect').value="";
document.getElementById('lrect').placeholder="Please Enter Value";
document.getElementById('brect').placeholder="Please Enter Value";
  document.getElementById('drect').value="";
    document.getElementById('prect').value="";
      document.getElementById('arect').value="";
}
function rhom(){
    var d1=parseFloat(document.getElementById('d1rhom').value);
    var d2=parseFloat(document.getElementById('d2rhom').value);
  if(d1<=0){
           document.getElementById('d1rhom').style.backgroundColor="#97b17eeb";
       }
 if(d2<=0){
              document.getElementById('d2rhom').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(d1)){
         document.getElementById('d1rhom').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(d2)){
         document.getElementById('d2rhom').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(d1) && !isNaN(d2) && d1>0 && d2>0) {
          document.getElementById('arhom').value=arearhom(d1,d2);
        }
}

function resetrhom(){
  document.getElementById('d1rhom').style.backgroundColor="#fff";
  document.getElementById('d2rhom').style.backgroundColor="#fff";
document.getElementById('d1rhom').value="";
document.getElementById('d2rhom').value="";
document.getElementById('d1rhom').placeholder="Please Enter Value";
document.getElementById('d2rhom').placeholder="Please Enter Value";
  document.getElementById('arhom').value="";
}

function rhom2(){
    var s=parseFloat(document.getElementById('srhom').value);
  if(s<=0){
           document.getElementById('srhom').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(s)){
         document.getElementById('srhom').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(s) && s>0) {
          document.getElementById('prhom').value=psquare(s);
        }
}

function resetrhom2(){
  document.getElementById('srhom').style.backgroundColor="#fff";
document.getElementById('srhom').value="";
document.getElementById('srhom').placeholder="Please Enter Value";
  document.getElementById('prhom').value="";
}
function para(){
    var b=parseFloat(document.getElementById('bpara').value);
      var h=parseFloat(document.getElementById('hpara').value);
  if(b<=0){
           document.getElementById('bpara').style.backgroundColor="#97b17eeb";
       }
       if(h<=0){
                document.getElementById('hpara').style.backgroundColor="#97b17eeb";
            }
      if(isNaN(b)){
         document.getElementById('bpara').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(h)){
         document.getElementById('hpara').style.backgroundColor="#97b17eeb";
      }
     if (!isNaN(b) && !isNaN(h) && h>0 && b>0) {
          document.getElementById('apara').value=areapara1(b,h);
        }
}

function resetpara(){
  document.getElementById('bpara').style.backgroundColor="#fff";
document.getElementById('bpara').value="";
document.getElementById('bpara').placeholder="Please Enter Value";
document.getElementById('hpara').style.backgroundColor="#fff";
document.getElementById('hpara').value="";
document.getElementById('hpara').placeholder="Please Enter Value";
  document.getElementById('apara').value="";
}
function para2(){
    var a=parseFloat(document.getElementById('asapara').value);
      var b=parseFloat(document.getElementById('asbpara').value);
        var angle=parseFloat(document.getElementById('aaspara').value);
  if(a<=0){
           document.getElementById('asapara').style.backgroundColor="#97b17eeb";
       }
  if(b<=0){
                document.getElementById('asbpara').style.backgroundColor="#97b17eeb";
            }
    if(angle==0){
                         document.getElementById('aaspara').value="Angle can't be zero";
                          document.getElementById('aaspara').style.backgroundColor="#97b17eeb";
              }
      if(isNaN(a)){
         document.getElementById('asapara').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('asbpara').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(angle)){
         document.getElementById('aaspara').style.backgroundColor="#97b17eeb";
      }
     if (!isNaN(a) && !isNaN(b) && a>0 && b>0) {
          document.getElementById('ppara').value=prect(a,b);
          document.getElementById('a2para').value=(areapara2(a,b,angle)).toFixed(6);
        }
}

function resetpara2(){
  document.getElementById('asapara').style.backgroundColor="#fff";
document.getElementById('asapara').value="";
document.getElementById('asapara').placeholder="Please Enter Value";
document.getElementById('asbpara').style.backgroundColor="#fff";
document.getElementById('asbpara').value="";
document.getElementById('asbpara').placeholder="Please Enter Value";
document.getElementById('aaspara').style.backgroundColor="#fff";
document.getElementById('aaspara').value="";
document.getElementById('aaspara').placeholder="Please Enter Value";
 document.getElementById('ppara').value="";
  document.getElementById('a2para').value="";
}
function ellipse(){
    var b=parseFloat(document.getElementById('sminellipse').value);
      var a=parseFloat(document.getElementById('smajellipse').value);
  if(a<=0){
           document.getElementById('smajellipse').style.backgroundColor="#97b17eeb";
       }
  if(b<=0){
                document.getElementById('sminellipse').style.backgroundColor="#97b17eeb";
            }
      if(isNaN(a)){
         document.getElementById('smajellipse').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('sminellipse').style.backgroundColor="#97b17eeb";
      }
     if (!isNaN(a) && !isNaN(b) && a>0 && b>0) {
          document.getElementById('minellipse').value=2*b;
          document.getElementById('majellipse').value=2*a;
          document.getElementById('cirellipse').value=(circumellipse(a,b)).toFixed(6)+" (approx.)";
          document.getElementById('areaellipse').value=(areaellipse(a,b)).toFixed(6);
        }
}

function resetellipse(){
  document.getElementById('sminellipse').style.backgroundColor="#fff";
document.getElementById('sminellipse').value="";
document.getElementById('sminellipse').placeholder="Please Enter Value";
document.getElementById('smajellipse').style.backgroundColor="#fff";
document.getElementById('smajellipse').value="";
document.getElementById('smajellipse').placeholder="Please Enter Value";
 document.getElementById('minellipse').value="";
  document.getElementById('majellipse').value="";
  document.getElementById('cirellipse').value="";
   document.getElementById('areaellipse').value="";
}

function diacircle(r) {
  return 2*r;
}

function cfcircle(r){
  return 2*Math.PI*r;
}
function areacircle(r) {
  return Math.PI*Math.pow(r,2);
}
function diasquare(side){
  return Math.sqrt(2)*side;
}
function psquare(side) {
  return 4*side;
}
function areasquare(side) {
  return Math.pow(side,2);
}
function diarect(l,b) {
  return Math.sqrt(Math.pow(l,2)+Math.pow(b,2));
}
function prect(l,b) {
  return 2*(l+b);
}
function arearect(l,b) {
  return l*b;
}
function arearhom(d1,d2) {
  return 0.5*d1*d2;
}
function areapara1(b,h) {
  return b*h;
}
function areapara2(a,b,t) {
  if(document.getElementById('abas').value==2){
      return Math.abs(a*b*(Math.sin(t).toFixed(6)));
  }
else{
  t=(Math.PI*t)/180;
        return Math.abs(a*b*(Math.sin(t).toFixed(6)));
}
}
function circumellipse(a,b) {
return Math.PI*(3*(a+b)-Math.sqrt((3*a+b)*(a+3*b)));
}
function areaellipse(a,b) {
  return Math.PI*a*b;
}

//---------------AREA-----------------

function acircle(){
  var r=parseFloat(document.getElementById('radcir').value);

  if(r<=0){
     document.getElementById('radcir').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(r)) {
        document.getElementById('acir').value=(areacircle(r)).toFixed(6);
  }
else {
  document.getElementById('radcir').style.backgroundColor="#97b17eeb";
}
}

function resetacircle(){
    document.getElementById('radcir').style.backgroundColor="#fff";
  document.getElementById('radcir').value="";
    document.getElementById('radcir').placeholder="Please Enter Value";
  document.getElementById('acir').value="";
}

function asquare(){
  var side=parseFloat(document.getElementById('ssquare').value);

  if(side<=0){
     document.getElementById('ssquare').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(side)) {
        document.getElementById('aasquare').value=areasquare(side);
  }
else {
  document.getElementById('ssquare').style.backgroundColor="#97b17eeb";
}
}

function resetasquare(){
    document.getElementById('ssquare').style.backgroundColor="#fff";
  document.getElementById('ssquare').value="";
    document.getElementById('ssquare').placeholder="Please Enter Value";
  document.getElementById('aasquare').value="";
}

function arect(){
    var l=parseFloat(document.getElementById('larect').value);
    var b=parseFloat(document.getElementById('barect').value);
  if(l<=0){
           document.getElementById('larect').style.backgroundColor="#97b17eeb";
       }
 if(b<=0){
              document.getElementById('barect').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(l)){
         document.getElementById('larect').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('barect').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(l) && !isNaN(b) && l>0 && b>0) {
              document.getElementById('aarect').value=arearect(l,b);
        }
}

function resetarect(){
  document.getElementById('larect').style.backgroundColor="#fff";
  document.getElementById('barect').style.backgroundColor="#fff";
document.getElementById('larect').value="";
document.getElementById('barect').value="";
document.getElementById('larect').placeholder="Please Enter Value";
document.getElementById('barect').placeholder="Please Enter Value";
      document.getElementById('aarect').value="";
}
function arhom(){
    var d1=parseFloat(document.getElementById('d1rhombus').value);
    var d2=parseFloat(document.getElementById('d2rhombus').value);
  if(d1<=0){
           document.getElementById('d1rhombus').style.backgroundColor="#97b17eeb";
       }
 if(d2<=0){
              document.getElementById('d2rhombus').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(d1)){
         document.getElementById('d1rhombus').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(d2)){
         document.getElementById('d2rhombus').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(d1) && !isNaN(d2) && d1>0 && d2>0) {
          document.getElementById('arhombus').value=arearhom(d1,d2);
        }
}

function resetarhom(){
  document.getElementById('d1rhombus').style.backgroundColor="#fff";
  document.getElementById('d2rhombus').style.backgroundColor="#fff";
document.getElementById('d1rhombus').value="";
document.getElementById('d2rhombus').value="";
document.getElementById('d1rhombus').placeholder="Please Enter Value";
document.getElementById('d2rhombus').placeholder="Please Enter Value";
  document.getElementById('arhombus').value="";
}

function aellipse(){
var a=parseFloat(document.getElementById('smajaellipse').value);
    var b=parseFloat(document.getElementById('sminaellipse').value);
  if(a<=0){
           document.getElementById('smajaellipse').style.backgroundColor="#97b17eeb";
       }
  if(b<=0){
                document.getElementById('sminaellipse').style.backgroundColor="#97b17eeb";
            }
      if(isNaN(a)){
         document.getElementById('smajaellipse').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('sminaellipse').style.backgroundColor="#97b17eeb";
      }
     if (!isNaN(a) && !isNaN(b) && a>0 && b>0) {
          document.getElementById('aaellipse').value=(areaellipse(a,b)).toFixed(6);
        }
}

function resetaellipse(){
  document.getElementById('sminaellipse').style.backgroundColor="#fff";
document.getElementById('sminaellipse').value="";
document.getElementById('sminaellipse').placeholder="Please Enter Value";
document.getElementById('smajaellipse').style.backgroundColor="#fff";
document.getElementById('smajaellipse').value="";
document.getElementById('smajaellipse').placeholder="Please Enter Value";
   document.getElementById('aaellipse').value="";
}

function apara(){
    var b=parseFloat(document.getElementById('bapara').value);
      var h=parseFloat(document.getElementById('hapara').value);
  if(b<=0){
           document.getElementById('bapara').style.backgroundColor="#97b17eeb";
       }
       if(h<=0){
                document.getElementById('hapara').style.backgroundColor="#97b17eeb";
            }
      if(isNaN(b)){
         document.getElementById('bapara').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(h)){
         document.getElementById('hapara').style.backgroundColor="#97b17eeb";
      }
     if (!isNaN(b) && !isNaN(h) && h>0 && b>0) {
          document.getElementById('aapara').value=areapara1(b,h);
        }
}

function resetapara(){
  document.getElementById('bapara').style.backgroundColor="#fff";
document.getElementById('bapara').value="";
document.getElementById('bapara').placeholder="Please Enter Value";
document.getElementById('hapara').style.backgroundColor="#fff";
document.getElementById('hapara').value="";
document.getElementById('hapara').placeholder="Please Enter Value";
  document.getElementById('aapara').value="";
}
function apara2(){
    var a=parseFloat(document.getElementById('aapara2').value);
      var b=parseFloat(document.getElementById('bapara2').value);
        var angle=parseFloat(document.getElementById('angleapara2').value);
  if(a<=0){
           document.getElementById('aapara2').style.backgroundColor="#97b17eeb";
       }
  if(b<=0){
                document.getElementById('bapara2').style.backgroundColor="#97b17eeb";
            }
    if(angle==0){
                         document.getElementById('angleapara2').value="Angle can't be zero";
                          document.getElementById('angleapara2').style.backgroundColor="#97b17eeb";
              }
      if(isNaN(a)){
         document.getElementById('aapara2').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('bapara2').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(angle)){
        document.getElementById('angleapara2').value="Please write the Angle";
         document.getElementById('angleapara2').style.backgroundColor="#97b17eeb";
      }
     if (!isNaN(a) && !isNaN(b) && a>0 && b>0) {
          document.getElementById('areaapara2').value=(areapara2(a,b,angle)).toFixed(6);
        }
}

function resetapara2(){
  document.getElementById('aapara2').style.backgroundColor="#fff";
document.getElementById('aapara2').value="";
document.getElementById('aapara2').placeholder="Please Enter Value";
document.getElementById('bapara2').style.backgroundColor="#fff";
document.getElementById('bapara2').value="";
document.getElementById('bapara2').placeholder="Please Enter Value";
document.getElementById('angleapara2').style.backgroundColor="#fff";
document.getElementById('angleapara2').value="";
document.getElementById('angleapara2').placeholder="Please Enter Value";
  document.getElementById('areaapara2').value="";
}

//---------------CIRCUMFERENCE--------------
function ccir(){
  var r=parseFloat(document.getElementById('rccir').value);

  if(r<=0){
     document.getElementById('rccir').style.backgroundColor="#97b17eeb";
  }
else if (!isNaN(r)) {
        document.getElementById('cccir').value=(cfcircle(r)).toFixed(6);
  }
else {
  document.getElementById('rccir').style.backgroundColor="#97b17eeb";
}
}

function resetccir(){
    document.getElementById('rccir').style.backgroundColor="#fff";
  document.getElementById('rccir').value="";
    document.getElementById('rccir').placeholder="Please Enter Value";
  document.getElementById('cccir').value="";
}
//-----------------------------------------
function csqu(){
  var side=parseFloat(document.getElementById('csquare').value);

  if(side<=0){
     document.getElementById('csquare').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(side)) {
        document.getElementById('pcsquare').value=psquare(side);
  }
else {
  document.getElementById('csquare').style.backgroundColor="#97b17eeb";
}
}

function resetcsqu(){
    document.getElementById('csquare').style.backgroundColor="#fff";
  document.getElementById('csquare').value="";
    document.getElementById('csquare').placeholder="Please Enter Value";
  document.getElementById('pcsquare').value="";
}
//-----------------------------------------
function crect(){
    var l=parseFloat(document.getElementById('lcrect').value);
    var b=parseFloat(document.getElementById('bcrect').value);
  if(l<=0){
           document.getElementById('lcrect').style.backgroundColor="#97b17eeb";
       }
 if(b<=0){
              document.getElementById('bcrect').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(l)){
         document.getElementById('lcrect').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('bcrect').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(l) && !isNaN(b) && l>0 && b>0) {
              document.getElementById('pcrect').value=prect(l,b);
        }
}

function resetcrect(){
  document.getElementById('lcrect').style.backgroundColor="#fff";
  document.getElementById('bcrect').style.backgroundColor="#fff";
document.getElementById('lcrect').value="";
document.getElementById('bcrect').value="";
document.getElementById('lcrect').placeholder="Please Enter Value";
document.getElementById('bcrect').placeholder="Please Enter Value";
      document.getElementById('pcrect').value="";
}
function crhombus(){
    var side=parseFloat(document.getElementById('scrhombus').value);
      if(side<=0){
           document.getElementById('scrhombus').style.backgroundColor="#97b17eeb";
       }
else if(isNaN(side)){
         document.getElementById('scrhombus').style.backgroundColor="#97b17eeb";
      }
  else {
          document.getElementById('pcrhombus').value=psquare(side);
        }
}

function resetcrhombus(){
  document.getElementById('scrhombus').style.backgroundColor="#fff";
  document.getElementById('scrhombus').value="";
document.getElementById('scrhombus').placeholder="Please Enter Value";
  document.getElementById('pcrhombus').value="";
}

function cellipse(){
var a=parseFloat(document.getElementById('smajcellipse').value);
    var b=parseFloat(document.getElementById('smincellipse').value);
  if(a<=0){
           document.getElementById('smajcellipse').style.backgroundColor="#97b17eeb";
       }
  if(b<=0){
                document.getElementById('smincellipse').style.backgroundColor="#97b17eeb";
            }
      if(isNaN(a)){
         document.getElementById('smajcellipse').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
         document.getElementById('smincellipse').style.backgroundColor="#97b17eeb";
      }
     if (!isNaN(a) && !isNaN(b) && a>0 && b>0) {
          document.getElementById('ccellipse').value=(circumellipse(a,b)).toFixed(6);
        }
}

function resetcellipse(){
  document.getElementById('smincellipse').style.backgroundColor="#fff";
document.getElementById('smincellipse').value="";
document.getElementById('smincellipse').placeholder="Please Enter Value";
document.getElementById('smajcellipse').style.backgroundColor="#fff";
document.getElementById('smajcellipse').value="";
document.getElementById('smajcellipse').placeholder="Please Enter Value";
   document.getElementById('ccellipse').value="";
}

function cpara(){
    var a=parseFloat(document.getElementById('acpara').value);
      var b=parseFloat(document.getElementById('bcpara').value);
  if(b<=0){
           document.getElementById('bcpara').style.backgroundColor="#97b17eeb";
       }
       if(a<=0){
                document.getElementById('acpara').style.backgroundColor="#97b17eeb";
            }
      if(isNaN(b)){
         document.getElementById('bcpara').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(a)){
         document.getElementById('acpara').style.backgroundColor="#97b17eeb";
      }
     if (!isNaN(b) && !isNaN(a) && a>0 && b>0) {
          document.getElementById('pcpara').value=prect(b,a);
        }
}

function resetcpara(){
  document.getElementById('bcpara').style.backgroundColor="#fff";
document.getElementById('bcpara').value="";
document.getElementById('bcpara').placeholder="Please Enter Value";
document.getElementById('acpara').style.backgroundColor="#fff";
document.getElementById('acpara').value="";
document.getElementById('acpara').placeholder="Please Enter Value";
  document.getElementById('pcpara').value="";
}
