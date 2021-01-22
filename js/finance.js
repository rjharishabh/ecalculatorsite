function simint(){
    var p=parseFloat(document.getElementById('si_p').value);
    var r=parseFloat(document.getElementById('si_r').value);
    var t=parseFloat(document.getElementById('si_t').value);

  if(p<=0){
           document.getElementById('si_p').style.backgroundColor="#97b17eeb";
       }
   if(r<=0){
              document.getElementById('si_r').style.backgroundColor="#97b17eeb";
       }
   if(t<=0){
              document.getElementById('si_t').style.backgroundColor="#97b17eeb";
       }


      if(isNaN(p)){
         document.getElementById('si_p').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(r)){
         document.getElementById('si_r').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(t)){
         document.getElementById('si_t').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(p) && !isNaN(r) && !isNaN(t) && p>0 && r>0 && t>0) {
          document.getElementById('si').value=(p*r*t*0.01).toFixed(2);
            document.getElementById('si_a').value=((0.01*p*r*t)+p).toFixed(2);
        }
}

function resetsimint(){
    document.getElementById('si_p').style.backgroundColor="#fff";
    document.getElementById('si_r').style.backgroundColor="#fff";
    document.getElementById('si_t').style.backgroundColor="#fff";
document.getElementById('si_p').value="";
document.getElementById('si_r').value="";
document.getElementById('si_t').value="";
document.getElementById('si_p').placeholder="Please Enter Value";
document.getElementById('si_r').placeholder="Please Enter Value";
document.getElementById('si_t').placeholder="Please Enter Value";
  document.getElementById('si').value="";
    document.getElementById('si_a').value="";
}

function compint(){
    var p=parseFloat(document.getElementById('ci_p').value);
    var r=parseFloat(document.getElementById('ci_r').value);
    var t=parseFloat(document.getElementById('ci_t').value);
    var n=parseFloat(document.getElementById('compd').value);
  if(p<=0){
           document.getElementById('ci_p').style.backgroundColor="#97b17eeb";
       }
   if(r<=0){
          document.getElementById('ci_r').style.backgroundColor="#97b17eeb";
       }
   if(t<=0){
              document.getElementById('ci_t').style.backgroundColor="#97b17eeb";
       }


      if(isNaN(p)){
         document.getElementById('ci_p').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(r)){
         document.getElementById('ci_r').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(t)){
         document.getElementById('ci_t').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(p) && !isNaN(r) && !isNaN(t) && p>0 && r>0 && t>0) {
          document.getElementById('ci_a').value=(p*Math.pow((1+(0.01*r/n)),n*t)).toFixed(2);
            document.getElementById('ci').value=(p*Math.pow((1+(0.01*r/n)),n*t)-p).toFixed(2);
        }
}

function resetcompint(){
          document.getElementById('ci_p').style.backgroundColor="#fff";
          document.getElementById('ci_r').style.backgroundColor="#fff";
          document.getElementById('ci_t').style.backgroundColor="#fff";
      document.getElementById('ci_p').value="";
      document.getElementById('ci_r').value="";
      document.getElementById('ci_t').value="";
      document.getElementById('ci_p').placeholder="Please Enter Value";
      document.getElementById('ci_r').placeholder="Please Enter Value";
      document.getElementById('ci_t').placeholder="Please Enter Value";
        document.getElementById('ci').value="";
          document.getElementById('ci_a').value="";
          document.getElementById('compd').value=1;
}

function disc(){
    var p=parseFloat(document.getElementById('op').value);
    var d=parseFloat(document.getElementById('dis').value);

  if(p<=0){
           document.getElementById('op').style.backgroundColor="#97b17eeb";
       }
   if(d<=0){
          document.getElementById('dis').style.backgroundColor="#97b17eeb";
       }

      if(isNaN(p)){
         document.getElementById('op').style.backgroundColor="#97b17eeb";
      }
      if(isNaN(d)){
         document.getElementById('dis').style.backgroundColor="#97b17eeb";
      }

     if (!isNaN(p) && !isNaN(d) && p>0 && d>0) {
          document.getElementById('yp').value=(p-0.01*d*p).toFixed(2);
            document.getElementById('yas').value=(0.01*d*p).toFixed(2);
        }
}

function resetdisc(){
          document.getElementById('op').style.backgroundColor="#fff";
          document.getElementById('dis').style.backgroundColor="#fff";
      document.getElementById('op').value="";
      document.getElementById('dis').value="";
      document.getElementById('op').placeholder="Please Enter Value";
      document.getElementById('dis').placeholder="Please Enter Value";
        document.getElementById('yp').value="";
          document.getElementById('yas').value="";
}
