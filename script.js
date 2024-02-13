const myLibrary = [];

function Book(name,author,pages,read) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages =pages;
  this.read = read;
}

function display()
{
  let library = document.querySelector(".library")
  //after everyBook entry , not repeation of books 
  library.innerHTML="";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement('div')
    bookEl.innerHTML = 
    `
    <div class="BookCards">
      <div style="display = flex; flex-direction:column">
        <h3>${book.name}</h3>
        <h4>${book.author}</h4>
        <p>${book.pages}</p>
        <p>${book.read}<p>
      </div>
    </div>
    `;
    library.appendChild(bookEl)
  }

}
function addBookToLibrary() {
  // do stuff here
  let name = document.querySelector("#name").value
  let author = document.querySelector("#author").value
  let pages = document.querySelector("#pages").value
  let read = document.querySelector("#read").value

  //trying function
  let newBook = new Book(name,author,pages,read)

  //displaying books added
  myLibrary.push(newBook)
  console.log(myLibrary)
  display()
}

let newBookEntry = document.querySelector("#newBookEntry")
let newButton = document.querySelector("#newButton");

newButton.addEventListener("click", function(){
  // alert("it is working!")
  newBookEntry.style.display ="flex"
  
})

newBookEntry.addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary()
})
