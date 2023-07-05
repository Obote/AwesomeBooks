const submitButton = document.getElementById('submit');

const bookStore = JSON.parse(localStorage.getItem('bookItem')) || [];

function displayBooks() {
  const bookListDiv = document.getElementById('bookList');
  bookListDiv.innerHTML = '';

  for (let i = 0; i < bookStore.length; i += 1) {
    const book = bookStore[i];

    const bookHTML = `
      <div class="book">
        <p>${book.bookTitle}</p>
        <p>${book.bookAuthor}</p>

        <button onclick="removeBook(${i})">Remove</button>
      </div>
    `;
    bookListDiv.innerHTML += bookHTML;
  }
}

const addBook = (bookTitle, bookAuthor) => {
  const newBook = { bookTitle, bookAuthor };
  bookStore.push(newBook);
  localStorage.setItem('bookItem', JSON.stringify(bookStore));
  displayBooks();
  // eslint-disable-next-line no-use-before-define
  clearForm();
};

submitButton.addEventListener('click', () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  addBook(bookTitle, bookAuthor);
});

// eslint-disable-next-line no-unused-vars
const removeBook = (index) => {
  bookStore.splice(index, 1);
  localStorage.setItem('bookItem', JSON.stringify(bookStore));
  displayBooks();
};

function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
}

displayBooks();
