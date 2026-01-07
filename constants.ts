
export interface ParticipantInfo {
  name: string;
  arrival: string;
  returnTrip: string;
  roles: string[];
  inviteCode: string;
}

export const PARTICIPANTS_DATA: Record<string, ParticipantInfo> = {
  '김성아': { name: '김성아', inviteCode: '583920', arrival: '금요일 개별이동', returnTrip: '주일 교회버스', roles: ['성경학교예배팀(부)'] },
  '김명주': { name: '김명주', inviteCode: '417638', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['레크+선물팀', '주일특송팀(부)'] },
  '전영은': { name: '전영은', inviteCode: '962415', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['공과+데코팀', '성경학교예배팀(정)', 'PPT팀(정)', '기도카드', '팀장(부)'] },
  '하윤정': { name: '하윤정', inviteCode: '740291', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '토요일 오전 개별복귀(주의!)', roles: ['공과+데코팀'] },
  '김기수': { name: '김기수', inviteCode: '305874', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['레크+선물팀(부)'] },
  '김정원': { name: '김정원', inviteCode: '819462', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['성경학교예배팀', '타임키퍼(부)'] },
  '김예지': { name: '김예지', inviteCode: '274950', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['공과+데코팀'] },
  '김현태': { name: '김현태', inviteCode: '658301', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['성경학교예배팀'] },
  '김동현': { name: '김동현', inviteCode: '903746', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['공과+데코팀(부)'] },
  '송유정': { name: '송유정', inviteCode: '421895', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['요리팀', '노방+저녁식당카페팀(부)'] },
  '이진규': { name: '이진규', inviteCode: '786043', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['노방+저녁식당카페팀', 'PPT팀(부)', '회계(부)', '팀장(정)'] },
  '이동엽': { name: '이동엽', inviteCode: '154982', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['요리팀(정)'] },
  '이애희': { name: '이애희', inviteCode: '692574', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['요리팀'] },
  '조용진': { name: '조용진', inviteCode: '837160', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['레크+선물팀'] },
  '주리아': { name: '주리아', inviteCode: '509328', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['공과+데코팀'] },
  '함지인': { name: '함지인', inviteCode: '261794', arrival: '목요일 아침(06:30) 교회버스', returnTrip: '주일 교회버스', roles: ['노방+저녁식당카페팀(정)', '타임키퍼(정)'] },
  '강다연': { name: '강다연', inviteCode: '948205', arrival: '목요일 저녁(20:00) 교회버스', returnTrip: '주일 교회버스', roles: ['공과+데코팀(정)', '회계(정)'] },
  '백도현': { name: '백도현', inviteCode: '370861', arrival: '목요일 저녁(20:00) 교회버스', returnTrip: '주일 교회버스', roles: ['공과+데코팀'] },
  '인지아': { name: '인지아', inviteCode: '815709', arrival: '목요일 저녁(20:00) 교회버스', returnTrip: '주일 교회버스', roles: ['레크+선물팀(정)'] },
  '최소진': { name: '최소진', inviteCode: '492186', arrival: '목요일 저녁(20:00) 교회버스', returnTrip: '주일 교회버스', roles: ['공과+데코팀', '주일특송팀(정)'] },
  '김휘겸': { name: '김휘겸', inviteCode: '734950', arrival: '목요일 저녁(20:00) 교회버스', returnTrip: '주일 교회버스', roles: ['레크+선물팀'] },
  '나종광': { name: '나종광', inviteCode: '680417', arrival: '금요일 개별이동', returnTrip: '주일 교회버스', roles: ['요리팀(부)'] }
};

export const MANITTO_MAP: Record<string, string> = {
  '나종광': '조용진',
  '조용진': '김성아',
  '김성아': '이진규',
  '이진규': '하윤정',
  '하윤정': '백도현',
  '백도현': '김동현',
  '김동현': '김휘겸',
  '김휘겸': '김명주',
  '김명주': '이동엽',
  '이동엽': '함지인',
  '함지인': '이애희',
  '이애희': '주리아',
  '주리아': '김정원',
  '김정원': '김예지',
  '김예지': '김기수',
  '김기수': '전영은',
  '전영은': '인지아',
  '인지아': '최소진',
  '최소진': '송유정',
  '송유정': '강다연',
  '강다연': '김현태',
  '김현태': '나종광'
};

