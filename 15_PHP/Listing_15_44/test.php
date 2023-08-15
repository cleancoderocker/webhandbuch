<?php
class Book
{
    const PROFIT = 1.05;

    public string $title;
    private float $price;
    public string $author;
    public string $isbn;
    public function printPriceIncludingProfit()
    {
        echo $this->price * self::PROFIT;
    }
    public function setPrice(float $price)
    {
        $this->price = $price;
    }
}

class EBook extends Book
{
    public function printDescription()
    {
        parent::printDescription();
        echo " (EBook version)";
    }
    public function printPrice()
    {
        //echo $this->price; // Does not work.
    }
}
$schroedinger = new EBook();
$schroedinger->title = "Schroedinger programs Java";
$schroedinger->author = "Philip Ackermann";
$schroedinger->setPrice(39.90);
$schroedinger->printDescription();
$schroedinger->printPrice();