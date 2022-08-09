import Book from './Book.js';
import * as variable from './variables.js';

// A click listener for the add button to add inputs value as an object to the books array
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const newBook = new Book(
    variable.titleInput.value,
    variable.authorInput.value
  );
  books.push(newBook);
  Book.loadBook(books.length - 1);
  localStorage.setItem('books', JSON.stringify(books));
});

// A click listener for the remove button to remove the book card
variable.booksContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('card-remove-button')) {
    const bookCard = e.target.parentElement;
    variable.booksContainer.removeChild(bookCard);
    const bookIndex = books.findIndex(
      (book) => book.title === bookCard.querySelector('.book-title').innerText
    );
    books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
});
