

window.onload=document.querySelector('#input').focus();
document.querySelector('#input').addEventListener('blur',()=>{
  document.querySelector('#input').focus();
});

document.querySelector('#plus').addEventListener('click',()=>{
var input=document.querySelector('#input').value;
var half=document.querySelector('#half');
half.innerHTML=input+" +";





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
});

document.querySelector('#itf').addEventListener('click',()=>{
  if(document.querySelector('#itf').textContent==='ITF'){
  document.querySelector('#sin').innerHTML="Sin<sup>-1</sup>";
  document.querySelector('#cos').innerHTML="Cos<sup>-1</sup>";
  document.querySelector('#tan').innerHTML="Tan<sup>-1</sup>";
  document.querySelector('#cosec').innerHTML="Cosec<sup>-1</sup>";
  document.querySelector('#sec').innerHTML="Sec<sup>-1</sup>";
  document.querySelector('#cot').innerHTML="Cot<sup>-1</sup>";
  document.querySelector('#sin').style.fontSize="12px";
  document.querySelector('#cos').innerHTML="Cos<sup>-1</sup>";
  document.querySelector('#tan').innerHTML="Tan<sup>-1</sup>";
  document.querySelector('#cosec').innerHTML="Cosec<sup>-1</sup>";
  document.querySelector('#sec').innerHTML="Sec<sup>-1</sup>";
  document.querySelector('#cot').innerHTML="Cot<sup>-1</sup>";
  document.querySelector('#itf').textContent='TF';
  }
  else {
  document.querySelector('#sin').innerHTML="Sin";
  document.querySelector('#cos').innerHTML="Cos";
  document.querySelector('#tan').innerHTML="Tan";
  document.querySelector('#cosec').innerHTML="Cosec";
  document.querySelector('#sec').innerHTML="Sec";
  document.querySelector('#cot').innerHTML="Cot";
  document.querySelector('#itf').textContent='ITF';
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
});
document.querySelector('#nine').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"9";
});
document.querySelector('#eight').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"8";
});
document.querySelector('#seven').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"7";
});
document.querySelector('#six').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"6";
});
document.querySelector('#five').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"5";
});
document.querySelector('#four').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"4";
});
document.querySelector('#three').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"3";
});
document.querySelector('#two').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"2";
});
document.querySelector('#one').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"1";
});
document.querySelector('#decimal').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+".";
});
document.querySelector('#lbrac').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+"(";
});
document.querySelector('#rbrac').addEventListener('click',()=>{
  var str=document.querySelector('#input').value;
  document.querySelector('#input').value=str+")";
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
})
document.querySelector('#ln').addEventListener('click',()=>{
  var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="ln("+input+")";
  document.querySelector('#input').value=Math.log(input);
})
document.querySelector('#log2').addEventListener('click',()=>{
  var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="log<sub>2</sub>("+input+")";
  document.querySelector('#input').value=Math.log2(input);
})
document.querySelector('#log10').addEventListener('click',()=>{
  var input=document.querySelector('#input').value;
  document.querySelector('#half').innerHTML="log<sub>10</sub>("+input+")";
  document.querySelector('#input').value=Math.log10(input);
})
