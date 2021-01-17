function diff(){
  let input=document.getElementById('diff_data').value;
    let wrt=document.getElementById('wrt').value;
if (!(input==="")) {
  try {
      let result=math.derivative(input,wrt).toString();
    document.getElementById('diff_label').innerHTML="Derivative of  "+input;
    document.getElementById('diff_result').innerHTML="= "+result;
  } catch (e) {
    document.getElementById('diff_label').innerHTML="ERROR";
  }
  }
}

function resetdiff(){
  document.getElementById('diff_data').value="";
    document.getElementById('diff_data').placeholder="please enter!";
  document.getElementById('diff_label').innerHTML="";
  document.getElementById('diff_result').innerHTML="";
}

document.querySelector('#showex').addEventListener('click',function () {
  if(document.querySelector('#showex').textContent==="show examples"){
    document.querySelector('.diff-btn').style.display="block";
    document.querySelector('#showex').textContent="hide examples";
  }
  else{
    document.querySelector('#showex').textContent="show examples";
    document.querySelector('.diff-btn').style.display="none";
  }
})

let btn=document.querySelectorAll('.diff-btn button');
btn.forEach(item => {
  item.addEventListener('click',()=>{
      document.querySelector('#diff_data').value=item.textContent;
  });
});
