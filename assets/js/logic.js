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
