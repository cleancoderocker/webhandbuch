<?php
if (!isset($_GET['firstName'])) {
  echo 'Please enter a first name!';
} elseif (strlen($_GET['firstName']) <= 0) {
  echo 'The first name is empty. Please enter a name!';
} else {
  $firstName = $_GET['firstName'];
}