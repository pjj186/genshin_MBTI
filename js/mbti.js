const startBtn = document.querySelector(".btn__start");
const textBox = document.querySelector(".textbox"); // 텍스트박스, 무조건 부모
const startTextBox = document.querySelector(".textbox__start");
const logo = document.querySelector(".logo");
const paymon = document.querySelector(".paymon");
const backgroundMobile = document.querySelector(".mobilebg");
const backgroundPC = document.querySelector(".background_mond");
const body = document.body;
let count = 0;

const questionList = {
  1: {
    question: "너는 하루정도 여행을 다녀오고 싶을때 어떻게 하는편이야?",
    answer: {
      "언제 무엇을 할 것인가를 계획하는 편이야.." : "G",
      "별 계획없이 훌쩍 떠나는 편이야.." : "H"
    }
  },
  2: {
    question: "만약 너가 교사라면 학생들한테 어떤걸 가르치고 싶어?",
    answer: {
      "실제적인 사실을 다루는 과목들을 가르치고 싶어!" : "C",
      "이론적인 과목들을 가르치고 싶어!" : "D"
    }
  },
  3: {
    question: "너는 대체로 다른사람과 잘 어울려?",
    answer: {
      "응! 난 다른사람들과 싶게 어울리는 편이야." : "A",
      "아니! 난 조용하고 말이 없는 편이야!" : "B"
    }
  },
  4: {
    question: "너는 감정과 이성중에 뭘 더 내세워?",
    answer: {
      "나는 감정을 이성보다 더 자주 내세우는 편이야." : "F",
      "나는 이성을 감정보다 더 자주 내세우는 편이야." : "E"
    }
  },
  5: {
    question: "대부분의 사람들이 일상적으로 처리하는 일을 너가 하게 될 때 어떻게 처리하는걸 좋아해?",
    answer: {
      "난 일반적인 관습을 따라 처리하는 것을 더 좋아해!" : "C",
      "난 나만의 독창적인 처리 방법을 생각해내는 것을 더 좋아해!" : "D"
    }
  },
  6: {
    question: "너는 친구들 사이에서 소문에 밝은 편이야?",
    answer: {
      "아니! 난 소식이나 소문을 제일 늦게 듣는 편이야!" : "B",
      "당연하지! 사람들에 대한 소식이나 소문에 아주 밝은 편이라구!" : "A"
    }
  },
  7: {
    question: "주말에 마쳐야 되는 일의 목록을 작성해야 한다는 생각은, 너에게 어때?",
    answer: {
      "호감이 가는편이지!" : "G",
      "별로 마음이 안내켜.." : "H"
    }
  },
  8: {
    question: "어떤 특별한 일을 처리할 때 너는 어떻게 하는 편이야?",
    answer: {
      "시작하기 전에 미리 조심스럽게 계획을 세우는 편이야." : "G",
      "일을 처리해 가면서 상황에 따라 필요한 대책을 세우는 편이야." : "H"
    }
  },
  9: {
    question: "너는 다른사람과 우정을 맺을때 어떤 스타일이야?",
    answer: {
      "소수의 사람들과 깊은 우정을 맺는 편이지!" : "B",
      "다양한 사람과 폭넓은 우정을 맺는걸 더 좋아해." : "A"
    }
  },
  10: {
    question: "너가 우러러 보는 사람의 타입은?",
    answer: {
      "보수적이어서 결코 남에게 자신을 드러내지 않는 사람!" : "C",
      "독창적이고 개성적이어서 자신이 드러나거나 말거나 별로 신경을 안쓰는 사람!" : "D"
    }
  },
  11: {
    question: "데이트나 파티를 준비할 때 너는 어떻게 준비하는 편이야?",
    answer: {
      "난 미리 계획하는걸 원하는 편이야." : "G",
      "그때 상황에 따라 재미있어 보이는 것을 할 수 있도록 자유스러운 것을 원하는 편이야." : "H"
    }
  },
  12: {
    question: "너는 평소에 어떤 사람들과 잘 어울려?",
    answer: {
    "난 상상력이 풍부한 사람들과 더 잘 어울리는 것 같아." : "D",
    "난 현실 감각이 있는 사람들과 더 잘 어울리는 것 같아." : "C"
    }
  },
  13: {
    question: "여러 사람들과 함께 있을 때 너는?",
    answer: {
      "여러 사람들 사이에 끼어 함께 대화를 나누는 편이야." : "A",
      "한 번에 한 사람씩 대화를 나누는 편이야." : "B"
    }
  },
  14: {
    question: "너는 어떤 칭찬을 더 좋은 칭찬이라고 생각해?",
    answer: {
      "진실한 감정을 가진 사람으로 불리우는 것" : "F",
      "한결같이 합리적인 사람으로 불리우는 것" : "E"
    }
  },
  15: {
    question: "너는 취미로 독서를 할 때 작가의 어떤 표현을 더 선호해?",
    answer: {
      "작가의 기묘하거나 독창적인 표현을 즐기는 편이야." : "D",
      "작가가 의도한 바를 정확히 표현하는 것을 좋아하는 편이야." : "C"
    }
  },
  16: {
    question: "대화를 할 때, 누구하고나 쉽게 이야기를 나누는 편이야?",
    answer: {
      "응! 난 누구하고나 쉽게 얘기를 나누는 편이야." : "A",
      "어떤 특정한 사람들이나, 어떤 특정한 상황이 되었을 때 더 쉽게 얘기를 나누는 편이야." : "B"
    }
  },
  17: {
    question: "너에게 짜여진 시간표를 따르는 일이란?",
    answer: {
      "마음에 들어!" : "G",
      "답답하게 느껴져..." : "H"
    }
  },
  18: {
    question: "어떤 일을 언제 할 것이라는 계획이 미리 짜여져 있을 때 네 생각은 어때?",
    answer: {
      "그것에 맞추어 일할 수 있기 때문에 좋다고 느끼는 편이야." : "G",
      "일정에 매이는 것 때문에 싫은 편이야." : "H"
    }
  },
  19: {
    question: "넌 일을 어떤 경우에 더 성공적으로 처리해?",
    answer: {
      "예상하지 않은 일을 다루어야 할 때!" : "H",
      "짜여진 계획에 따라 조심스럽게 일을 처리할 때!" : "G"
    }
  },
  20: {
    question: "넌 어떤 사람으로 불리기를 원해?",
    answer: {
      "창조적인 사람" : "D",
      "실질적인 사람" : "C"
    }
  },
  21: {
    question: "사람들이 많은 그룹 내에서 넌 어떻게 행동하는 편이야?",
    answer: {
      "주로 내가 다른 사람을 소개하는 편이야." : "A",
      "주로 다른 사람이 나를 소개하는 편이야." : "B"
    }
  },
  22: {
    question: "너는 평소에 감상과 논리 뭘 더 중요하게 생각해?",
    answer: {
      "논리보다는 감상을 더 중요시하는 편!" : "F",
      "감상보다는 논리를 더 중요시하는 편!" : "E"
    }
  },
  23: {
    question: "넌 어떤 사람을 친구로 사귀고 싶어?",
    answer: {
      "언제나 새로운 아이디어를 내는 사람!" : "D",
      "현실감각이 있는 사람!" : "C"
    }
  },
  24: {
    question: "너를 처음 만나는 사람들은 너의 관심사를 금방 파악하는 편이야?",
    answer: {
      "만나자마자 바로 아는 편이야." : "A",
      "나를 깊이 알고 난 후에야 아는 편이야." : "B"
    }
  },
  25: {
    question: "넌 일상생활을 하면서 미리 계획을 짜는 편이야?",
    answer: {
      "아니! 난 시간을 다투는 비상사태에서 일하는 것을 즐기는 편이야." : "H",
      "응! 나는 시간의 압박을 피하기 위해 대체로 미리 계획을 짜는 편이야." : "G"
    }
  },
  26: {
    question: "너는 평소에 너 자신을 잘 표현해?",
    answer: {
      "응! 난 내 자신의 감정과 느낌을 자유롭게 표현하는 편이야." : "F",
      "아니! 난 내 감정과 느낌을 표현하기보다는 자신 안에 묻어 두는 편이야." : "E"
    }
  },
  27: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "계획" : "G",
      "무계획" : "H"
    }
  },
  28: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "사실" : "C",
      "아이디어" : "D"
    }
  },
  29: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "조용한" : "B",
      "마음이 따뜻한" : "A"
    }
  },
  30: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "납득시킴" : "E",
      "감동시킴" : "F"
    }
  },
  31: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "상상적인" : "D",
      "사실적인" : "C"
    }
  },
  32: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "이익" : "C",
      "은총" : "D"
    }
  },
  33: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "중재자" : "F",
      "심판관" : "E"
    }
  },
  34: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
    "체계적인" : "G",
    "자발적인" : "H"
    }
  },
  35: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "사실적인 진술" : "C",
      "추상적인 개념" : "D"
    }
  },
  36: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "수줍어함" : "B",
      "말이 많음" : "A"
    }
  },
  37: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "분석하다" : "E",
      "동정하다" : "F"
    }
  },
  38: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "제작하다" : "C",
      "창작하다" : "D"
    }
  },
  39: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "결심" : "E",
      "헌신" : "F"
    }
  },
  40: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "유순한" : "F",
      "견고한" : "E"
    }
  },
  41: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "체계적인" : "G",
      "뜻하지 않은" : "H"
    }
  },
  42: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "이론" : "D",
      "확신" : "C"
    }
  },
  43: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "침착한" : "B",
      "발랄한" : "A"
    }
  },
  44: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "정의" : "E",
      "자비" : "F"
    }
  },
  45: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "매혹적인" : "D",
      "합리적인" : "C"
    }
  },
  46: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "굳건한 의지" : "E",
      "따뜻한 마음" : "F"
    }
  },
  47: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "생각함" : "E",
      "느낌" : "F"
    }
  },
  48: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "문자 그대로" : "C",
      "비유적으로" : "D"
    }
  },
  49: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "남을 불쌍히 여김" : "F",
      "미래를 예견함" : "E"
    }
  },
  50: {
    question :"이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!",
    answer: {
      "강함" : "E",
      "부드러움" : "F"
    }
  },
  51: {
    question: "파티 석상에서 너는 많은 사람들과 대화할거 같아?",
    answer: {
      "응! 난 모르는 사람까지 포함해서 많은 사람과 대화할 것 같아!" : "A",
      "아니.. 난 내가 아는 몇 사람하고만 대화할 것 같아.." : "B"
    }
  },
  52: {
    question: "너는 회사에서 먼저 다른사람한테 말을 거는편이야?",
    answer: {
      "응 난 내가 대화를 먼저 시작하는 편이야!" : "A",
      "아니! 난 다른 사람이 말 걸어 오기를 기다리는 편이야." : "B"
    }
  },
  53: {
    question: "일을 할 때 너는 기한을 정해놓고 하는편이야?",
    answer: {
      "응 난 기한을 정해놓고 일해!" : "G",
      "아니! 난 일이 언젠간 끝날 것이라고 생각해!" : "H"
    }
  },
  54: {
    question: "다른 사람한테 접근할 때 너의 성향은?",
    answer: {
      "감정에 좌우되지 않고 접근해!" : "E",
      "개인적인 감정을 가지고 접근해!" : "F"
    }
  },
  55: {
    question: "넌 둘중에 어느 능력을 더 가지고싶어?",
    answer: {
      "정리하고 조직화하는 능력" : "G",
      "적응하여 일이 되게 하는 능력" : "H"
    }
  },
  56: {
    question: "다른 사람들과 일상적이 아닌 새로운 관계를 맺는 건 너에게 어떻게 느껴져?",
    answer: {
      "자극이 되어 기운이 나게 해!" : "A",
      "나를 힘들게 해!" : "B"
    }
  },
  57: {
    question: "넌 둘중 어떤것에 더 가치를 둬?",
    answer: {
      "명확하고 정확한 것" : "G",
      "제한이 없는 것" : "H"
    }
  },
  58: {
    question: "넌 모르는 사람하고 오래 이야기 할 수 있어?",
    answer: {
      "응 난 모르는 사람과 쉽게, 오래 이야기할 수 있어." : "A",
      "글쎄.. 난 모르는 사람과는 별로 할 이야기가 없는 것 같아." : "B"
    }
  },
  59: {
    question: "넌 어떤 이벤트를 더 좋아해?",
    answer: {
      "계획된 이벤트" : "G",
      "계획에 없는 이벤트" : "H"
    }
  },
  60: {
    question: "사람들은 널 평소에 어떻게 대해?",
    answer: {
      "조심스럽게 대해.." : "B",
      "허물없이 대해.." : "A"
    }
  }
};

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

