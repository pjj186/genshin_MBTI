const startBtn = document.querySelector('.btn__start');
const textBox = document.querySelector('.textbox'); // 텍스트박스, 무조건 부모
const startTextBox = document.querySelector('.textbox__start');
const logo = document.querySelector('.logo');
const paymon = document.querySelector('.paymon');
const backgroundMobile = document.querySelector('.mobilebg');
const backgroundPC = document.querySelector('.background_mond');
const body = document.body;
const questions = [
  {
    question: '너는 하루정도 여행을 다녀오고 싶을때 어떻게 하는편이야?',
    answers: [
      ['언제 무엇을 할 것인가를 계획하는 편이야..', 'G'],
      ['별 계획없이 훌쩍 떠나는 편이야..', 'H'],
    ],
  },
  {
    question: '만약 너가 교사라면 학생들한테 어떤걸 가르치고 싶어?',
    answers: [
      ['실제적인 사실을 다루는 과목들을 가르치고 싶어!', 'C'],
      ['이론적인 과목들을 가르치고 싶어!', 'D'],
    ],
  },
  {
    question: '너는 대체로 다른사람과 잘 어울려?',
    answers: [
      ['응! 난 다른사람들과 싶게 어울리는 편이야.', 'A'],
      ['아니! 난 조용하고 말이 없는 편이야!', 'B'],
    ],
  },
  {
    question: '너는 감정과 이성중에 뭘 더 내세워?',
    answers: [
      ['나는 감정을 이성보다 더 자주 내세우는 편이야.', 'F'],
      ['나는 이성을 감정보다 더 자주 내세우는 편이야.', 'E'],
    ],
  },
  {
    question:
      '대부분의 사람들이 일상적으로 처리하는 일을 너가 하게 될 때 어떻게 처리하는걸 좋아해?',
    answers: [
      ['난 일반적인 관습을 따라 처리하는 것을 더 좋아해!', 'C'],
      ['난 나만의 독창적인 처리 방법을 생각해내는 것을 더 좋아해!', 'D'],
    ],
  },
  {
    question: '너는 친구들 사이에서 소문에 밝은 편이야?',
    answers: [
      ['아니! 난 소식이나 소문을 제일 늦게 듣는 편이야!', 'B'],
      ['당연하지! 사람들에 대한 소식이나 소문에 아주 밝은 편이라구!', 'A'],
    ],
  },
  {
    question:
      '주말에 마쳐야 되는 일의 목록을 작성해야 한다는 생각은, 너에게 어때?',
    answers: [
      ['호감이 가는편이지!', 'G'],
      ['별로 마음이 안내켜..', 'H'],
    ],
  },
  {
    question: '어떤 특별한 일을 처리할 때 너는 어떻게 하는 편이야?',
    answers: [
      ['시작하기 전에 미리 조심스럽게 계획을 세우는 편이야.', 'G'],
      ['일을 처리해 가면서 상황에 따라 필요한 대책을 세우는 편이야.', 'H'],
    ],
  },
  {
    question: '너는 다른사람과 우정을 맺을때 어떤 스타일이야?',
    answers: [
      ['소수의 사람들과 깊은 우정을 맺는 편이지!', 'B'],
      ['다양한 사람과 폭넓은 우정을 맺는걸 더 좋아해.', 'A'],
    ],
  },
  {
    question: '너가 우러러 보는 사람의 타입은?',
    answers: [
      ['보수적이어서 결코 남에게 자신을 드러내지 않는 사람!', 'C'],
      [
        '독창적이고 개성적이어서 자신이 드러나거나 말거나 별로 신경을 안쓰는 사람!',
        'D',
      ],
    ],
  },
  {
    question: '데이트나 파티를 준비할 때 너는 어떻게 준비하는 편이야?',
    answers: [
      ['난 미리 계획하는걸 원하는 편이야.', 'G'],
      [
        '그때 상황에 따라 재미있어 보이는 것을 할 수 있도록 자유스러운 것을 원하는 편이야.',
        'H',
      ],
    ],
  },
  {
    question: '너는 평소에 어떤 사람들과 잘 어울려?',
    answers: [
      ['난 상상력이 풍부한 사람들과 더 잘 어울리는 것 같아.', 'D'],
      ['난 현실 감각이 있는 사람들과 더 잘 어울리는 것 같아.', 'C'],
    ],
  },
  {
    question: '여러 사람들과 함께 있을 때 너는?',
    answers: [
      ['여러 사람들 사이에 끼어 함께 대화를 나누는 편이야.', 'A'],
      ['한 번에 한 사람씩 대화를 나누는 편이야.', 'B'],
    ],
  },
  {
    question: '너는 어떤 칭찬을 더 좋은 칭찬이라고 생각해?',
    answers: [
      ['진실한 감정을 가진 사람으로 불리우는 것', 'F'],
      ['한결같이 합리적인 사람으로 불리우는 것', 'E'],
    ],
  },
  {
    question: '너는 취미로 독서를 할 때 작가의 어떤 표현을 더 선호해?',
    answers: [
      ['작가의 기묘하거나 독창적인 표현을 즐기는 편이야.', 'D'],
      ['작가가 의도한 바를 정확히 표현하는 것을 좋아하는 편이야.', 'C'],
    ],
  },
  {
    question: '대화를 할 때, 누구하고나 쉽게 이야기를 나누는 편이야?',
    answers: [
      ['응! 난 누구하고나 쉽게 얘기를 나누는 편이야.', 'A'],
      [
        '어떤 특정한 사람들이나, 어떤 특정한 상황이 되었을 때 더 쉽게 얘기를 나누는 편이야.',
        'B',
      ],
    ],
  },
  {
    question: '너에게 짜여진 시간표를 따르는 일이란?',
    answers: [
      ['마음에 들어!', 'G'],
      ['답답하게 느껴져...', 'H'],
    ],
  },
  {
    question:
      '어떤 일을 언제 할 것이라는 계획이 미리 짜여져 있을 때 네 생각은 어때?',
    answers: [
      ['그것에 맞추어 일할 수 있기 때문에 좋다고 느끼는 편이야.', 'G'],
      ['일정에 매이는 것 때문에 싫은 편이야.', 'H'],
    ],
  },
  {
    question: '넌 일을 어떤 경우에 더 성공적으로 처리해?',
    answers: [
      ['예상하지 않은 일을 다루어야 할 때!', 'H'],
      ['짜여진 계획에 따라 조심스럽게 일을 처리할 때!', 'G'],
    ],
  },
  {
    question: '넌 어떤 사람으로 불리기를 원해?',
    answers: [
      ['창조적인 사람', 'D'],
      ['실질적인 사람', 'C'],
    ],
  },
  {
    question: '사람들이 많은 그룹 내에서 넌 어떻게 행동하는 편이야?',
    answers: [
      ['주로 내가 다른 사람을 소개하는 편이야.', 'A'],
      ['주로 다른 사람이 나를 소개하는 편이야.', 'B'],
    ],
  },
  {
    question: '너는 평소에 감상과 논리 뭘 더 중요하게 생각해?',
    answers: [
      ['논리보다는 감상을 더 중요시하는 편!', 'F'],
      ['감상보다는 논리를 더 중요시하는 편!', 'E'],
    ],
  },
  {
    question: '넌 어떤 사람을 친구로 사귀고 싶어?',
    answers: [
      ['언제나 새로운 아이디어를 내는 사람!', 'D'],
      ['현실감각이 있는 사람!', 'C'],
    ],
  },
  {
    question: '너를 처음 만나는 사람들은 너의 관심사를 금방 파악하는 편이야?',
    answers: [
      ['만나자마자 바로 아는 편이야.', 'A'],
      ['나를 깊이 알고 난 후에야 아는 편이야.', 'B'],
    ],
  },
  {
    question: '넌 일상생활을 하면서 미리 계획을 짜는 편이야?',
    answers: [
      ['아니! 난 시간을 다투는 비상사태에서 일하는 것을 즐기는 편이야.', 'H'],
      [
        '응! 나는 시간의 압박을 피하기 위해 대체로 미리 계획을 짜는 편이야.',
        'G',
      ],
    ],
  },
  {
    question: '너는 평소에 너 자신을 잘 표현해?',
    answers: [
      ['응! 난 내 자신의 감정과 느낌을 자유롭게 표현하는 편이야.', 'F'],
      [
        '아니! 난 내 감정과 느낌을 표현하기보다는 자신 안에 묻어 두는 편이야.',
        'E',
      ],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['계획', 'G'],
      ['무계획', 'H'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['사실', 'C'],
      ['아이디어', 'D'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['조용한', 'B'],
      ['마음이 따뜻한', 'A'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['납득시킴', 'E'],
      ['감동시킴', 'F'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['상상적인', 'D'],
      ['사실적인', 'C'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['이익', 'C'],
      ['은총', 'D'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['중재자', 'F'],
      ['심판관', 'E'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['체계적인', 'G'],
      ['자발적인', 'H'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['사실적인 진술', 'C'],
      ['추상적인 개념', 'D'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['수줍어함', 'B'],
      ['말이 많음', 'A'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['분석하다', 'E'],
      ['동정하다', 'F'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['제작하다', 'C'],
      ['창작하다', 'D'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['결심', 'E'],
      ['헌신', 'F'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['유순한', 'F'],
      ['견고한', 'E'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['체계적인', 'G'],
      ['뜻하지 않은', 'H'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['이론', 'D'],
      ['확신', 'C'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['침착한', 'B'],
      ['발랄한', 'A'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['정의', 'E'],
      ['자비', 'F'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['매혹적인', 'D'],
      ['합리적인', 'C'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['굳건한 의지', 'E'],
      ['따뜻한 마음', 'F'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['생각함', 'E'],
      ['느낌', 'F'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['문자 그대로', 'C'],
      ['비유적으로', 'D'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['남을 불쌍히 여김', 'F'],
      ['미래를 예견함', 'E'],
    ],
  },
  {
    question: '이번 질문은 단답형이야! 널 더 잘 표현했다고 하는 단어를 골라줘!',
    answers: [
      ['강함', 'E'],
      ['부드러움', 'F'],
    ],
  },
  {
    question: '파티 석상에서 너는 많은 사람들과 대화할거 같아?',
    answers: [
      ['응! 난 모르는 사람까지 포함해서 많은 사람과 대화할 것 같아!', 'A'],
      ['아니.. 난 내가 아는 몇 사람하고만 대화할 것 같아..', 'B'],
    ],
  },
  {
    question: '너는 회사에서 먼저 다른사람한테 말을 거는편이야?',
    answers: [
      ['응 난 내가 대화를 먼저 시작하는 편이야!', 'A'],
      ['아니! 난 다른 사람이 말 걸어 오기를 기다리는 편이야.', 'B'],
    ],
  },
  {
    question: '일을 할 때 너는 기한을 정해놓고 하는편이야?',
    answers: [
      ['응 난 기한을 정해놓고 일해!', 'G'],
      ['아니! 난 일이 언젠간 끝날 것이라고 생각해!', 'H'],
    ],
  },
  {
    question: '다른 사람한테 접근할 때 너의 성향은?',
    answers: [
      ['감정에 좌우되지 않고 접근해!', 'E'],
      ['개인적인 감정을 가지고 접근해!', 'F'],
    ],
  },
  {
    question: '넌 둘중에 어느 능력을 더 가지고싶어?',
    answers: [
      ['정리하고 조직화하는 능력', 'G'],
      ['적응하여 일이 되게 하는 능력', 'H'],
    ],
  },
  {
    question:
      '다른 사람들과 일상적이 아닌 새로운 관계를 맺는 건 너에게 어떻게 느껴져?',
    answers: [
      ['자극이 되어 기운이 나게 해!', 'A'],
      ['나를 힘들게 해!', 'B'],
    ],
  },
  {
    question: '넌 둘중 어떤것에 더 가치를 둬?',
    answers: [
      ['명확하고 정확한 것', 'G'],
      ['제한이 없는 것', 'H'],
    ],
  },
  {
    question: '넌 모르는 사람하고 오래 이야기 할 수 있어?',
    answers: [
      ['응 난 모르는 사람과 쉽게, 오래 이야기할 수 있어.', 'A'],
      ['글쎄.. 난 모르는 사람과는 별로 할 이야기가 없는 것 같아.', 'B'],
    ],
  },
  {
    question: '넌 어떤 이벤트를 더 좋아해?',
    answers: [
      ['계획된 이벤트', 'G'],
      ['계획에 없는 이벤트', 'H'],
    ],
  },
  {
    question: '사람들은 널 평소에 어떻게 대해?',
    answers: [
      ['조심스럽게 대해..', 'B'],
      ['허물없이 대해..', 'A'],
    ],
  },
];
const personality = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
};
const characters = {
  lumine: {
    name: '루미네(ISTP)',
    ment: '「여행자」',
    text: '너의 성격유형은 ISTP! 조용하고 말이 없으며 논리적이면서 분석적이고, 객관적으로 인생을 관찰하는 유형이야! 사실적인 정보를 조직하기 좋아하는 반면, 일과 관계 되지 않는 이상 자신을 잘 개방하지 않는 편이야. 그래서 가까운 친구들 외에는 대체로 사람들과 잘 사귀지 않는 편이지~ 일상생활에 있어 적응력이 매우 강한타입!',
    backgroundImg: "url('./images/lumine_background.png')",
    avatarImg: `./images/lumine_avatar.png`,
    charImg: `./images/lumine.png`,
    clsname: 'lumine',
  },
  razor: {
    name: '레이저(ISFP)',
    ment: '「나의「루피카」인 늑대. 그들은 내 가족이야.」',
    text: '너의 성격유형은 ISFP! 말보다는 행동으로 따뜻함을 나타내며, 마음이 따뜻하고 동정적인 성격이야. 마치 양털안감을 넣은 오버코트처럼 속마음이 따뜻한 사람들이 지닌 성격 유형이지~ 그러나 상대방을 잘 알게 될 때까지 이 따뜻함을 드러내지 않는 경향이있어!',
    backgroundImg: "url('./images/razor_background.png')",
    avatarImg: `./images/razor_avatar.png`,
    charImg: `./images/razor.png`,
    clsname: 'razor',
  },
  sucrose: {
    name: '설탕(INTP)',
    ment: '「이 꽃은 아마...3식 서리꽃 17호 확대버전이었던 것 같아.」',
    text: '너의 성격유형은 INTP! 조용하고 과묵하나 관심이 있는 분야에 대해서는 정말 말을 잘해! 사람들을 중심으로 한 가치보다는 아이디어에 관심이 많으며 매우 분석적이고 객관적 비평을 잘해! 실체보다는 실체가 안고있는 가능성에 관심이 많아! 또 이해가 빠르고 높은 직관력으로 통찰하는 재능과 지적관심이 많은편이야!',
    backgroundImg: "url('./images/sucrose_background.png')",
    avatarImg: `./images/sucrose_avatar.png`,
    charImg: `./images/sucrose.png`,
    clsname: 'sucrose',
  },
  mona: {
    name: '모나(INTJ)',
    ment: '「바꿀 수 없고, 거스를 수 없고, 받아들일 수밖에 없어서 운명인 거지.」',
    text: '너의 성격유형은 INTJ! 행동과 사고에 있어서 독창적이야! 내적인 신념과 비전은 산이라도 움직일 만큼 강한편! 16가지 성격 유형중에서 가장 독립적이고 단호한 성격이야! 때때로, 어떤 문제에 대하여 아주 고집이 센 편이기도해! 자신이 가진 영감과 목적을 실현시키려는 의지와 결단력과 인내심을 가지고 있어! 자신과 타인의 능력을 중요시하며, 목적달성을 위하여 온 시간과 노력을 다 바쳐 일하기 때문에 직관력과 통찰력이 활용되는 분야에서 능력을 발휘하는 편이야!.',
    backgroundImg: "url('./images/mona_background.png')",
    avatarImg: `./images/mona_avatar.png`,
    charImg: `./images/mona.png`,
    clsname: 'mona',
  },
  fischl: {
    name: '피슬(INFP)',
    ment: '「너와 난 모두 이세계의 여행자, 여기서 만난 건 분명 운명의 이끌림일 거야.」',
    text: '너의 성격유형은 INFP! 마음이 따뜻하나, 상대방을 잘 알기 전에는 표현을 잘하지 않는 성격이야! 또, 자신이 관계하는 사람이나 일에 대하여 강하고 성실하지! 또한 자신이 지향하는 이상에 대하여는 정열적인 신념을 가지고 있어!',
    backgroundImg: "url('./images/fischl_background.png')",
    avatarImg: `./images/fischl_avatar.png`,
    charImg: `./images/fischl.png`,
    clsname: 'fischl',
  },
  xingqiu: {
    name: '행추(INFJ)',
    ment: '「번뇌에서 벗어나 조용한 곳에서 심신을 수양하면 얼마나 좋을까.」',
    text: '너의 성격유형은 INFJ! 창의력과 통찰력이 뛰어나고, 강한 직관력으로 의미와 진실된 관계를 추구하는 타입이야! 뛰어난 영감으로 말없이 타인에게 영향력을 끼치기도해! 독창성과 사적인 독립심이 강하고, 확고한 신념과 뚜렷한 원리원칙을 생활 속에 가지고 있으면서 공동의 이익을 가져오는 일에 심혈을 기울이는 편이야! 인화와 동료애를 중시하는 경향으로 존경을 받고 사람들이 따르는 타입! 남에게 강요하기보다는 행동과 권유로 사람들의 마음을 움직여 따르게 만드는 지도력이 있어!',
    backgroundImg: "url('./images/xingqiu_background.png')",
    avatarImg: `./images/xingqiu_avatar.png`,
    charImg: `./images/xingqiu.png`,
    clsname: 'xingqiu',
  },
  xiao: {
    name: '소(ISTJ)',
    ment: '「널 지키는 호법이 되어줄게. 하지만 내게 가까이 오지 마. 날 방해하지도 마. 안 그럼 후회하게 될 거야.」',
    text: '너의 성격유형은 ISTJ! 매우 신뢰성이 있고, 사실에 대해 완전하고, 현실적이고, 실용적인 면을 가지고있어! 어떠한 분량의 사실이라도 몰두하고, 기억하며, 이용하고, 정확도에 대해 매우 세심해! 위기상황에 대처할 때에도 차분하며 안정되어 있어! 외면적으로 볼때 차분하게 보이지만, 내면적으로는 상당히 바빠!',
    backgroundImg: "url('./images/xiao_background.png')",
    avatarImg: `./images/xiao_avatar.png`,
    charImg: `./images/xiao.png`,
    clsname: 'xiao',
  },
  jean: {
    name: '진(ISFJ)',
    ment: '「바람의 신이여, 우릴 인도하소서.」',
    text: '너의 성격유형은 ISFJ! 책임감이 강하고 온정적이며 헌신적이야! 세부적이고 치밀성과 반복을 요하는 일을 끝까지 해나가는 인내력이 높아! 가지고 있는 침착성과 인내력은 가정이나 집단에 안정성을 가져다주지! 다른 사람의 사정을 고려하여 자신과 타인의 감정흐름에 민감해! 일처리에 있어서 현실감각을 가지고 실제적이고 조직적으로 이행하지! 경험을 통해서 자기가 틀렸다고 인정하기까지 어떠한 난관이 있어도 꾸준히 밀고 나가는 유형이야! 온순하고 차분해!',
    backgroundImg: "url('./images/jean_background.png')",
    avatarImg: `./images/jean_avatar.png`,
    charImg: `./images/jihn.png`,
    clsname: 'jean',
  },
  childe: {
    name: '타르탈리아(ESTP)',
    ment: '「날 어떻게 조종할 거지? 정말 기대되는데!」',
    text: '너의 성격유형은 ESTP! 관대하고 느긋하며 어떤 사람이나 사건에 대해서 별로 선입견을 갖지 않으며 개방적인 성격이야! 자신에게나 타인에게 있어 관용적이며, 일을 있는 그대로 보고 받아들이지! 그래서 갈등이나 긴장이 일어나는 상황을 잘 무마하는 능력이 있어! 규범을 적용하기보다는 누구나 만족할 수 있는 해결책을 모색하고 타협하고 적응하는 능력이 있어!',
    backgroundImg: "url('./images/childe_background.png')",
    avatarImg: `./images/childe_avatar.png`,
    charImg: `./images/childe.png`,
    clsname: 'childe',
  },
  clee: {
    name: '클레(ESFP)',
    ment: '「클레는 나가 놀고 싶어~ 함께 밖에 나가 놀아줘~」',
    text: '너의 성격유형은 ESFP! 친절하고 수용적이며 현실적이고 실제적인 성격이야! 어떤 상황에도 잘 적응하며 타협적이고, 선입견이 별로 없으며 개방적이고 관용적이라서 대체로 사람들을 잘 받아들이는 타입이야! 주위에서 진행되고 있는 일들을 알고자 하고 또한 열심히 참견하고 끼어드는 타입이야! 다른 사람의 일이나 활동에 관심이 많고, 새로운 사건 혹은 물건에도 호기심이 많이 때문이야! 이론이나 책을 통해 배우기보다는 경험 등의 실생활을 통해 배우는 것을 좋아해!',
    backgroundImg: "url('./images/clee_background.png')",
    avatarImg: `./images/clee_avatar.png`,
    charImg: `./images/clee.png`,
    clsname: 'clee',
  },
  venti: {
    name: '벤티(ENTP)',
    ment: '「마침 잘 왔어, 여행자, 네 소원이 뭔지 들어보고 싶어.」',
    text: '너의 성격유형은 ENTP! 독창적인 혁신가이며, 창의력이 풍부하고 항상 새로운 가능성을 찾고 새로운 시도를 즐기는 유형이야! 넓은 안목을 가지고 있으며 다방면에 재능이 있지! 민첩하고 여러 가지 일에 재능을 발휘하며 자신감이 넘쳐나! 사람들의 동향에 대해 기민하고 박식한 편! 다른 사람을 판단하기보다 이해하려고 노력해!',
    backgroundImg: "url('./images/venti_background.png')",
    avatarImg: `./images/venti_avatar.png`,
    charImg: `./images/venti.png`,
    clsname: 'venti',
  },
  keqing: {
    name: '각청(ENTJ)',
    ment: '「제군? 흥, 그가 밑바닥 사정을 제대로 알기나 하겠어? 웃기는 소리.」',
    text: '너의 성격유형은 ENTJ! 활동적이며 행정적인 일과 장기계획을 선호하며 논리적이고 분석적이야! 사전 준비를 철저하게 하며 계획하고 조직하고 체계적으로 목적달성을 추진시키는 지도자들이 많아! 비능률적이거나 확실치 않는 상황에 대해서는 별로 인내심이 없어! 그러나 상황이 필요로 할 때는 강하게 대처해! 솔직하고 결정력과 통솔력이 있으며, 거시적 안목으로 일을 밀고 나가! 관념 자체에 집중하는 경향이 있으며, 관념 이면의 사람에게는 관심이 별로 없어!',
    backgroundImg: "url('./images/keqing_background.png')",
    avatarImg: `./images/keqing_avatar.png`,
    charImg: `./images/keqing.png`,
    clsname: 'keqing',
  },
  hutao: {
    name: '호두(ENFP)',
    ment: '「해가 뜨면 볕을 쬐고, 달이 뜨면 달을 쬐고——!」',
    text: '너의 성격유형은 ENFP! 열성적이고 창의적이야! 풍부한 상상력과 영감을 가지고 어떤 일을 시작해! 풍부한 충동적 에너지를 가지고 죽흥적으로 일을 재빠르게 해결하는 솔선수범력과 상상력이 있어! 관심이 있는 일이면 무엇이든 척척 해내는 열성파! 뛰어난 통찰력으로 그 사람 안에 있는 성장 발전할 가능성을 들여다봐!',
    backgroundImg: "url('./images/hutao_background.png')",
    avatarImg: `./images/hutao_avatar.png`,
    charImg: `./images/hutao.png`,
    clsname: 'hutao',
  },
  babara: {
    name: '바바라(ENFJ)',
    ment: '「착실한 노력이야말로 가장 신기한 마법.」',
    text: '너의 성격유형은 ENFJ! 동정심과 동료애가 많으며, 친절하고 재치있는 성격이야! 민첩하고 참을성이 많고 성실해! 사람들과의 인화를 중요시 여기며, 다른 사람의 의견을 존중하고 그 가치를 보는 타입! 공동의 선을 위해서 대체로 상대방 의견에 동의하는 경향이 있어! 새로운 아이디어에 대한 호기심이 많아! 쓰기보다는 말로써 생각을 잘 표현하고, 편안하고 능란하게 계획을 제시하거나 조직을 이끌어나가는 능력이 있어!',
    backgroundImg: "url('./images/babara_background.png')",
    avatarImg: `./images/babara_avatar.png`,
    charImg: `./images/babara.png`,
    clsname: 'babara',
  },
  ningguang: {
    name: '응광(ESTJ)',
    ment: '「더 많이 벌면... 더 좋은 거 아냐?」',
    text: '너의 성격유형은 ESTJ! 일을 조직하고 프로젝트를 계획하고 출범시키는 능력이 뛰어나! 현실적이고 사실적이며, 체계적, 논리적으로 사업이나 조직체를 이끌어 나가는 타고난 재능을 가졌어! 혼돈스러운 상태나 불분명한 상태 또는 실용성이 없는 분야에는 큰 흥미가 없어! 그러나 필요시에는 언제나 응용하는 힘이 있어! 분명한 규칙을 중요시하고 그에 따라 행동하고 일을 추진하고 완성해 나가! 어떤 계획이나 결정을 내릴 땐 확고한 사실에 바탕을 두고 이행해!',
    backgroundImg: "url('./images/ningguang_background.png')",
    avatarImg: `./images/ningguang_avatar.png`,
    charImg: `./images/ningguang.png`,
    clsname: 'ningguang',
  },
  amber: {
    name: '엠버(ESFJ)',
    ment: '「정찰 기사 엠버, 준비 완료!」',
    text: '너의 성격유형은 ESFJ! 동정심과 동료애가 많은 성격이야! 친절하고 재치가 있으며, 다른 사람들에게 관심을 쏟고 인화를 도모하는 일을 중요하게 여겨! 양심적이고 정리정돈을 잘하지! 참을성이 많고 다른 사람들을 잘 도와줘! 또한 다른 사람들의 지지를 받으면 일에 열중해! 그러나 다른 사람들의 무관심한 태도에는 민감해!',
    backgroundImg: "url('./images/amber_background.png')",
    avatarImg: `./images/amber_avatar.png`,
    charImg: `./images/amber.png`,
    clsname: 'amber',
  },
};

function showCharacters(character) {
  const restartBtn = document.createElement('button');
  const characterBox = document.createElement('div');
  const characterName = document.createElement('span');
  const characterMent = document.createElement('span');
  const characterMBTI = document.createElement('span');
  const characterAvater = document.createElement('img');
  const characterImage = document.createElement('img');

  backgroundPC.style.display = 'none';
  backgroundMobile.style.display = 'none';

  document.body.style.backgroundImage = character.backgroundImg;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';

  paymon.classList = 'hide';

  restartBtn.innerText = '다시 검사 할래?';
  restartBtn.className = 'restartBtn';

  characterBox.className = 'characterBox';

  characterName.innerText = character.name;
  characterName.className = 'characterName';

  characterMent.innerText = character.ment;
  characterMent.className = 'characterMent';

  characterMBTI.innerText = character.text;
  characterMBTI.className = 'characterMBTI';

  characterAvater.src = character.avatarImg;
  characterAvater.className = 'avatar';

  characterImage.src = character.charImg;
  characterImage.className = character.clsname;

  textBox.prepend(characterBox);
  textBox.prepend(characterAvater);
  textBox.prepend(characterImage);

  characterBox.prepend(restartBtn);
  characterBox.prepend(characterMBTI);
  characterBox.prepend(characterName);
  characterBox.prepend(characterMent);

  restartBtn.addEventListener('click', () => {
    location.reload();
  });
}

function createQuestion(questionArr, answerOne, answerTwo) {
  const questionBox = document.createElement('div');
  const question = document.createElement('div');
  const answer1 = document.createElement('button');
  const answer2 = document.createElement('button');

  questionBox.className = 'questionBox';

  question.innerText = questionArr;
  question.className = 'question';

  answer1.innerText = answerOne;
  answer1.className = 'btn__question';

  answer2.innerText = answerTwo;
  answer2.className = 'btn__question';

  textBox.append(questionBox);

  questionBox.append(answer1);
  questionBox.append(answer2);
  questionBox.prepend(question);

  return {
    answer1: answer1,
    answer2: answer2,
    questionBox: questionBox,
  };
}
function getCharacter(mbti) {
  const mbtiPair = {
    ISTP: 'lumine',
    ISFP: 'razor',
    INTP: 'sucrose',
    INTJ: 'mona',
    INFP: 'fischl',
    INFJ: 'xingqiu',
    ISTJ: 'xiao',
    ISFJ: 'jean',
    ESTP: 'childe',
    ESFP: 'clee',
    ENTP: 'venti',
    ENTJ: 'keqing',
    ENFP: 'hutao',
    ENFJ: 'babara',
    ESTJ: 'ningguang',
    ESFJ: 'amber',
  };
  return characters[mbtiPair[mbti]];
}

function finishMBTI() {
  const { A: e, B: i, C: s, D: n, E: t, F: f, G: j, H: p } = personality;
  const result = `${e > i ? 'E' : 'I'}${n > s ? 'N' : 'S'}${f > t ? 'F' : 'T'}${
    j > p ? 'J' : 'P'
  }`;

  logo.classList.remove('showing');
  logo.classList.add('hide');
  showCharacters(getCharacter(result));
}

function handleFinish() {
  const finishBox = document.createElement('div');
  const finishMent = document.createElement('span');
  const finishBtn = document.createElement('button');

  finishBox.className = 'finishBox';

  finishMent.className = 'finishMent';
  finishMent.innerText = '자! 이제 끝났어! 힘들었지?\n결과를 확인해봐!';

  finishBtn.className = 'finishBtn';
  finishBtn.innerText = '결과 보기!';

  textBox.append(finishBox);

  finishBox.prepend(finishBtn);
  finishBox.prepend(finishMent);

  finishBtn.addEventListener('click', () => {
    textBox.removeChild(finishBox);
    finishMBTI();
  });
}

function handleQuestion(count) {
  let num = count + 1;
  const questionObj = questions[count];

  const { question: questionName, answers } = questionObj;
  const [first, second] = answers;
  const question = createQuestion(
    `Q${num}. ${questionName}`,
    first[0],
    second[0],
  );
  const { answer1, answer2, questionBox } = question;

  answer1.addEventListener('click', () => {
    textBox.removeChild(questionBox);
    personality[first[1]]++;
    if (num === questions.length) handleFinish();
    else handleQuestion(num);
  });
  answer2.addEventListener('click', () => {
    textBox.removeChild(questionBox);
    personality[second[1]]++;
    if (num === questions.length) handleFinish();
    else handleQuestion(num);
  });
}

function onStart() {
  paymon.classList = 'hide';
  textBox.removeChild(startTextBox);
  logo.classList.remove('hide');
  logo.classList.add('showing');
  handleQuestion(0);
}

startBtn.addEventListener('click', onStart);
