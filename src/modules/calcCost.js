import { animate } from "../utils/animate";

export function calcConst() {
  const type = document.getElementById("calc-type");
  const typeGlazing = document.getElementById("calc-type-material");
  const square = document.getElementById("calc-input");
  const total = document.getElementById("calc-total");

  if (square) {
    square.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9.]/g, "");
      countCalc();
    });
  }
  if (type) type.addEventListener("change", countCalc);
  
  if (typeGlazing) typeGlazing.addEventListener("change", countCalc);


 function countCalc() {
  if (!type || !typeGlazing || !square) return;

  const typeOption = type.options[type.selectedIndex];
  const glazingOption = typeGlazing.options[typeGlazing.selectedIndex];
  if (!typeOption || !glazingOption) return;

  const calcTypeValue = parseFloat(typeOption.value);
  const calcGlazingValue = parseFloat(glazingOption.value);
  const calcSquareValue = parseFloat(square.value);

  if (
    !isNaN(calcTypeValue) &&
    !isNaN(calcGlazingValue) &&
    !isNaN(calcSquareValue) &&
    square.value.trim() !== ""
  ) {
    const totalValue = calcSquareValue * calcGlazingValue * calcTypeValue;
    total.value = totalValue.toFixed(3);
  } else {
    total.value = 0;
  }
}
  countCalc();
}
