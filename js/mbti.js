const startBtn = document.querySelector(".btn__start");
const textBox = document.querySelector(".textbox"); // 텍스트박스, 무조건 부모
const startTextBox = document.querySelector(".textbox__start");

const questionArray = [
  "Q1. 너는 하루정도 여행을 다녀오고 싶을때 어떻게 하는편이야?",
  "Q2. 만약 너가 교사라면 학생들한테 어떤걸 가르치고 싶어?",
  "Q3. 너는 대체로 다른사람과 잘 어울려?",
  "Q4. 너는 감정과 이성중에 뭘 더 내세워?",
  "Q5. 대부분의 사람들이 일상적으로 처리하는 일을 너가 하게 될 때 어떻게 처리하는걸 좋아해?",
  "Q6. 너는 친구들 사이에서 소문에 밝은 편이야?",
  "Q7. 주말에 마쳐야 되는 일의 목록을 작성해야 한다는 생각은, 너에게 어때?",
  "Q8. 어떤 특별한 일을 처리할 때 너는 어떻게 하는 편이야?",
  "Q9. 너는 다른사람과 우정을 맺을때 어떤 스타일이야?",
  "Q10. 너가 우러러 보는 사람의 타입은 ?",
  "Q11. 데이트나 파티를 준비할 때 너는 어떻게 준비하는 편이야?",
  "Q12. 너는 평소에 어떤 사람들과 잘 어울려?",
  "Q13. 여러 사람들과 함께 있을 때 너는?",
  "Q14. 너는 어떤 칭찬을 더 좋은 칭찬이라고 생각해?",
  "Q15. 너는 취미로 독서를 할 때 작가의 어떤 표현을 더 선호해?",
  "Q16. 대화를 할 때, 누구하고나 쉽게 이야기를 나누는 편이야?",
  "Q17. 너에게 짜여진 시간표를 따르는 일이란?",
  "Q18. 어떤 일을 언제 할 것이라는 계획이 미리 짜여져 있을 때 네 생각은 어때?",
  "Q19. 넌 일을 어떤 경우에 더 성공적으로 처리해?",
  "Q20. 넌 어떤 사람으로 불리기를 원해?",
  "Q21. 사람들이 많은 그룹 내에서 넌 어떻게 행동하는 편이야?",
  "Q22. 너는 평소에 감상과 논리 뭘 더 중요하게 생각해?",
  "Q23. 넌 어떤 사람을 친구로 사귀고싶어?",
  "Q24. 너를 처음 만나는 사람들은 너의 관심사를 금방 파악하는 편이야?",
  "Q25. 넌 일상생활을 하면서 미리 계획을 짜는편이야? ",
  "Q26. 너는 평소에 너 자신을 잘 표현해?",
  "Q27. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q28. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q29. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q30. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q31. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q32. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q33. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q34. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q35. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q36. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q37. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q38. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q39. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q40. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q41. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q42. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q43. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q44. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q45. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q46. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q47. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q48. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q49. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q50. 이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
  "Q51. 파티 석상에서 너는 많은 사람들과 대화할거같아?",
  "Q52. 너는 회사에서 먼저 다른사람한테 말을 거는편이야?",
  "Q53. 일을 할 때 너는 기한을 정해놓고 하는편이야?",
  "Q54. 다른 사람한테 접근할 때 너의 성향은?",
  "Q55. 넌 둘중에 어느 능력을 더 가지고싶어?",
  "Q56. 다른 사람들과 일상적이 아닌 새로운 관계를 맺는 건 너에게 어떻게 느껴져?",
  "Q57. 넌 둘중 어떤것에 더 가치를 둬?",
  "Q58. 넌 모르는 사람하고 오래 이야기 할 수 있어?",
  "Q59. 넌 어떤 이벤트를 더 좋아해?",
  "Q60. 사람들은 널 평소에 어떻게 대해?",
];

