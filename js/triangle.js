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
          document.getElementById('p').value=(2*sp).toFixed(4);
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
  document.getElementById('p').value="";
  document.getElementById('sp').value="";
  document.getElementById('inr').value="";
  document.getElementById('ccr').value="";
  document.getElementById('area').value="";
}

function st(){
  let a=parseFloat(document.getElementById('sla').value);
  let b=parseFloat(document.getElementById('slb').value);
  let c=parseFloat(document.getElementById('slc').value);
  if(a<=0){
          document.getElementById('sla').value="Only positive numbers";
          document.getElementById('sla').style.backgroundColor="#97b17eeb";
       }
  if(b<=0){
          document.getElementById('slb').value="Only positive numbers";
          document.getElementById('slb').style.backgroundColor="#97b17eeb";
       }
  if(c<=0){
               document.getElementById('slc').value="Only positive numbers";
               document.getElementById('slc').style.backgroundColor="#97b17eeb";
       }
       if(isNaN(a)){
               document.getElementById('sla').value="Only positive numbers";
               document.getElementById('sla').style.backgroundColor="#97b17eeb";
            }
       if(isNaN(b)){
               document.getElementById('slb').value="Only positive numbers";
               document.getElementById('slb').style.backgroundColor="#97b17eeb";
            }
       if(isNaN(c)){
                    document.getElementById('slc').value="Only positive numbers";
                    document.getElementById('slc').style.backgroundColor="#97b17eeb";
            }

     if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a>0 && b>0 && c>0) {
       let sp=((a+b+c)/2).toFixed(4);
       let area=(Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c))).toFixed(4);
       let inr=(area/sp).toFixed(4);
       let ccr=((a*b*c)/(4*area)).toFixed(4);
          document.getElementById('p').value=(2*sp).toFixed(4);
          document.getElementById('sp').value=sp;
          document.getElementById('inr').value=inr;
          document.getElementById('ccr').value=ccr;
          document.getElementById('area').value=area;
        }
}

function resetst(){
  document.getElementById('sla').style.backgroundColor="#fff";
  document.getElementById('slb').style.backgroundColor="#fff";
  document.getElementById('slc').style.backgroundColor="#fff";
  document.getElementById('sla').value="";
  document.getElementById('slb').value="";
  document.getElementById('slc').value="";
  document.getElementById('sla').placeholder="Please Enter Value";
  document.getElementById('slb').placeholder="Please Enter Value";
  document.getElementById('slc').placeholder="Please Enter Value";
  document.getElementById('p').value="";
  document.getElementById('sp').value="";
  document.getElementById('inr').value="";
  document.getElementById('ccr').value="";
  document.getElementById('area').value="";
}

function it(){
  let a=parseFloat(document.getElementById('ita').value);
  let b=parseFloat(document.getElementById('itb').value);
  if(a<=0){
          document.getElementById('ita').value="Only positive numbers";
          document.getElementById('ita').style.backgroundColor="#97b17eeb";
       }
  if(b<=0){
          document.getElementById('itb').value="Only positive numbers";
          document.getElementById('itb').style.backgroundColor="#97b17eeb";
       }
       if(isNaN(a)){
               document.getElementById('ita').value="Only positive numbers";
               document.getElementById('ita').style.backgroundColor="#97b17eeb";
            }
       if(isNaN(b)){
               document.getElementById('itb').value="Only positive numbers";
               document.getElementById('itb').style.backgroundColor="#97b17eeb";
            }

     if (!isNaN(a) && !isNaN(b) && a>0 && b>0) {
       let sp=((a+b+a)/2).toFixed(4);
       let area=(0.25*b*Math.sqrt(4*Math.pow(a,2)-Math.pow(b,2))).toFixed(4);
       let inr=(area/sp).toFixed(4);
       let ccr=((a*b*a)/(4*area)).toFixed(4);
          document.getElementById('p').value=(2*sp).toFixed(4);
          document.getElementById('sp').value=sp;
          document.getElementById('inr').value=inr;
          document.getElementById('ccr').value=ccr;
          document.getElementById('area').value=area;
        }
}

function resetit(){
  document.getElementById('ita').style.backgroundColor="#fff";
  document.getElementById('itb').style.backgroundColor="#fff";
  document.getElementById('ita').value="";
  document.getElementById('itb').value="";
  document.getElementById('ita').placeholder="Please Enter Value";
  document.getElementById('itb').placeholder="Please Enter Value";
  document.getElementById('p').value="";
  document.getElementById('sp').value="";
  document.getElementById('inr').value="";
  document.getElementById('ccr').value="";
  document.getElementById('area').value="";
}
function et(){
  let a=parseFloat(document.getElementById('side').value);
  if(a<=0){
          document.getElementById('side').value="Only positive numbers";
          document.getElementById('side').style.backgroundColor="#97b17eeb";
       }
       if(isNaN(a)){
               document.getElementById('side').value="Only positive numbers";
               document.getElementById('side').style.backgroundColor="#97b17eeb";
       }

     if (!isNaN(a) && a>0) {
       let p=(3*a).toFixed(4);
       let area=(0.25*Math.sqrt(3)*a*a).toFixed(4);
       let ccr=(a/Math.sqrt(3)).toFixed(4);
       let inr=(ccr/2).toFixed(4);
       let alt=(0.5*Math.sqrt(3)*a).toFixed(4);
          document.getElementById('p').value=p;
          document.getElementById('alt').value=alt;
          document.getElementById('inr').value=inr;
          document.getElementById('ccr').value=ccr;
          document.getElementById('area').value=area;
        }
}

function resetet(){
  document.getElementById('side').style.backgroundColor="#fff";
  document.getElementById('side').value="";
  document.getElementById('side').placeholder="Please Enter Value";
  document.getElementById('p').value="";
  document.getElementById('alt').value="";
  document.getElementById('inr').value="";
  document.getElementById('ccr').value="";
  document.getElementById('area').value="";
}
