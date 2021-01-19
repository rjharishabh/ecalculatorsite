var dima,dimb;
var resa,resb;
var matrixA;
var matrixB;
function aconfirm() {
  matrixA=new Array();
  var matrixida=1;
 for (var i = 0; i < dima; i++) {
 matrixA[i]=new Array();
 for (var j = 0; j < dima; j++) {
    matrixA[i].push(document.getElementById(matrixida).value);
 matrixida++;
 }
   }
}

function bconfirm() {
    matrixB=new Array();
  var matrixidb=26;
  for (var i = 0; i < dimb; i++) {
  matrixB[i]=new Array();
  for (var j = 0; j < dimb; j++) {
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
dima=3;
    document.querySelector('#dima').value=3;
  resa=document.getElementById('resa');
    resa.innerHTML=" ";
  var aid=1;
 for(var i=0;i<dima;i++){
   for(var j=0;j<dima;j++){
     let inputa=document.createElement('input');
     inputa.id=aid++;
     inputa.size="2";
     inputa.value=0;
     resa.appendChild(inputa);
   }
 let abr=document.createElement('br');
 resa.appendChild(abr);
 }
   document.querySelector('#ans').innerHTML=" ";
   aconfirm();
}

function resetb(){
dimb=3;
    document.querySelector('#dimb').value=3;
  resb=document.getElementById('resb');
  resb.innerHTML=" ";
    var bid=26;
 for(var i=0;i<dimb;i++){
   for(var j=0;j<dimb;j++){
     let inputb=document.createElement('input');
     inputb.id=bid++;
     inputb.size="2";
     inputb.value=0;
     resb.appendChild(inputb);
   }
 let bbr=document.createElement('br');
 resb.appendChild(bbr);
 }
   document.querySelector('#ans').innerHTML=" ";
   bconfirm();
}

document.querySelector('#aset').addEventListener('click',function() {
dima=parseInt(document.querySelector('#dima').value);
if(dima>5){
  dima=5;
  document.querySelector('#dima').value=5;
}
resa=document.getElementById('resa');
resa.innerHTML=" ";
  var aid=1;
for(var i=0;i<dima;i++){
 for(var j=0;j<dima;j++){
   let inputa=document.createElement('input');
   inputa.id=aid++;
   inputa.size="2";
   inputa.value=0;
   resa.appendChild(inputa);
 }
let abr=document.createElement('br');
resa.appendChild(abr);
}
  document.querySelector('#ans').innerHTML=" ";
  aconfirm();
});

document.querySelector('#bset').addEventListener('click',function() {
dimb=parseInt(document.querySelector('#dimb').value);
if(dimb>5){
  dimb=5;
  document.querySelector('#dimb').value=5;
}
resb=document.getElementById('resb');
resb.innerHTML=" ";
  var bid=26;
for(var i=0;i<dimb;i++){
 for(var j=0;j<dimb;j++){
   let inputb=document.createElement('input');
   inputb.id=bid++;
   inputb.size="2";
   inputb.value=0;
   resb.appendChild(inputb);
 }
let bbr=document.createElement('br');
resb.appendChild(bbr);
}
  document.querySelector('#ans').innerHTML=" ";
  bconfirm();
});


document.querySelector('#aconfirm').addEventListener('click',aconfirm);

document.querySelector('#bconfirm').addEventListener('click',bconfirm);

document.querySelector('#detaplusb').addEventListener('click',function(){
  try {
    var sum=[];
  sum=math.add(matrixA,matrixB);
var det;
det=math.det(sum);
  document.querySelector('#ans').innerHTML="|A+B| = "+det;
} catch (e){
    document.querySelector('#ans').innerHTML="ERROR";
}
});

document.querySelector('#detasubb').addEventListener('click',function(){
  try {
    var diff=[];
  diff=math.subtract(matrixA,matrixB);
var det;
det=math.det(diff);
  document.querySelector('#ans').innerHTML="|A-B| = "+det;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#detbsuba').addEventListener('click',function(){
  try {
    var diff=[];
  diff=math.subtract(matrixB,matrixA);
var det;
det=math.det(diff);
  document.querySelector('#ans').innerHTML="|B-A| = "+det;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#aones').addEventListener('click',function() {
  var aid=1;
  for(var i=0;i<dima;i++){
    for(var j=0;j<dima;j++)
    document.getElementById(aid++).value=1;
  }
  aconfirm();
});

document.querySelector('#bones').addEventListener('click',function() {
  var bid=26;
  for(var i=0;i<dimb;i++){
    for(var j=0;j<dimb;j++)
    document.getElementById(bid++).value=1;
  }
  bconfirm();
});

document.querySelector('.matrix-clear').addEventListener('click',function() {
  document.querySelector('#ans').innerHTML=" ";
});

document.querySelector('#aidentity').addEventListener('click',function() {
if(dima===1){
      document.getElementById(1).value=1;
  }
else if(dima===2){
  document.getElementById(1).value=1;
  document.getElementById(2).value=0;
  document.getElementById(3).value=0;
  document.getElementById(4).value=1;
}
else if(dima===3){
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
else if(dima===4){
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
else if(dima===5){
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
});

document.querySelector('#bidentity').addEventListener('click',function() {
if(dimb===1){
      document.getElementById(26).value=1;
  }
else if(dimb===2){
  document.getElementById(26).value=1;
  document.getElementById(27).value=0;
  document.getElementById(28).value=0;
  document.getElementById(29).value=1;
}
else if(dimb===3){
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
else if(dimb===4){
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
else if(dimb===5){
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
});

document.querySelector('#detamultb').addEventListener('click',function(){
  try {
    var mult=[];
  mult=math.multiply(matrixA,matrixB);
var det;
det=math.det(mult);
  document.querySelector('#ans').innerHTML="|A*B| = "+det;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#detbmulta').addEventListener('click',function(){
  try {
    var mult=[];
  mult=math.multiply(matrixB,matrixA);
var det;
det=math.det(mult);
  document.querySelector('#ans').innerHTML="|B*A| = "+det;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#detadivb').addEventListener('click',function(){
  try {
    var quot=[];
  quot=math.divide(matrixA,matrixB);
var det;
det=math.det(quot);
document.querySelector('#ans').innerHTML="|A/B| = "+det;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#detbdiva').addEventListener('click',function(){
  try {
    var quot=[];
  quot=math.divide(matrixB,matrixA);
var det;
det=math.det(quot);
document.querySelector('#ans').innerHTML="|B/A| = "+det;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#deta').addEventListener('click',function() {
  try {
var det;
det=math.det(matrixA);
document.querySelector('#ans').innerHTML="|A| = "+det;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#detb').addEventListener('click',function() {
  try {
var det;
det=math.det(matrixB);
document.querySelector('#ans').innerHTML="|B| = "+det;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#deta2').addEventListener('click',function() {
  try {
var det;
det=math.det(math.pow(matrixA,2));
document.querySelector('#ans').innerHTML="|A<sup>2</sup>| = "+det;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#detb2').addEventListener('click',function() {
  try {
var det;
det=math.det(math.pow(matrixB,2));
document.querySelector('#ans').innerHTML="|B<sup>2</sup>| = "+det;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#detan').addEventListener('click',function() {
  try {
    var n=parseInt(document.querySelector('#an').value);
var pow;
pow=math.pow(math.det(matrixA),n);
document.querySelector('#ans').innerHTML="|A<sup>"+n+"</sup>| = "+pow;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});

document.querySelector('#detbn').addEventListener('click',function() {
  try {
    var n=parseInt(document.querySelector('#bn').value);
    var pow;
    pow=math.pow(math.det(matrixB),n);
document.querySelector('#ans').innerHTML="|B<sup>"+n+"</sup>| = "+pow;
  } catch (e) {
      document.querySelector('#ans').innerHTML="ERROR";
  }
});
