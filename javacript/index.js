function Book(bookTitle, bookAuther) {
  this.bookTitle = bookTitle;
  this.bookAuther = bookAuther;
}

function displayBook() {}

displayBook.prototype.addBook = (book) => {
  const bookList = document.getElementById('bookList');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.bookTitle}</td>
    <td>${book.bookAuther}</td>
    <td>X</td>
    `;

  bookList.appendChild(row);
};

displayBook.prototype.clearForm = function () {
  document.getElementById('title').value = '';
  document.getElementById('auther').value = '';
};

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.getElementById('title').value;
  const bookAuther = document.getElementById('auther').value;
  console.log(bookAuther);
  console.log(bookTitle);
  const book = new Book(bookTitle, bookAuther);
  // eslint-disable-next-line no-use-before-define, new-cap
  const display = new displayBook();

  display.addBook(book);
  // display.clearForm();
});

// document.getElementById('bookList').addEventListener('click', (e) => {
//   const display = new displayBook();
//   display.document
// });
