import { createElement, getElementByRef } from "./createElement.js";
import { images } from "../script.js";

import { createImage } from "./createImage";
import { createCard } from "./createCard.js";

export function searchByPhoto(event) {
    console.log(event.target.value);
    const { currentTarget } = event;
    const filterValue = currentTarget.value.toLowerCase();
    const filteredImages = images.filter(({ alt_description }) =>
        alt_description.toLowerCase().includes(filterValue)
    );
    console.log(createElement, createElement.gallery);
    const gallery = document.querySelector(createElement.gallery);
    gallery.innerHTML = createCard(filteredImages);
}
export function chooseBoard(event) {
    document.getElementById("board").classList.toggle("show");
    event.stopPropagation();
}
export function getBoardFirst() {
    // const allCarts = JSON.parse(localStorage.getItem(photos));
    // const boardCarts = JSON.parse(localStorage.getItem("board_1")) // поменять на board_ + ид доски
    // return allCarts.filter((cart) => boardCarts.includes(cart.id));
    // const id = localStorage.getItem('boardFirst')
    // console.log('hello')
    // console.log(id)
    //     const imagesOnBoard = JSON.parse(localStorage.getItem('boardFirst'));
    // console.log('hello')
    //     if (imagesOnBoard) {
    //       noPins.innerHTML = "";
    //       gallery.innerHTML = createList(imagesOnBoard);
    //       board.classList.add("show");
    //     } else {
    //       gallery.innerHTML = "";
    //       noPins.innerHTML = '';
    //       board.classList.add("show");
    //     }
}
export function getBoardSecond() {}
export function getBoardThird() {}
export function addBord(event) {
    document.getElementById("addToBoard").classList.toggle("show");
    event.stopPropagation();
}
export function complain(event) {
    document.getElementById("complaint").classList.toggle("show");
    event.stopPropagation();
}

function postBoard(boardNum) {}

export function postBoardFirst(boardNum) {
    // const id = localStorage.getItem('cart-id');

    // const boardStr = localStorage.getItem('board_' + boardNum); // "[1,2,3]"
    // const board = JSON.parse(boardStr); // [1,2,3]

    // // TODO: Проверить если доски не сущесвует создать

    // board.append(id); // [1,2,3,id]

    // localStorage.setItem('board_' + boardNum, board); // [1,2,3,id] => board_

    // //для получения карточки
    // // очистить все карточки
    // // передать через localStorage карточки

    const id = localStorage.getItem("cart-id");
    localStorage.setItem("boardFirst", id);
}

export function postBoardSecond() {}
export function postBoardThird() {}

export function getMenuCard(event, id) {
    console.log(event);
    const menu = document.getElementById("menu");

    menu.classList.add("show");
    menu.style.position = "absolute";
    menu.style.left = event.pageX - 110 + "px";
    menu.style.top = event.pageY + 20 + "px";

    const { target } = event;

    localStorage.setItem("cart-id", target.id);

    event.stopPropagation();
}

export function btnCancel() {
    const complaint = document.getElementById("complaint");
    complaint.classList.toggle("show");
}

export function clickOnWin(event) {
    const menu = getElementByRef("menu");
    const board = getElementByRef("board");
    if (menu || board || addToBoard || complaint) {
        menu.classList.remove("show");
        board.classList.remove("show");
    }
    // const closeMenu = getElementsByRef("closeMenu");
    // if (closeMenu) {
    //     closeMenu.forEach((e) => e.remove("show"));
    //     console.log("click");
    // }
}
