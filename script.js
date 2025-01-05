// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.
// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda 5 prie esamos h3 elemento reikšmės.
// 12.2. Atima 5 iš esamos h3 elemento reikšmės.
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona
// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)
// 8. Jeigu skaitmuo h3 komponente yra didesnis už 9, tai „+" mygtukas turėtų patapti neveiksnus (disabled)
// 13. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.
// 14. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Šio elemento tekstas turėtų būti „Balai:"
// 15. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 15.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 15.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį prepend'inti prie ul elemento.
// 16. Į li elementą įrašytas balas turi būti tos pačios spalvos kaip ir h3 elemente.
// 17.1. Sukurti mygtuką ir jį įdėti į li elementą.
// 17.2. Paspaudus šį mygtuką, li elementas su balu turi būti ištrintas.
// 18. Po h4 elementu pridėti mygtuką, kurio tekstas būtų „Ištrinti visus balus". Paspaudus šį mygtuką, ištrinami visi li elementai.

let currentElement = document.querySelector("#numbers");
let hElement = document.createElement("h3");
currentElement.append(hElement);

let defaultValue = 5;
let counterElement = defaultValue;
hElement.textContent = counterElement;

let plusButton = document.createElement("button");
currentElement.append(plusButton);
let minusButton = document.createElement("button");
currentElement.append(minusButton);

plusButton.textContent = "+";
minusButton.textContent = "-";

let resetButton = document.createElement("button");
currentElement.append(resetButton);
resetButton.textContent = "Reset";

function resetAll() {
  counterElement = defaultValue;
  hElement.textContent = counterElement;
  updateNumberColor();
  disablePlusButton();
  disableMinusButton();
}

resetButton.addEventListener("click", resetAll);

let addTwoButton = document.createElement("button");
currentElement.append(addTwoButton);
addTwoButton.textContent = "+2";

let minusTwoButton = document.createElement("button");
currentElement.append(minusTwoButton);
minusTwoButton.textContent = "-2";

let addFiveButton = document.createElement("button");
currentElement.append(addFiveButton);
addFiveButton.textContent = "+5";

let minusFiveButton = document.createElement("button");
currentElement.append(minusFiveButton);
minusFiveButton.textContent = "-5";

plusButton.addEventListener("click", increaseNumberByOne);
minusButton.addEventListener("click", minusNumberByOne);
addTwoButton.addEventListener("click", increaseNumberByTwo);
minusTwoButton.addEventListener("click", minusNumberByTwo);
addFiveButton.addEventListener("click", increaseNumberByFive);
minusFiveButton.addEventListener("click", minusNumberByFive);

function increaseNumberByOne() {
  counterElement += 1;
  hElement.textContent = counterElement;
  updateNumberColor();
  disablePlusButton();
  disableMinusButton();
}

function minusNumberByOne() {
  counterElement -= 1;
  hElement.textContent = counterElement;
  updateNumberColor();
  disablePlusButton();
  disableMinusButton();
}

function increaseNumberByTwo() {
  counterElement += 2;
  hElement.textContent = counterElement;
  updateNumberColor();
  disablePlusButton();
  disableMinusButton();
}

function minusNumberByTwo() {
  counterElement -= 2;
  hElement.textContent = counterElement;
  updateNumberColor();
  disablePlusButton();
  disableMinusButton();
}

function increaseNumberByFive() {
  counterElement += 5;
  hElement.textContent = counterElement;
  updateNumberColor();
  disablePlusButton();
  disableMinusButton();
}

function minusNumberByFive() {
  counterElement -= 5;
  hElement.textContent = counterElement;
  updateNumberColor();
  disablePlusButton();
  disableMinusButton();
}

function updateNumberColor() {
  if (counterElement >= 5) {
    hElement.style.color = "green";
  } else {
    hElement.style.color = "red";
  }
}

function disablePlusButton() {
  if (counterElement >= 10) {
    plusButton.setAttribute("disabled", true);
    addTwoButton.setAttribute("disabled", true);
    addFiveButton.setAttribute("disabled", true);
  } else {
    plusButton.removeAttribute("disabled");
    addTwoButton.removeAttribute("disabled");
    addFiveButton.removeAttribute("disabled");
  }
}

function disableMinusButton() {
  if (counterElement <= 1) {
    minusButton.setAttribute("disabled", true);
    minusTwoButton.setAttribute("disabled", true);
    minusFiveButton.setAttribute("disabled", true);
  } else {
    minusButton.removeAttribute("disabled");
    minusTwoButton.removeAttribute("disabled");
    minusFiveButton.removeAttribute("disabled");
  }
}

let numberInput = document.createElement("input");
currentElement.append(numberInput);
numberInput.type = "number";
numberInput.max = 10;
numberInput.min = 1;

let gradesTitle = document.createElement("h4");
let gradesList = document.createElement("ul");
currentElement.append(gradesTitle);
currentElement.append(gradesList);

gradesTitle.textContent = "Balai:";

let saveGrade = document.createElement("button");
saveGrade.textContent = "Įrašyti balą";
currentElement.append(saveGrade);

saveGrade.addEventListener("click", () => {
  let gradeItem = document.createElement("li");
  gradeItem.textContent = counterElement;
  gradeItem.style.color = hElement.style.color;
  gradesList.prepend(gradeItem);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  gradeItem.append(deleteButton);

  deleteButton.addEventListener("click", () => {
    gradeItem.remove();
  });
});

let removeGrades = document.createElement("button");
removeGrades.textContent = "Ištrinti visus balus";
currentElement.append(removeGrades);

removeGrades.addEventListener("click", () => {
  let grades = document.querySelectorAll("ul li");
  grades.forEach((grade) => {
    grade.remove();
  });
});

numberInput.addEventListener("input", () => {
  if (numberInput.valueAsNumber >= 1 && numberInput.valueAsNumber <= 10) {
    counterElement = numberInput.valueAsNumber;
    hElement.textContent = counterElement;
    updateNumberColor();
    disablePlusButton();
    disableMinusButton();
  }
});

disablePlusButton();
disableMinusButton();
updateNumberColor();
