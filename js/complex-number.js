const a=document.querySelectorAll('.complex-btn-a button');
a.forEach((item) => {
  item.addEventListener('click',()=>{
      document.querySelector('#a').value=item.textContent;
  })
});
const b=document.querySelectorAll('.complex-btn-b button');
b.forEach((item) => {
  item.addEventListener('click',()=>{
      document.querySelector('#b').value=item.textContent;
  })
});
document.querySelector('.comp-a-reset').addEventListener('click',function () {
  document.querySelector('#a').value="";
  document.querySelector('#a').placeholder="please enter!";
});
document.querySelector('.comp-b-reset').addEventListener('click',function () {
  document.querySelector('#b').value="";
  document.querySelector('#b').placeholder="please enter!";
});
document.querySelector('.comp-clear').addEventListener('click',function () {
  document.querySelector('#label').innerHTML="";
  document.querySelector('#ans').innerHTML="";
});
document.querySelector('#aplusb').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let b=math.complex(document.querySelector('#b').value);
    let sum=math.round(math.add(a,b),4);
    document.querySelector('#label').innerHTML="A + B = "+"("+a+')'+ " + "+"("+b+")";
    document.querySelector('#ans').innerHTML="= "+sum;
  } catch (e) {
  document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#amultb').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let b=math.complex(document.querySelector('#b').value);
    let prod=math.round(math.multiply(a,b),4);
    document.querySelector('#label').innerHTML="A * B = "+"("+a+')'+ " * "+"("+b+")";
    document.querySelector('#ans').innerHTML="= "+prod;
  } catch (e) {
  document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#asubb').addEventListener('click',function () {
try {
  let a=math.complex(document.querySelector('#a').value);
  let b=math.complex(document.querySelector('#b').value);
  let diff=math.round(math.subtract(a,b),4);
  document.querySelector('#label').innerHTML="A - B = "+"("+a+')'+ " - "+"("+b+")";
  document.querySelector('#ans').innerHTML="= "+diff;
} catch (e) {
  document.querySelector('#label').innerHTML="ERROR";
}
});
document.querySelector('#bsuba').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let b=math.complex(document.querySelector('#b').value);
    let diff=math.round(math.subtract(b,a),4);
    document.querySelector('#label').innerHTML="B - A = "+"("+b+')'+ " - "+"("+a+")";
    document.querySelector('#ans').innerHTML="= "+diff;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#adivb').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let b=math.complex(document.querySelector('#b').value);
    let quot=math.round(math.divide(a,b),4);
    document.querySelector('#label').innerHTML="A / B = "+"("+a+')'+ " / "+"("+b+")";
    document.querySelector('#ans').innerHTML="= "+quot;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bdiva').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let b=math.complex(document.querySelector('#b').value);
    let quot=math.round(math.divide(b,a),4);
    document.querySelector('#label').innerHTML="B / A = "+"("+b+')'+ " / "+"("+a+")";
    document.querySelector('#ans').innerHTML="= "+quot;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#aneg').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let neg=math.round(a.neg(),4);
    document.querySelector('#label').innerHTML="-(A) = -("+a+")";
    document.querySelector('#ans').innerHTML="= "+neg;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#asquareRoot').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let root=math.round(math.sqrt(a),4);
    document.querySelector('#label').innerHTML="= Square Root of ("+a+")";
    document.querySelector('#ans').innerHTML="= "+root;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#asquare').addEventListener('click',function () {
