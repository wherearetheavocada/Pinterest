import createImage from "./modules/createImage.js";
import getPinterest, {
  runPinterestApplication,
} from "./modules/getPinterest.js";
import { createElement, getElementByRef, getElementsByRef } from "./modules/createElement.js";
import listEvent, { btnCancel } from "./modules/listEvent.js";
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
  postBoardThird,
  getMenuCard,
  clickOnWin
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
    btnSend,
    imageButton
  } = createElement;


  function getPhotos() {
    runPinterestApplication();
    images = JSON.parse(localStorage.getItem("photos")) || [];
    const galleryElement = getElementByRef('gallery');

    galleryElement.innerHTML = createCard(images);
  }

  getPhotos();

  const imageButtonElements = getElementsByRef('imageButton');

  imageButtonElements.forEach(btn => {
    btn.addEventListener("click", getMenuCard);
  });

const btnBoardFirstElements = getElementsByRef('btnBoardFirst');
btnBoardFirstElements.forEach(btn => {
  btn.addEventListener("click", getBoardFirst);
})

const btnBoardSecondElements = getElementsByRef('btnBoardSecond');
btnBoardSecondElements.forEach(btn => {
  btn.addEventListener("click", getBoardSecond);

});

const btnBoardThirdElements = getElementsByRef('btnBoardThird');
btnBoardThirdElements.forEach(btn => {
btn.addEventListener("click", getBoardThird);
})



});


const searchByTagElement = getElementByRef('searchByTag');
searchByTagElement.addEventListener("input", searchByPhoto);

const selectBoardBtnElement = getElementByRef('selectBoardBtn');
selectBoardBtnElement.addEventListener("click", chooseBoard);

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

const btnCancelElement = getElementByRef('btnCancel');
btnCancelElement.addEventListener("click", btnCancel);

window.addEventListener('click', clickOnWin )




export let images;

