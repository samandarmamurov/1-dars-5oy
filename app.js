// console.log(document.getElementById("text"));
// console.log(document.getElementsByClassName("title"));
// console.log(document.getElementsByTagName("text-p"));

// const titleEl = document.querySelector (".text-p")
// console.log(titleEl.textContent);
// titleEl.style = `
// color: blue;
// border: 2px solid red;
// `

const randomBtnEl = document.querySelector("#random-btn");
const body = document.body;

randomBtnEl.style = `
padding:10px 20px;
border: 2px solid red;
border-radius:10px;
color:pink;
cursor:pointer;

`;
function getRandomHex() {
  const hexColor = "abcdef0123456789";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexColor[Math.trunc(Math.random() * 16)];
  }
  body.style = `background-color: ${hex}`;
  document.querySelector("h1").textContent = hex; // ← shu qator qo'shildi
}

