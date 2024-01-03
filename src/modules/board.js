import { createElement, getElementByRef } from "./createElement";
import { createCardsById } from "./createCard";
import { noConflict } from "jquery";

export function getAllBoards(data) {
    const board = localStorage.getItem(data);
    document.getElementById("noPins").textContent = "";
    if (board == null) {
        const noPinsEl = getElementByRef("noPins");
        noPinsEl.innerHTML = `<p class="no-pins" id="no-pins">Ваша доска пустая!(</p>`;
        gallery.innerHTML = "";
    } else {
        const cards = localStorage.getItem(data).split(",");
        const gallery = document.querySelector(createElement.gallery);
        gallery.innerHTML = createCardsById(cards);
    }
}

export function postAllBoards(data) {
    const id = localStorage.getItem("cart-id");
    const board = localStorage.getItem(data);
    if (board == null) {
        localStorage.setItem(data, id);
    } else {
        if (board.includes(id)) {
            alert("Эта карточку уже добавлена!");
        } else {
            const boardIds = board + "," + id;
            localStorage.setItem(data, boardIds);
        }
    }
}
