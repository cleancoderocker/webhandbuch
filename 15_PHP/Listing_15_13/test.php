<?php
$action = (empty($_POST['action'])) ? 'standard' : $_POST['action'];
// The above is identical to the IF statement below.
if (empty($_POST['action'])) {
    $action = 'standard';
} else {
    $action = $_POST['action'];
}