let mbtiEI = {};
let mbtiNS = {};
let mbtiFT = {};
let mbtiJP = {};

let result = [];

const characters = {
  lumine: {
    name: "루미네(ISTP)",
    ment: "「여행자」",
    text: "너의 성격유형은 ISTP! 조용하고 말이 없으며 논리적이면서 분석적이고, 객관적으로 인생을 관찰하는 유형이야! 사실적인 정보를 조직하기 좋아하는 반면, 일과 관계 되지 않는 이상 자신을 잘 개방하지 않는 편이야. 그래서 가까운 친구들 외에는 대체로 사람들과 잘 사귀지 않는 편이지~ 일상생활에 있어 적응력이 매우 강한타입!",
    backgroundImg: "url('./images/lumine_background.png')",
    avatarImg: `./images/lumine_avatar.png`,
    charImg: `./images/lumine.png`,
    clsname: "lumine",
  },
  razor: {
    name: "레이저(ISFP)",
    ment: "「나의「루피카」인 늑대. 그들은 내 가족이야.」",
    text: "너의 성격유형은 ISFP! 말보다는 행동으로 따뜻함을 나타내며, 마음이 따뜻하고 동정적인 성격이야. 마치 양털안감을 넣은 오버코트처럼 속마음이 따뜻한 사람들이 지닌 성격 유형이지~ 그러나 상대방을 잘 알게 될 때까지 이 따뜻함을 드러내지 않는 경향이있어!",
    backgroundImg: "url('./images/razor_background.png')",
    avatarImg: `./images/razor_avatar.png`,
    charImg: `./images/razor.png`,
    clsname: "razor",
  },
  sucrose: {
    name: "설탕(INTP)",
    ment: "「이 꽃은 아마...3식 서리꽃 17호 확대버전이었던 것 같아.」",
    text: "너의 성격유형은 INTP! 조용하고 과묵하나 관심이 있는 분야에 대해서는 정말 말을 잘해! 사람들을 중심으로 한 가치보다는 아이디어에 관심이 많으며 매우 분석적이고 객관적 비평을 잘해! 실체보다는 실체가 안고있는 가능성에 관심이 많아! 또 이해가 빠르고 높은 직관력으로 통찰하는 재능과 지적관심이 많은편이야!",
    backgroundImg: "url('./images/sucrose_background.png')",
    avatarImg: `./images/sucrose_avatar.png`,
    charImg: `./images/sucrose.png`,
    clsname: "sucrose",
  },
  mona: {
    name: "모나(INTJ)",
    ment: "「바꿀 수 없고, 거스를 수 없고, 받아들일 수밖에 없어서 운명인 거지.」",
    text: "너의 성격유형은 INTJ! 행동과 사고에 있어서 독창적이야! 내적인 신념과 비전은 산이라도 움직일 만큼 강한편! 16가지 성격 유형중에서 가장 독립적이고 단호한 성격이야! 때때로, 어떤 문제에 대하여 아주 고집이 센 편이기도해! 자신이 가진 영감과 목적을 실현시키려는 의지와 결단력과 인내심을 가지고 있어! 자신과 타인의 능력을 중요시하며, 목적달성을 위하여 온 시간과 노력을 다 바쳐 일하기 때문에 직관력과 통찰력이 활용되는 분야에서 능력을 발휘하는 편이야!.",
    backgroundImg: "url('./images/mona_background.png')",
    avatarImg: `./images/mona_avatar.png`,
    charImg: `./images/mona.png`,
    clsname: "mona",
  },
  fischl: {
    name: "피슬(INFP)",
    ment: "「너와 난 모두 이세계의 여행자, 여기서 만난 건 분명 운명의 이끌림일 거야.」",
    text: "너의 성격유형은 INFP! 마음이 따뜻하나, 상대방을 잘 알기 전에는 표현을 잘하지 않는 성격이야! 또, 자신이 관계하는 사람이나 일에 대하여 강하고 성실하지! 또한 자신이 지향하는 이상에 대하여는 정열적인 신념을 가지고 있어!",
    backgroundImg: "url('./images/fischl_background.png')",
    avatarImg: `./images/fischl_avatar.png`,
    charImg: `./images/fischl.png`,
    clsname: "fischl",
  },
  xingqiu: {
    name: "행추(INFJ)",
    ment: "「번뇌에서 벗어나 조용한 곳에서 심신을 수양하면 얼마나 좋을까.」",
    text: "너의 성격유형은 INFJ! 창의력과 통찰력이 뛰어나고, 강한 직관력으로 의미와 진실된 관계를 추구하는 타입이야! 뛰어난 영감으로 말없이 타인에게 영향력을 끼치기도해! 독창성과 사적인 독립심이 강하고, 확고한 신념과 뚜렷한 원리원칙을 생활 속에 가지고 있으면서 공동의 이익을 가져오는 일에 심혈을 기울이는 편이야! 인화와 동료애를 중시하는 경향으로 존경을 받고 사람들이 따르는 타입! 남에게 강요하기보다는 행동과 권유로 사람들의 마음을 움직여 따르게 만드는 지도력이 있어!",
    backgroundImg: "url('./images/xingqiu_background.png')",
    avatarImg: `./images/xingqiu_avatar.png`,
    charImg: `./images/xingqiu.png`,
    clsname: "xingqiu",
  },
  xiao: {
    name: "소(ISTJ)",
    ment: "「널 지키는 호법이 되어줄게. 하지만 내게 가까이 오지 마. 날 방해하지도 마. 안 그럼 후회하게 될 거야.」",
    text: "너의 성격유형은 ISTJ! 매우 신뢰성이 있고, 사실에 대해 완전하고, 현실적이고, 실용적인 면을 가지고있어! 어떠한 분량의 사실이라도 몰두하고, 기억하며, 이용하고, 정확도에 대해 매우 세심해! 위기상황에 대처할 때에도 차분하며 안정되어 있어! 외면적으로 볼때 차분하게 보이지만, 내면적으로는 상당히 바빠!",
    backgroundImg: "url('./images/xiao_background.png')",
    avatarImg: `./images/xiao_avatar.png`,
    charImg: `./images/xiao.png`,
    clsname: "xiao",
  },
  jean: {
    name: "진(ISFJ)",
    ment: "「바람의 신이여, 우릴 인도하소서.」",
    text: "너의 성격유형은 ISFJ! 책임감이 강하고 온정적이며 헌신적이야! 세부적이고 치밀성과 반복을 요하는 일을 끝까지 해나가는 인내력이 높아! 가지고 있는 침착성과 인내력은 가정이나 집단에 안정성을 가져다주지! 다른 사람의 사정을 고려하여 자신과 타인의 감정흐름에 민감해! 일처리에 있어서 현실감각을 가지고 실제적이고 조직적으로 이행하지! 경험을 통해서 자기가 틀렸다고 인정하기까지 어떠한 난관이 있어도 꾸준히 밀고 나가는 유형이야! 온순하고 차분해!",
    backgorundImg: "url('./images/jean_background.png')",
    avatarImg: `./images/jean_avatar.png`,
    charImg: `./images/jihn.png`,
    clsname: "jean",
  },
  childe: {
    name: "타르탈리아(ESTP)",
    ment: "「날 어떻게 조종할 거지? 정말 기대되는데!」",
    text: "너의 성격유형은 ESTP! 관대하고 느긋하며 어떤 사람이나 사건에 대해서 별로 선입견을 갖지 않으며 개방적인 성격이야! 자신에게나 타인에게 있어 관용적이며, 일을 있는 그대로 보고 받아들이지! 그래서 갈등이나 긴장이 일어나는 상황을 잘 무마하는 능력이 있어! 규범을 적용하기보다는 누구나 만족할 수 있는 해결책을 모색하고 타협하고 적응하는 능력이 있어!",
    backgroundImg: "url('./images/childe_background.png')",
    avatarImg: `./images/childe_avatar.png`,
    charImg: `./images/childe.png`,
    clsname: "childe",
  },
  clee: {
    name: "클레(ESFP)",
    ment: "「클레는 나가 놀고 싶어~ 함께 밖에 나가 놀아줘~」",
    text: "너의 성격유형은 ESFP! 친절하고 수용적이며 현실적이고 실제적인 성격이야! 어떤 상황에도 잘 적응하며 타협적이고, 선입견이 별로 없으며 개방적이고 관용적이라서 대체로 사람들을 잘 받아들이는 타입이야! 주위에서 진행되고 있는 일들을 알고자 하고 또한 열심히 참견하고 끼어드는 타입이야! 다른 사람의 일이나 활동에 관심이 많고, 새로운 사건 혹은 물건에도 호기심이 많이 때문이야! 이론이나 책을 통해 배우기보다는 경험 등의 실생활을 통해 배우는 것을 좋아해!",
    backgroundImg: "url('./images/clee_background.png')",
    avatarImg: `./images/clee_avatar.png`,
    charImg: `./images/clee.png`,
    clsname: "clee",
  },
  venti: {
    name: "벤티(ENTP)",
    ment: "「마침 잘 왔어, 여행자, 네 소원이 뭔지 들어보고 싶어.」",
    text: "너의 성격유형은 ENTP! 독창적인 혁신가이며, 창의력이 풍부하고 항상 새로운 가능성을 찾고 새로운 시도를 즐기는 유형이야! 넓은 안목을 가지고 있으며 다방면에 재능이 있지! 민첩하고 여러 가지 일에 재능을 발휘하며 자신감이 넘쳐나! 사람들의 동향에 대해 기민하고 박식한 편! 다른 사람을 판단하기보다 이해하려고 노력해!",
    backgroundImg: "url('./images/venti_background.png')",
    avatarImg: `./images/venti_avatar.png`,
    charImg: `./images/venti.png`,
    clsname: "venti",
  },
  keqing: {
    name: "각청(ENTJ)",
    ment: "「제군? 흥, 그가 밑바닥 사정을 제대로 알기나 하겠어? 웃기는 소리.」",
    text: "너의 성격유형은 ENTJ! 활동적이며 행정적인 일과 장기계획을 선호하며 논리적이고 분석적이야! 사전 준비를 철저하게 하며 계획하고 조직하고 체계적으로 목적달성을 추진시키는 지도자들이 많아! 비능률적이거나 확실치 않는 상황에 대해서는 별로 인내심이 없어! 그러나 상황이 필요로 할 때는 강하게 대처해! 솔직하고 결정력과 통솔력이 있으며, 거시적 안목으로 일을 밀고 나가! 관념 자체에 집중하는 경향이 있으며, 관념 이면의 사람에게는 관심이 별로 없어!",
    backgroundImg: "url('./images/keqing_background.png')",
    avatarImg: `./images/keqing_avatar.png`,
    charImg: `./images/keqing.png`,
    clsname: "keqing",
  },
  hutao: {
    name: "호두(ENFP)",
    ment: "「해가 뜨면 볕을 쬐고, 달이 뜨면 달을 쬐고——!」",
    text: "너의 성격유형은 ENFP! 열성적이고 창의적이야! 풍부한 상상력과 영감을 가지고 어떤 일을 시작해! 풍부한 충동적 에너지를 가지고 죽흥적으로 일을 재빠르게 해결하는 솔선수범력과 상상력이 있어! 관심이 있는 일이면 무엇이든 척척 해내는 열성파! 뛰어난 통찰력으로 그 사람 안에 있는 성장 발전할 가능성을 들여다봐!",
    backgroundImg: "url('./images/hutao_background.png')",
    avatarImg: `./images/hutao_avatar.png`,
    charImg: `./images/hutao.png`,
    clsname: "hutao",
  },
  babara: {
    name: "바바라(ENFJ)",
    ment: "「착실한 노력이야말로 가장 신기한 마법.」",
    text: "너의 성격유형은 ENFJ! 동정심과 동료애가 많으며, 친절하고 재치있는 성격이야! 민첩하고 참을성이 많고 성실해! 사람들과의 인화를 중요시 여기며, 다른 사람의 의견을 존중하고 그 가치를 보는 타입! 공동의 선을 위해서 대체로 상대방 의견에 동의하는 경향이 있어! 새로운 아이디어에 대한 호기심이 많아! 쓰기보다는 말로써 생각을 잘 표현하고, 편안하고 능란하게 계획을 제시하거나 조직을 이끌어나가는 능력이 있어!",
    backgroundImg: "url('./images/babara_background.png')",
    avatarImg: `./images/babara_avatar.png`,
    charImg: `./images/babara.png`,
    clsname: "babara",
  },
  ningguang: {
    name: "응광(ESTJ)",
    ment: "「더 많이 벌면... 더 좋은 거 아냐?」",
    text: "너의 성격유형은 ESTJ! 일을 조직하고 프로젝트를 계획하고 출범시키는 능력이 뛰어나! 현실적이고 사실적이며, 체계적, 논리적으로 사업이나 조직체를 이끌어 나가는 타고난 재능을 가졌어! 혼돈스러운 상태나 불분명한 상태 또는 실용성이 없는 분야에는 큰 흥미가 없어! 그러나 필요시에는 언제나 응용하는 힘이 있어! 분명한 규칙을 중요시하고 그에 따라 행동하고 일을 추진하고 완성해 나가! 어떤 계획이나 결정을 내릴 땐 확고한 사실에 바탕을 두고 이행해!",
    backgroundImg: "url('./images/ningguang_background.png')",
    avatarImg: `./images/ningguang_avatar.png`,
    charImg: `./images/ningguang.png`,
    clsname: "ningguang",
  },
  amber: {
    name: "엠버(ESFJ)",
    ment: "「정찰 기사 엠버, 준비 완료!」",
    text: "너의 성격유형은 ESFJ! 동정심과 동료애가 많은 성격이야! 친절하고 재치가 있으며, 다른 사람들에게 관심을 쏟고 인화를 도모하는 일을 중요하게 여겨! 양심적이고 정리정돈을 잘하지! 참을성이 많고 다른 사람들을 잘 도와줘! 또한 다른 사람들의 지지를 받으면 일에 열중해! 그러나 다른 사람들의 무관심한 태도에는 민감해!",
    backgroundImg: "url('./images/amber_background.png')",
    avatarImg: `./images/amber_avatar.png`,
    charImg: `./images/amber.png`,
    clsname: "amber",
  },
};

