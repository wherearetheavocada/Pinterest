import { createImage } from "./createImage";

export function createCard(data) {
  console.log(data);
  return data.map(createImage).join(' ');
}
