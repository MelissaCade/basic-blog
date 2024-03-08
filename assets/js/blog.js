const backButton = document.querySelector("#back");
const mainEl = document.getElementById("#blog-body");
const titleEl = document.getElementById("#title-card");
const postEl = document.getElementById("#paragraph-card");
const nameEl = document.getElementById("#username-card");

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "https://melissacade.github.io/basic-blog/";
});

let username = localStorage.getItem("usernameEntry");
let title = localStorage.getItem("titleEntry");
let blog = localStorage.getItem("blogEntry");

function addNewCard() {
  const newCard = document.createElement("div");
  newCard.setAttribute("class", "full-post");
  newCard.setAttribute("id", "post");
  const newTitle = document.createElement("h3");
  newTitle.setAttribute("class", "title-card");
  newTitle.textContent = title;
  const divider = document.createElement("hr");
  const newPost = document.createElement("p");
  newPost.setAttribute("class", "paragraph-card");
  newPost.textContent = blog;
  const newUser = document.createElement("h4");
  newUser.setAttribute("class", "username-card");
  newUser.textContent = username;

  newCard.appendChild(newTitle);
  newCard.appendChild(divider);
  newCard.appendChild(newPost);
  newCard.appendChild(divider);
  newCard.appendChild(newUser);
  mainEl.appendChild(newCard);
}

addNewCard();
