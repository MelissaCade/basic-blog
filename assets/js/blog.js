const backButton = document.querySelector("#back");
const mainEl = document.getElementById("blog-body");

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "https://melissacade.github.io/basic-blog/";
  // window.location.href = "index.html";
});

function addNewCard() {
  const newBlogPost = JSON.parse(localStorage.getItem("newPost"));
  const newCard = document.createElement("div");
  newCard.setAttribute("class", "full-post");
  newCard.setAttribute("id", "post");
  const newTitle = document.createElement("h3");
  newTitle.setAttribute("class", "title-card");
  newTitle.textContent = newBlogPost.title;
  const divider = document.createElement("hr");
  const divider1 = document.createElement("hr");
  const newPost = document.createElement("p");
  newPost.setAttribute("class", "paragraph-card");
  newPost.textContent = newBlogPost.post;
  const newUser = document.createElement("h4");
  newUser.setAttribute("class", "username-card");
  newUser.textContent = newBlogPost.username;

  newCard.appendChild(newTitle);
  newCard.appendChild(divider1);
  newCard.appendChild(newPost);
  newCard.appendChild(divider);
  newCard.appendChild(newUser);
  mainEl.appendChild(newCard);
}

addNewCard();
