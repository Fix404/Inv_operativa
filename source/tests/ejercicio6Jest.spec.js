// Ejercicio 6: validador de direcciones:
// Comprobar si un elemento en formato JSON posee ciertas cualidades.

function adressCheck(adress){
    let checkedAdress=null;
    let ok=true;
    let counter=0;

    for (const x in adress){
        counter+=1;
    }

    if(counter==7){
        for(const x in adress){
            if(adress[x]==null || adress[x]==""){
                if (x=="floor_apartment" || x=="town"){
                    ok=true;
                    continue;
                }else{
                    console.log("Dirección no válida");
                    ok=false;
                    break;
                }
            }
        }
    }else{
        console.log("La cantidad de atributos no es la correcta");
        ok=false;
    }

    if(ok){
        console.log("La dirección es válida");
    }

    return ok;
}

test("valid full adress", () => {
    expect(adressCheck({
        "street": "Necochea",
        "number": 2311,
        "floor_apartment": "F2",
        "zip_code": 5513,
        "town": "Luzuriaga",
        "city": "Mendoza",
        "province": "Mendoza"
    })).toBe(true);
});

test("invalid adress", () => {
    expect(adressCheck({
        "street": "Necochea",
        "number": null,
        "floor_apartment": "F2",
        "zip_code": 5513,
        "town": "Luzuriaga",
        "city": "Mendoza",
        "province": "Mendoza"
    })).toBe(false);
});

test("valid adress no town", () => {
    expect(adressCheck({
        "street": "Necochea",
        "number": 2311,
        "floor_apartment": "F2",
        "zip_code": 5513,
        "town": "",
        "city": "Mendoza",
        "province": "Mendoza"
    })).toBe(true);
});

test("valid adress no f_a", () => {
    expect(adressCheck({
        "street": "Necochea",
        "number": 2311,
        "floor_apartment": "",
        "zip_code": 5513,
        "town": "Luzuriaga",
        "city": "Mendoza",
        "province": "Mendoza"
    })).toBe(true);
});

test("invalid adress missing atribute",() => {
    expect(adressCheck({
        "street": "Necochea",
        "number": 2311,
        "floor_apartment": "",
        "zip_code": 5513,
        "city": "Mendoza",
        "province": "Mendoza"
    })).toBe(false);
})