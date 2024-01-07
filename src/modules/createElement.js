export const createElement = {
    gallery: ".gallery",
    searchByTag: "#searchByTag",
    selectBoardBtn: ".selectBoardBtn",
    board: ".board",
    btnBoardFirst: "#btnBoardFirst",
    btnBoardSecond: "#btnBoardSecond",
    btnBoardThird: "#btnBoardThird",
    boardBnt: ".boardBnt",
    complaint: "complaint",
    complainBtn: ".complainBtn",
    addToBoardBtnFirst: ".addToBoardBtnFirst",
    addToBoardBtnSecond: ".addToBoardBtnSecond",
    addToBoardBtnThird: ".addToBoardBtnThird",
    btnCancel: ".btnCancel",
    btnSend: ".btnSend",
    imageButton: ".imageButton",
    noPins: ".noPins",
    closeMenu: ".closeMenu",
    menu: ".menu",
    addToBoard: ".addToBoard ",
    cardDescription: ".cardDescription",
    homeLink: "#pinterest-home-link",
    galleryList: ".galleryList",
    btnBoard: ".btnBoard",
    addToBoard: ".addToBoard",
};

export function getElementByRef(ref) {
    return document.querySelector(createElement[ref]);
}

export function getElementsByRef(ref) {
    return document.querySelectorAll(createElement[ref]);
}
