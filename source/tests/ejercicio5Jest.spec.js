// Ejercicio 5: hacer un juego de piedra, papel o tijera.
// * Se reciben dos entradas y se devuelve quién gana
// * Si hay empate, se indica empate:

function rockPaperScissors(player1, player2){
    const options=["piedra", "papel", "tijeras"];
    let result="";

    if(options.includes(player1) && options.includes(player2)){
        if(player1 == player2){
            result="Empate";
        }else{
            switch (player1) {
                case "piedra":
                    if(player2=="tijeras"){
                        result="Jugador 1 gana";
                    }else{
                        result="Jugador 2 gana";
                    }
                    break;
                case "papel":
                    if(player2=="piedra"){
                        result="Jugador 1 gana";
                    }else{
                        result="Jugador 2 gana";
                    }
                    break;
                case "tijeras":
                    if(player2=="papel"){
                        result="Jugador 1 gana";
                    }else{
                        result="Jugador 2 gana";
                    }
                    break;
                default:
                    break;
            }
        }
    }else{
        console.log("La opción ingresada no es válida");
        result=null;
    }

    console.log(result);
    return result;
}

test("player 1 wins", () => {
    expect(rockPaperScissors("papel", "piedra")).toBe("Jugador 1 gana");
});

test("player 2 wins", () => {
    expect(rockPaperScissors("tijeras", "piedra")).toBe("Jugador 2 gana")
});

test("tie", () => {
    expect(rockPaperScissors("tijeras", "tijeras")).toBe("Empate");
});

test("bad input", () => {
    expect(rockPaperScissors("papel", "escopeta")).toBe(null);
});

test("number input", () => {
    expect(rockPaperScissors(2, "piedra")).toBe(null);
});
