<?php
function printNumbers(int $from = 1, int $to = 10)
{
    if ($from > $to) {
        throw new Error('Endless loop!');
    }
    while ($from <= $to) {
        echo $from++;
    }
}
printNumbers(100, 0);