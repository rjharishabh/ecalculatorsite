'use strict';
function stat() {
  var org_data=[];
  const exp = /\s*(?:,|$)\s*/;
var  raw_data=document.getElementById('statdata').value.split(exp);
console.log(raw_data);
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


  console.log(obj);
}
