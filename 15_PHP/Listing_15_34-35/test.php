<?php
$numbers = [1, 2, 3, 4, 5];
$numbersSquared = array_map(
    function ($number) {
        return pow($number, 2);
    },
    $numbers
);
print_r($numbersSquared);