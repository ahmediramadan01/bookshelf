"use strict";

const dialogElement = document.querySelector(".dialog");
const openDialogButtonElement = document.querySelector(".button--open");
const closeDialogButtonElement = document.querySelector(".button--close");

openDialogButtonElement.addEventListener("click", () => {
	dialogElement.showModal();
});
closeDialogButtonElement.addEventListener("click", () => {
	dialogElement.close();
});
