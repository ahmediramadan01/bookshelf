"use strict";

const dialogElement = document.querySelector(".dialog");
const openDialogButtonElement = document.querySelector(".button--open");
const closeDialogButtonElement = document.querySelector(".button--close");
const bookFormElement = document.querySelector(".form");
const booksContainerElement = document.querySelector(".books");
const bookTitleElement = document.querySelector("#title");
const bookAuthorElement = document.querySelector("#author");
const bookPagesElement = document.querySelector("#pages");
const bookStatusElement = document.querySelector("#status");

let booksLibrary = [];

const Book = function (id, title, author, pages, status) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
};

Book.prototype.addBookToLibrary = function () {
	booksLibrary.push(this);
};

const renderLibrary = function () {
	booksContainerElement.innerHTML = "";

	for (const book of booksLibrary) {
		const bookHTML = `
        <article data-id="${book.id}" class="book ${book.status === "read" ? "book--read" : ""}">
            <div class="buttons">    
                <button class="button button--edit">
                    <img src="./images/edit.svg" alt="" class="edit-icon" />
                </button>
                <button class="button button--remove">
                    <img src="./images/remove.svg" alt="" class="remove-icon" />
                </button>
            </div>
            <h3 class="book__title">${book.title}</h3>
            <p class="book__author">${book.author}</p>
            <span class="book__pages">${book.pages}</span>
        </article>
        `;

		booksContainerElement.insertAdjacentHTML("beforeend", bookHTML);
	}
};

const addBook = function (event) {
	event.preventDefault();

	const bookTitle = bookTitleElement.value;
	const bookAuthor = bookAuthorElement.value;
	const bookPages = bookPagesElement.value;
	const bookStatus = bookStatusElement.value;
	const bookId = String(Date.now()).slice(-10);
	const book = new Book(bookId, bookTitle, bookAuthor, bookPages, bookStatus);
	book.addBookToLibrary();

	dialogElement.close();
	bookTitleElement.value = bookAuthorElement.value = bookPagesElement.value = "";
	bookStatusElement.value = "want";

	renderLibrary();
};

openDialogButtonElement.addEventListener("click", () => {
	dialogElement.showModal();
});
closeDialogButtonElement.addEventListener("click", () => {
	dialogElement.close();
});
bookFormElement.addEventListener("submit", addBook);
