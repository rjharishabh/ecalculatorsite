function centroid(){
    let x1=parseFloat(document.getElementById('cx1').value);
    let x2=parseFloat(document.getElementById('cx2').value);
    let x3=parseFloat(document.getElementById('cx3').value);
    let y1=parseFloat(document.getElementById('cy1').value);
    let y2=parseFloat(document.getElementById('cy2').value);
    let y3=parseFloat(document.getElementById('cy3').value);
     if (!isNaN(x1) && !isNaN(x2)&&!isNaN(x3) && !isNaN(y1)&&!isNaN(y2) && !isNaN(y3)) {
          document.getElementById('cx').value=((x1+x2+x3)/3).toFixed(2);
            document.getElementById('cy').value=((y1+y2+y3)/3).toFixed(2);
        }
}

function resetcentroid(){
document.querySelector('#cx1').value="";
document.querySelector('#cy1').value="";
document.querySelector('#cx2').value="";
document.querySelector('#cy2').value="";
document.querySelector('#cx3').value="";
document.querySelector('#cy3').value="";
document.querySelector('#cx').value="";
document.querySelector('#cy').value="";
}

function hypot(){
  let a=parseFloat(document.getElementById('leg1').value);
  let b=parseFloat(document.getElementById('leg2').value);
  if(a<=0){
          document.getElementById('leg1').value="Only positive numbers";
           document.getElementById('leg1').style.backgroundColor="#97b17eeb";
       }
  if(b<=0){
          document.getElementById('leg2').value="Only positive numbers";
              document.getElementById('leg2').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(a)){
        document.getElementById('leg1').value="Only positive numbers";
         document.getElementById('leg1').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
        document.getElementById('leg2').value="Only positive numbers";
            document.getElementById('leg2').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(a) && !isNaN(b) && a>0 && b>0) {
          document.getElementById('lhypo').value=Math.hypot(a,b).toFixed(6);
        }
}

function resethypot(){
  document.getElementById('leg1').style.backgroundColor="#fff";
  document.getElementById('leg2').style.backgroundColor="#fff";
  document.getElementById('leg1').value="";
  document.getElementById('leg2').value="";
  document.getElementById('leg1').placeholder="Please Enter Value";
  document.getElementById('leg2').placeholder="Please Enter Value";
  document.getElementById('lhypo').value="";
}

function leg(){
  let a=parseFloat(document.getElementById('lleg1').value);
  let b=parseFloat(document.getElementById('lhypot').value);
  if(a<=0){
          document.getElementById('lleg1').value="Only positive numbers";
           document.getElementById('lleg1').style.backgroundColor="#97b17eeb";
       }
  if(b<=0){
          document.getElementById('lhypot').value="Only positive numbers";
              document.getElementById('lhypot').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(a)){
        document.getElementById('lleg1').value="Only positive numbers";
         document.getElementById('lleg1').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
        document.getElementById('lhypot').value="Only positive numbers";
            document.getElementById('lhypot').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(a) && !isNaN(b) && a>0 && b>a) {
          document.getElementById('lleg2').value=(Math.sqrt(Math.pow(b,2)-Math.pow(a,2))).toFixed(6);
        }
}

function resetleg(){
  document.getElementById('lleg1').style.backgroundColor="#fff";
  document.getElementById('lhypot').style.backgroundColor="#fff";
  document.getElementById('lleg1').value="";
  document.getElementById('lhypot').value="";
  document.getElementById('lhypot').placeholder="Please Enter Value";
  document.getElementById('lleg1').placeholder="Please Enter Value";
  document.getElementById('lleg2').value="";
}

function rt(){
  let h=parseFloat(document.getElementById('height').value);
  let b=parseFloat(document.getElementById('base').value);
  if(h<=0){
          document.getElementById('height').value="Only positive numbers";
          document.getElementById('height').style.backgroundColor="#97b17eeb";
       }
  if(b<=0){
          document.getElementById('base').value="Only positive numbers";
          document.getElementById('base').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(h)){
        document.getElementById('height').value="Only positive numbers";
        document.getElementById('height').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(b)){
        document.getElementById('base').value="Only positive numbers";
        document.getElementById('base').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(h) && !isNaN(b) && h>0 && b>0) {
       let hypo=(Math.hypot(h,b)).toFixed(4);
       let sp=((h+b+parseFloat(hypo))/2).toFixed(4);
       let area=(0.5*b*h).toFixed(4);
       let inr=(area/sp).toFixed(4);
       let ccr=(hypo/2).toFixed(4);
          document.getElementById('hypotenuse').value=hypo;
          document.getElementById('sp').value=sp;
          document.getElementById('inr').value=inr;
          document.getElementById('ccr').value=ccr;
          document.getElementById('area').value=area;
        }
}

function resetrt(){
  document.getElementById('base').style.backgroundColor="#fff";
  document.getElementById('height').style.backgroundColor="#fff";
  document.getElementById('base').value="";
  document.getElementById('height').value="";
  document.getElementById('base').placeholder="Please Enter Value";
  document.getElementById('height').placeholder="Please Enter Value";
  document.getElementById('hypotenuse').value="";
  document.getElementById('sp').value="";
  document.getElementById('inr').value="";
  document.getElementById('ccr').value="";
  document.getElementById('area').value="";
}
