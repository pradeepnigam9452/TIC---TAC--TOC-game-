
    const boxes = document.querySelectorAll(".box");
    const resetBtn = document.querySelector("#reset");

    let turnX = true;

    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const checkWinner = () => {
      for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        let val1 = boxes[a].innerText;
        let val2 = boxes[b].innerText;
        let val3 = boxes[c].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
          boxes[a].classList.add("winner");
          boxes[b].classList.add("winner");
          boxes[c].classList.add("winner");
          showWinner(val1);
          return true;
        }
      }
      return false;
    };

    const showWinner = (winner) => {
      setTimeout(() => {
        alert(`🎉 Player ${winner} wins!`);
        disableAllBoxes();
      }, 100);
    };

    const disableAllBoxes = () => {
      boxes.forEach(box => box.classList.add("disabled"));
    };

    const resetGame = () => {
      boxes.forEach(box => {
        box.innerText = "";
        box.classList.remove("disabled", "winner");
      });
      turnX = true;
    };

    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        if (box.innerText !== "") return;

        box.innerText = turnX ? "❌" : "⭕";
        turnX = !turnX;

        checkWinner();
      });
    });

    resetBtn.addEventListener("click", resetGame);
  