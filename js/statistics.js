'use strict';
function stat() {
  const exp = /\s*(?:,|$)\s*/;
var  raw_data=document.getElementById('statdata').value.split(exp);
if(raw_data==''){
  document.getElementById('statdata').value="Please Enter Values";
    document.getElementById('statdata').style.backgroundColor="#97b17eeb";
}
else{
    var org_data=[];
  for (var i = 0; i < raw_data.length; i++) {
  org_data[i]=parseFloat(raw_data[i]);
  }
org_data.sort((a,b)=>a-b);
  document.getElementById('min-val').value=Math.min(...org_data);
    document.getElementById('max-val').value=Math.max(...org_data);
      document.getElementById('range').value=Math.max(...org_data)-Math.min(...org_data);
      document.getElementById('count').value=org_data.length;
document.getElementById('sum').value=sum(org_data);
  document.getElementById('mean').value=mean(org_data);
  document.getElementById('median').value=median(org_data);
    document.getElementById('mode').value=mode(org_data);
    document.getElementById('var').value=(variance(org_data)).toFixed(4);
      document.getElementById('std-dev').value=(std_dev(org_data)).toFixed(4);
}

}
function resetstat() {
    document.getElementById('statdata').value="";
  document.getElementById('statdata').placeholder="Please Enter Values";
    document.getElementById('statdata').style.backgroundColor="#fff";
    document.getElementById('min-val').value="";
      document.getElementById('max-val').value="";
        document.getElementById('range').value="";
        document.getElementById('count').value="";
  document.getElementById('sum').value="";
    document.getElementById('mean').value="";
    document.getElementById('median').value="";
      document.getElementById('mode').value="";
      document.getElementById('var').value="";
        document.getElementById('std-dev').value="";
}
function mr() {
  const exp = /\s*(?:,|$)\s*/;
var  raw_data=document.getElementById('statdata').value.split(exp);
if(raw_data==''){
  document.getElementById('statdata').value="Please Enter Values";
    document.getElementById('statdata').style.backgroundColor="#97b17eeb";
}
else{
    var org_data=[];
  for (var i = 0; i < raw_data.length; i++) {
  org_data[i]=parseFloat(raw_data[i]);
  }
org_data.sort((a,b)=>a-b);
      document.getElementById('range').value=Math.max(...org_data)-Math.min(...org_data);
  document.getElementById('mean').value=mean(org_data);
  document.getElementById('median').value=median(org_data);
    document.getElementById('mode').value=mode(org_data);

}

}
function resetmr() {
    document.getElementById('statdata').value="";
  document.getElementById('statdata').placeholder="Please Enter Values";
    document.getElementById('statdata').style.backgroundColor="#fff";
        document.getElementById('range').value="";
    document.getElementById('mean').value="";
    document.getElementById('median').value="";
      document.getElementById('mode').value="";
}
function varce() {
  const exp = /\s*(?:,|$)\s*/;
var  raw_data=document.getElementById('vdata').value.split(exp);
if(raw_data==''){
  document.getElementById('vdata').value="Please Enter Values";
    document.getElementById('vdata').style.backgroundColor="#97b17eeb";
}
else{
    var org_data=[];
  for (var i = 0; i < raw_data.length; i++) {
  org_data[i]=parseFloat(raw_data[i]);
  }
org_data.sort((a,b)=>a-b);
  document.getElementById('variance').value=variance(org_data);
}

}
function resetvarce() {
    document.getElementById('vdata').value="";
  document.getElementById('vdata').placeholder="Please Enter Values";
    document.getElementById('vdata').style.backgroundColor="#fff";
        document.getElementById('variance').value="";
}
function stddev() {
  const exp = /\s*(?:,|$)\s*/;
var  raw_data=document.getElementById('sddata').value.split(exp);
if(raw_data==''){
  document.getElementById('sddata').value="Please Enter Values";
    document.getElementById('sddata').style.backgroundColor="#97b17eeb";
}
else{
    var org_data=[];
  for (var i = 0; i < raw_data.length; i++) {
  org_data[i]=parseFloat(raw_data[i]);
  }
org_data.sort((a,b)=>a-b);
  document.getElementById('std-dev').value=std_dev(org_data);
}

}
function resetstddev() {
    document.getElementById('sddata').value="";
  document.getElementById('sddata').placeholder="Please Enter Values";
    document.getElementById('sddata').style.backgroundColor="#fff";
        document.getElementById('std-dev').value="";
}
function cvar() {
  const exp = /\s*(?:,|$)\s*/;
var  raw_data=document.getElementById('cvdata').value.split(exp);
if(raw_data==''){
  document.getElementById('cvdata').value="Please Enter Values";
    document.getElementById('cvdata').style.backgroundColor="#97b17eeb";
}
else{
    var org_data=[];
  for (var i = 0; i < raw_data.length; i++) {
  org_data[i]=parseFloat(raw_data[i]);
  }
org_data.sort((a,b)=>a-b);
  document.getElementById('cv').value=std_dev(org_data)/mean(org_data);
}

}
function resetcvar() {
    document.getElementById('cvdata').value="";
  document.getElementById('cvdata').placeholder="Please Enter Values";
    document.getElementById('cvdata').style.backgroundColor="#fff";
        document.getElementById('cv').value="";
}
function sum(data){
  var sum=0;
for (var i = 0; i < data.length; i++)
  sum+=data[i];
  return sum;
}
function mean(data) {
return sum(data)/data.length;
}
function median(data) {
  if(data.length%2!==0){
var med=parseInt(data.length/2);
return data[med];
  }
  else {
var med2=data.length/2;
var med1=med2-1;
return (data[med1]+data[med2])/2;
  }
}

function mode(data) {
  var obj={};
  for (var i = 0; i < data.length; i++) {
  var num=data[i];
  obj[num]=obj[num]?obj[num]+1:1;
  }

var arr=Object.values(obj);
var maxapp;
var maxval=Math.max(...arr);
    maxapp= Object.keys(obj).find((key) => obj[key] === maxval);
return maxapp;
}
function variance(data) {
var m=mean(data);
var arr=[];
for (var i = 0; i < data.length; i++) {
  arr[i]=Math.pow((data[i]-m),2);
}
return (sum(arr)/arr.length);
}
function std_dev(data) {
  return Math.sqrt(variance(data));
}
