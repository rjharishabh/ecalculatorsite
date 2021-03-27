<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-T2TTRFXL33"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-T2TTRFXL33');
    </script> -->
    <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#dcf5eb">
   <meta name="author" content="Rishabh Ranjan Jha">
     <title>Contact - E Calculator Site</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="canonical" href="https://ecalculatorsite.com/contact.php">
<!-- Favicon -->
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="manifest" href="site.webmanifest">
<!-- <script data-ad-client="ca-pub-7122654552173862" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
  </head>
  <body>
    <div class="container">
      <div class="alert alert-primary alert-dismissible fade show" role="alert">
        <small>We use cookies to ensure that we give you the best experience on our website.&nbsp; &nbsp;</small>
        <a class="badge badge-primary" href="privacy-policy.html#cookies">Learn more</a>
          <button type="button" class="btn btn-sm btn-warning" data-dismiss="alert" aria-label="Close" name="button">Got it!</button>
      </div>
    </div>

    <nav class="navbar navbar-light navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="index.html"><img src="photos/logo.JPG" class="img-fluid logo rounded" alt="site logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <img src="photos/menu.png" alt="menu"></button>
  <div class="collapse navbar-collapse" id="navbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="algebra-calculator.html">Algebra</a></li>
      <li class="nav-item"><a class="nav-link" href="finance-calculator.html">Finance</a></li>
      <li class="nav-item"><a class="nav-link" href="matrix-calculator.html">Matrix</a></li>
      <li class="nav-item"><a class="nav-link" href="plane-geometry-calculator.html">Plane Geometry</a></li>
      <li class="nav-item"><a class="nav-link" href="solid-geometry-calculator.html">Solid Geometry</a></li>
      <li class="nav-item"><a class="nav-link" href="statistics-calculator.html">Statistics</a></li>
    </ul>
  </div>
  </div>
    </nav>

<main class="container-md">
<div class="row">
<div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
  <div class="policy card border border-primary shadow rounded">
<div class="card-header border border-primary bg-primary">
    <center><h1 class="text-white">Get In Touch</h1></center>
</div>
<div class="card-body">
<form action="email.php" method="post">
  <div class="form-group">
    <div class="">Required <span class="text-danger">*</span></div>
  </div>

    <div class="form-group">
      <div class="row">
    <div class="col-12">
      <label for="name">Name<span class="text-danger">*</span></label>
    </div>
    <div class="col-12">
      <input type="text" required class="form-control" id="name" name="name" placeholder="Rishabh">
    </div>
      </div>
    </div>
<div class="form-group">
  <div class="row">
<div class="col-12">
  <label for="email">Email<span class="text-danger">*</span></label>
</div>
<div class="col-12">
  <input type="email" class="form-control"  id="email" placeholder="me@example.com"required name="email">
</div>
  </div>
</div>
<div class="form-group">
  <div class="row">
<div class="col-12">
  <label for="reason">Reason<span class="text-danger">*</span></label>
</div>
<div class="col-12">
  <select class="form-control" required id="reason" onchange="check()" name="reason">
    <option value="0">Please Select</option>
    <option value="1">Feedback</option>
    <option value="2">Contact Us</option>
    <option value="3">Report an Error</option>
    <option value="4">Request a Calculator</option>
    <option value="5">Other</option>
  </select>


  <script type="text/javascript">
function check(){
  if(document.getElementById('reason').value==5){
  document.getElementById('pp').style.display="block";
}
  else {
      document.getElementById('pp').style.display="none";
  }

}

  </script>
</div>
  </div>
</div>
<div class="form-group" id="pp" style="display:none;">
<input type="text" class="form-control" name=""  placeholder="Please specify the reason.">
</div>
<div class="form-group">
  <div class="row">
<div class="col-12">
  <label for="message">Message<span class="text-danger">*</span></label>
</div>
<div class="col-12">
  <textarea name="message" required rows="4" id="message" class="form-control" placeholder="Please write your message." width='100%'></textarea>
</div>
  </div>
</div>

  <div class="text-right">
      <button type="submit" class="btn btn-primary btn-lg">SEND</button>
  </div>

</form>
  </div>
</div>
</div>
</div>


</main>

<footer class="container-fluid">
  <div class="container">
<div class="row">
  <div class="col-12 col-sm-6 col-md-4 text-center">
  <ul>
    <li class="ftr-head">Website</li>
      <li> <a href="about.html">About</a></li>
        <li><a href="mailto:ecalculatorsite@gmail.com?subject=Contact Us&body=https://ecalculatorsite.com%0d%0a%0d%0a">Contact Us</a></li>
          <li><a href="terms-of-use.html">Terms of Use</a></li>
            <li> <a href="privacy-policy.html">Privacy Policy</a></li>
  </ul>
  </div>
  <div class="col-12 col-sm-6 col-md-4 text-center">
  <ul>
    <li class="ftr-head">Built with</li>
    <li> <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
      <li><a href="https://favicon.io" target="_blank">Favicon.io</a></li>
      <li> <a href="https://mathjs.org/" target="_blank">Math.js</a></li>
          <li><a href="https://www.mathjax.org/" target="_blank">MathJax</a></li>
  </ul>
  </div>
  <div class="col-12 col-md-4 col-sm-6 text-center ">
  <ul>
    <li  class="ftr-head">More</li>
    <li><a href="sitemap.html">Sitemap</a></li>
    <li><a href="mailto:ecalculatorsite@gmail.com?subject=Feedback&body=https://ecalculatorsite.com%0d%0a%0d%0aPlease write your valuable feedback.">Feedback</a></li>
    <li><a href="mailto:ecalculatorsite@gmail.com?subject=Report an Error&body=https://ecalculatorsite.com%0d%0a%0d%0aPlease write the error you have faced while using this website.">Report an Error</a></li>
    <li><a href="mailto:ecalculatorsite@gmail.com?subject=Request a Calculator&body=https://ecalculatorsite.com%0d%0a%0d%0aWhat type of calculator do you want to have on this website?">Request a Calculator</a></li>
  </ul>
  </div>
</div>
<div class="row justify-content-center">
<small class="text-dark">&copy;2021 ecalculatorsite.com</small>
</div>
  </div>
</footer>
<a href="#" id="back-to-top" ><img class="rounded-circle btn btn-info" src="photos/arrow-up.png" alt="Scroll to Top"></a>

 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="js/bootstrap.min.js" charset="utf-8"></script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="js/common-script-root.js" charset="utf-8"></script>
<script src="js/solid-geometry.js" charset="utf-8"></script>

  </body>
</html>
