import { createImage } from "./createImage";

export function createCard(data) {
    return data.map(createImage).join(" ");
}
