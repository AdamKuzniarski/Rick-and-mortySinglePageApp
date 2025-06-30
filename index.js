console.clear();
import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";

// FetchAPI

async function fetchCharacters(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.json();
  //console.log(data);
  data.results.forEach((character) => {
    return cardContainer.append(createCharacterCard(character));
  });
}

fetchCharacters(page);
// Eventlistener

prevButton.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  if (page > 1) {
    page--;
    fetchCharacters(page);
  }
  pagination.textContent = `${page}/${maxPage}`;
});
nextButton.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  if (page < maxPage) {
    page++;
    fetchCharacters(page);
  }
  pagination.textContent = `${page}/${maxPage}`;
});
