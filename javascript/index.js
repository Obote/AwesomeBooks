function Book(bookTitle, bookAuthor) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
}

function DisplayBook() {
  this.books = [];
}

DisplayBook.prototype.addBook = function (book) {
  this.books.push(book);
  this.displayBook(book);
  this.saveBooksToLocalStorage();
};

DisplayBook.prototype.displayBook = function (book) {
  const bookList = document.getElementById('bookList');
  const div = document.createElement('div');
  div.classList.add('book');

  const title = document.createElement('div');
  title.textContent = `Title: ${book.bookTitle}`;
  div.appendChild(title);

  const author = document.createElement('div');
  author.textContent = `Author: ${book.bookAuthor}`;
  div.appendChild(author);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  div.appendChild(deleteBtn);

  bookList.appendChild(div);
};

DisplayBook.prototype.clearForm = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
};

DisplayBook.prototype.deleteBook = function (bookTitle, bookAuthor) {
  // eslint-disable-next-line max-len
  this.books = this.books.filter((book) => !(book.bookTitle === bookTitle && book.bookAuthor === bookAuthor));
  this.saveBooksToLocalStorage();
};

DisplayBook.prototype.saveBooksToLocalStorage = function () {
  localStorage.setItem('books', JSON.stringify(this.books));
};

DisplayBook.prototype.loadBooksFromLocalStorage = function () {
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    this.books = JSON.parse(storedBooks);
    this.books.forEach((book) => this.displayBook(book));
  }
};

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;

  const book = new Book(bookTitle, bookAuthor);
  const display = new DisplayBook();

  display.addBook(book);
  display.clearForm();
});


window.addEventListener('DOMContentLoaded', () => {
  const display = new DisplayBook();
  display.loadBooksFromLocalStorage();
});
