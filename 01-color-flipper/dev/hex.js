// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hex = "0123456789ABCDEF";

function getRandomNumber(numOfNumbers) {
  return Math.floor(Math.random() * numOfNumbers);
}

function getRandomHexColor(str) {
  let randomColor = "#";

  for (let i = 0; i < 6; i++) {
    randomColor += str[getRandomNumber(str.length)];
  }

  return randomColor;
}

document.querySelector(".btn").onclick = function () {
  const hexColor = getRandomHexColor(hex);

  document.body.style.backgroundColor = hexColor;
  document.querySelector(".color").textContent = hexColor;
};
