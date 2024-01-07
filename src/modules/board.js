import { createElement, getElementByRef } from "./createElement";
import { createCardsById } from "./createCard";
import { ActiveBoard } from "./listEvent";
import { createImage } from "./createImage";

export function getAllBoards() {
    // rename to setBoardData / update / apply
    const boardCards = ActiveBoard.getBoardCards();

    document.getElementById("noPins").textContent = "";
    if (boardCards == null) {
        const noPinsEl = getElementByRef("noPins");
        noPinsEl.innerHTML = `<p class="no-pins" id="no-pins">Ваша доска пустая!(</p>`;
        gallery.innerHTML = "";
    } else {
        const gallery = document.querySelector(createElement.gallery);

        gallery.innerHTML = boardCards.map(createImage).join(" ");
    }
}

export function postAllBoards(data) {
    // postBoardCard
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
