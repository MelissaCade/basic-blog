const postButton = document.querySelector("#post");
const usernameEntry = document.querySelector("#username");
const titleEntry = document.querySelector("#title");
const blogEntry = document.querySelector("#blog-post");
const postData = JSON.parse(localStorage.getItem("postData")) || [];

postButton.addEventListener("click", function (event) {
  event.preventDefault();
  const newPost = {
    id: crypto.randomUUID(),
    username: document.querySelector("#username").value,
    title: document.querySelector("#title").value,
    post: document.querySelector("#blog-post").value,
  };
  postData.push(newPost);

  if (username === "" || title === "" || post === "") {
    window.alert(
      "Please enter a Username, Title, and Blog Content before posting."
    );
    return;
  } else {
    localStorage.setItem("postData", JSON.stringify(postData));
    window.location.href = "https://melissacade.github.io/basic-blog/blog.html";
    // window.location.href = "blog.html";
  }
});
