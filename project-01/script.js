const barsElement = document.querySelector(".bars");

barsElement.addEventListener("click", () => {
  document.querySelector("header nav ul").classList.toggle("active");
  barsElement.classList.toggle("active");
});
