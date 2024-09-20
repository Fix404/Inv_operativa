// Ejercicio 4: calcular el siglo

function centuryCalc(year) {
  const pattern=/\d/
  let century = year / 100;

  if(pattern.test(year)){
    if(century>=0){
      if (century - Math.floor(century) != 0) {
        century = Math.floor(century);
        century += 1;
      } else {
        century = Math.floor(century);
      }
      console.log(century);
    }else{
      console.log("Año inválido: valor negativo");
      century=null;
    }
  }else{
    console.log("Año inválido: valor no numérico");
    century=null;
  }

  return century;
}

test("simple example", () => {
  expect(centuryCalc(1289)).toBe(13);
});

test("tricky year", () => {
  expect(centuryCalc(2000)).toBe(20);
});

test("negative year", () => {
  expect(centuryCalc(-234)).toBe(null);
});

test("not a year", () => {
  expect(centuryCalc(true)).toBe(null);
});

test("first century", () => {
  expect(centuryCalc(27)).toBe(1);
})