const book = {
    title: 'JavaScript – The Comprehensive Guide',
    price: 54.99,
    author: 'Philip Ackermann',
    isbn: '978-1-4932-2287-2',
    printDescription() {
        console.log(`${this.author}: ${this.title}`);
    }
}
console.log(item.name);     // "JavaScript – The Comprehensive Guide"
console.log(book.price);    // 54.99
console.log(book.author);   // "Philip Ackermann"
console.log(book.isbn);     // "978-1-4932-2287-2"
book.printDescription();    // "Philip Ackermann: JavaScript – The
                            // Comprehensive Guide"