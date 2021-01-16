function cbroot(){
  var num=parseFloat(document.getElementById('cbn').value);


if (!isNaN(num)) {
    document.getElementById('cbr').value=Math.cbrt(num);
    document.getElementById('sr').value=Math.sqrt(num);
  }
else {
 document.getElementById('cbn').value="Please Enter a Number";
  document.getElementById('cbn').style.backgroundColor="#97b17eeb";
}
}

function resetcbroot(){
    document.getElementById('cbn').style.backgroundColor="#fff";
  document.getElementById('cbn').value="";
    document.getElementById('cbn').placeholder="Please Enter a Number";
  document.getElementById('cbr').value="";
  document.getElementById('sr').value="";
}

function expt(){
    var base=parseFloat(document.getElementById('base').value);
    var exp=parseFloat(document.getElementById('exp').value);

      if(isNaN(base)){
        document.getElementById('base').value="Please Enter a Number";
         document.getElementById('base').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(exp)){
        document.getElementById('exp').value="Please Enter a Number";
         document.getElementById('exp').style.backgroundColor="#97b17eeb";
       }

     if (!isNaN(base) && !isNaN(exp) ) {
          document.getElementById('ab').value=Math.pow(base,exp);
}
}

function resetexpt(){
  document.getElementById('base').style.backgroundColor="#fff";
  document.getElementById('exp').style.backgroundColor="#fff";
    document.getElementById('base').value="";
document.getElementById('exp').value="";
document.getElementById('base').placeholder="Please Enter a Number";
document.getElementById('exp').placeholder="Please Enter a Number";
    document.getElementById('ab').value="";
}
function leq() {
  var a1=parseFloat(document.getElementById('a1').value);
  var b1=parseFloat(document.getElementById('b1').value);
  var c1=parseFloat(document.getElementById('c1').value);
  var a2=parseFloat(document.getElementById('a2').value);
  var b2=parseFloat(document.getElementById('b2').value);
  var c2=parseFloat(document.getElementById('c2').value);
  var obj;
if(!isNaN(a1)&&!isNaN(a2)&&!isNaN(b1)&&!isNaN(b2)&&!isNaN(c1)&&!isNaN(c2)){
  obj=lesolve(a1,a2,b1,b2,c1,c2);
    document.getElementById('aboutsol').textContent=obj.prop;
  document.getElementById('x').value=obj.x;
    document.getElementById('y').value=obj.y;
}
if(isNaN(a1)||isNaN(a2)||isNaN(b1)||isNaN(b2)||isNaN(c1)||isNaN(c2)){
      document.getElementById('aboutsol').textContent="Please Fill in the All Fields.";
}

}
function resetleq() {
document.getElementById('a1').value="";
document.getElementById('a2').value="";
document.getElementById('b1').value="";
document.getElementById('b2').value="";
document.getElementById('c1').value="";
document.getElementById('c2').value="";
document.getElementById('aboutsol').textContent="";
document.getElementById('x').value="";
  document.getElementById('y').value="";
}
function lesolve(a1,a2,b1,b2,c1,c2){
  var obj={};
  var z1=a1/a2;
  var z2=b1/b2;
  var z3=c1/c2;
  if(z1!==z2){
      obj.prop="Given equations have a unique solution.";
      obj.x=-(((b1*c2)-(b2*c1))/((a1*b2)-(a2*b1)));
      obj.y=-(((c1*a2)-(c2*a1))/((a1*b2)-(a2*b1)));
  }

  else if ((z1===z2)&&(z2===z3)){
  obj.prop="Given equations have infinite many solutions.";
  obj.x=c1/a1;
  obj.y=0;
  }
  else if ((z1===z2)&&(z2!==z3)){
      obj.prop="Given equations have no solution.";
      obj.x="";
      obj.y="";
  }
return obj;
}

