const book = {
    title: 'Schrödinger programmiert Java',
    price: 44.90,
    author: 'Philip Ackermann',
    isbn: '978-3-8362-7272-8',
    printDescription() {
        console.log(`${this.author}: ${this.title}`);
    }
}
console.log(book.title);   // "Schrödinger programmiert Java"
console.log(book.price);   // 44.90
console.log(book.author);  // "Philip Ackermann"
console.log(book.isbn);    // "978-3-8362-7272-8"
book.printDescription();   // "Philip Ackermann: Schrödinger programmiert Java"