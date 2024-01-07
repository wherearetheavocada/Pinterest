import createImage from "./modules/createImage.js";
import getPinterest, {
    runPinterestApplication,
} from "./modules/getPinterest.js";
import {
    createElement,
    getElementByRef,
    getElementsByRef,
} from "./modules/createElement.js";
import listEvent, {
    ActiveBoard,
    btnCancel,
    updateBoardCards,
} from "./modules/listEvent.js";
import {
    searchByText,
    chooseBoard,
    addBord,
    complain,
    getMenuCard,
    clickOnWin,
    sendComplain,
    recordingBoardCards,
} from "./modules/listEvent.js";
import { createCard } from "./modules/createCard.js";
document.addEventListener("DOMContentLoaded", function () {
    const {
        gallery,
        searchByTag,
        btn,
        boardBnt,
        complainBtn,
        btnCancel,
        btnSend,
        imageButton,
    } = createElement;

    function renderPhotos() {
        runPinterestApplication();
        images = JSON.parse(localStorage.getItem("photos")); // Сделать совместимым с ActiveBoard
        const galleryElement = getElementByRef("gallery");

        ActiveBoard.set();
        galleryElement.innerHTML = createCard(images);
    }

    renderPhotos();

    const imageBtn = getElementsByRef("imageButton");

    imageBtn.forEach((btn) => {
        btn.addEventListener("click", getMenuCard);
    });

    const btnBoards = getElementsByRef("btnBoard");
    btnBoards.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            const { target } = event;

            const boardId = parseInt(target.dataset.board);
            ActiveBoard.set(boardId);
            updateBoardCards();
        });
    });

    const addToBoard = getElementsByRef("addToBoard");
    addToBoard.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            const { target } = event;

            const boardId = parseInt(target.dataset.board);
            ActiveBoard.set(boardId);
            recordingBoardCards(boardId);
        });
    });

    const homeLink = getElementByRef("homeLink");
    homeLink.addEventListener("click", () => {
        ActiveBoard.set(0);
        renderPhotos(); // change to updateBoardCards

        document.getElementById("noPins").textContent = "";
    });
});

const searchByTagInput = getElementByRef("searchByTag");
searchByTagInput.addEventListener("input", searchByText);

const chooseBoardButton = getElementByRef("selectBoardBtn");
chooseBoardButton.addEventListener("click", chooseBoard);

const addBordButton = getElementByRef("boardBnt");
addBordButton.addEventListener("click", addBord);

const complainButton = getElementByRef("complainBtn");
complainButton.addEventListener("click", complain);

const buttonCancel = getElementByRef("btnCancel");
buttonCancel.addEventListener("click", btnCancel);

const buttonSend = getElementByRef("btnSend");
buttonSend.addEventListener("click", sendComplain);
window.addEventListener("click", clickOnWin);

export let images;
