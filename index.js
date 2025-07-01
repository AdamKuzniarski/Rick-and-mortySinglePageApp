console.clear();
import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const searchButton = document.querySelector('[data-js="search-button"]');
const searchInput = document.querySelector('[data-js="search-input"]');

// States

let maxPage = 1;
let page = 1;
let searchQuery = "";

// FetchAPI


async function fetchCharacters(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  maxPage = data.info.pages;
  pagination.textContent = `${page}/${maxPage}`;
  data.results.forEach((character) => {
    return cardContainer.append(createCharacterCard(character));
  });
}

// Eventlistener

prevButton.addEventListener("click", () => {
  if (page > 1) {
    cardContainer.innerHTML = "";
    page--;
    fetchCharacters(page);
  }
  pagination.textContent = `${page}/${maxPage}`;
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    cardContainer.innerHTML = "";
    page++;
    fetchCharacters(page);
  }
  pagination.textContent = `${page}/${maxPage}`;
});

// Search Form

searchButton.addEventListener("click", (event) => {
  event.preventDefault();

  cardContainer.innerHTML = "";
  page = 1;
  searchQuery = searchInput.value;
  fetchCharacters(page, searchQuery);
});

fetchCharacters(page, searchQuery);
