document.querySelector('input').addEventListener('keyup',()=>{
    document.getElementById('half').innerHTML=document.getElementById('input').value;
});

window.onload=document.querySelector('#input').focus();


document.querySelector('#plus').addEventListener('click',plus);
function plus() {
  var input=document.querySelector('#input').value;
  if(input[input.length-1]!=='+'){
    document.querySelector('#input').value=input+"+";
     document.getElementById('half').innerHTML=document.getElementById('input').value;
  }
}

document.querySelector('#sub').addEventListener('click',sub);
function sub() {
  var input=document.querySelector('#input').value;
  if(input[input.length-1]!=='-'){
    document.querySelector('#input').value=input+"-";
     document.getElementById('half').innerHTML=document.getElementById('input').value;
  }
}
document.querySelector('#mult').addEventListener('click',mult);
function mult() {
  var input=document.querySelector('#input').value;
  if(input[input.length-1]!=='*'){
    document.querySelector('#input').value=input+"*";
     document.getElementById('half').innerHTML=document.getElementById('input').value;
  }
}
function div() {
  var input=document.querySelector('#input').value;
  if(input[input.length-1]!=='/'){
    document.querySelector('#input').value=input+"/";
     document.getElementById('half').innerHTML=document.getElementById('input').value;
  }
}
document.querySelector('#div').addEventListener('click',div);
document.addEventListener('keyup',()=>{
  if(event.keyCode===13){
    try {
      var input=document.querySelector('#input').value;
      document.getElementById('input').value=math.evaluate(input);
    } catch (e) {
      document.querySelector('#input').value='';
      document.querySelector('#input').placeholder="Error";
    }
  }
});
document.querySelector('#equal').addEventListener('click',()=>{
  try {
    var input=document.querySelector('#input').value;
    document.getElementById('input').value=math.evaluate(input);
  } catch (e) {
    document.querySelector('#input').value='';
    document.querySelector('#input').placeholder="Error";
  }
});
document.querySelector('#C').addEventListener('click',()=>{
document.querySelector('#input').value="";
});
document.querySelector('#AC').addEventListener('click',()=>{
document.querySelector('#input').value="";
document.querySelector('#half').innerHTML="";
});

document.querySelector('#per').addEventListener('click',()=>{
var input=document.querySelector('#input').value;
document.querySelector('#half').innerHTML=input+"%";
var per=input/100;
document.querySelector('#input').value=per;
});

document.querySelector('#bs').addEventListener('click',()=>{
var input=document.querySelector('#input').value;
document.querySelector('#input').value=input.substring(0,input.length-1);
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});

document.querySelector('#itf').addEventListener('click',()=>{
  if(document.querySelector('#itf').textContent==='ITF'){
  document.querySelector('#sin').innerHTML="Sin<sup>-1</sup>";
  document.querySelector('#cos').innerHTML="Cos<sup>-1</sup>";
  document.querySelector('#tan').innerHTML="Tan<sup>-1</sup>";
  document.querySelector('#cosec').innerHTML="Csc<sup>-1</sup>";
  document.querySelector('#sec').innerHTML="Sec<sup>-1</sup>";
  document.querySelector('#cot').innerHTML="Cot<sup>-1</sup>";
  document.querySelector('#itf').textContent='TF';
  if(window.innerWidth<700){
    document.querySelector('#cosec').style.fontSize="14px";
      document.querySelector('#sec').style.fontSize="14px";
      document.querySelector('#cot').style.fontSize="14px";
        document.querySelector('#sin').style.fontSize="14px";
        document.querySelector('#cos').style.fontSize="14px";
          document.querySelector('#tan').style.fontSize="14px";
  }
  else {
    document.querySelector('#cosec').style.fontSize="20px";
      document.querySelector('#sec').style.fontSize="20px";
      document.querySelector('#cot').style.fontSize="20px";
        document.querySelector('#sin').style.fontSize="20px";
        document.querySelector('#cos').style.fontSize="20px";
          document.querySelector('#tan').style.fontSize="20px";
  }
  }
  else {
  document.querySelector('#sin').innerHTML="Sin";
  document.querySelector('#cos').innerHTML="Cos";
  document.querySelector('#tan').innerHTML="Tan";
  document.querySelector('#cosec').innerHTML="Cosec";
  document.querySelector('#sec').innerHTML="Sec";
  document.querySelector('#cot').innerHTML="Cot";
  document.querySelector('#itf').textContent='ITF';
  if(window.innerWidth<700){
    document.querySelector('#cosec').style.fontSize="16px";
      document.querySelector('#sec').style.fontSize="16px";
      document.querySelector('#cot').style.fontSize="16px";
        document.querySelector('#sin').style.fontSize="16px";
        document.querySelector('#cos').style.fontSize="16px";
          document.querySelector('#tan').style.fontSize="16px";
  }
  else {
    document.querySelector('#cosec').style.fontSize="22px";
      document.querySelector('#sec').style.fontSize="22px";
      document.querySelector('#cot').style.fontSize="22px";
        document.querySelector('#sin').style.fontSize="22px";
        document.querySelector('#cos').style.fontSize="22px";
          document.querySelector('#tan').style.fontSize="22px";
  }
  }
});

