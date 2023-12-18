import createImage from "./modules/createImage.js";
import getPinterest, {
  runPinterestApplication,
} from "./modules/getPinterest.js";
import { createElement, getElementByRef } from "./modules/createElement.js";
import listEvent from "./modules/listEvent.js";
import {
  searchByPhoto,
  chooseBoard,
  getBoardFirst,
  getBoardSecond,
  getBoardThird,
  addBord,
  complain,
  postBoardFirst,
  postBoardSecond,
  postBoardThird
} from "./modules/listEvent.js";
import { createCard } from "./modules/createCard.js";
document.addEventListener("DOMContentLoaded", function () {
  const {
    gallery,
    searchByTag,
    btn,
    btnBoardFirst,
    btnBoardSecond,
    btnBoardThird,
    boardBnt,
    complainBtn,
    addToBoardBtnFirst,
    addToBoardBtnSecond,
    addToBoardBtnThird,
    btnCancel,
    btnSend
  } = createElement;


const searchByTagElement = getElementByRef('searchByTag');
searchByTagElement.addEventListener("click", searchByPhoto);

const btnElement = getElementByRef('btn');
btnElement.addEventListener("click", chooseBoard);

// const btnBoardFirstElement = getElementByRef('btnBoardFirst');
// btnBoardFirstElement.addEventListener("click", getBoardFirst);

// const btnBoardSecondElement = getElementByRef('btnBoardSecond');
// btnBoardSecondElement.addEventListener("click", getBoardSecond);

// const btnBoardThirdElement = getElementByRef('btnBoardThird');
// btnBoardThirdElement.addEventListener("click", getBoardThird);

const boardBntElement = getElementByRef('boardBnt');
boardBntElement.addEventListener("click", addBord);

const complainBtnElement = getElementByRef('complainBtn');
complainBtnElement.addEventListener("click", complain);

const addToBoardBtnFirstElement = getElementByRef('addToBoardBtnFirst');
addToBoardBtnFirstElement.addEventListener("click", postBoardFirst);

const addToBoardBtnSecondElement = getElementByRef('addToBoardBtnSecond');
addToBoardBtnSecondElement.addEventListener("click", postBoardSecond);

const addToBoardBtnThirdElement = getElementByRef('addToBoardBtnThird');
addToBoardBtnThirdElement.addEventListener("click", postBoardThird);








});

