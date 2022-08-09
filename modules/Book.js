import { books } from '../index.js'; // eslint-disable-line import/no-cycle
import * as variable from './variables.js';
// Books array to store the books information
export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // Method to load newly added books
  static loadBook(index) {
    variable.booksContainer.innerHTML += `<div class="book-card">
        <div class="book-title"><strong>"${books[index].title}"</strong>&nbsp;by</div>
        <div class="book-author">${books[index].author}</div>
        <button class="card-remove-button">Remove</button>
        </div>`;
  }

  // A Method to reload the books cards
  static reloadBooks() {
    variable.booksContainer.innerHTML = '';
    for (let index = 0; index < books.length; index += 1) {
      variable.booksContainer.innerHTML += `<div class="book-card">
        <div class="book-title"><strong>"${books[index].title}"</strong>&nbsp;by</div>
        <div class="book-author">${books[index].author}</div>
        <button class="card-remove-button">Remove</button>
        </div>`;
    }
  }
}