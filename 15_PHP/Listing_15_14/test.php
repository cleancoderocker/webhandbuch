<?php
$firstName = '';
$firstName = $firstName ?: 'John'; // Contains 'John'.
$firstName = 'Anne';
$firstName = $firstName ?: 'John'; // Contains 'Anne'.