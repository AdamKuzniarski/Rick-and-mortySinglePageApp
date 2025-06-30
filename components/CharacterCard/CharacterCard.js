const cardContainer = document.querySelector('[data-js="card-container"]');

export function createCharacterCard() {
    
  cardContainer.innerHTML = `
    <li class="card">
        <div class="card__image-container">
            <img
              class="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
        </div>
        <div class="card__content">
            <h2 class="card__title">Rick Sanchez</h2>
            <dl class="card__info">
                <dt class="card__info-title">Status</dt>
                <dd class="card__info-description">Alive</dd>
                <dt class="card__info-title">Type</dt>
                <dd class="card__info-description"></dd>
                <dt class="card__info-title">Occurrences</dt>
                <dd class="card__info-description">51</dd>
            </dl>
        </div>
    </li>
    `;
  return cardContainer;
}

/* 


- Use `innerHTML` to generate the HTML of the card. Cut and paste the relevant HTML code of the card from the `index.html` and use it in your function.
- Ensure that `createCharacterCard` returns a newly created `<li>` element representing a character card.
- Inside `index.js`, call the `createCharacterCard` function and append its return value to the existing `cardContainer`.
- Once implemented, the Rick Sanchez card should no longer be hardcoded in `index.html` but instead be created dynamically using JavaScript.
 */