document.querySelector('#deg').addEventListener('click',()=>{
  if(document.querySelector('#deg').textContent==="DEG")
  document.querySelector('#deg').textContent="RAD";
  else
    document.querySelector('#deg').textContent="DEG";
});
document.querySelector('#reci').addEventListener('click',()=>{
  if(document.querySelector('#input').value!==""){
    var input=document.querySelector('#input').value;
    document.querySelector('#half').innerHTML="1/"+input;
    var result=1/input;
    document.querySelector('#input').value=result;
  }
});
document.querySelector('#zero').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"0";
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#nine').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"9";
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#eight').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"8";
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#seven').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"7";
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#six').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"6";
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#five').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"5";
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#four').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"4";
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#three').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"3";
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#two').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"2";
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#one').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"1";
  document.getElementById('half').innerHTML=document.getElementById('input').value;
});
function decimal() {
  var str=document.querySelector('#input').value;
  if(str[str.length-1]!=='.'){
    document.querySelector('#input').value=str+".";
    document.getElementById('half').innerHTML=document.getElementById('input').value;
  }
}
document.querySelector('#decimal').addEventListener('click',decimal);
document.querySelector('#lbrac').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"(";
    document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#rbrac').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+")";
    document.getElementById('half').innerHTML=document.getElementById('input').value;
});
document.querySelector('#fact').addEventListener('click',()=>{
var input=document.querySelector('#input').value;
if(input===0){
  document.querySelector('#half').innerHTML=input+"!";
  document.querySelector('#input').value=1;
}
else if(input>0){
  document.querySelector('#half').innerHTML=input+"!";
  document.querySelector('#input').value=math.factorial(input);
}
});
document.querySelector('#sqrt').addEventListener('click',()=>{
  var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="&#8730;"+input;
  document.querySelector('#input').value=math.sqrt(input).toString();
});
document.querySelector('#ln').addEventListener('click',()=>{
  var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="ln("+input+")";
  document.querySelector('#input').value=Math.log(input);
});
document.querySelector('#log2').addEventListener('click',()=>{
  var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="log<sub>2</sub>("+input+")";
  document.querySelector('#input').value=Math.log2(input);
});
document.querySelector('#log10').addEventListener('click',()=>{
  var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="log<sub>10</sub>("+input+")";
  document.querySelector('#input').value=Math.log10(input);
});
document.querySelector('#e').addEventListener('click',()=>{
  document.querySelector('#half').innerHTML="e";
  document.querySelector('#input').value=Math.E;
});
document.querySelector('#epowx').addEventListener('click',()=>{
  var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="e<sup>"+input+"</sup>";
  document.querySelector('#input').value=Math.exp(input);
});
document.querySelector('#epow-x').addEventListener('click',()=>{
  var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="e<sup>"+-input+"</sup>";
  document.querySelector('#input').value=Math.exp(-input);
});
document.querySelector('#pi').addEventListener('click',()=>{
  document.querySelector('#half').innerHTML="&Pi;";
  document.querySelector('#input').value=Math.PI;
});
document.querySelector('#rnd').addEventListener('click',()=>{
  document.querySelector('#half').innerHTML=Math.random()*(10000);
  document.querySelector('#input').value=parseInt(Math.random()*(10000));
});
var input1,input2;
document.querySelector('#mod').addEventListener('click',()=>{
  if(document.querySelector('#mod').textContent==="mod"){
     input1=parseFloat(document.querySelector('#input').value);
    document.querySelector('#half').innerHTML=input1+" mod";
    document.querySelector('#input').value="";
    document.querySelector('#mod').textContent="Cal";
  }
else{
   input2=parseFloat(document.querySelector('#input').value);
      document.querySelector('#half').innerHTML=input1+" mod "+input2;
        document.querySelector('#input').value=input1%input2;
       document.querySelector('#mod').textContent="mod";
}
});
document.querySelector('#pipowx').addEventListener('click',()=>{
    var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="&Pi;<sup>"+input+"</sup>";
  document.querySelector('#input').value=Math.pow(Math.PI,input);
});
document.querySelector('#tenpowx').addEventListener('click',()=>{
    var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="10<sup>"+input+"</sup>";
  document.querySelector('#input').value=Math.pow(10,input);
});
document.querySelector('#square').addEventListener('click',()=>{
    var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML=input+"<sup>2</sup>";
  document.querySelector('#input').value=Math.pow(input,2);
});
document.querySelector('#cube').addEventListener('click',()=>{
    var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML=input+"<sup>3</sup>";
  document.querySelector('#input').value=Math.pow(input,3);
});
var input3,input4;
document.querySelector('#xpowy').addEventListener('click',()=>{
  if(document.querySelector('#xpowy').textContent==="xy"){
     input3=parseFloat(document.querySelector('#input').value);
    document.querySelector('#half').innerHTML=input3+"^";
    document.querySelector('#input').value="";
    document.querySelector('#xpowy').textContent="Cal";
  }
else{
      input4=parseFloat(document.querySelector('#input').value);
        document.getElementById('half').innerHTML=input3+"<sup>"+document.getElementById('input').value+"</sup>";
        document.querySelector('#input').value=Math.pow(input3,input4);
       document.querySelector('#xpowy').innerHTML="x<sup>y</sup>";
}
});
function radtodeg(rad) {
  return (180*rad)/Math.PI;
}
function degtorad(deg) {
  return (deg*Math.PI)/180;
}
document.querySelector('#sin').addEventListener('click',()=>{
    var input=document.querySelector('#input').value;
    if(document.querySelector('#itf').textContent==="ITF"){
      if(document.querySelector('#deg').textContent==="DEG"){
        var rad=degtorad(input);
      document.querySelector('#half').innerHTML="Sin("+input+"&deg;)";
      document.querySelector('#input').value=Math.sin(rad).toFixed(4);
      }
      else {
        document.querySelector('#half').innerHTML="Sin("+input+")";
        document.querySelector('#input').value=Math.sin(input).toFixed(4);
      }
    }
    else{
      if(document.querySelector('#deg').textContent==="DEG"){
      document.querySelector('#half').innerHTML="Sin<sup>-1</sup>("+input+")";
        var rad=Math.asin(input);
      document.querySelector('#input').value=radtodeg(rad);
      }
      else {
        document.querySelector('#half').innerHTML="Sin<sup>-1</sup>("+input+")";
        document.querySelector('#input').value=Math.asin(input).toFixed(4);
      }
    }
});
document.querySelector('#cos').addEventListener('click',()=>{
    var input=document.querySelector('#input').value;
    if(document.querySelector('#itf').textContent==="ITF"){
      if(document.querySelector('#deg').textContent==="DEG"){
        var rad=degtorad(input);
      document.querySelector('#half').innerHTML="Cos("+input+"&deg;)";
      document.querySelector('#input').value=Math.cos(rad).toFixed(4);
      }
      else {
        document.querySelector('#half').innerHTML="Cos("+input+")";
        document.querySelector('#input').value=Math.cos(input).toFixed(4);
      }
    }
    else{
      if(document.querySelector('#deg').textContent==="DEG"){
      document.querySelector('#half').innerHTML="Cos<sup>-1</sup>("+input+")";
        var rad=Math.acos(input);
      document.querySelector('#input').value=radtodeg(rad);
      }
      else {
        document.querySelector('#half').innerHTML="Cos<sup>-1</sup>("+input+")";
        document.querySelector('#input').value=Math.acos(input).toFixed(4);
      }
    }
});
document.querySelector('#tan').addEventListener('click',()=>{
    var input=document.querySelector('#input').value;
    if(document.querySelector('#itf').textContent==="ITF"){
      if(document.querySelector('#deg').textContent==="DEG"){
        var rad=degtorad(input);
      document.querySelector('#half').innerHTML="Tan("+input+"&deg;)";
      document.querySelector('#input').value=Math.tan(rad).toFixed(4);
      }
      else {
        document.querySelector('#half').innerHTML="Cos("+input+")";
        document.querySelector('#input').value=Math.tan(input).toFixed(4);
      }
    }
    else{
      if(document.querySelector('#deg').textContent==="DEG"){
      document.querySelector('#half').innerHTML="Cos<sup>-1</sup>("+input+")";
        var rad=Math.atan(input);
      document.querySelector('#input').value=radtodeg(rad);
      }
      else {
        document.querySelector('#half').innerHTML="Cos<sup>-1</sup>("+input+")";
        document.querySelector('#input').value=Math.atan(input).toFixed(4);
      }
    }
});
document.querySelector('#cosec').addEventListener('click',()=>{
    var input=document.querySelector('#input').value;
    if(document.querySelector('#itf').textContent==="ITF"){
      if(document.querySelector('#deg').textContent==="DEG"){
        var rad=degtorad(input);
      document.querySelector('#half').innerHTML="Cosec("+input+"&deg;)";
      document.querySelector('#input').value=(1/Math.sin(rad)).toFixed(4);
      }
      else {
        document.querySelector('#half').innerHTML="Cosec("+input+")";
        document.querySelector('#input').value=(1/Math.sin(rad)).toFixed(4);
      }
    }
    else{
      if(document.querySelector('#deg').textContent==="DEG"){
      document.querySelector('#half').innerHTML="Cosec<sup>-1</sup>("+input+")";
        var rad=Math.asin(1/input);
      document.querySelector('#input').value=radtodeg(rad);
      }
      else {
        document.querySelector('#half').innerHTML="Cosec<sup>-1</sup>("+input+")";
        document.querySelector('#input').value=Math.asin(1/input).toFixed(4);
      }
    }
});
document.querySelector('#sec').addEventListener('click',()=>{
    var input=document.querySelector('#input').value;
    if(document.querySelector('#itf').textContent==="ITF"){
      if(document.querySelector('#deg').textContent==="DEG"){
        var rad=degtorad(input);
      document.querySelector('#half').innerHTML="Sec("+input+"&deg;)";
      document.querySelector('#input').value=(1/Math.cos(rad)).toFixed(4);
      }
      else {
        document.querySelector('#half').innerHTML="Sec("+input+")";
        document.querySelector('#input').value=(1/Math.cos(rad)).toFixed(4);
      }
    }
    else{
      if(document.querySelector('#deg').textContent==="DEG"){
      document.querySelector('#half').innerHTML="Sec<sup>-1</sup>("+input+")";
        var rad=Math.acos(1/input);
      document.querySelector('#input').value=radtodeg(rad);
      }
      else {
        document.querySelector('#half').innerHTML="Sec<sup>-1</sup>("+input+")";
        document.querySelector('#input').value=Math.acos(1/input).toFixed(4);
      }
    }
});
document.querySelector('#cot').addEventListener('click',()=>{
    var input=document.querySelector('#input').value;
    if(document.querySelector('#itf').textContent==="ITF"){
      if(document.querySelector('#deg').textContent==="DEG"){
        var rad=degtorad(input);
      document.querySelector('#half').innerHTML="Cot("+input+"&deg;)";
      document.querySelector('#input').value=(1/Math.tan(rad)).toFixed(4);
      }
      else {
        document.querySelector('#half').innerHTML="Cot("+input+")";
        document.querySelector('#input').value=(1/Math.tan(rad)).toFixed(4);
      }
    }
    else{
      if(document.querySelector('#deg').textContent==="DEG"){
      document.querySelector('#half').innerHTML="Cot<sup>-1</sup>("+input+")";
        var rad=Math.atan(1/input);
      document.querySelector('#input').value=radtodeg(rad);
      }
      else {
        document.querySelector('#half').innerHTML="Cot<sup>-1</sup>("+input+")";
        document.querySelector('#input').value=Math.atan(1/input).toFixed(4);
      }
    }
});