const answer1Array = [
  "언제 무엇을 할 것인가를 계획하는 편이야..",
  "실제적인 사실을 다루는 과목들을 가르치고 싶어!",
  "응! 난 다른사람들과 싶게 어울리는 편이야.",
  "나는 감정을 이성보다 더 자주 내세우는 편이야.",
  "난 일반적인 관습을 따라 처리하는 것을 더 좋아해!",
  "아니! 난 소식이나 소문을 제일 늦게 듣는 편이야!",
  "호감이 가는편이지!",
  "시작하기 전에 미리 조심스럽게 계획을 세우는 편이야.",
  "소수의 사람들과 깊은 우정을 맺는 편이지!",
  "보수적이어서 결코 남에게 자신을 드러내지 않는 사람!",
  "난 미리 계획하는걸 원하는 편이야.",
  "난 상상력이 풍부한 사람들과 더 잘 어울리는 것 같아.",
  "여러 사람들 사이에 끼어 함께 대화를 나누는 편이야.",
  "진실한 감정을 가진 사람으로 불리우는 것",
  "작가의 기묘하거나 독창적인 표현을 즐기는 편이야.",
  "응! 난 누구하고나 쉽게 얘기를 나누는 편이야.",
  "마음에 들어!",
  "그것에 맞추어 일할 수 있기 때문에 좋다고 느끼는 편이야.",
  "예상하지 않은 일을 다루어야 할 때!.",
  "창조적인 사람",
  "주로 내가 다른 사람을 소개하는 편이야.",
  "논리보다는 감상을 더 중요시하는 편!",
  "언제나 새로운 아이디어를 내는 사람!",
  "만나자마자 바로 아는 편이야.",
  "아니! 난 시간을 다투는 비상사태에서 일하는 것을 즐기는 편이야.",
  "응! 난 내 자신의 감정과 느낌을 자유롭게 표현하는 편이야.",
  "계획",
  "사실",
  "조용한",
  "납득시킴",
  "상상적인",
  "이익",
  "중재자",
  "체계적인",
  "사실적인 진술",
  "수줍어함",
  "분석하다",
  "제작하다",
  "결심",
  "유순한",
  "체계적인",
  "이론",
  "침착한",
  "정의",
  "매혹적인",
  "굳건한 의지",
  "생각함",
  "문자 그대로",
  "남을 불쌍히 여김",
  "강함",
  "응! 난 모르는 사람까지 포함해서 많은 사람과 대화할 것 같아!",
  "응 난 내가 대화를 먼저 시작하는 편이야!",
  "응 난 기한을 정해놓고 일해!",
  "감정에 좌우되지 않고 접근해!",
  "정리하고 조직화하는 능력",
  "자극이 되어 기운이 나게 해!",
  "명확하고 정확한 것",
  "응 난 모르는 사람과 쉽게, 오래 이야기할 수 있어.",
  "계획된 이벤트",
  "조심스럽게 대해..",
];

const answer2Array = [
  "별 계획없이 훌쩍 떠나는 편이야..",
  "이론적인 과목들을 가르치고 싶어!",
  "아니! 난 조용하고 말이 없는 편이야!",
  "나는 이성을 감정보다 더 자주 내세우는 편이야.",
  "난 나만의 독창적인 처리 방법을 생각해내는 것을 더 좋아해!",
  "당연하지! 사람들에 대한 소식이나 소문에 아주 밝은 편이라구!",
  "별로 마음이 안내켜..",
  "일을 처리해 가면서 상황에 따라 필요한 대책을 세우는 편이야.",
  "다양한 사람과 폭넓은 우정을 맺는걸 더 좋아해.",
  "독창적이고 개성적이어서 자신이 드러나거나 말거나 별로 신경을 안쓰는 사람!",
  "그때 상황에 따라 재미있어 보이는 것을 할 수 있도록 자유스러운 것을 원하는 편이야.",
  "난 현실 감각이 있는 사람들과 더 잘 어울리는 것 같아.",
  "한 번에 한 사람씩 대화를 나누는 편이야.",
  "한결같이 합리적인 사람으로 불리우는 것",
  "작가가 의도한 바를 정확히 표현하는 것을 좋아하는 편이야.",
  "어떤 특정한 사람들이나, 어떤 특정한 상황이 되었을 때 더 쉽게 얘기를 나누는 편이야.",
  "답답하게 느껴져...",
  "일정에 매이는 것 때문에 싫은 편이야.",
  "짜여진 계획에 따라 조심스럽게 일을 처리할 때!",
  "실질적인 사람",
  "주로 다른 사람이 나를 소개하는 편이야.",
  "감상보다는 논리를 더 중요시하는 편!",
  "현실감각이 있는 사람!",
  "나를 깊이 알고 난 후에야 아는 편이야.",
  "응! 나는 시간의 압박을 피하기 위해 대체로 미리 계획을 짜는 편이야.",
  "아니.. 난 내 감정과 느낌을 표현하기보다는 자신 안에 묻어 두는 편이야..",
  "무계획",
  "아이디어",
  "마음이 따뜻한",
  "감동시킴",
  "사실적인",
  "은총",
  "심판관",
  "자발적인",
  "추상적인 개념",
  "말이 많음",
  "동정하다",
  "창작하다",
  "헌신",
  "견고한",
  "뜻하지 않은",
  "확신",
  "발랄한",
  "자비",
  "합리적인",
  "따뜻한 마음",
  "느낌",
  "비유적으로",
  "미래를 예견함",
  "부드러움",
  "아니.. 난 내가 아는 몇 사람하고만 대화할 것 같아..",
  "아니! 난 다른 사람이 말 걸어 오기를 기다리는 편이야.",
  "아니! 난 일이 언젠간 끝날 것이라고 생각해!.",
  "개인적인 감정을 가지고 접근해!",
  "적응하여 일이 되게 하는 능력",
  "나를 힘들게 해!",
  "제한이 없는 것",
  "글쎄.. 난 모르는 사람과는 별로 할 이야기가 없는 것 같아.",
  "계획에 없는 이벤트",
  "허물없이 대해..",
];

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
  E: personality.A,
  I: personality.B,
  S: personality.C,
  N: personality.D,
  T: personality.E,
  F: personality.F,
  J: personality.G,
  P: personality.H,
};

