<?php
while (true) { // Condition (always true)
    $i = $i ?? 0; // Initialization
    $i++; // Increment
    echo $i;
    if ($i >= 10) { // Conditional statement
        break; // Abort
    }
}