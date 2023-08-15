<?php
function printNumbers($from = 1, $to = 10)
{
    while ($from <= $to) {
        echo $from++;
    }
}
printNumbers(); // from 1 to 10
printNumbers(90, 100); // from 90 to 100