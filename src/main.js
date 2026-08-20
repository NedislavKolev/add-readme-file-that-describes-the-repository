// Sample JavaScript source code for managing a book collection
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// Shopping cart to manage selected books
class Cart {
    constructor() {
        this.items = [];
    }
    
    addItem(book) {
        this.items.push(book);
    }
}

// Example Usage
const myBook = new Book('1984', 'George Orwell');
const cart = new Cart();
cart.addItem(myBook);
