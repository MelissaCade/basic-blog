const postButton = document.querySelector("#post");
const usernameEntry = document.querySelector("#username");
const titleEntry = document.querySelector("#title");
const blogEntry = document.querySelector("#blog-post");

postButton.addEventListener("click", function (event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const title = document.querySelector("#title").value;
  const post = document.querySelector("#blog-post").value;
  if (username === "" || title === "" || post === "") {
    return;
  } else {
    localStorage.setItem("usernameEntry", username);
    localStorage.setItem("titleEntry", title);
    localStorage.setItem("blogEntry", post);
    window.location.href =
      "file:///C:/Users/proud/Desktop/Coding-Bootcamp/my-projects/basic-blog/blog.html";
  }
});
