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
