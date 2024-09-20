// Ejercicio 1: Validar un código PIN
// * Debe componerse por 4 o 6 dígitos
// * No puede contener letras
// * La función debe retornar Verdadero si el PIN coincide, de lo contrario Falso

function PINCheck(realPIN, tryPIN) {
  const pattern = /^\d{4}$|^\d{6}$/;
  let checkValue = false;
  if (pattern.test(tryPIN)) {
    if (tryPIN === realPIN) {
      checkValue = true;
    } else {
      checkValue = false;
    }
  } else {
    checkValue = false;
  }

  return checkValue;
}

test("wrong length PIN input", () => {
  expect(PINCheck("0189", "98712")).toBe(false);
});

test("wrong letters/symbols in PIN", () => {
  expect(PINCheck("0189", "r1@9")).toBe(false);
});

test("negative numbers in input", () => {
  expect(PINCheck("0189", "-1-5-31")).toBe(false);
});

test("empty input", () => {
  expect(PINCheck("0189", "")).toBe(false);
});

test("wrong PIN", () => {
  expect(PINCheck("0189", "2218")).toBe(false);
});

test("right input", () => {
  expect(PINCheck("0189", "0189")).toBe(true);
});