const showCharacters = (character) => {
  backgroundPC.style.display = "none";
  backgroundMobile.style.display = "none";
  document.body.style.backgroundImage = character.backgroundImg;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  paymon.classList = "hide";
  const restartBtn = document.createElement("button");
  restartBtn.innerText = "다시 검사 할래?";
  restartBtn.className = "restartBtn";
  const characterBox = document.createElement("div");
  characterBox.className = "characterBox";
  const characterName = document.createElement("span");
  characterName.innerText = character.name;
  characterName.className = "characterName";
  const characterMent = document.createElement("span");
  characterMent.innerText = character.ment;
  characterMent.className = "characterMent";
  const characterMBTI = document.createElement("span");
  characterMBTI.innerText = character.text;
  characterMBTI.className = "characterMBTI";
  const characterAvater = document.createElement("img");
  characterAvater.src = character.avatarImg;
  characterAvater.className = "avatar";
  const characterImage = document.createElement("img");
  characterImage.src = character.charImg;
  characterImage.className = character.clsname;
  textBox.prepend(characterImage);
  textBox.prepend(characterAvater);
  textBox.prepend(characterBox);
  characterBox.prepend(restartBtn);
  characterBox.prepend(characterMBTI);
  characterBox.prepend(characterName);
  characterBox.prepend(characterMent);
  restartBtn.addEventListener("click", () => {
    location.reload();
  });
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

const finishMBTI = () => {
  logo.classList.remove("showing");
  logo.classList.add("hide");
  let resultMBTI = "";
    (mbtiEI.E = personality.A),
    (mbtiEI.I = personality.B),
    (mbtiNS.S = personality.C),
    (mbtiNS.N = personality.D),
    (mbtiFT.T = personality.E),
    (mbtiFT.F = personality.F),
    (mbtiJP.J = personality.G),
    (mbtiJP.P = personality.H);

  if (mbtiEI.E > mbtiEI.I) {
    result.push("E");
  } else if (mbtiEI.E < mbtiEI.I) {
    result.push("I");
  }

  if (mbtiNS.N > mbtiNS.S) {
    result.push("N");
  } else if (mbtiNS.N < mbtiNS.S) {
    result.push("S");
  }

  if (mbtiFT.F > mbtiFT.T) {
    result.push("F");
  } else if (mbtiFT.F < mbtiFT.T) {
    result.push("T");
  }

  if (mbtiJP.J > mbtiJP.P) {
    result.push("J");
  } else if (mbtiJP.J < mbtiJP.P) {
    result.push("P");
  }

  console.log(personality)

  resultMBTI = result.join("");
  if (resultMBTI === "ISTP") {
    showCharacters(characters.lumine);
  } else if (resultMBTI === "ISFP") {
    showCharacters(characters.razor);
  } else if (resultMBTI === "INTP") {
    showCharacters(characters.sucrose);
  } else if (resultMBTI === "INTJ") {
    showCharacters(characters.mona);
  } else if (resultMBTI === "INFP") {
    showCharacters(characters.fischl);
  } else if (resultMBTI === "INFJ") {
    showCharacters(characters.xingqiu);
  } else if (resultMBTI === "ISTJ") {
    showCharacters(characters.xiao);
  } else if (resultMBTI === "ISFJ") {
    showCharacters(characters.jean);
  } else if (resultMBTI === "ESTP") {
    showCharacters(characters.childe);
  } else if (resultMBTI === "ESFP") {
    showCharacters(characters.clee);
  } else if (resultMBTI === "ENTP") {
    showCharacters(characters.venti);
  } else if (resultMBTI === "ENTJ") {
    showCharacters(characters.keqing);
  } else if (resultMBTI === "ENFP") {
    showCharacters(characters.hutao);
  } else if (resultMBTI === "ENFJ") {
    showCharacters(characters.babara);
  } else if (resultMBTI === "ESTJ") {
    showCharacters(characters.ningguang);
  } else if (resultMBTI === "ESFJ") {
    showCharacters(characters.amber);
  }
};

const handleFinish = () => {
  const finishBox = document.createElement("div");
  finishBox.className = "finishBox";
  const finishMent = document.createElement("span");
  finishMent.className = "finishMent";
  finishMent.innerText = "자! 이제 끝났어! 힘들었지?\n결과를 확인해봐!";
  const finishBtn = document.createElement("button");
  finishBtn.className = "finishBtn";
  finishBtn.innerText = "결과 보기!";

  textBox.prepend(finishBox);
  finishBox.prepend(finishBtn);
  finishBox.prepend(finishMent);

  finishBtn.addEventListener("click", () => {
    textBox.removeChild(finishBox);
    finishMBTI();
  });
};

const handleQuestion = () => {
  count++; // 순서로 고르는게 아니라 1부터 시작이 맞다

  let question = Object.getOwnPropertyNames(questionList);
  let answer = Object.getOwnPropertyNames(questionList[count]['answer']);

  const createQuse = createQuestion(
    "Q" + count + ". " + questionList[count]['question'],
    answer[0],
    answer[1]
  );
  const answer1 = createQuse.answer1; // 첫번째 버튼
  const answer2 = createQuse.answer2; // 두번째 버튼
  const questionBox = createQuse.questionBox;
  answer1.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    if (questionList[count]['answer'][answer1.innerText] === "A") {
      personality.A++;
    } else if (questionList[count]['answer'][answer1.innerText] === "B") {
      personality.B++;
    } else if (questionList[count]['answer'][answer1.innerText] === "C") {
      personality.C++;
    } else if (questionList[count]['answer'][answer1.innerText] === "D") {
      personality.D++;
    } else if (questionList[count]['answer'][answer1.innerText] === "E") {
      personality.E++;
    } else if (questionList[count]['answer'][answer1.innerText] === "F") {
      personality.F++;
    } else if (questionList[count]['answer'][answer1.innerText] === "G") {
      personality.G++;
    } else if (questionList[count]['answer'][answer1.innerText] === "H") {
      personality.H++;
    }
    if (count === question.length) {
      handleFinish();
    } else {
      handleQuestion();
    }
  });
  answer2.addEventListener("click", () => {
    textBox.removeChild(questionBox);
    if (questionList[count]['answer'][answer2.innerText] === "A") {
      personality.A++;
    } else if (questionList[count]['answer'][answer2.innerText] === "B") {
      personality.B++;
    } else if (questionList[count]['answer'][answer2.innerText] === "C") {
      personality.C++;
    } else if (questionList[count]['answer'][answer2.innerText] === "D") {
      personality.D++;
    } else if (questionList[count]['answer'][answer2.innerText] === "E") {
      personality.E++;
    } else if (questionList[count]['answer'][answer2.innerText] === "F") {
      personality.F++;
    } else if (questionList[count]['answer'][answer2.innerText] === "G") {
      personality.G++;
    } else if (questionList[count]['answer'][answer2.innerText] === "H") {
      personality.H++;
    }
    if (count === question.length) {
      handleFinish();
    } else {
      handleQuestion();
    }
  });
};

const handleQuestionStart = () => {
  paymon.classList = "hide";
  textBox.removeChild(startTextBox);
  logo.classList.remove("hide");
  logo.classList.add("showing");
  handleQuestion();
};

startBtn.addEventListener("click", handleQuestionStart);
