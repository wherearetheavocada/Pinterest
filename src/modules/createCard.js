import { createImage } from "./createImage";

export function createCard(data) {
  console.log(data);
  return data.map(createImage).join(' ');
}

export function createCardsById(cardIds) {
  const cards = JSON.parse(localStorage.getItem('photos'));

  return cards
    .filter((card) => cardIds.includes(card.id))
    .map(createImage)
    .join(' ');
}

