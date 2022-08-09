// ------------------- Navigation -------------------
// Variables to hold the navigation links
const listLink = document.querySelector('#list-link');
const addLink = document.querySelector('#add-link');
const contactLink = document.querySelector('#contact-link');
const booksList = document.querySelector('#books-list');
const newBook = document.querySelector('#new-book');
const contactSection = document.querySelector('#contact-section');
let navigationOptions = {};

// eslint-disable-next-line no-unused-vars
export default navigationOptions = {
  // A click listener for the list link to show the books cards
  list: listLink.addEventListener('click', () => {
    booksList.style.display = 'block';
    listLink.style.color = 'blue';
    newBook.style.display = 'none';
    contactSection.style.display = 'none';
    addLink.style.color = 'black';
    contactLink.style.color = 'black';
  }),

  // A click listener for the add link to show the add book form
  add: addLink.addEventListener('click', () => {
    booksList.style.display = 'none';
    addLink.style.color = 'blue';
    newBook.style.display = 'flex';
    listLink.style.color = 'black';
    contactSection.style.display = 'none';
    contactLink.style.color = 'black';
  }),

  // A click listener for the contact link to show the contact form
  contact: contactLink.addEventListener('click', () => {
    booksList.style.display = 'none';
    contactLink.style.color = 'blue';
    newBook.style.display = 'none';
    contactSection.style.display = 'block';
    addLink.style.color = 'black';
    listLink.style.color = 'black';
  }),
};
