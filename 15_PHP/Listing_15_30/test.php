<?php
function changeNumberTo(&$i, $number)
{
    $i = $number;
}
$i = 10;
changeNumberTo($i, 20);
echo $i; // $i is now 20