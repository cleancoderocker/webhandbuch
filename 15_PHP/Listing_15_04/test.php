<?php
$lastName = 'Doe';
$birthName = &$lastName; // now also contains the value 'Doe'.
$birthName = 'samplewife'; // $birthName is changed. Thereby
// also $lastName.
echo $lastName; // Output of $lastName: 'Deer'.