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
try {
    printNumbers(100, 0);
} catch (Error $e) {
    echo "The script was aborted with the following error message:"
        . $e->getMessage();
}