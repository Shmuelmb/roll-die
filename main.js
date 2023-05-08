//func
const showOnlyOne = () => {
  random = Math.floor(Math.random() * (6 - 1)) + 1;
  cube.innerHTML = random;
};

const result = () => {
  const resultArr = [2, 6];
  const random = Math.floor(Math.random() * resultArr.length);
  cube.innerHTML = resultArr[random];
  clearInterval(roll);
  button.disabled = false;
};

//init vars
const cube = document.querySelector(".cube");
const button = document.querySelector("button");
let roll = "";

//css
document.body.style.textAlign = "center";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";
document.body.style.height = "90vh";

//event listener
button.addEventListener("click", () => {
  roll = setInterval(showOnlyOne, 500);
  setTimeout(result, 5490);
  button.disabled = true;
});
