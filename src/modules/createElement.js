
export const createElement = {
    gallery: '.gallery',
    searchByTag: "#searchByTag",
    btn: ".btn",
    btnBoardFirst: ".btnBoardFirst",
    btnBoardSecond: ".btnBoardSecond",
    btnBoardThird: ".btnBoardThird",
    boardBnt: ".boardBnt",
    complainBtn: ".complainBtn",
    addToBoardBtnFirst: ".addToBoardBtnFirst",
    addToBoardBtnSecond: ".addToBoardBtnSecond",
    addToBoardBtnThird: ".addToBoardBtnThird",
    btnCancel:".btnCancel",
    btnSend: ".btnSend"

}

export function getElementByRef(ref)
{
    return document.querySelector(createElement[ref]);
}

