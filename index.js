import './style.css';

const API_URL =
  'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=';

const results = document.querySelector('.results');
const input = document.getElementById('book-name');
const btn = document.getElementById('form__button');

btn.addEventListener('click', getBooks);

function getBooks(e) {
  e.preventDefault();
  results.innerHTML = '';
  const inputValue = input.value;
  const api = `${API_URL}${inputValue}`;
  fetch(api)
    .then(resp => resp.json())
    .then(books => showBooks(books));
}

const showBooks = books => {
  books.forEach(book => {
    const {
      title,
      imageUrl,
      author: { name },
      description: { fullContentUrl }
    } = book;

    results.innerHTML += `<li class="entry">
<img class="entry__image" src="${imageUrl}" alt="Cover">
<p class="entry__name">${title} ${name}  <a href='${fullContentUrl}'> More </a></p>

</li>`;
  });
};
