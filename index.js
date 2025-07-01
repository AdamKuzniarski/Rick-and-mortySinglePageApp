console.clear();
import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
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

//fetching Characters from API and creating the cards
async function fetchCharacters(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  // Page count at the bottom is set to the max pages from the api data
  maxPage = data.info.pages;
  pagination.textContent = `${page}/${maxPage}`;
  // Character Cards are created
  data.results.forEach((character) => {
    return cardContainer.append(createCharacterCard(character));
  });
}

// Eventlistener

prevButton.addEventListener("click", () => {
  //making sure that the page is never 0
  if (page > 1) {
    // to make sure the new cards are the only 
    // ones displayed the previous ones are deleted
    cardContainer.innerHTML = "";
    //page number decreases with the prev button
    page--;
    fetchCharacters(page);
  }
});

nextButton.addEventListener("click", () => {
  //making sure that the page is never above the max page
  if (page < maxPage) {
    // to make sure the new cards are the only 
    // ones displayed the previous ones are deleted
    cardContainer.innerHTML = "";
    // increasing page count with the next button
    page++;
    fetchCharacters(page);
  }
});

// Search Form

// if the searchbar is used this event will happen
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  // to make sure the new cards are the only 
    // ones displayed the previous ones are deleted
  cardContainer.innerHTML = "";
  //starting at the first page
  page = 1;
  searchQuery = searchInput.value;
  fetchCharacters(page, searchQuery);
});

// to always have cards visible the function is called
fetchCharacters(page, searchQuery);
