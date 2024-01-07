import {
    createElement,
    getElementByRef,
    getElementsByRef,
} from "./createElement.js";
import { images } from "../script.js";
import { createImage } from "./createImage";
import { createCard, createCardsById } from "./createCard.js";
import { getAllBoards, postAllBoards } from "./board.js";
import { Exception } from "sass";

export function searchByPhoto(event) {
    const { target } = event;
    const value = target.value.toLowerCase();
    const filtImages = images.filter(({ alt_description }) =>
        alt_description.toLowerCase().includes(value)
    );
    console.log(createElement, createElement.gallery);
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

export function getBoardFirst() {
    const cards = "boardFirst";
    getAllBoards(cards);
}

export function getBoardSecond() {
    const cards = "boardSecond";
    getAllBoards(cards);
}
export function getBoardThird() {
    const cards = "boardThird";
    getAllBoards(cards);
}
export function addBord(event) {
    document.getElementById("addToBoard").classList.toggle("show");
    event.stopPropagation();
}
export function complain(event) {
    document.getElementById("complaint").classList.toggle("show");
    event.stopPropagation();
}

export function postBoardFirst() {
    const board = "boardFirst";
    postAllBoards(board);
}

export function postBoardSecond() {
    const board = "boardSecond";
    postAllBoards(board);
}
export function postBoardThird() {
    const board = "boardThird";
    postAllBoards(board);
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
        console.log("click");
    }
}

export class ActiveBoard {
    static set(id) {
        localStorage.setItem("active-board", id);
    }
    static getId() {
        return localStorage.getItem("active-board") ?? 0;
    }
    static getBoardName() {
        const id = this.getId();
        switch (id) {
            case 0:
                return "photos"; // rename to board-cards
            case 1:
                return "boardFirst"; // rename to board-cards.1
            case 2:
                return "boardSecond"; // rename to board-cards.2
            case 3:
                return "boardThird"; // rename to board-cards.3
            default:
                throw Exception("Доска с таким id не найдена");
        }
    }
    static getBoardStorage() {
        console.log(this.getBoardName());
        return localStorage.getItem(this.getBoardName());
    }
}
