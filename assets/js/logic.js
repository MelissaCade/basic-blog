const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

let mode = "dark";

themeSwitcher.addEventListener("click", function () {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
    themeSwitcher.setAttribute("src", "./assets/images/moon.png");
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
    themeSwitcher.setAttribute("src", "./assets/images/sun.png");
  }
});

//event listener for click on post button
//save input to local storage?
//when redirected, put stuff on new page?