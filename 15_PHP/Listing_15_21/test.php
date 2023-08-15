<?php
switch ($_GET['formOfAddress']) {
  case 'mr':
    echo "Hello Mr {$lastName}";
    break;
  case 'mrs':
    echo "Hallo Mrs {$lastName}";
    break;
  default:
    echo "Hallo {$lastName}";
}