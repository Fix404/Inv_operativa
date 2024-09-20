// Ejercicio 3: una persona pedalea durante una cantidad de tiempo.
// Cada hora debe consumir 0.5 litros de agua.
// En base al tiempo pedaleado, entregar la cantidad de agua en litros.

function waterCalc(time){
    const pattern=/\d/;
    let water=null;

    if(pattern.test(time)){
        if(time > 0){
            water=Math.floor(0.5*time);
        }else{
            console.log("El valor ingresado no es positivo");
        }
    }else{
        console.log("EL valor ingresado no es un número válido");
    }

    return water;
}

test("integer time", () => {
    expect(waterCalc(2)).toBe(1);
});

test("floating time", () => {
    expect(waterCalc(6.7)).toBe(3);
});

test("non number input", () => {
    expect(waterCalc("j")).toBe(null);
});

test("non positive input", () => {
    expect(waterCalc(-3.5)).toBe(null);
});

test("zero time", () => {
    expect(waterCalc(0)).toBe(null);
});