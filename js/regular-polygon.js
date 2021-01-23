function pen(){
  var l=parseFloat(document.getElementById('slpen').value);

  if(l<=0){
     document.getElementById('slpen').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(l)) {
    document.getElementById('apen').value=(areapent(l)).toFixed(6);
  }
else {
  document.getElementById('slpen').style.backgroundColor="#97b17eeb";
}
}

function resetpen(){
    document.getElementById('slpen').style.backgroundColor="#fff";
  document.getElementById('slpen').value="";
    document.getElementById('slpen').placeholder="Please Enter Value";
  document.getElementById('apen').value="";
}
function hex(){
  var l=parseFloat(document.getElementById('slhex').value);

  if(l<=0){
     document.getElementById('slhex').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(l)) {
    document.getElementById('ahex').value=(areahexa(l)).toFixed(6);
  }
else {
  document.getElementById('slhex').style.backgroundColor="#97b17eeb";
}
}

function resethex(){
    document.getElementById('slhex').style.backgroundColor="#fff";
  document.getElementById('slhex').value="";
    document.getElementById('slhex').placeholder="Please Enter Value";
  document.getElementById('ahex').value="";
}

function hep(){
  var l=parseFloat(document.getElementById('slhep').value);

  if(l<=0){
     document.getElementById('slhep').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(l)) {
    document.getElementById('ahep').value=(areahept(l)).toFixed(6);
  }
else {
  document.getElementById('slhep').style.backgroundColor="#97b17eeb";
}
}

function resethep(){
    document.getElementById('slhep').style.backgroundColor="#fff";
  document.getElementById('slhep').value="";
    document.getElementById('slhep').placeholder="Please Enter Value";
  document.getElementById('ahep').value="";
}
function oct(){
  var l=parseFloat(document.getElementById('sloct').value);

  if(l<=0){
     document.getElementById('sloct').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(l)) {
    document.getElementById('aoct').value=(areaocta(l)).toFixed(6);
  }
else {
  document.getElementById('sloct').style.backgroundColor="#97b17eeb";
}
}

function resetoct(){
    document.getElementById('sloct').style.backgroundColor="#fff";
  document.getElementById('sloct').value="";
    document.getElementById('sloct').placeholder="Please Enter Value";
  document.getElementById('aoct').value="";
}

function non(){
  var l=parseFloat(document.getElementById('slnon').value);

  if(l<=0){
     document.getElementById('slnon').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(l)) {
    document.getElementById('anon').value=(areanona(l)).toFixed(6);
  }
else {
  document.getElementById('slnon').style.backgroundColor="#97b17eeb";
}
}

function resetnon(){
    document.getElementById('slnon').style.backgroundColor="#fff";
  document.getElementById('slnon').value="";
    document.getElementById('slnon').placeholder="Please Enter Value";
  document.getElementById('anon').value="";
}

function dec(){
  var l=parseFloat(document.getElementById('sldec').value);

  if(l<=0){
     document.getElementById('sldec').style.backgroundColor="#97b17eeb";
  }
 else if (!isNaN(l)) {
    document.getElementById('adec').value=(areadeca(l)).toFixed(6);
  }
else {
  document.getElementById('sldec').style.backgroundColor="#97b17eeb";
}
}

function resetdec(){
    document.getElementById('sldec').style.backgroundColor="#fff";
  document.getElementById('sldec').value="";
    document.getElementById('sldec').placeholder="Please Enter Value";
  document.getElementById('adec').value="";
}

function areapent(side) {
  var area;
  area=0.25*Math.pow(side,2)*Math.sqrt(5*(5+2*Math.sqrt(5)));
  return area;
}
function areahexa(side) {
  var area;
  area=1.5*Math.pow(side,2)*Math.sqrt(3);
  return area;
}function areahept(side) {
  var area;
  area=(1.75*Math.pow(side,2))/(Math.tan(Math.PI/7));
  return area;
}
function areaocta(side) {
  var area;
  area=2*Math.pow(side,2)*(1+Math.sqrt(2));
  return area;
}
function areanona(side) {
  var area;
  area=(2.25*Math.pow(side,2))/(Math.tan(Math.PI/9));
  return area;
}
function areadeca(side) {
  var area;
  area=2.5*Math.pow(side,2)*Math.sqrt(5+2*Math.sqrt(5));
  return area;
}
