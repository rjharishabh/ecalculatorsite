var rowa,cola,rowb,colb;
var resa,resb;
var matrixA;
var matrixB;
function aconfirm() {
  matrixA=new Array();
  var matrixida=1;
 for (var i = 0; i < rowa; i++) {
 matrixA[i]=new Array();
 for (var j = 0; j < cola; j++) {
    matrixA[i].push(document.getElementById(matrixida).value);
 matrixida++;
 }
   }
}

function bconfirm() {
    matrixB=new Array();
  var matrixidb=26;
  for (var i = 0; i < rowb; i++) {
  matrixB[i]=new Array();
  for (var j = 0; j < colb; j++) {
     matrixB[i].push(document.getElementById(matrixidb).value);
  matrixidb++;
  }
    }
}

window.onload=start;
function start() {
  reseta();
  resetb();
}

function reseta(){
  rowa=3;
  cola=3;
    document.querySelector('#rowa').value=3;
    document.querySelector('#cola').value=3;
  resa=document.getElementById('resa');
    resa.innerHTML=" ";
  var aid=1;
 for(var i=0;i<rowa;i++){
   for(var j=0;j<cola;j++){
     let inputa=document.createElement('input');
     inputa.id=aid++;
     inputa.size="2";
     inputa.value=0;
     resa.appendChild(inputa);
   }
 let abr=document.createElement('br');
 resa.appendChild(abr);
 }
 document.querySelector('#label').innerHTML=" ";
   document.querySelector('#ans').innerHTML=" ";
   aconfirm();
}

function resetb(){
  rowb=3;
  colb=3;
    document.querySelector('#rowb').value=3;
    document.querySelector('#colb').value=3;
  resb=document.getElementById('resb');
  resb.innerHTML=" ";
    var bid=26;
 for(var i=0;i<rowb;i++){
   for(var j=0;j<colb;j++){
     let inputb=document.createElement('input');
     inputb.id=bid++;
     inputb.size="2";
     inputb.value=0;
     resb.appendChild(inputb);
   }
 let bbr=document.createElement('br');
 resb.appendChild(bbr);
 }
 document.querySelector('#label').innerHTML=" ";
   document.querySelector('#ans').innerHTML=" ";
   bconfirm();
}

document.querySelector('#aset').addEventListener('click',function() {
rowa=parseInt(document.querySelector('#rowa').value);
cola=parseInt(document.querySelector('#cola').value);
if(rowa>5){
  rowa=5;
  document.querySelector('#rowa').value=5;
}
else if(rowa<=0){
  rowa=1;
  document.querySelector('#rowa').value=1;
}
if(cola>5){
  cola=5;
  document.querySelector('#cola').value=5;
}
else if(cola<=0){
  cola=1;
  document.querySelector('#cola').value=1;
}
resa=document.getElementById('resa');
resa.innerHTML=" ";
  var aid=1;
for(var i=0;i<rowa;i++){
 for(var j=0;j<cola;j++){
   let inputa=document.createElement('input');
   inputa.id=aid++;
   inputa.size="2";
   inputa.value=0;
   resa.appendChild(inputa);
 }
let abr=document.createElement('br');
resa.appendChild(abr);
}
document.querySelector('#label').innerHTML=" ";
  document.querySelector('#ans').innerHTML=" ";
  aconfirm();
});

document.querySelector('#bset').addEventListener('click',function() {
rowb=parseInt(document.querySelector('#rowb').value);
colb=parseInt(document.querySelector('#colb').value);
if(rowb>5){
  rowb=5;
  document.querySelector('#rowb').value=5;
}
else if(rowb<=0){
  rowb=1;
  document.querySelector('#rowb').value=1;
}
if(colb>5){
  colb=5;
  document.querySelector('#colb').value=5;
}
else if(colb<=0){
  colb=1;
  document.querySelector('#colb').value=1;
}
resb=document.getElementById('resb');
resb.innerHTML=" ";
  var bid=26;
for(var i=0;i<rowb;i++){
 for(var j=0;j<colb;j++){
   let inputb=document.createElement('input');
   inputb.id=bid++;
   inputb.size="2";
   inputb.value=0;
   resb.appendChild(inputb);
 }
let bbr=document.createElement('br');
resb.appendChild(bbr);
}
document.querySelector('#label').innerHTML=" ";
  document.querySelector('#ans').innerHTML=" ";
  bconfirm();
});


