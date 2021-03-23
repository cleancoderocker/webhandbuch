const book = {
    title: 'Schrödinger programmiert Java',
    price: 44.90,
    author: 'Philip Ackermann',
    isbn: '978-3836245838978-3836245838',
    printDescription() {
        console.log(`${this.author}: ${this.title}`);
    }
}
console.log(item.title);   // "Schrödinger programmiert Java"
console.log(item.price);   // 44.90
console.log(item.author);  // "Philip Ackermann"
console.log(item.isbn);    // "978-3836245838"
item.printDescription();   // "Philip Ackermann: Schrödinger programmiert Java"