function elc(){
    var el=parseFloat(document.getElementById('el-c').value);
    if(!isNaN(el)){
      var vol=Math.pow(el,3);
        document.getElementById('vol-c').value = vol;
      var tsa=6*Math.pow(el,2);
        document.getElementById('tsa-c').value = tsa;
      var lsa=4*Math.pow(el,2);
        document.getElementById('lsa-c').value = lsa;
      var lod=Math.sqrt(3)*el;
        document.getElementById('lod-c').value = lod;
    }
  }


  function volc(){
    var vol=parseFloat(document.getElementById('vol-c').value);

    if(!isNaN(vol)){
    var el=Math.cbrt(vol);
      document.getElementById('el-c').value = el;
    var tsa=6*Math.pow(el,2);
      document.getElementById('tsa-c').value = tsa;
    var lsa=4*Math.pow(el,2);
      document.getElementById('lsa-c').value = lsa;
    var lod=Math.sqrt(3)*el;
      document.getElementById('lod-c').value = lod;
    }
  }

  function tsac(){
    var tsa=parseFloat(document.getElementById('tsa-c').value);
    if(!isNaN(tsa)){
      var el=Math.sqrt(tsa/6);
        document.getElementById('el-c').value = el;
        var vol=Math.pow(el,3);
          document.getElementById('vol-c').value = vol;
      var lsa=4*Math.pow(el,2);
        document.getElementById('lsa-c').value = lsa;
      var lod=Math.sqrt(3)*el;
        document.getElementById('lod-c').value = lod;
    }
  }

  function lsac(){
    var lsa=parseFloat(document.getElementById('lsa-c').value);
    if(!isNaN(lsa)){
      var el=Math.sqrt(lsa/4);
        document.getElementById('el-c').value = el;
        var vol=Math.pow(el,3);
          document.getElementById('vol-c').value = vol;
      var tsa=6*Math.pow(el,2);
        document.getElementById('tsa-c').value = tsa;
      var lod=Math.sqrt(3)*el;
        document.getElementById('lod-c').value = lod;
    }
  }

  function lodc(){
    var lod=parseFloat(document.getElementById('lod-c').value);
    if(!isNaN(lod)){
      var el=lod/(Math.sqrt(3));
        document.getElementById('el-c').value = el;
        var vol=Math.pow(el,3);
          document.getElementById('vol-c').value = vol;
      var tsa=6*Math.pow(el,2);
        document.getElementById('tsa-c').value = tsa;
        var lsa=4*Math.pow(el,2);
          document.getElementById('lsa-c').value = lsa;
    }
  }


function reset(){
  document.getElementById('el-c').value = "";
    document.getElementById('vol-c').value = "";
      document.getElementById('tsa-c').value = "";
        document.getElementById('lsa-c').value = "";
          document.getElementById('lod-c').value = "";
}