document.querySelector('#aconfirm').addEventListener('click',aconfirm);



document.querySelector('#bconfirm').addEventListener('click',bconfirm);

document.querySelector('#aplusb').addEventListener('click',function(){
  try {
    var sum=[];
  sum=math.round(math.add(matrixA,matrixB),2);

  var z="";
  for(var i=0;i<sum.length;i++){
    for(var j=0;j<sum[i].length;j++){
      z+=(sum[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="A + B = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="Please check the dimension of the matrices.";
        document.querySelector('#ans').innerHTML="Dimension of both the matrix should be equal.";
  }
});

document.querySelector('#asubb').addEventListener('click',function(){
  try {
    var diffa=[];
  diffa=math.round(math.subtract(matrixA,matrixB),2);

  var z="";
  for(var i=0;i<diffa.length;i++){
    for(var j=0;j<diffa[i].length;j++){
      z+=(diffa[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="A - B = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
    document.querySelector('#label').innerHTML="Please check the dimension of the matrices.";
      document.querySelector('#ans').innerHTML="Dimension of both the matrix should be equal.";
  }
});

document.querySelector('#bsuba').addEventListener('click',function(){
  try {
    var diffb=[];
  diffb=math.round(math.subtract(matrixB,matrixA),2);

  var z="";
  for(var i=0;i<diffb.length;i++){
    for(var j=0;j<diffb[i].length;j++){
      z+=(diffb[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="B - A = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
    document.querySelector('#label').innerHTML="Please check the dimension of the matrices.";
      document.querySelector('#ans').innerHTML="Dimension of both the matrix should be equal.";
  }
});

document.querySelector('#aones').addEventListener('click',function() {
  var aid=1;
  for(var i=0;i<rowa;i++){
    for(var j=0;j<cola;j++)
    document.getElementById(aid++).value=1;
  }
  aconfirm();
});

document.querySelector('#bones').addEventListener('click',function() {
  var bid=26;
  for(var i=0;i<rowb;i++){
    for(var j=0;j<colb;j++)
    document.getElementById(bid++).value=1;
  }
  bconfirm();
});

document.querySelector('.matrix-clear').addEventListener('click',function() {
  document.querySelector('#label').innerHTML=" ";
  document.querySelector('#ans').innerHTML=" ";
});

document.querySelector('#aidentity').addEventListener('click',function() {
if(rowa===cola){
  if(rowa===1){
      document.getElementById(1).value=1;
  }
else if(rowa===2){
  document.getElementById(1).value=1;
  document.getElementById(2).value=0;
  document.getElementById(3).value=0;
  document.getElementById(4).value=1;
}
else if(rowa===3){
  document.getElementById(1).value=1;
  document.getElementById(2).value=0;
  document.getElementById(3).value=0;
  document.getElementById(4).value=0;
  document.getElementById(5).value=1;
  document.getElementById(6).value=0;
  document.getElementById(7).value=0;
  document.getElementById(8).value=0;
  document.getElementById(9).value=1;
}
else if(rowa===4){
  document.getElementById(1).value=1;
  document.getElementById(2).value=0;
  document.getElementById(3).value=0;
  document.getElementById(4).value=0;
  document.getElementById(5).value=0;
  document.getElementById(6).value=1;
  document.getElementById(7).value=0;
  document.getElementById(8).value=0;
  document.getElementById(9).value=0;
  document.getElementById(10).value=0;
  document.getElementById(11).value=1;
  document.getElementById(12).value=0;
  document.getElementById(13).value=0;
  document.getElementById(14).value=0;
  document.getElementById(15).value=0;
  document.getElementById(16).value=1;
}
else if(rowa===5){
  document.getElementById(1).value=1;
  document.getElementById(2).value=0;
  document.getElementById(3).value=0;
  document.getElementById(4).value=0;
  document.getElementById(5).value=0;
  document.getElementById(6).value=0;
  document.getElementById(7).value=1;
  document.getElementById(8).value=0;
  document.getElementById(9).value=0;
  document.getElementById(10).value=0;
  document.getElementById(11).value=0;
  document.getElementById(12).value=0;
  document.getElementById(13).value=1;
  document.getElementById(14).value=0;
  document.getElementById(15).value=0;
  document.getElementById(16).value=0;
  document.getElementById(17).value=0;
  document.getElementById(18).value=0;
  document.getElementById(19).value=1;
  document.getElementById(20).value=0;
  document.getElementById(21).value=0;
  document.getElementById(22).value=0;
  document.getElementById(23).value=0;
  document.getElementById(24).value=0;
  document.getElementById(25).value=1;
}
aconfirm();
}
else{
  document.querySelector('#label').innerHTML="Please check the dimension of the matrix A.";
  document.querySelector('#ans').innerHTML="Matrix A should be square.";
}
});

document.querySelector('#bidentity').addEventListener('click',function() {
if(rowb===colb){
  if(rowb===1){
      document.getElementById(26).value=1;
  }
else if(rowb===2){
  document.getElementById(26).value=1;
  document.getElementById(27).value=0;
  document.getElementById(28).value=0;
  document.getElementById(29).value=1;
}
else if(rowb===3){
  document.getElementById(26).value=1;
  document.getElementById(27).value=0;
  document.getElementById(28).value=0;
  document.getElementById(29).value=0;
  document.getElementById(30).value=1;
  document.getElementById(31).value=0;
  document.getElementById(32).value=0;
  document.getElementById(33).value=0;
  document.getElementById(34).value=1;
}
else if(rowb===4){
  document.getElementById(26).value=1;
  document.getElementById(27).value=0;
  document.getElementById(28).value=0;
  document.getElementById(29).value=0;
  document.getElementById(30).value=0;
  document.getElementById(31).value=1;
  document.getElementById(32).value=0;
  document.getElementById(33).value=0;
  document.getElementById(34).value=0;
  document.getElementById(35).value=0;
  document.getElementById(36).value=1;
  document.getElementById(37).value=0;
  document.getElementById(38).value=0;
  document.getElementById(39).value=0;
  document.getElementById(40).value=0;
  document.getElementById(41).value=1;
}
else if(rowb===5){
  document.getElementById(26).value=1;
  document.getElementById(27).value=0;
  document.getElementById(28).value=0;
  document.getElementById(29).value=0;
  document.getElementById(30).value=0;
  document.getElementById(31).value=0;
  document.getElementById(32).value=1;
  document.getElementById(33).value=0;
  document.getElementById(34).value=0;
  document.getElementById(35).value=0;
  document.getElementById(36).value=0;
  document.getElementById(37).value=0;
  document.getElementById(38).value=1;
  document.getElementById(39).value=0;
  document.getElementById(40).value=0;
  document.getElementById(41).value=0;
  document.getElementById(42).value=0;
  document.getElementById(43).value=0;
  document.getElementById(44).value=1;
  document.getElementById(45).value=0;
  document.getElementById(46).value=0;
  document.getElementById(47).value=0;
  document.getElementById(48).value=0;
  document.getElementById(49).value=0;
  document.getElementById(50).value=1;
}
bconfirm();
}
else{
  document.querySelector('#label').innerHTML="Please check the dimension of the matrix B.";
  document.querySelector('#ans').innerHTML="Matrix B should be square.";
}
});

document.querySelector('#asinm').addEventListener('click',function(){
  try {
    var sin=[];
  sin=math.round(math.sin(matrixA),2);

  var z="";
  for(var i=0;i<sin.length;i++){
    for(var j=0;j<sin[i].length;j++){
      z+=(sin[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Sin(A) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#bsinm').addEventListener('click',function(){
  try {
    var sin=[];
  sin=math.round(math.sin(matrixB),2);

  var z="";
  for(var i=0;i<sin.length;i++){
    for(var j=0;j<sin[i].length;j++){
      z+=(sin[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Sin(B) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#acosm').addEventListener('click',function(){
  try {
    var cos=[];
  cos=math.round(math.cos(matrixA),2);

  var z="";
  for(var i=0;i<cos.length;i++){
    for(var j=0;j<cos[i].length;j++){
      z+=(cos[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Cos(A) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#bcosm').addEventListener('click',function(){
  try {
    var cos=[];
  cos=math.round(math.cos(matrixB),2);

  var z="";
  for(var i=0;i<cos.length;i++){
    for(var j=0;j<cos[i].length;j++){
      z+=(cos[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Cos(B) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#atanm').addEventListener('click',function(){
  try {
    var tan=[];
  tan=math.round(math.tan(matrixA),2);

  var z="";
  for(var i=0;i<tan.length;i++){
    for(var j=0;j<tan[i].length;j++){
      z+=(tan[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Tan(A) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#btanm').addEventListener('click',function(){
  try {
    var tan=[];
  tan=math.round(math.tan(matrixB),2);

  var z="";
  for(var i=0;i<tan.length;i++){
    for(var j=0;j<tan[i].length;j++){
      z+=(tan[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Tan(B) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#acscm').addEventListener('click',function(){
  try {
    var csc=[];
  csc=math.round(math.csc(matrixA),2);

  var z="";
  for(var i=0;i<csc.length;i++){
    for(var j=0;j<csc[i].length;j++){
      z+=(csc[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Csc(A) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#bcscm').addEventListener('click',function(){
  try {
    var csc=[];
  csc=math.round(math.csc(matrixB),2);

  var z="";
  for(var i=0;i<csc.length;i++){
    for(var j=0;j<csc[i].length;j++){
      z+=(csc[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Csc(B) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#asecm').addEventListener('click',function(){
  try {
    var sec=[];
  sec=math.round(math.sec(matrixA),2);

  var z="";
  for(var i=0;i<sec.length;i++){
    for(var j=0;j<sec[i].length;j++){
      z+=(sec[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Sec(A) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#bsecm').addEventListener('click',function(){
  try {
    var sec=[];
  sec=math.round(math.sec(matrixB),2);

  var z="";
  for(var i=0;i<sec.length;i++){
    for(var j=0;j<sec[i].length;j++){
      z+=(sec[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Sec(B) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#acotm').addEventListener('click',function(){
  try {
    var cot=[];
  cot=math.round(math.cot(matrixA),2);

  var z="";
  for(var i=0;i<cot.length;i++){
    for(var j=0;j<cot[i].length;j++){
      z+=(cot[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Cot(A) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#bcotm').addEventListener('click',function(){
  try {
    var cot=[];
  cot=math.round(math.cot(matrixB),2);

  var z="";
  for(var i=0;i<cot.length;i++){
    for(var j=0;j<cot[i].length;j++){
      z+=(cot[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Cot(B) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#aabsm').addEventListener('click',function(){
  try {
    var abs=[];
  abs=math.round(math.abs(matrixA),2);

  var z="";
  for(var i=0;i<abs.length;i++){
    for(var j=0;j<abs[i].length;j++){
      z+=(abs[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Abs(A) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#babsm').addEventListener('click',function(){
  try {
    var abs=[];
  abs=math.round(math.abs(matrixB),2);

  var z="";
  for(var i=0;i<abs.length;i++){
    for(var j=0;j<abs[i].length;j++){
      z+=(abs[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Abs(B) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#alogm').addEventListener('click',function(){
  try {
    var log=[];
  log=math.round(math.log(matrixA),2);

  var z="";
  for(var i=0;i<log.length;i++){
    for(var j=0;j<log[i].length;j++){
      z+=(log[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Log(A) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});

document.querySelector('#blogm').addEventListener('click',function(){
  try {
    var log=[];
  log=math.round(math.log(matrixB),2);

  var z="";
  for(var i=0;i<log.length;i++){
    for(var j=0;j<log[i].length;j++){
      z+=(log[i][j]).toString();
  z+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  z+="<br>";
  }

  document.querySelector('#label').innerHTML="Log(B) = ";
  document.querySelector('#ans').innerHTML=z;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});