function rng() {
var min=parseFloat(document.getElementById('min-val').value);
var max=parseFloat(document.getElementById('max-val').value);
if(isNaN(min)){
  document.getElementById('min-val').placeholder="Enter a Value";
   document.getElementById('min-val').style.backgroundColor="#fff";
}
if(isNaN(max)){
  document.getElementById('max-val').placeholder="Enter a Value";
   document.getElementById('max-val').style.backgroundColor="#fff";
}
if(isNaN(min)&&isNaN(max))
document.getElementById('random-num').value=Math.random();
if(!isNaN(min)&&!isNaN(max)){
  document.getElementById('random-num').value=(Math.random()*(max-min)+min).toFixed(6);
  document.getElementById('random-int').value=Math.floor(Math.random()*(max-min)+min);
}
}

function resetrng() {
  document.getElementById('min-val').style.backgroundColor="#fff";
  document.getElementById('max-val').style.backgroundColor="#fff";
  document.getElementById('min-val').value="";
  document.getElementById('max-val').value="";
  document.getElementById('min-val').placeholder="Please Enter a Value";
  document.getElementById('max-val').placeholder="Please Enter a Value";
  document.getElementById('random-num').value="";
  document.getElementById('random-int').value="";
}

function sqcb(){
  var num=parseFloat(document.getElementById('no').value);


if (!isNaN(num)) {
    document.getElementById('cb').value=Math.pow(num,3);
    document.getElementById('sq').value=Math.pow(num,2);
  }
else {
 document.getElementById('no').value="Please Enter a Number";
  document.getElementById('no').style.backgroundColor="#97b17eeb";
}
}

function resetsqcb(){
    document.getElementById('no').style.backgroundColor="#fff";
  document.getElementById('no').value="";
    document.getElementById('no').placeholder="Please Enter a Number";
  document.getElementById('cb').value="";
  document.getElementById('sq').value="";
}

function quad() {
  var a=parseFloat(document.getElementById('A').value);
  var b=parseFloat(document.getElementById('B').value);
  var c=parseFloat(document.getElementById('C').value);
  var obj;
  if(a===0)
      document.getElementById('aboutroots').textContent="Coefficient of X² can't be zero.";
if(!isNaN(a)&&!isNaN(b)&&!isNaN(c)&&(a!==0)){
  obj=quad_roots(a,b,c);
    document.getElementById('aboutroots').textContent=obj.prop;
    document.getElementById('dis').value=obj.dis;
    document.getElementById('r1').value=obj.x1;
    document.getElementById('r2').value=obj.x2;
}
if(isNaN(a)||isNaN(b)||isNaN(c)){
      document.getElementById('aboutroots').textContent="Please Fill in the All Fields.";
}
}
function resetquad() {
document.getElementById('A').value="";
document.getElementById('B').value="";
document.getElementById('C').value="";
document.getElementById('aboutroots').textContent="";
document.getElementById('dis').value="";
document.getElementById('r1').value="";
document.getElementById('r2').value="";
}
function quad_roots(a,b,c){
  var obj={};
  d=obj.dis=(b*b)-(4*a*c);
if(obj.dis>0){
  obj.prop="Given equation has two distinct real roots.";
  obj.x1=(-b+Math.sqrt(d))/(2*a);
  obj.x2=(-b-Math.sqrt(d))/(2*a);
}
else if(obj.dis===0){
  obj.prop="Given equation has two equal real roots.";
  obj.x1=(-b)/(2*a);
  obj.x2=obj.x1;
}
else{
  obj.prop="Given equation has two distinct complex roots.";
  var re=(-b)/(2*a);
  var im=Math.sqrt(-d)/(2*a);
  obj.x1=re+" + "+im+" i";
  obj.x2=re+" - "+im+" i";
}

return obj;
}