try {
  let a=math.complex(document.querySelector('#a').value);
  let sqr=math.round(math.multiply(a,a),4);
  document.querySelector('#label').innerHTML="A<sup>2</sup> = ("+a+")<sup>2</sup>";
  document.querySelector('#ans').innerHTML="= "+sqr;
} catch (e) {
document.querySelector('#label').innerHTML="ERROR";
}
});
document.querySelector('#amodSquare').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let sqr=math.round(Math.pow(math.abs(a),2),4);
    document.querySelector('#label').innerHTML="|A|<sup>2</sup> = |"+a+"|<sup>2</sup>";
    document.querySelector('#ans').innerHTML="= "+sqr;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#aabs').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let abs=math.round(a.abs(),4);
    document.querySelector('#label').innerHTML="Abs(A) = Abs("+a+")";
    document.querySelector('#ans').innerHTML="= "+abs;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#aarg').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let rad=math.round(a.arg(),4);
    let deg=(a.arg()*180)/math.pi;
    deg=math.round(deg,4);
    document.querySelector('#label').innerHTML="Arg(A) = Arg("+a+")";
    document.querySelector('#ans').innerHTML="= "+rad+" <br>"+"= "+deg+"&deg;";
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#areal').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    document.querySelector('#label').innerHTML="Re(A) = Re("+a+")";
    document.querySelector('#ans').innerHTML="= "+a.re;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#aimag').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    document.querySelector('#label').innerHTML="Im(A) = Im("+a+")";
    document.querySelector('#ans').innerHTML="= "+a.im;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#aconj').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let conj=math.conj(a);
    document.querySelector('#label').innerHTML="Conj(A) = Conj("+a+")";
    document.querySelector('#ans').innerHTML="= "+conj;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#aln').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let ln=math.round(math.log(a),4);
    document.querySelector('#label').innerHTML="ln(A) = ln("+a+")";
    document.querySelector('#ans').innerHTML="= "+ln;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#asin').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let sin=math.round(math.sin(a),4);
    document.querySelector('#label').innerHTML="Sin(A) = Sin("+a+")";
    document.querySelector('#ans').innerHTML="= "+sin;
  } catch (e) {
    document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#acos').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let cos=math.round(math.cos(a),4);
    document.querySelector('#label').innerHTML="Cos(A) = Cos("+a+")";
    document.querySelector('#ans').innerHTML="= "+cos;
  } catch (e) {
    document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#atan').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let tan=math.round(math.tan(a),4);
    document.querySelector('#label').innerHTML="Tan(A) = Tan("+a+")";
    document.querySelector('#ans').innerHTML="= "+tan;
  } catch (e) {
    document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#acsc').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let csc=math.round(math.csc(a),4);
    document.querySelector('#label').innerHTML="Csc(A) = Csc("+a+")";
    document.querySelector('#ans').innerHTML="= "+csc;
  } catch (e) {
  document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#asec').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let sec=math.round(math.sec(a),4);
    document.querySelector('#label').innerHTML="Sec(A) = Sec("+a+")";
    document.querySelector('#ans').innerHTML="= "+sec;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#acot').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let cot=math.round(math.cot(a),4);
    document.querySelector('#label').innerHTML="Cot(A) = Cot("+a+")";
    document.querySelector('#ans').innerHTML="= "+cot;
  } catch (e) {
  document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#amult').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let n=math.complex(document.querySelector('#amultn').value);
    let mult=math.round(math.multiply(a,n),4);
    document.querySelector('#label').innerHTML="= "+n+" x "+"("+a+")";
    document.querySelector('#ans').innerHTML="= "+mult;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#apow').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let n=math.complex(document.querySelector('#apown').value);
    let pow=math.round(math.pow(a,n),4);
    document.querySelector('#label').innerHTML="= ("+a+")<sup>"+n+"</sup>";
    document.querySelector('#ans').innerHTML="= "+pow;
  } catch (e) {
  document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#areci').addEventListener('click',function () {
  try {
    let a=math.complex(document.querySelector('#a').value);
    let inv=math.round(a.inverse(),4);
    document.querySelector('#label').innerHTML="1 / A = 1 / ("+a+")";
    document.querySelector('#ans').innerHTML="= "+inv;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bneg').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let neg=math.round(b.neg(),4);
    document.querySelector('#label').innerHTML="-(B) = -("+b+")";
    document.querySelector('#ans').innerHTML="= "+neg;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bsquareRoot').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let root=math.round(math.sqrt(b),4);
    document.querySelector('#label').innerHTML="= Square Root of ("+b+")";
    document.querySelector('#ans').innerHTML="= "+root;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bsquare').addEventListener('click',function () {
try {
  let b=math.complex(document.querySelector('#b').value);
  let sqr=math.round(math.multiply(b,b),4);
  document.querySelector('#label').innerHTML="(B)<sup>2</sup> = ("+b+")<sup>2</sup>";
  document.querySelector('#ans').innerHTML="= "+sqr;
} catch (e) {
document.querySelector('#label').innerHTML="ERROR";
}
});
document.querySelector('#bmodSquare').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let sqr=math.round(Math.pow(math.abs(b),2),4);
    document.querySelector('#label').innerHTML="|B|<sup>2</sup> = |"+b+"|<sup>2</sup>";
    document.querySelector('#ans').innerHTML="= "+sqr;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#babs').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let abs=math.round(b.abs(),4);
    document.querySelector('#label').innerHTML="Abs(B) = Abs("+b+")";
    document.querySelector('#ans').innerHTML="= "+abs;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#barg').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let rad=math.round(b.arg(),4);
    let deg=(b.arg()*180)/math.pi;
    deg=math.round(deg,4);
    document.querySelector('#label').innerHTML="Arg(B) = Arg("+b+")";
    document.querySelector('#ans').innerHTML="= "+rad+" <br>"+"= "+deg+"&deg;";
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#breal').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    document.querySelector('#label').innerHTML="Re(B) = Re("+b+")";
    document.querySelector('#ans').innerHTML="= "+b.re;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bimag').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    document.querySelector('#label').innerHTML="Im(B) = Im("+b+")";
    document.querySelector('#ans').innerHTML="= "+b.im;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bconj').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let conj=math.conj(b);
    document.querySelector('#label').innerHTML="Conj(B) = Conj("+b+")";
    document.querySelector('#ans').innerHTML="= "+conj;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bln').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let ln=math.round(math.log(b),4);
    document.querySelector('#label').innerHTML="ln(B) = ln("+b+")";
    document.querySelector('#ans').innerHTML="= "+ln;
  } catch (e) {
document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bsin').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let sin=math.round(math.sin(b),4);
    document.querySelector('#label').innerHTML="Sin(B) = Sin("+b+")";
    document.querySelector('#ans').innerHTML="= "+sin;
  } catch (e) {
    document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bcos').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let cos=math.round(math.cos(b),4);
    document.querySelector('#label').innerHTML="Cos(B) = Cos("+b+")";
    document.querySelector('#ans').innerHTML="= "+cos;
  } catch (e) {
    document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#btan').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let tan=math.round(math.tan(b),4);
    document.querySelector('#label').innerHTML="Tan(B) = Tan("+b+")";
    document.querySelector('#ans').innerHTML="= "+tan;
  } catch (e) {
    document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bcsc').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let csc=math.round(math.csc(b),4);
    document.querySelector('#label').innerHTML="Csc(B) = Csc("+b+")";
    document.querySelector('#ans').innerHTML="= "+csc;
  } catch (e) {
  document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bsec').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let sec=math.round(math.sec(b),4);
    document.querySelector('#label').innerHTML="Sec(B) = Sec("+b+")";
    document.querySelector('#ans').innerHTML="= "+sec;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bcot').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let cot=math.round(math.cot(b),4);
    document.querySelector('#label').innerHTML="Cot(B) = Cot("+b+")";
    document.querySelector('#ans').innerHTML="= "+cot;
  } catch (e) {
  document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bmult').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let n=math.complex(document.querySelector('#bmultn').value);
    let mult=math.round(math.multiply(b,n),4);
    document.querySelector('#label').innerHTML="= "+n+" x "+"("+b+")";
    document.querySelector('#ans').innerHTML="= "+mult;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#bpow').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let n=math.complex(document.querySelector('#bpown').value);
    let pow=math.round(math.pow(b,n),4);
    document.querySelector('#label').innerHTML="B<sup>"+n+"</sup>= ("+b+")<sup>"+n+"</sup>";
    document.querySelector('#ans').innerHTML="= "+pow;
  } catch (e) {
  document.querySelector('#label').innerHTML="ERROR";
  }
});
document.querySelector('#breci').addEventListener('click',function () {
  try {
    let b=math.complex(document.querySelector('#b').value);
    let inv=math.round(b.inverse(),4);
    document.querySelector('#label').innerHTML="1 / B = 1 / ("+b+")";
    document.querySelector('#ans').innerHTML="= "+inv;
  } catch (e) {
      document.querySelector('#label').innerHTML="ERROR";
  }
});
