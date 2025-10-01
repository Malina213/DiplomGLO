import { animate } from "../utils/animate";

export function calcConst() {
  const type = document.getElementById("calc-type");
  const typeGlazing = document.getElementById("calc-type-material");
  const square = document.getElementById("calc-input");
  const total = document.getElementById("calc-total");

  square.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
    countCalc();
  });
  type.addEventListener("change", countCalc);
  typeGlazing.addEventListener("change", countCalc);

  function countCalc() {
    const calcTypeValue = parseFloat(type.options[type.selectedIndex].value);
    const calcGlazingValue = parseFloat(
      typeGlazing.options[typeGlazing.selectedIndex].value
    );
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