function per1() {
  var p1=parseFloat(document.getElementById('p11').value)/100;
  var p2=parseFloat(document.getElementById('p12').value);
  if(p1<0)
  document.getElementById('error1').textContent="Error!";
  if(!isNaN(p1)&&!isNaN(p2)&&(p1>=0)){
    document.getElementById('rp1').value=p1*p2;
  }

}
function resetper1() {
  document.getElementById('p11').value="";
  document.getElementById('p12').value="";
  document.getElementById('error1').textContent="";
  document.getElementById('rp1').value="";
}

function per2() {
  var p1=parseFloat(document.getElementById('p21').value)*100;
  var p2=parseFloat(document.getElementById('p22').value);
  if(p1<0)
  document.getElementById('error2').textContent="Error!";
  if(!isNaN(p1)&&!isNaN(p2)&&(p1>=0)){
    document.getElementById('rp2').value=p1/p2;
  }

}
function resetper2() {
  document.getElementById('p21').value="";
  document.getElementById('p22').value="";
  document.getElementById('error2').textContent="";
  document.getElementById('rp2').value="";
}

function per3() {
  var p1=parseFloat(document.getElementById('p31').value);
  var p2=parseFloat(document.getElementById('p32').value);

  if(!isNaN(p1)&&!isNaN(p2)){
    var val=((p2-p1)*100)/Math.abs(p1);
    if(val>0)
    document.getElementById('rp3').value="+"+val;
    if(val<=0)
    document.getElementById('rp3').value=val;

  }

}
function resetper3() {
  document.getElementById('p31').value="";
  document.getElementById('p32').value="";
  document.getElementById('rp3').value="";
}

function bmi(){
    var m=parseFloat(document.getElementById('mass').value);
    var h=parseFloat(document.getElementById('height').value);

      if(isNaN(m)){
        document.getElementById('mass').value="Please Enter a Number";
         document.getElementById('mass').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(h)){
        document.getElementById('height').value="Please Enter a Number";
         document.getElementById('height').style.backgroundColor="#97b17eeb";
       }

     if (!isNaN(m) && !isNaN(h) ) {
       let bmi=(m/Math.pow(h,2)).toFixed(6);
          document.getElementById('bmi_val').value=bmi;
          if(bmi<=15){
              document.getElementById('message_bmi').innerHTML="<h3>very severely underweight</h3>";
                document.getElementById('message_bmi').style.color="#dc3545";
          }
          else if(bmi<=16){
              document.getElementById('message_bmi').innerHTML="<h3>severely underweight</h3>";
                document.getElementById('message_bmi').style.color="#dc3545";
          }
          else if(bmi<=18.5){
              document.getElementById('message_bmi').innerHTML="<h3>underweight</h3>";
                document.getElementById('message_bmi').style.color="#dc3545";
          }
          else if(bmi<=25){
              document.getElementById('message_bmi').innerHTML="<h3>normal (healthy weight)</h3>";
                document.getElementById('message_bmi').style.color="#28a745";
          }
          else if(bmi<=30){
              document.getElementById('message_bmi').innerHTML="<h3>overweight</h3>";
                document.getElementById('message_bmi').style.color="#dc3545";
          }
          else if(bmi<=35){
              document.getElementById('message_bmi').innerHTML="<h3>moderately obese</h3>";
                document.getElementById('message_bmi').style.color="#dc3545";
          }
          else if(bmi<=40){
              document.getElementById('message_bmi').innerHTML="<h3>severely obese</h3>";
                document.getElementById('message_bmi').style.color="#dc3545";
          }
          else{
            document.getElementById('message_bmi').innerHTML="<h3>very severely obese</h3>";
              document.getElementById('message_bmi').style.color="#dc3545";
          }
}
}

function resetbmi(){
  document.getElementById('mass').style.backgroundColor="#fff";
  document.getElementById('height').style.backgroundColor="#fff";
    document.getElementById('mass').value="";
    document.getElementById('height').value="";
    document.getElementById('mass').placeholder="Please Enter a Number";
    document.getElementById('height').placeholder="Please Enter a Number";
    document.getElementById('bmi_val').value="";
    document.getElementById('message_bmi').innerHTML="";
}
