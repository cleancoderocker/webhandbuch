<?php
class Book
{
    public string $title;
    public float $price;
    public string $author;
    public string $isbn;
    public function printDescription()
    {
        echo "$this->author: $this->title";
    }
}