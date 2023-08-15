<?php
abstract class AbstractBook
{
    private float $price;
    abstract public function printDescription();
    public function setPrice(float $price)
    {
        $this->price = $price;
    }
}
class Book extends AbstractBook
{
    public string $title;
    public string $author;
    public function printDescription()
    {
        echo "$this->author: $this->title";
    }
}