const createQuestion = (questionArr, answerOne, answerTwo) => {
  const questionBox = document.createElement("div");
  questionBox.className = "questionBox";
  const question = document.createElement("div");
  question.innerText = questionArr;
  question.className = "question";
  const answer1 = document.createElement("button");
  answer1.innerText = answerOne;
  answer1.className = "btn__question";
  const answer2 = document.createElement("button");
  answer2.innerText = answerTwo;
  answer2.className = "btn__question";

  textBox.prepend(questionBox);
  questionBox.prepend(answer2);
  questionBox.prepend(answer1);
  questionBox.prepend(question);
  return {
    answer1: answer1,
    answer2: answer2,
    questionBox: questionBox,
  };
};

const handleQuestion4F = () => {
  personality.F++;
};

const handleQuestion4E = () => {
  personality.E++;
};

const handleQuestion3A = () => {
  personality.A++;
  const questionBox = document.createElement("div");
  questionBox.className = "questionBox";
  const question = document.createElement("div");
  question.innerText = questionArray[3];
  question.className = "question";
  const answer1 = document.createElement("button");
  answer1.innerText = answer1Array[3]; // F
  answer1.className = "btn__question";
  const answer2 = document.createElement("button");
  answer2.innerText = answer2Array[3]; // E
  answer2.className = "btn__question";

  textBox.prepend(questionBox);
  questionBox.prepend(answer2);
  questionBox.prepend(answer1);
  questionBox.prepend(question);

  answer1.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion4F();
  });
  answer2.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion4E();
  });
};

const handleQuestion3B = () => {
  personality.B++;
  const questionBox = document.createElement("div");
  questionBox.className = "questionBox";
  const question = document.createElement("div");
  question.innerText = questionArray[3];
  question.className = "question";
  const answer1 = document.createElement("button");
  answer1.innerText = answer1Array[3]; // F
  answer1.className = "btn__question";
  const answer2 = document.createElement("button");
  answer2.innerText = answer2Array[3]; // E
  answer2.className = "btn__question";

  textBox.prepend(questionBox);
  questionBox.prepend(answer2);
  questionBox.prepend(answer1);
  questionBox.prepend(question);

  answer1.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion4F();
  });
  answer2.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion4E();
  });
};

const handleQuestion2C = () => {
  personality.C++;
  const createQuse = createQuestion(
    questionArray[2],
    answer1Array[2],
    answer2Array[2]
  );
  const answer1 = createQuse.answer1;
  const answer2 = createQuse.answer2;
  const questionBox = createQuse.questionBox;

  answer1.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion3A();
  });
  answer2.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion3B();
  });
};

const handleQuestion2D = () => {
  personality.D++;
  const createQuse = createQuestion(
    questionArray[2],
    answer1Array[2],
    answer2Array[2]
  );
  const answer1 = createQuse.answer1;
  const answer2 = createQuse.answer2;
  const questionBox = createQuse.questionBox;

  answer1.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion3A();
  });
  answer2.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion3B();
  });
};

const handleQuestion1G = () => {
  personality.G++;
  const createQuse = createQuestion(
    questionArray[1],
    answer1Array[1],
    answer2Array[1]
  );
  const answer1 = createQuse.answer1;
  const answer2 = createQuse.answer2;
  const questionBox = createQuse.questionBox;
  answer1.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion2C();
  });
  answer2.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion2D();
  });
};

const handleQuestion1H = () => {
  personality.H++;
  const createQuse = createQuestion(
    questionArray[1],
    answer1Array[1],
    answer2Array[1]
  );
  const answer1 = createQuse.answer1;
  const answer2 = createQuse.answer2;
  const questionBox = createQuse.questionBox;
  answer1.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion2C();
  });
  answer2.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion2D();
  });
};

const handleStartBtn = (e) => {
  textBox.removeChild(startTextBox);
  const createQuse = createQuestion(
    questionArray[0],
    answer1Array[0],
    answer2Array[0]
  );
  const answer1 = createQuse.answer1;
  const answer2 = createQuse.answer2;
  const questionBox = createQuse.questionBox;
  answer1.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion1G();
  });
  answer2.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    handleQuestion1H();
  });
};

startBtn.addEventListener("click", handleStartBtn);
