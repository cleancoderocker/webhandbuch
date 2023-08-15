<?php
class Book
{
    const PROFIT = 1.05;

    public string $title;
    public float $price;
    public string $author;
    public string $isbn;
    public function printPriceIncludingProfit()
    {
        echo $this->price * self::PROFIT;
    }
}
$schroedinger = new Book();
$schroedinger->printPriceIncludingProfit();
$profit = Book::PROFIT;