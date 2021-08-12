const startBtn = document.querySelector(".btn__start");
const textBox = document.querySelector(".textbox"); // 텍스트박스, 무조건 부모
const startTextBox = document.querySelector(".textbox__start");

let personality = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
};

let mbti = {
  Exteraversion: personality.A,
  Introversion: personality.B,
  Sensing: personality.C,
  iNtuition: personality.D,
  Thinking: personality.E,
  Feeling: personality.F,
  Judging: personality.G,
  Perceiving: personality.H,
};

const handleStartBtn = (e) => {
  textBox.removeChild(startTextBox);
  textBox.appendChild("Question1");
};

startBtn.addEventListener("click", handleStartBtn);
