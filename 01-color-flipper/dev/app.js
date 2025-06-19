const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getRandomNumber = function (numOfNumbers) {
  return Math.floor(Math.random() * numOfNumbers);
};

btn.onclick = function () {
  const randomNumber = getRandomNumber(colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.innerText = colors[randomNumber];
};
