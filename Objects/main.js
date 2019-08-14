function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(title + " " + author +", " + pages + ", " + read);
    };
}

const myBook = new Book("Harry Potter", "JK ROWLING", 321, true);

myBook.info();

