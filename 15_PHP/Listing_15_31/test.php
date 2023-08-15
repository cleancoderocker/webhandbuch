<?php
function runThroughNumbers(...$numbers)
{
    foreach ($numbers as $number) {
        echo $number;
    }
}
runThroughNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);