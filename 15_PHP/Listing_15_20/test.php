<?php
if (!isset($_GET['firstName'])):
  echo 'Please enter a first name!';
else:
  $firstName = $_GET['firstName'];
endif;