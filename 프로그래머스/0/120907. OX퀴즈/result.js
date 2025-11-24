function solution(quiz) {
  var answer = [];

  for (let i = 0; i < quiz.length; i++) {
    let sign = "+";
    const split = quiz[i].split(" ");
    const expression = split.slice(0, split.indexOf("="));
    const arrayResult = Number(split.slice(split.indexOf("=") + 1)[0]);
    const reduce = expression.reduce((acc, cur) => {
      if (cur === "+" || cur === "-") {
        sign = cur;
      } else {
        if (sign === "+") {
          acc += Number(cur);
        } else if (sign === "-") {
          acc -= Number(cur);
        }
      }

      return acc;
    }, 0);

    if (reduce === arrayResult) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }

  return answer;
}
