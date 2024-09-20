function bloodGame(answer, randomPick) {
  let score = 0;
  const pattern = /^[01]$/;
  let answerCheck = true;
  answer.forEach((element) => {
    if (!pattern.test(element)) {
      answerCheck = false;
    }
  });
  if (answer.length == 8 && answerCheck) {
    let bloodGroups = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];
    let rightAnswers = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ];

    //let randomPick = undefined;

    //randomPick = Math.floor(Math.random() * bloodGroups.length);
    console.log(
      "¿Cuáles son los grupos donantes del grupo ",
      bloodGroups[randomPick],
      "?"
    );

    for (let i = 0; i < answer.length; i++) {
      if (answer[i] == 1 && rightAnswers[randomPick][i] == answer[i]) {
        score += 25;
      }
    }
  } else {
    score = null;
  }

  return score;
}

test("right answers", () => {
  expect(bloodGame([1, 0, 0, 0, 0, 0, 0, 0], 0)).toBe(25);
});

test("wrong answers", () => {
  expect(bloodGame([0, 0, 0, 0, 0, 0, 0, 0], 1)).toBe(0);
});

test("some wrong, some right", () => {
  expect(bloodGame([1, 0, 0, 1, 1, 0, 0, 1], 6)).toBe(50);
});

test("not enough answers", () => {
  expect(bloodGame([1, 0, 0, 1, 1, 0, 0], 2)).toBe(null);
});

test("non binary answers", () => {
  expect(bloodGame([1, 2, "w", 1, 1, 0, 0], 3)).toBe(null);
});
