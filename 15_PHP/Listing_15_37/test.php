<?php
$numbersSquared = array_map(
    fn($number) => pow($number, 2),
    $numbers
);