import { createElement, getElementByRef } from "./createElement";
import { createCardsById } from "./createCard";
import { ActiveBoard } from "./listEvent";

export function getAllBoards() {
    // rename to setBoardData / update / apply
    const board = ActiveBoard.getBoardStorage();

    document.getElementById("noPins").textContent = "";
    if (board == null) {
        const noPinsEl = getElementByRef("noPins");
        noPinsEl.innerHTML = `<p class="no-pins" id="no-pins">Ваша доска пустая!(</p>`;
        gallery.innerHTML = "";
    } else {
        const cards = board.split(",");
        const gallery = document.querySelector(createElement.gallery);
        gallery.innerHTML = createCardsById(cards);
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
