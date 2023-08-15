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
$schroedinger = new Book();
$schroedinger->title = "Schroedinger programs Java";
// $schroedinger->price = 44.90; // This will no longer work
$schroedinger->setPrice(44.90);