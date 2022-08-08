const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const numberOfAttempts = document.querySelector("screen2 h2");
const randomNumber = Math.round(Math.random() * 10);
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 1;

/*
EVENTOS
Função callback significa "chamar de volta" nesse contexto em específico toda vez que clicar chama de volta essa função.
*/
btnTry.addEventListener("click", (event) => {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) === randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
    numberOfAttempts.innerText = `Você acertou em ${xAttempts} tentativas!!!`;
  }

  inputNumber.value = "";
  xAttempts++;
});

btnReset.addEventListener("click", () => {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  xAttempts = 1;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
  }
});
