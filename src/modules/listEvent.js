import { createElement } from "./createElement.js";
import { images } from "../script.js";
import createCard from "./createCard.js";

export function searchByPhoto(event) {


document.addEventListener('DOMContentLoaded', function() {
	const input = document.getElementById('serch-input');
	input.addEventListener("input", (event) => {
		//...
	})
})

window.onload = () =>{
    const input = document.querySelector('#input')
    input.oninput = function () {
        const value = this.value.trim();
        const list = document.querySelectorAll({ alt_description })

        if(value != ''){
            list.forEach(elem => {
                if(elem.innerText.search(value) == -1) {
                    elem.classList.add('hide')
                }
            })
        }else{
            list.forEach(elem => {
                elem.classList.remove('hide')
            })
        }
        console.log(this.value);
    }
}
}
export function chooseBoard() {
  document.getElementById("board").classList.toggle("show");



  
  // createElement.board.classList.toggle("show");
  //вернёт только карточки первой доски
    // return getBoardFirst();
  
//   carts = getBoardFirst()
//   const galleryElement = getElementByRef('gallery');

//   galleryElement.innerHTML = createCard(carts);

  //   // when try report
  //   localStorage.setItem('selected-card-id', '12345');

  //   // in send
  //   const id = localStorage.getItem('selected-cart-id');

  //   const card = document.getElementById(id);
  //   card.img.remove();
}
export function getBoardFirst() {
	// const allCarts = JSON.parse(localStorage.getItem(photos));
	// const boardCarts = JSON.parse(localStorage.getItem("board_1")) // поменять на board_ + ид доски
	// return allCarts.filter((cart) => boardCarts.includes(cart.id));
    // const id = localStorage.getItem('boardFirst')
    // console.log('hello')
    // console.log(id)

    const imagesOnBoard = JSON.parse(localStorage.getItem('boardFirst'));
console.log('hello')
    if (imagesOnBoard) {
      noPins.innerHTML = "";
      gallery.innerHTML = createList(imagesOnBoard);
      board.classList.add("show");
    } else {
      gallery.innerHTML = "";
      noPins.innerHTML = `<p class="no-pins">You have no saved pins here :(</p>`;
      board.classList.add("show");
    }

}
export function getBoardSecond() {}
export function getBoardThird() {}
export function addBord() {
    document.getElementById("addToBoard").classList.toggle("show");
}
export function complain() {
    document.getElementById("complaint").classList.toggle("show");
}

function postBoard(boardNum) {

}

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

    const id = localStorage.getItem('cart-id');
    localStorage.setItem('boardFirst', id);




}

export function postBoardSecond() {}
export function postBoardThird() {}

export function getMenuCard(event,id) {
	console.log(event);
	const menu =  document.getElementById("menu");

	menu.classList.toggle("show1");
	menu.style.position = 'absolute';
	menu.style.left = event.x - 110 + 'px';
	menu.style.top = event.y + 20 + 'px';

	const {target} = event;

	localStorage.setItem('cart-id', target.id)

}



    export function btnCancel () {
     const complaint = document.getElementById('complaint')
     complaint.classList.toggle("show");
    }
 
    export function clickOnWin (event) {
        // if(
        // !event.target.matches('.menu', '.addToBoard', 'complaint', 'board')
        // ){
        //     createElement.complaint.classList.add("show");
        // }
        }