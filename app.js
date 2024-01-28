let btn = document.getElementsByClassName("addBookBtn");
const myModal = document.getElementById("myModal");
const libraryBook = document.getElementsByClassName("libraryBook");
const formSubmit = document.getElementById("formSubmit");


// btn.onclick = function() {
//     myModal.style.display = "block";
// }

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

let myLibrary = [];

function getBookFromInput() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let isReadCheck = document.getElementById("isRead").checked;
    return new Book(title, author, pages, isReadCheck);
} 


function addBook(e) {
    e.preventDefault();
    const newBook = getBookFromInput(); 
    myLibrary.push(newBook);
    updateBookLibrary();
}

function createBookCard(book){
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("p");
    const nPages = document.createElement("p");
    const readBtn = document.createElement("button");

    bookTitle.textContent = `$(book.title)`;
    bookAuthor.textContent = `$(book.author)`;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(nPages);
}

function updateBookLibrary(){
    for (let book of myLibrary){
        createBookCard(book);
    }
}

formSubmit.onsubmit = addBook;


