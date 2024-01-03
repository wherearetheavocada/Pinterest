import createImage from "./modules/createImage.js";
import getPinterest, {
    runPinterestApplication,
} from "./modules/getPinterest.js";
import {
    createElement,
    getElementByRef,
    getElementsByRef,
} from "./modules/createElement.js";
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
    clickOnWin,
    sendComplain,
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
        imageButton,
    } = createElement;

    function getPhotos() {
        return JSON.parse(localStorage.getItem("photos")) || [];
    }
    function renderPhotos() {
        runPinterestApplication();
        images = getPhotos();
        const galleryElement = getElementByRef("gallery");

        galleryElement.innerHTML = createCard(images);
    }

    renderPhotos();

    const imageBtn = getElementsByRef("imageButton");

    imageBtn.forEach((btn) => {
        btn.addEventListener("click", getMenuCard);
    });

    const buttonBoardFirst = getElementsByRef("btnBoardFirst");
    buttonBoardFirst.forEach((btn) => {
        btn.addEventListener("click", getBoardFirst);
    });

    const buttonBoardSecond = getElementsByRef("btnBoardSecond");
    buttonBoardSecond.forEach((btn) => {
        btn.addEventListener("click", getBoardSecond);
    });

    const buttonBoardThird = getElementsByRef("btnBoardThird");
    buttonBoardThird.forEach((btn) => {
        btn.addEventListener("click", getBoardThird);
    });

    const homeLink = getElementByRef("homeLink");
    homeLink.addEventListener("click", () => {
        renderPhotos();

        document.getElementById("noPins").textContent = "";
    });
});

const searchByTagInput = getElementByRef("searchByTag");
searchByTagInput.addEventListener("input", searchByPhoto);

const chooseBoardButton = getElementByRef("selectBoardBtn");
chooseBoardButton.addEventListener("click", chooseBoard);

const addBordButton = getElementByRef("boardBnt");
addBordButton.addEventListener("click", addBord);

const complainButton = getElementByRef("complainBtn");
complainButton.addEventListener("click", complain);

const addToBoardButtonFirst = getElementByRef("addToBoardBtnFirst");
addToBoardButtonFirst.addEventListener("click", postBoardFirst);

const addToBoardButtonSecond = getElementByRef("addToBoardBtnSecond");
addToBoardButtonSecond.addEventListener("click", postBoardSecond);

const addToBoardButtonThird = getElementByRef("addToBoardBtnThird");
addToBoardButtonThird.addEventListener("click", postBoardThird);

const buttonCancel = getElementByRef("btnCancel");
buttonCancel.addEventListener("click", btnCancel);

const buttonSend = getElementByRef("btnSend");
buttonSend.addEventListener("click", sendComplain);
window.addEventListener("click", clickOnWin);

export let images;
