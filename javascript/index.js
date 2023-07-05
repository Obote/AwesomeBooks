class BookStore {
  constructor() {
    this.bookStore = JSON.parse(localStorage.getItem('bookItem')) || [];
    this.submitButton = document.getElementById('submit');
    this.bookListDiv = document.getElementById('bookList');

    this.submitButton.addEventListener('click', this.addBook.bind(this));
    this.displayBooks();
  }

  displayBooks() {
    this.bookListDiv.innerHTML = '';

    for (let i = 0; i < this.bookStore.length; i += 1) {
      const book = this.bookStore[i];

      const bookHTML = `
        <div class="book">
          <p>${book.bookTitle}</p>
          <p>${book.bookAuthor}</p>
          <button onclick="bookStore.removeBook(${i})">Remove</button>
        </div>
      `;
      this.bookListDiv.innerHTML += bookHTML;
    }
  }

  addBook() {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const newBook = { bookTitle, bookAuthor };
    this.bookStore.push(newBook);
    localStorage.setItem('bookItem', JSON.stringify(this.bookStore));
    this.displayBooks();
    this.clearForm();
  }

  removeBook(index) {
    this.bookStore.splice(index, 1);
    localStorage.setItem('bookItem', JSON.stringify(this.bookStore));
    this.displayBooks();
  }

  // eslint-disable-next-line class-methods-use-this
  clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}

// eslint-disable-next-line no-unused-vars
const bookStore = new BookStore();
