// Ejercicio 2: calcular el volumen de un tanque de agua en base a su diámetro y altura.
// * El resultado debe estar en litros.
// * Los valores de entrada pueden ser en cm o m.

function volumeCalc(diam, height, unitsMeters) {
  let volume = undefined;
  const pattern = /\d/;
  if (pattern.test(diam) && pattern.test(height)) {
    if (unitsMeters) {
      if (diam > 0 && height > 0) {
        volume = ((Math.PI * diam ** 2) / 4) * height;
        volume *= 1000;
      } else {
        volume = null;
      }
    } else {
      if (diam > 0 && height > 0) {
        diam /= 100;
        height /= 100;
        volume = ((Math.PI * diam ** 2) / 4) * height;
        volume *= 1000;
      } else {
        volume = null;
      }
    }
  } else {
    volume = null;
  }

  return volume;
}

test("right values", () => {
  expect(volumeCalc(23.4, 76.1, false)).toBeCloseTo(32.727);
});

test("negative diameter", () => {
  expect(volumeCalc(-1, 2.3, true)).toBe(null);
});

test("height is zero", () => {
  expect(volumeCalc(2.5, 0, true)).toBe(null);
});

test("non numbers in values", () => {
  expect(volumeCalc("a", 2.45, true)).toBe(null);
});

test("symbols in values", () => {
  expect(volumeCalc(42.5, "#", false)).toBe(null);
});
