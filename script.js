// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus

let currentElement = document.querySelector("#numbers");

let newElement = document.createElement("h3");
currentElement.append(newElement);

let firstButton = document.createElement("button");
currentElement.append(firstButton);
let secondButton = document.createElement("button");
currentElement.append(secondButton);
// 3. h3 elemento tekstas turėtų būti „5"
newElement.textContent = 5;
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
firstButton.textContent = "+";
secondButton.textContent = "-";

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
firstButton.addEventListener("click", increaseNumber);
secondButton.addEventListener("click", decreaseNumber);
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
function decreaseNumber() {
  newElement.textContent = Number(newElement.textContent) - 1;
  disabledButton();
  disabledButtonSecond();
  updateNumberColor();
}
function increaseNumber() {
  newElement.textContent = Number(newElement.textContent) + 1;
  disabledButtonSecond();
  disabledButton();
  updateNumberColor();
}
// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
function disabledButton() {
  if (Number(newElement.textContent) < 2) {
    secondButton.setAttribute("disabled", true);
  } else {
    secondButton.removeAttribute("disabled");
  }
}

disabledButton();

// 8. Jeigu skaitmuo h3 komponente yra didesnis už 9, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

function disabledButtonSecond() {
  if (Number(newElement.textContent) > 9) {
    firstButton.setAttribute("disabled", true);
  } else {
    firstButton.removeAttribute("disabled");
  }
}

disabledButtonSecond();
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.
function updateNumberColor() {
  if (Number(newElement.textContent) >= 5) {
    newElement.style.color = "green";
  } else {
    newElement.style.color = "red";
  }
}

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

let resetButton = document.createElement("button");
currentElement.append(resetButton);
resetButton.textContent = "Reset";

function resetAll() {
  newElement.textContent = 7;
  disabledButton();
  disabledButtonSecond();
  firstButton.removeAttribute("disabled");
  secondButton.removeAttribute("disabled");
}

resetButton.addEventListener("click", resetAll);

// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
let addElement = document.createElement("button");
currentElement.append(addElement);
addElement.textContent = "+2";
function increaseNumberByTwo() {
  newElement.textContent = Number(newElement.textContent) + 2;
  updateNumberColor();
}
addElement.addEventListener("click", increaseNumberByTwo);
increaseNumberByTwo();
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.
let deductElement = document.createElement("button");
currentElement.append(deductElement);
deductElement.textContent = "-2";

function decreaseNumberByTwo() {
  newElement.textContent = Number(newElement.textContent) - 2;
  updateNumberColor();
}
deductElement.addEventListener("click", decreaseNumberByTwo);
decreaseNumberByTwo();

// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda 5 prie esamos h3 elemento reikšmės.
// 12.2. Atima 5 iš esamos h3 elemento reikšmės.

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
