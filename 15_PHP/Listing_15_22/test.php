<?php
$formOfAddress = match ($_GET['formOfAddress']) {
  'mr' => 'Mr ',
  'mrs' => 'Mrs ',
  default => ''
};
echo "Hello $formOfAddress$lastName";