export const MISSION_POOL = [
  { title: "📸 찰나의 포착", description: "마니또와 사진 찍기 또는 찍히기! (몰래 찍더라도 머리카락 한 올이라도 나오면 성공 인정!)" },
  { title: "🎁 소박한 선물 요정", description: "소정의 간식이나 선물 챙겨주기 (따뜻한 핫팩 하나, 좋아하는 과자 하나라도 주님의 사랑입니다)" },
  { title: "🕊️ 진심어린 축복", description: "대면했을 때 눈을 맞추며 진심이 담긴 축복의 말을 직접 전하기" },
  { title: "🙏 기도의 동역자", description: "오늘 마니또에게 가장 필요한 기도제목을 묻고, 그 자리에서 혹은 마음 다해 정성껏 중보기도해주기" },
  { title: "🌟 칭찬의 향기", description: "모임이나 식사 중 마니또의 장점을 찾아 많은 사람들 앞에서 자연스럽게 칭찬 한 가지 해주기" },
  { title: "🩸 혈액형 탐정", description: "대화 중 마니또가 눈치채지 못하게 은밀히 혈액형을 알아내기" },
  { title: "🕵️ TMI 수집가", description: "마니또의 아주 사소하고 재미있는 TMI(좋아하는 색깔, 못 먹는 음식 등) 하나 알아내기" },
  { title: "✉️ 비밀 응원 쪽지", description: "위로나 격려의 말씀 구절을 적은 작은 쪽지를 마니또의 가방이나 성경책에 몰래 전해주기" },
  { title: "🤝 보이지 않는 손", description: "사역 중 마니또에게 도움이 필요한 순간(무거운 짐 들기, 뒷정리 등)을 포착하여 즉각 도와주기" },
  { title: "😊 웃음 요정", description: "기발한 농담이나 재치 있는 행동으로 지친 마니또를 활짝 웃게 만들기" },
  { title: "🥰 감사의 열매", description: "마니또를 도와주거나 챙겨주어 자연스럽게 '고맙다'는 말을 듣기" },
  { title: "👋 밝은 인사의 축복", description: "마니또의 이름을 정답게 불러주며 평소보다 두 배 더 밝게 인사하기" },
  { title: "🌈 감사의 인터뷰", description: "최근 마니또에게 일어난 감사한 일이나 감사 키워드를 대화 중에 슬쩍 물어보기" },
  { title: "🎵 영혼의 플레이리스트", description: "마니또가 가장 좋아하거나 요즘 은혜받으며 자주 듣는 찬양이 무엇인지 알아내기" },
  { title: "📖 생명의 말씀 찾기", description: "마니또가 가슴에 품고 사는 '가장 좋아하는 성경 구절'이 무엇인지 알아내기" },
  { title: "💝 비밀 별명 붙여주기", description: "마니또의 특징을 살려 세상에 하나뿐인 애정 어린 별명을 지어주고 대화 중 불러보기" },
  { title: "🔍 요즘 관심사 탐구", description: "마니또가 요즘 푹 빠져 있는 취미나 관심사가 무엇인지 대화를 통해 알아내기" },
  { title: "👥 든든한 그림자", description: "선교 기간 중 단체 사진을 찍을 때마다 슬쩍 마니또 옆자리로 이동해서 찍기" },
  { title: "🎭 데칼코마니 포즈", description: "마니또와 함께 사진 찍을 기회가 생기면 마니또와 똑같은 포즈를 취해서 촬영하기" },
  { title: "🍛 식탁의 교제", description: "선교 기간 동안 최소 3번 이상 식사 시간에 마니또의 정면 또는 옆자리에 앉아 함께 식사하기" },
  { title: "💎 비밀 전리품 확보", description: "대상의 작은 물건 하나를 몰래 확보하여 토요일 마니또 공개 시간까지 안전하게 보관하기" },
  { title: "📝 미스테리 메모", description: "마니또의 가방이나 주변에 '아 배고프다' 같이 아주 사소하고 의미 없는 메모 3번 남기기" }
];
