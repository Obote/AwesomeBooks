// const navbookList = document.querySelector('.listBook');
// const navAddBook = document.querySelector('.addBook');
// const navContact = document.querySelector('.contactNav');

const joyTari = document.getElementById('contact');
console.log(joyTari);

const links = document.querySelectorAll('.navbar-list');
const containers = document.querySelectorAll('.container');
function hideAllContainers() {
    containers.forEach((container) => {
        container.style.display = 'none';
    })
}

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        const linkClass = e.target.classList[1];
        console.log(linkClass)
        hideAllContainers();
        containers.forEach((container) => {
            if (linkClass === container.id) {
                container.style.display = 'none';
            } else {
                container.style.display = 'block';
            }
        })
    })
})
window.addEventListener('DOMContentLoaded', () => {
  hideAllContainers();
  containers[0].style.display = 'block';
})

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
      this.checkForBookstoreLength();
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
    this.checkForBookstoreLength();
  }

  checkForBookstoreLength() {
    return this.bookStore.length > 0 ? this.bookListDiv.classList.add('showBookListBorder') : this.bookListDiv.classList.remove('showBookListBorder');
  }

  // eslint-disable-next-line class-methods-use-this
  clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}

// eslint-disable-next-line no-unused-vars
const bookStore = new BookStore();

// const showContact = document.getElementById('contact');
// const showAddBook = document.querySelector('#form');
// const showBookList = document.querySelector('');
// console.log(showContact);

// navAddBook.addEventListener('click', () => {
//   showContact.style.display = 'none';
//   showAddBook.style.display = 'flex';
//   showBookList.style.display = 'none';
// console.log('add book');
// });

// navbookList.addEventListener('click', () => {
//   showContact.style.display = 'none';
//   showAddBook.style.display = 'none';
//   showBookList.style.display = 'flex';
// console.log('show books');
// });

// navContact.addEventListener('click', () => {
//   showContact.style.display = 'flex';
//   showContact.style.display = 'none';
//   showAddBook.style.display = 'none';
//   showBookList.style.display = 'flex';
// console.log('show contact');
// });