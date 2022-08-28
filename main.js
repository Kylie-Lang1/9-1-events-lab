// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const currentColor = document.querySelector(`#current-color`)

const colors = document.querySelectorAll(`#palette .color`)

colors.forEach((color) => {
  color.addEventListener(`click`, (event) => {
    currentColor.style.backgroundColor = color.style.backgroundColor
})
})


const cells = document.querySelectorAll(`.cell`)
cells.forEach((cell) => {
  cell.addEventListener(`click`, () => {
    cell.style.backgroundColor = currentColor.style.backgroundColor
  })
})