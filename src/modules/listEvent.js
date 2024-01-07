import {
    createElement,
    getElementByRef,
    getElementsByRef,
} from "./createElement.js";
import { images } from "../index.js";
import { createImage } from "./createImage";
import { createCard, createCardsById } from "./createCard.js";
import { getAllBoards, postAllBoards } from "./board.js";
import { Exception } from "sass";

export function searchByText(event) {
    const { target } = event;
    const value = target.value.toLowerCase();

    const cards = ActiveBoard.getBoardCards();

    const filtImages = cards.filter(({ alt_description }) =>
        alt_description.toLowerCase().includes(value)
    );

    const gallery = document.querySelector(createElement.gallery);
    gallery.innerHTML = createCard(filtImages);
}

export function chooseBoard(event) {
    document.getElementById("board").classList.toggle("show");
    event.stopPropagation();
}

export function updateBoardCards() {
    getAllBoards();
}

export function recordingBoardCards(boardId) {
    if (boardId == "1") {
        const board = "board-cards.1";
        postAllBoards(board);
    } else if (boardId == "2") {
        const board = "board-cards.2";
        postAllBoards(board);
    } else if (boardId == "3") {
        const board = "board-cards.3";
        postAllBoards(board);
    }
}

export function addBord(event) {
    document.getElementById("addToBoard").classList.toggle("show");
    event.stopPropagation();
}
export function complain(event) {
    document.getElementById("complaint").classList.toggle("show");
    event.stopPropagation();
}

export function getMenuCard(event, id) {
    const menu = document.getElementById("menu");

    menu.classList.add("show");
    menu.style.position = "absolute";
    menu.style.left = event.pageX - 110 + "px";
    menu.style.top = event.pageY + 20 + "px";

    const { currentTarget } = event;

    localStorage.setItem("cart-id", currentTarget.id);
    event.stopPropagation();
}

export function btnCancel() {
    const complaint = document.getElementById("complaint");
    complaint.classList.toggle("show");
}

export function sendComplain() {
    const radio = document.getElementById("myCheckbox");
    if (radio.checked) {
        alert("Cпасибо за ваш отзыв!");
        const complaint = document.getElementById("complaint");
        complaint.classList.toggle("show");
    } else {
        alert("Вы ничего не выбрали!");
    }
}

export function clickOnWin(event) {
    const closeMenuList = getElementsByRef("closeMenu");
    if (closeMenuList) {
        closeMenuList.forEach((menu) => menu.classList.remove("show"));
    }
}

export class ActiveBoard {
    static set(id) {
        if (id == null) {
            localStorage.setItem("active-board", 0);
        } else {
            localStorage.setItem("active-board", id);
        }
    }
    static getId() {
        return localStorage.getItem("active-board") ?? 0;
    }
    static getBoardName() {
        const id = this.getId();

        switch (id) {
            case "0":
                return "photos";
            case "1":
                return "board-cards.1";
            case "2":
                return "board-cards.2";
            case "3":
                return "board-cards.3";
            default:
                return "board-cards.1";
        }
    }
    static getBoardCards() {
        const data = localStorage.getItem(this.getBoardName());
        if (this.getId == 0) {
            return JSON.parse(data) || [];
        }

        const allCards = JSON.parse(localStorage.getItem("photos"));
        if (data == null) {
            const noPinsEl = getElementByRef("noPins");
            noPinsEl.innerHTML = `<p class="no-pins" id="no-pins">Ваша доска пустая!(</p>`;
            gallery.innerHTML = "";
        } else {
            return allCards.filter((card) => data.includes(card.id));
        }
    }
}
