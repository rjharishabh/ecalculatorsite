<?php
if (!isset($_COOKIE['cb'])) {
  echo ('
  <div class="container">
    <div class="alert alert-primary alert-dismissible fade show" role="alert">
      <small>We use cookies to ensure that we give you the best experience on our website.&nbsp; &nbsp;</small>
      <a class="badge badge-primary" href="privacy-policy.html#cookies" target="_blank">Learn more</a>
        <button type="button" class="btn btn-sm btn-warning" data-dismiss="alert" aria-label="Close" name="button">Got it!</button>
    </div>
  </div>');
  setcookie('cb','showed');
}
